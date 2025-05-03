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

    private Vector3 lastPosition;
    private Vector3 velocity=Vector3.zero;

    private float screenCenterX;
    private float targetTurn = 0f;
    private bool isGrounded = false;
    private bool isDragging = false;
    



    void Start()
    {
        //lastPosition = transform.position;
        screenCenterX = Screen.width / 2f;
        //rb.centerOfMass = new Vector3(0, -1f, 0); // Hạ trọng tâm xuống
    }

   
    void Update()
    {
        HandleInput();
        //rb.AddForce(Vector3.down * 300f * Time.fixedDeltaTime, ForceMode.Acceleration);

        // === Tính vận tốc bằng tay ===
        //velocity = (transform.position - lastPosition) / Time.fixedDeltaTime;
        //lastPosition = transform.position;

        // === Ground check bằng raycast ===
        //isGrounded = Physics.Raycast(transform.position, Vector3.down, groundCheckDistance, groundLayer);
        //Debug.DrawRay(transform.position, Vector3.down * groundCheckDistance, isGrounded ? Color.green : Color.red);

        // Không di chuyển nếu không chạm đất
        // if (!isGrounded) return;

        // --- Quay xe dựa trên input chuột ---
        float turnAmount = targetTurn * turnSpeed * Time.deltaTime;
            transform.Rotate(Vector3.up, turnAmount);

            // === Xác định hướng di chuyển (lùi nếu kẹt) ===
            Vector3 moveDir =transform.forward;
            float moveStep = moveSpeed * Time.deltaTime;

            // === Drift giả lập nếu cua gắt và đang chạy nhanh ===
            if (Mathf.Abs(turnAmount) > slowTurnThreshold && velocity.magnitude > 5f)
            {
                Vector3 driftOffset = transform.right * Mathf.Sign(turnAmount) * driftIntensity;
                transform.position += driftOffset * Time.deltaTime;
                Debug.Log(" Drift giả lập!");
            }

        // === Di chuyển chính ===
        //transform.position += moveDir * moveStep;
        transform.position = Vector3.SmoothDamp(transform.position, transform.position + moveDir * moveStep, ref velocity, smoothTime*Time.deltaTime);



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
        else
        {
            //targetTurn = 0f;
        }
#else
        // Mobile
        if (Input.touchCount > 0)
        {
            float delta = Input.GetTouch(0).position.x - screenCenterX;
            float percent = Mathf.Clamp(-delta / screenCenterX, -1f, 1f);
            targetTurn = percent * maxTurnAngle;
        }
        else
        {
            //targetTurn = 0f;
        }
#endif
    }

    
}
