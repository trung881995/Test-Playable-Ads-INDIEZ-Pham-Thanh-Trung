using UnityEngine;

public class PlayerCarController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveSpeed = 10f;
    public float smoothTime = 0.2f;
    public float maxSpeed = 20f;
    public float turnSpeed = 100f;
    public float maxTurnAngle = 45f;

    [Header("Drift Settings")]
    public float slowTurnThreshold = 30f;
    public float driftIntensity = 0.5f;

    [Header("Ground Check")]
    public float groundCheckDistance = 1f;
    public LayerMask groundLayer;

    private Vector3 velocity = Vector3.zero;
    private Vector3 moveDirection = Vector3.zero;

    private float screenCenterX;
    private float targetTurn = 0f;
    private float turnAmount = 0f;
    private bool isDragging = false;
    private bool isCollision = false;
    private float timeStopping = 0f;
    void Start()
    {
        screenCenterX = Screen.width / 2f;
    }

    void Update()
    {
        
        HandleInput();

        

        
        if(!isCollision)
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
            transform.position = Vector3.SmoothDamp(transform.position, transform.position + moveDirection * moveStep, ref velocity, smoothTime * Time.deltaTime);
        }
        else
        {
            // === Phát hiện kẹt xe ===
            if (timeStopping >0.8f)
            {
                
                timeStopping -= Time.deltaTime;
            }
            else if(timeStopping>0)
            {
                //isCollision = false;
                // === Xác định hướng lui ===
                moveDirection = -transform.forward;
                float moveStep = moveSpeed * Time.deltaTime;
                // === lui` xe (áp dụng SmoothDamp) ===
                transform.position = Vector3.SmoothDamp(transform.position, transform.position + moveDirection * moveStep, ref velocity, smoothTime * Time.deltaTime);
                timeStopping -= Time.deltaTime;
            }
            else
            {
                isCollision = false;
                timeStopping = 0f;
            }
        }

        
    }

    // ==== CHỈNH HƯỚNG KHI VA CHẠM ====
    private void OnCollisionEnter(Collision collision)
    {
        if(collision.gameObject.layer==6)
        {
            timeStopping = 2f;
            isCollision = true;

            Debug.Log("va cham voi tuong !!!");
        }
        
    }
    
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
