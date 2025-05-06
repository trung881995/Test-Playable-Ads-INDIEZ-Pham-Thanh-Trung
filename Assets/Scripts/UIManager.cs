using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    

    public GameObject[] Cars;
    public GameObject Menu;
    public GameObject Scene;
    public CameraSequence cameraSequence;
    public int currentCarIndex { set; get; }

    public TextMeshProUGUI countdownText;
    
    public float timeBetweenCounts = 1f;
    private Color[] rainbowColors = new Color[]
    {
        Color.red,
        new Color(1f, 0.5f, 0f), // Orange
        Color.yellow,
        Color.green,
        Color.cyan,
        Color.blue,
        new Color(0.6f, 0f, 1f) // Violet
    };

    public RectTransform barFill; // phần fill của thanh bar
    public float fillDuration = 5f; // thời gian để thanh bar scale đầy
    public float shrinkDuration = 5f; // thời gian thu nhỏ lại
    private Tween barTween;
    private bool isTweenScaleToZero = false;
    public PlayerCarController playerCarController;

    public TextMeshProUGUI roundText; // Kéo từ Inspector vào
    public int totalLaps = 3;
    public int currentLap { set; get; } = 0;


    public static UIManager Instance = null;

    public Button startBtn;
    public Button retryBtn;
    public Button nextBtn;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else if (Instance != this)
        {
            Destroy(gameObject);
        }
    }
    private void OnEnable()
    {
        
    }
    // Start is called before the first frame update
    void Start()
    {
        setupMenu();
    }

    // Update is called once per frame
    void Update()
    {
        Cars[currentCarIndex].transform.RotateAround(Cars[currentCarIndex].transform.position, Cars[currentCarIndex].transform.up, -100f*Time.deltaTime);
    }
    public void setupMenu()
    {
        if (GameManager.Instance.mapType == MapType.Undefined)
        {
            startBtn.gameObject.SetActive(true);
            retryBtn.gameObject.SetActive(false);
            nextBtn.gameObject.SetActive(false);
        }
        else
        {
            startBtn.gameObject.SetActive(false);
            retryBtn.gameObject.SetActive(true);
            nextBtn.gameObject.SetActive(true);
        }
    }
    public void onRightArrowBtnClick()
    {
        Cars[currentCarIndex].SetActive(false);
        currentCarIndex++;
        if (currentCarIndex == Cars.Length)
            currentCarIndex = 0;
        Cars[currentCarIndex].SetActive(true);
    }
    public void onLeftArrowBtnClick()
    {
        Cars[currentCarIndex].SetActive(false);
        currentCarIndex--;
        if (currentCarIndex <0)
            currentCarIndex = Cars.Length-1;
        Cars[currentCarIndex].SetActive(true);
    }
    public void onStartBtnClick()
    {
        
        GameManager.Instance.mapType = MapType.Summer;
       
        
        Menu.SetActive(false);
        Scene.SetActive(true);
        GameManager.Instance.setupScene();

        cameraSequence.enabled = true;
    }
    public void onNextMapBtnClick()
    {
        GameManager.Instance.currentMapType = (int)GameManager.Instance.mapType;
        if (GameManager.Instance.currentMapType < 3)
            GameManager.Instance.currentMapType += 1;
        else
            GameManager.Instance.currentMapType = 1;

        GameManager.Instance.mapType = (MapType)GameManager.Instance.currentMapType;
        
        Menu.SetActive(false);
        Scene.SetActive(true);
        GameManager.Instance.setupScene();
        cameraSequence.enabled = true;
    }
    public void startCountDownRoutine()
    {
        StartCoroutine(CountdownRoutine());
    }

    private IEnumerator CountdownRoutine()
    {
        string[] countdownValues = { "3", "2", "1", "GO!" };
        //OnLapCompleted();
        //yield return new WaitForSeconds(2f);
        countdownText.gameObject.SetActive(true);
        foreach (string value in countdownValues)
        {
            countdownText.text = value;
            countdownText.alpha = 0f;
            countdownText.transform.localScale = Vector3.zero;
            countdownText.color = rainbowColors[0];

            // Rainbow color tween
            Sequence colorSeq = DOTween.Sequence();
            for (int i = 0; i < rainbowColors.Length; i++)
            {
                colorSeq.Append(countdownText.DOColor(rainbowColors[i], timeBetweenCounts / rainbowColors.Length));
            }

            // Show + scale
            countdownText.DOFade(1f, 0.3f);
            countdownText.transform.DOScale(1f, 0.5f).SetEase(Ease.OutBack);

            // Wait full time while animating color
            yield return new WaitForSeconds(timeBetweenCounts);

            // Fade out + shrink
            countdownText.DOFade(0f, 0.3f);
            countdownText.transform.DOScale(0f, 0.3f);

            yield return new WaitForSeconds(0.2f);
        }

        countdownText.gameObject.SetActive(false);
        Debug.Log("Race Start!");

        
        // Gọi sự kiện bắt đầu game ở đây


        GameManager.Instance.startGame();
        
    }
    public void StartBarFill()
    {
        startBarFill(fillDuration);
    }
    public void startBarFill(float fillDuration)
    {
        
        // Scale X từ 0 đến 1
        //barFill.localScale = new Vector3(0f, 1f, 1f);
        isTweenScaleToZero = false;
       barTween= barFill.DOScaleX(1f, fillDuration).SetEase(Ease.Linear).OnComplete(() =>
        {
            if(barTween!=null)
            {
                OnBarFull();
            }
           
        });
    }
    public void StopBarFill(bool isStartBarFill, float fillDuration)
    {
        if (!isTweenScaleToZero&& barTween != null && barTween.IsActive())
        {
            barTween.Kill(); // Dừng tween hiện tại
            barTween = null;
            if(isStartBarFill)
            startBarFill(fillDuration);
        }
        //barFill.localScale = new Vector3(0f, 1f, 1f);
    }

        void OnBarFull()
    {
        
        isTweenScaleToZero = true;
        // Tăng tốc độ xe
        playerCarController.speedUp();

        // Scale nhỏ lại (về 0)
        barTween=barFill.DOScaleX(0f, shrinkDuration).SetEase(Ease.OutQuad).OnComplete(() =>
        {
            
            // Lặp lại
            StartBarFill();
        });
    }

    public void OnLapCompleted()
    {
        currentLap++;

        if (currentLap <= totalLaps)
        {
            ShowRoundText($"ROUND {currentLap}");
        }
        else
        {
            ShowRoundText("FINISH!");

            StartCoroutine( endGame());
        }
    }
    IEnumerator endGame()
    {
        yield return new WaitForSeconds(2.4f);
        playerCarController.audioSource.Stop();
        playerCarController.audioSource.clip = null;
        GameManager.Instance.isStartGame = false;
        StopBarFill(false, 0f);
        
       


        cameraSequence.smoothFollowCamera.enabled = false;
        cameraSequence.enabled = false;
        
        cameraSequence.gameObject.transform.localRotation = Quaternion.Euler(0, 0, 0);
        cameraSequence.gameObject.transform.localPosition = Vector3.zero;


        setupMenu();
        Menu.SetActive(true);
        Scene.SetActive(false);
        
        barFill.localScale = new Vector3(0f, 1f, 1f);
        currentLap = 0;
        

    }
    private void ShowRoundText(string message)
    {
        roundText.text = message;
        roundText.alpha = 0;
        roundText.transform.localScale = Vector3.zero;

        Sequence seq = DOTween.Sequence();
        seq.Append(roundText.DOFade(1, 0.3f));
        seq.Join(roundText.transform.DOScale(1f, 0.3f).SetEase(Ease.OutBack));
        seq.AppendInterval(1.5f);
        seq.Append(roundText.DOFade(0, 0.3f));
        seq.Join(roundText.transform.DOScale(0f, 0.3f));
    }
    
}
