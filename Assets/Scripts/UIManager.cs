using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    public GameObject[] Cars;
    public GameObject Menu;
    public GameObject Scene;
    public CameraSequence cameraSequence;
    public int currentCarIndex { set; get; }


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

    
}
