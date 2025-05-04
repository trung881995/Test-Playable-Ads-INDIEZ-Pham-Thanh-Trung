using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;

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

    public PlayerCarController playerCarController;

    public static UIManager Instance = null;
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
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
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
        GameManager.Instance.setupScene();
        Menu.SetActive(false);
        Scene.SetActive(true);
        cameraSequence.enabled = true;
    }

    public void startCountDownRoutine()
    {
        StartCoroutine(CountdownRoutine());
    }

    private IEnumerator CountdownRoutine()
    {
        string[] countdownValues = { "3", "2", "1", "GO!" };

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
        barFill.localScale = new Vector3(0f, 1f, 1f);

        barFill.DOScaleX(1f, fillDuration).SetEase(Ease.Linear).OnComplete(() =>
        {
            OnBarFull();
        });
    }
    public void StopBarFill()
    {
        if (barTween != null && barTween.IsActive())
        {
            barTween.Kill(); // Dừng tween hiện tại
            barTween = null;
        }
    }

        void OnBarFull()
    {
        // Tăng tốc độ xe
        playerCarController.speedUp();

        // Scale nhỏ lại (về 0)
        barFill.DOScaleX(0f, shrinkDuration).SetEase(Ease.OutQuad).OnComplete(() =>
        {
            
            // Lặp lại
            StartBarFill();
        });
    }

}
