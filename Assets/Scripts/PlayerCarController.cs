using UnityEngine;

public class PlayerCarController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveSpeed = 10f;
    public float smoothTime = 0.2f;
    public float maxSpeed = 20f;
    public float turnSpeed = 100f;
    public float maxTurnAngle = 45f;
    //public float checkpointRadius = 10f;

    [Header("Drift Settings")]
    public float slowTurnThreshold = 30f;
    public float driftIntensity = 0.5f;

    [Header("Ground Check")]
    public float groundCheckDistance = 1f;
    public LayerMask groundLayer;

    
    private Vector3 moveDirection = Vector3.zero;

    private float screenCenterX;
    private float targetTurn = 0f;
    private float turnAmount = 0f;
    private bool isDragging = false;
    private bool isCollision = false;
    private float timeStopping = 0f;
    private int currentCheckpointIndex = 0;

    public CheckpointManager checkpointManager;
    public Transform Arrow;
    //private Vector3 lastPosition;
    private Vector3 velocity = Vector3.zero;
    private Vector3 moveVelocity = Vector3.zero;
    //private Rigidbody rb;
    
    public float speedUpTime { set; get; }
    private void OnEnable()
    {
        setup();
    }
    private void setup()
    {
        screenCenterX = Screen.width / 2f;
        UIManager.Instance.StartBarFill();
        UIManager.Instance.currentLap = 0;
        moveDirection = Vector3.zero;
        targetTurn = 0f;
        turnAmount = 0f;
        isDragging = false;
        isCollision = false;
        timeStopping = 0f;
        currentCheckpointIndex = 0;
        velocity = Vector3.zero;
        moveVelocity = Vector3.zero;
    }

    void Update()
    {
        /*
        if(transform.position.y>0.2f)
        {
            rb.freezeRotation = false;
        }
        else
        {
            rb.freezeRotation = true;
        }
        */
        
        if(speedUpTime>0)
        {
            speedUpTime -= Time.deltaTime;
        }
        else
        {
            moveSpeed = 10000f;
            speedUpTime = 0;
        }
        HandleInput();
        
           
            //UIManager.Instance.setVelocity((int)velocity.magnitude);
            // === Lấy checkpoint tiếp theo ===
            Transform target = checkpointManager.GetCheckpoint(currentCheckpointIndex);
            if (target == null) return;

        // Hướng từ Arrow tới target
        Vector3 targetDir = (target.position - Arrow.transform.position).normalized;

        // Tính góc quay mục tiêu
        Quaternion targetRotation = Quaternion.LookRotation(targetDir, Vector3.up);

        // Giữ lại trục X và Z hiện tại, chỉ quay mượt trục Y
        float rotationSpeed = 180f; // độ/giây, chỉnh tốc độ quay tùy ý

        // Tạo một rotation hiện tại chỉ chứa trục Y
        Quaternion currentRotation = Quaternion.Euler(0f, Arrow.transform.eulerAngles.y, 0f);
        Quaternion targetYRotation = Quaternion.Euler(0f, targetRotation.eulerAngles.y, 0f);

        // Quay mượt từ current đến target theo trục Y
        Quaternion smoothRotation = Quaternion.RotateTowards(currentRotation, targetYRotation, rotationSpeed * Time.deltaTime);

        // Áp dụng rotation giữ nguyên trục X và Z gốc
        Arrow.transform.rotation = Quaternion.Euler(
            Arrow.transform.eulerAngles.x,
            smoothRotation.eulerAngles.y,
            Arrow.transform.eulerAngles.z
        );

        if (!isCollision)
            {
                // --- Quay xe dựa trên input chuột ---
                turnAmount = targetTurn * turnSpeed * Time.deltaTime;
                transform.Rotate(Vector3.up, turnAmount);

                // === Xác định hướng di chuyển ===
                moveDirection = transform.forward;
                float moveStep = moveSpeed * Time.deltaTime;

                // === Drift giả lập nếu cua gắt và đang chạy nhanh ===
                if (Mathf.Abs(turnAmount) > slowTurnThreshold && velocity.magnitude > 5f)
                {
                    Vector3 driftOffset = transform.right * Mathf.Sign(turnAmount) * driftIntensity;
                    transform.position += driftOffset * Time.deltaTime;
                    Debug.Log("Drift giả lập!");
                }

            // === Di chuyển chính (áp dụng SmoothDamp) ===
            transform.position = Vector3.SmoothDamp(transform.position, transform.position + moveDirection * moveStep, ref moveVelocity, smoothTime * Time.deltaTime);
            if(transform.position.y>0.05f)
            {
                transform.position = Vector3.SmoothDamp(transform.position, transform.position + Vector3.down * 0.05f*50f*Time.deltaTime, ref moveVelocity, smoothTime * Time.deltaTime);
            }
            // === Tính vận tốc ===
            velocity = moveVelocity;
            //lastPosition = transform.position;
/*
            // === Kiểm tra qua checkpoint ===
            if (Vector3.Distance(transform.position, target.position) < checkpointRadius)
                {
                    currentCheckpointIndex++;
                    if (currentCheckpointIndex >= checkpointManager.TotalCheckpoints)
                        currentCheckpointIndex = 0;
                }
*/
                /*
                 var pos = transform.position;
                 pos.y = checkpointManager.GetCheckpoint(currentCheckpointIndex+1).position.y-1f;
                 transform.position = pos;
                */
            }
            else
            {
                // === Phát hiện kẹt xe ===
                if (timeStopping > 1f)
                {

                    timeStopping -= Time.deltaTime;
                }
                else if (timeStopping > 0)
                {
                    //isCollision = false;
                    // === Xác định hướng lui ===
                    moveDirection = -transform.forward;
                    float moveStep = moveSpeed * Time.deltaTime;
                    // === lui` xe (áp dụng SmoothDamp) ===


                    transform.position = Vector3.SmoothDamp(transform.position, transform.position + moveDirection * moveStep, ref moveVelocity, smoothTime * Time.deltaTime);
                // === Tính vận tốc ===
                velocity = moveVelocity;
                timeStopping -= Time.deltaTime;
                }
                else
                {
                    isCollision = false;
                    moveVelocity = Vector3.zero;
                    timeStopping = 0f;
                }
            }
            
       
    }
    private void FixedUpdate()
    {
        //rb.AddForce(Vector3.down * 800f * Time.fixedDeltaTime, ForceMode.Acceleration);
    }
    // ==== CHỈNH HƯỚNG KHI VA CHẠM ====
    private void OnCollisionEnter(Collision collision)
    {
        if(collision.gameObject.layer==6)
        {
            timeStopping = 2f;
            moveVelocity = Vector3.zero;
            isCollision = true;

            Debug.Log("va cham voi tuong !!!");
        }
        
        
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.layer == 11)
        {
            if(other.gameObject.transform==checkpointManager.GetCheckpoint(currentCheckpointIndex))
            {
                if (currentCheckpointIndex == 0)
                {
                    UIManager.Instance.OnLapCompleted();
                }

                // === Kiểm tra qua checkpoint ===
                currentCheckpointIndex++;
                if (currentCheckpointIndex >= checkpointManager.TotalCheckpoints)
                {
                    if (UIManager.Instance.currentLap < 3)
                    {
                        currentCheckpointIndex = 0;
                    }

                    else
                    {

                        UIManager.Instance.cameraSequence.smoothFollowCamera.enabled = false;
                        UIManager.Instance.cameraSequence.enabled = false;
                        this.enabled = false;
                        UIManager.Instance.OnLapCompleted();
                    }
                }
                
            }
           
                
        }
        else if (other.gameObject.layer == 9)
        {
            UIManager.Instance.StopBarFill();
            UIManager.Instance.startBarFill(1f);
        }
       
        
    }
    public void speedUp()
    {
        var mapType = GameManager.Instance.mapType;
        switch (mapType)
        {
            case MapType.Summer:
                speedUpTime = 5;
                moveSpeed += 2500;
                break;
            case MapType.Rainy:
                speedUpTime = 6;
                moveSpeed += 3000;
                break;
            case MapType.Winter:
                speedUpTime = 7;
                moveSpeed += 3500;
                break;
        }
    }
    /* private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.layer == 8)
        { 
            GameObject _target=new GameObject();
            _target.transform.position  = new Vector3(other.gameObject.transform.position.x, other.gameObject.transform.position.y - 3f, other.gameObject.transform.position.z);
            transform.LookAt(_target.transform);
            Debug.Log("tren mat dat !!!");
        }
    }
   */
    void HandleInput()
    {
#if UNITY_EDITOR || UNITY_STANDALONE
        if (Input.GetMouseButtonDown(0)) isDragging = true;
        if (Input.GetMouseButtonUp(0)) isDragging = false;

        if (isDragging)
        {
            float delta = Input.mousePosition.x - screenCenterX;
            float percent = Mathf.Clamp(-delta / screenCenterX, -1f, 1f);
            targetTurn = percent * maxTurnAngle;
        }
#else
        if (Input.touchCount > 0)
        {
            float delta = Input.GetTouch(0).position.x - screenCenterX;
            float percent = Mathf.Clamp(-delta / screenCenterX, -1f, 1f);
            targetTurn = percent * maxTurnAngle;
        }
#endif
    }
}
