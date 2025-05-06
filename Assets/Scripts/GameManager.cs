using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum MapType
{
    Undefined=0,
    Summer=1,
    Rainy=2,
    Winter=3
}
public enum PlayerCarType
{
    Undefined,
    Aura,
    Eros,
    Metis,
    Lyssa,
    Arion

}

public class GameManager : MonoBehaviour
{
    public MapType mapType { set; get; } = MapType.Undefined;
    private PlayerCarType playerCarType = PlayerCarType.Undefined;
   
    public static GameManager Instance = null;

    public GameObject[] seasonEffectArray;
    private GameObject currentSeasonEffect=null;
    public GameObject[] speedUpEffectArray;
    private GameObject currentSpeedUpEffect=null;
    public Renderer mapRenderer;
    public Material[] seasonMaterialArray;

    public GameObject[] playerCarArray;
    public PlayerCarController playerCarController;
    public GameObject[] carAIArray;

    
    public bool isStartGame { set; get; } = false;

    public int currentMapType { set; get; } = 0;
    private void Awake()
    {
        if(Instance==null)
        {
            Instance = this;
        }
        else if(Instance!=this)
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

    public void setupScene()
    {
        setupMap();
        setupPlayer();

    }
    public void setupMap()
    {
        setupSeason();
    }
    public void setupPlayer()
    {
        for(int i=0;i<playerCarArray.Length;i++)
        {
            playerCarArray[i].SetActive(false);
        }
        var index = UIManager.Instance.currentCarIndex;
        playerCarArray[index].SetActive(true);
        playerCarController.setup();
    }
    public void setupCarAI(int _number)
    {
        for(int i=0;i<carAIArray.Length;i++)
        {
            if(i<_number)
            {
                carAIArray[i].SetActive(true);
                carAIArray[i].GetComponent<AICarController>().setup();
            }
                
            else
            {
                carAIArray[i].SetActive(false);
            }
               
        }
    }
    private void setupSeason()
    {
        var materials = mapRenderer.materials;

        switch (mapType)
        {
            case MapType.Summer:
                    
                if (currentSeasonEffect != null)
                {
                    currentSeasonEffect.SetActive(false);
                    currentSeasonEffect = seasonEffectArray[0];
                }
                    
                speedUpEffectArray[0].SetActive(true);
                if(currentSpeedUpEffect!=null)
                {
                    currentSpeedUpEffect.SetActive(false);
                    currentSpeedUpEffect = speedUpEffectArray[0];
                }

                materials[2] = seasonMaterialArray[0];
                mapRenderer.materials = materials;
                setupCarAI(1);
                    break;
            case MapType.Rainy:
                //seasonEffectArray[0].SetActive(true);
                if (currentSeasonEffect != null)
                {
                    currentSeasonEffect.SetActive(false);
                    currentSeasonEffect = seasonEffectArray[1];
                }

                speedUpEffectArray[1].SetActive(true);
                if (currentSpeedUpEffect != null)
                {
                    currentSpeedUpEffect.SetActive(false);
                    currentSpeedUpEffect = speedUpEffectArray[1];
                }
                
                materials[2] = seasonMaterialArray[1];
                mapRenderer.materials = materials;
                setupCarAI(3);
                break;
            case MapType.Winter:
                //seasonEffectArray[1].SetActive(true);
                if (currentSeasonEffect != null)
                {
                    currentSeasonEffect.SetActive(false);
                    currentSeasonEffect = seasonEffectArray[2];
                }

                speedUpEffectArray[2].SetActive(true);
                if (currentSpeedUpEffect != null)
                {
                    currentSpeedUpEffect.SetActive(false);
                    currentSpeedUpEffect = speedUpEffectArray[2];
                }
                
                materials[2] = seasonMaterialArray[2];
                mapRenderer.materials = materials;
                setupCarAI(5);
                break;
            default:
                break;
        }
    }
    public void startGame()
    {
        UIManager.Instance.StartBarFill();
        /*
        for (int i = 0; i < carAIArray.Length; i++)
        {
            if(carAIArray[i].activeInHierarchy)
            {
                carAIArray[i].GetComponent<AICarController>().enabled=true;
            }
            else
            {
                break;
            }
        }
        playerCarController.enabled = true;
        */
        isStartGame = true;
    }
    
    
}
