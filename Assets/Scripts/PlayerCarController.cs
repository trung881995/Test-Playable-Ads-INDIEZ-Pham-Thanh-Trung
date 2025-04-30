using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class PlayerCarController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveForce = 1000f;
    public float maxSpeed = 20f;
    public float turnSpeed = 5f;
    public float maxTurnAngle = 45f;

    [Header("Drift Settings")]
    public float driftThreshold = 15f;
    public float driftForce = 300f;

    [Header("Obstacle Avoidance")]
    public float obstacleDetectionRange = 10f;
    public float avoidanceForce = 1000f;
    public LayerMask obstacleLayers;

    private Rigidbody rb;
    private float screenCenterX;
    private bool isDragging = false;
    private float targetTurn = 0f;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        screenCenterX = Screen.width / 2f;
    }

    void Update()
    {
        HandleInput();
    }

    void FixedUpdate()
    {

        rb.AddForce(-transform.up * 1000f * Time.fixedDeltaTime, ForceMode.Acceleration);
        // --- Quay xe dựa trên input chuột ---
        float turnAmount = targetTurn * turnSpeed * Time.fixedDeltaTime;
        transform.Rotate(Vector3.up, turnAmount);

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

        // === Né vật cản ===
        RaycastHit hit;
        Vector3 centerDir = transform.forward;
        Vector3 leftDir = Quaternion.AngleAxis(-30, Vector3.up) * transform.forward;
        Vector3 rightDir = Quaternion.AngleAxis(30, Vector3.up) * transform.forward;

        if (Physics.Raycast(transform.position, centerDir, out hit, obstacleDetectionRange, obstacleLayers))
        {
            rb.AddForce(transform.right * avoidanceForce * Time.fixedDeltaTime, ForceMode.Acceleration);
        }
        else if (Physics.Raycast(transform.position, leftDir, out hit, obstacleDetectionRange, obstacleLayers))
        {
            rb.AddForce(transform.right * avoidanceForce * Time.fixedDeltaTime, ForceMode.Acceleration);
        }
        else if (Physics.Raycast(transform.position, rightDir, out hit, obstacleDetectionRange, obstacleLayers))
        {
            rb.AddForce(-transform.right * avoidanceForce * Time.fixedDeltaTime, ForceMode.Acceleration);
        }

        // Debug Ray
        Debug.DrawRay(transform.position, centerDir * obstacleDetectionRange, Color.red);
        Debug.DrawRay(transform.position, leftDir * obstacleDetectionRange, Color.yellow);
        Debug.DrawRay(transform.position, rightDir * obstacleDetectionRange, Color.yellow);
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
