using UnityEngine;

public class PlayerCarController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveForce = 1000f;
    public float maxSpeed = 20f;
    public float turnSpeed = 5f;
    public float maxTurnAngle = 45f;
    public float checkpointRadius = 10f;

    [Header("Drift Settings")]
    public float driftThreshold = 15f;
    public float driftForce = 300f;

    [Header("Obstacle Avoidance")]
    public float obstacleDetectionRange = 10f;
    public float avoidanceForce = 1000f;
    public LayerMask obstacleLayers;

    private Rigidbody rb;
    private Vector3 moveDirection = Vector3.zero;

    private float screenCenterX;
    private float targetTurn = 0f;
    private float turnAmount = 0f;
    private bool isDragging = false;
    private bool isCollision = false;
    private bool isOnGround = false;
    private float timeStopping = 0f;
    private int currentCheckpointIndex = 0;

    public CheckpointManager checkpointManager;
    public Transform Arrow;
    private Vector3 lastPosition;
    private Vector3 velocity = Vector3.zero;
    private Vector3 moveVelocity = Vector3.zero;
    void Start()
    {
        screenCenterX = Screen.width / 2f;
        rb = GetComponent<Rigidbody>();
        lastPosition = transform.position;
    }

    void Update()
    {
        
        HandleInput();

        // === Tính vận tốc bằng tay ===
        velocity = (transform.position - lastPosition) / Time.deltaTime;
        lastPosition = transform.position;

        // === Lấy checkpoint tiếp theo ===
        Transform target = checkpointManager.GetCheckpoint(currentCheckpointIndex);
        if (target == null) return;

        Vector3 targetDir = (target.position - Arrow.transform.position).normalized;
        
        //Arrow.transform.LookAt(target);

        // Tạo rotation mới hướng về tường
        Quaternion targetRotation = Quaternion.LookRotation(targetDir, Vector3.up);

        // Cập nhật rotation (chỉ hướng, giữ lại trục XArrow.transform.eulerAngles.x quay đều)
        Arrow.transform.rotation = Quaternion.Euler(Arrow.transform.eulerAngles.x, targetRotation.eulerAngles.y, Arrow.transform.eulerAngles.z);
        if (!isCollision&&isOnGround)
        {
            /*
            Vector3 targetDir2 = (target.position - transform.position).normalized;


            // Tạo rotation mới hướng về tường
            Quaternion targetRotation2 = Quaternion.LookRotation(targetDir, Vector3.right);

            // Cập nhật rotation (chỉ hướng, giữ lại trục X quay đều)
            transform.rotation = Quaternion.Euler(targetRotation2.eulerAngles.x, transform.eulerAngles.y, transform.eulerAngles.z);
            */
            // --- Quay xe dựa trên input chuột ---
            turnAmount = targetTurn * turnSpeed * Time.deltaTime;
            transform.Rotate(Vector3.up, turnAmount);


            // === Kiểm tra qua checkpoint ===
            if (Vector3.Distance(transform.position, target.position) < checkpointRadius)
            {
                currentCheckpointIndex++;
                if (currentCheckpointIndex >= checkpointManager.TotalCheckpoints)
                    currentCheckpointIndex = 0;
            }
           /*
            var pos = transform.position;
            pos.y = checkpointManager.GetCheckpoint(currentCheckpointIndex).position.y-1f;
            transform.position = pos;
           */
        }
        else
        {
            
        }

        
    }
    private void FixedUpdate()
    {
        rb.AddForce(Vector3.down * 800f * Time.fixedDeltaTime, ForceMode.Acceleration);
        if(isOnGround)
        {
            if (!isCollision)
            {
                // --- Drift nếu rẽ mạnh ---
                if (Mathf.Abs(targetTurn) > driftThreshold / maxTurnAngle)
                {
                    Vector3 driftDir = transform.right * Mathf.Sign(targetTurn);
                    rb.AddForce(driftDir * driftForce * Time.fixedDeltaTime, ForceMode.Acceleration);
                }

                // --- Di chuyển về phía trước nếu chưa quá tốc độ ---
                if (rb.velocity.magnitude < maxSpeed)
                {
                    rb.AddForce(transform.forward * moveForce * Time.fixedDeltaTime, ForceMode.Acceleration);
                }
            }
            else
            {
                // === Phát hiện kẹt xe ===
                if (timeStopping > 1f)
                {

                    timeStopping -= Time.fixedDeltaTime;
                }
                else if (timeStopping > 0)
                {
                    // --- Di chuyển về phía sau nếu chưa quá tốc độ ---
                    if (rb.velocity.magnitude < maxSpeed)
                    {
                        rb.AddForce(-transform.forward * moveForce * Time.fixedDeltaTime, ForceMode.Acceleration);
                    }
                    timeStopping -= Time.fixedDeltaTime;
                }
                else
                {
                    isCollision = false;
                    moveVelocity = Vector3.zero;
                    timeStopping = 0f;
                }
            }
        }
        
        
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
    private void OnTriggerStay(Collider other)
    {
        if (other.gameObject.layer == 7)
        {
            isOnGround = true;
            Debug.Log("on ground !!!");
        }
    }
    
    private void OnTriggerExit(Collider other)
    {
        if (other.gameObject.layer == 7)
        {
            isOnGround = false;
            Debug.Log("exit ground !!!");
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
