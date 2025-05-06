using System.Collections;
using UnityEngine;

public class AICarController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveSpeed = 10f;
    public float maxSpeed = 20f;
    public float smoothTime = 0.2f;
    public float turnSpeed = 100f;
    public float checkpointRadius = 5f;

    [Header("Drift Settings")]
    public float slowTurnThreshold = 30f;
    public float driftIntensity = 0.5f;

    [Header("Obstacle Avoidance")]
    public float obstacleDetectionRange = 10f;
    public float avoidanceStrength = 3f;
    public LayerMask obstacleLayers;

    public CheckpointManager checkpointManager;
    private int currentCheckpointIndex = 0;

    public GameObject SpeedUpEffect;
    public GameObject SmokeTrailEffect;
    public GameObject SmokeStartupEffect;
    public GameObject IdleEngineEffect;
    public GameObject RightDriftEffect;
    public GameObject LeftDriftEffect;

    private Vector3 lastPosition;
    private Vector3 velocity=Vector3.zero;
    private Vector3 moveVelocity = Vector3.zero;
    private Vector3 moveVelocity2 = Vector3.zero;
    private Vector3 moveVelocity3 = Vector3.zero;
    private float timeStopping = 0f;

    private float speedUpTime=0f;
    private float speedUpMoving;

    private int currentLap=0;
    private void OnEnable()
    {
        //setup();
    }
    void Start()
    {
      
        
    }

    void Update()
        
    {
        if(GameManager.Instance.isStartGame)
        {
            if (speedUpTime > 0)
            {
                speedUpTime -= Time.deltaTime;
                SpeedUpEffect.SetActive(true);
                SmokeTrailEffect.SetActive(false);
            }
            else if(speedUpTime<0)
            {
                speedUpMoving= 0f;
                speedUpTime = 0f;
               
            }
            else
            {
                SpeedUpEffect.SetActive(false);
                SmokeTrailEffect.SetActive(true);
            }

            // === Tính vận tốc bằng tay ===
            velocity = (transform.position - lastPosition) / Time.deltaTime;
            lastPosition = transform.position;

            // === Phát hiện kẹt xe ===
            if (velocity.magnitude < 1f)
                timeStopping += Time.deltaTime;
            else
                timeStopping = 0f;

            // === Lấy checkpoint tiếp theo ===
            Transform target = checkpointManager.GetCheckpoint(currentCheckpointIndex);
            if (target == null) return;

            Vector3 targetDir = (target.position - transform.position).normalized;
            float angleToTarget = Vector3.SignedAngle(transform.forward, targetDir, Vector3.up);

            // === Quay mượt về hướng mục tiêu ===
            float clampedTurn = Mathf.Clamp(angleToTarget, -turnSpeed * Time.deltaTime, turnSpeed * Time.deltaTime);
            transform.rotation = Quaternion.AngleAxis(clampedTurn, Vector3.up) * transform.rotation;

            // === Xác định hướng di chuyển (lùi nếu kẹt) ===
            Vector3 moveDir = (timeStopping >= 1.5f) ? -transform.forward : transform.forward;
            float moveStep = (moveSpeed+speedUpMoving) * Time.deltaTime;

            // === Drift giả lập nếu cua gắt và đang chạy nhanh ===
            if (Mathf.Abs(angleToTarget) > slowTurnThreshold && velocity.magnitude > 5f)
            {
                if (angleToTarget > 0)
                {
                    if (!RightDriftEffect.activeInHierarchy)
                    {
                        rightDriftEffect();
                    }
                }
                else if (angleToTarget < 0)
                {
                    if (!LeftDriftEffect.activeInHierarchy)
                    {
                        leftDriftEffect();
                    }
                }

                Vector3 driftOffset = transform.right * Mathf.Sign(angleToTarget) * driftIntensity;
                transform.position += driftOffset * Time.deltaTime;
                //Debug.Log(" Drift giả lập!");
            }
            else
            {
                RightDriftEffect.SetActive(false);
                LeftDriftEffect.SetActive(false);
            }

            // === Di chuyển chính ===
            //transform.position += moveDir * moveStep;
            //var moveVelocity = Vector3.zero;
            transform.position = Vector3.SmoothDamp(transform.position, transform.position + moveDir * moveStep, ref moveVelocity, smoothTime * Time.deltaTime);

            if (transform.position.y < 0.2f)
            {
                transform.position = Vector3.SmoothDamp(transform.position, transform.position + Vector3.up * 0.1f * 50f * Time.deltaTime, ref moveVelocity2, smoothTime * Time.deltaTime);

            }
            if (transform.position.y > 0.4f)
            {
                transform.position = Vector3.SmoothDamp(transform.position, transform.position + Vector3.down * 0.1f * 50f * Time.deltaTime, ref moveVelocity3, smoothTime * Time.deltaTime);

            }
            //SmokeTrailEffect.SetActive(true);
            /*      
                    // === Kiểm tra qua checkpoint ===
                    if (Vector3.Distance(transform.position, target.position) < checkpointRadius)
                    {
                        currentCheckpointIndex++;
                        if (currentCheckpointIndex >= checkpointManager.TotalCheckpoints)
                            currentCheckpointIndex = 0;
                    }
            */
            // === Né vật cản bằng Raycast 3 hướng ===
            RaycastHit hit;
            Vector3[] directions = {
            transform.forward,
            Quaternion.AngleAxis(-30, Vector3.up) * transform.forward,
            Quaternion.AngleAxis(30, Vector3.up) * transform.forward
        };

            foreach (var dir in directions)
            {
                if (Physics.Raycast(transform.position, dir, out hit, obstacleDetectionRange, obstacleLayers))
                {
                    Vector3 avoidDir = Vector3.Cross(Vector3.up, dir).normalized;
                    transform.position += avoidDir * avoidanceStrength * Time.deltaTime;
                    Debug.Log(" Né vật cản!");
                    break;
                }
            }

            // === Debug Raycast ===
            Debug.DrawRay(transform.position, directions[0] * obstacleDetectionRange, Color.red);
            Debug.DrawRay(transform.position, directions[1] * obstacleDetectionRange, Color.yellow);
            Debug.DrawRay(transform.position, directions[2] * obstacleDetectionRange, Color.yellow);
        }
        
    }
    public void setup()
    {
        StartCoroutine(startEffect());
        currentCheckpointIndex = 0;
        velocity = Vector3.zero;
        moveVelocity = Vector3.zero;
        timeStopping = 0f;
        speedUpTime = 0f;
        currentLap = 0;
        transform.localPosition = Vector3.zero;
        transform.localRotation = Quaternion.Euler(0, 0, 0);
        lastPosition = transform.position;

        //SmokeTrailEffect.SetActive(false);
    }

    IEnumerator startEffect()
    {
        yield return new WaitForSeconds(0.5f);

        IdleEngineEffect.SetActive(true);
        yield return new WaitForSeconds(0.3f);
        SmokeStartupEffect.SetActive(true);
        yield return new WaitForSeconds(4f);
        SmokeStartupEffect.SetActive(false);
    }

    private void rightDriftEffect()
    {
        RightDriftEffect.SetActive(true);
        //LeftDriftEffect.SetActive(false);
        
      

    }
    private void leftDriftEffect()
    {
        LeftDriftEffect.SetActive(true);
        //LeftDriftEffect.SetActive(false);
        
       
    }

    private void OnTriggerEnter(Collider other)
    {
        if(other.gameObject.layer==8)
        {
            if(other.gameObject.transform==checkpointManager.GetCheckpoint(currentCheckpointIndex))
            {
                // === Kiểm tra qua checkpoint ===
                currentCheckpointIndex++;
                if (currentCheckpointIndex >= checkpointManager.TotalCheckpoints)
                {
                    if (currentLap < UIManager.Instance.totalLaps)
                    {
                        currentCheckpointIndex = 0;
                        currentLap++;
                    }
                    else
                    {
                        IdleEngineEffect.SetActive(false);
                    }

                }
            }
            
                
        }
        else if (other.gameObject.layer == 9)
        {
            speedUp();
        }
        
    }

    public void speedUp()
    {
        var mapType = GameManager.Instance.mapType;
        switch (mapType)
        {
            case MapType.Summer:
                speedUpTime = 5;
                speedUpMoving= 2500;
                break;
            case MapType.Rainy:
                speedUpTime = 6;
                speedUpMoving= 3000;
                break;
            case MapType.Winter:
                speedUpTime = 7;
                speedUpMoving= 3500;
                break;
        }
    }
}
