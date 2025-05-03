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

    private CheckpointManager checkpointManager;
    private int currentCheckpointIndex = 0;

    private Vector3 lastPosition;
    private Vector3 velocity=Vector3.zero;
    private float timeStopping = 0f;

    void Start()
    {
        checkpointManager = FindObjectOfType<CheckpointManager>();
        //lastPosition = transform.position;
    }

    void Update()
    {
        // === Tính vận tốc bằng tay ===
        //velocity = (transform.position - lastPosition) / Time.deltaTime;
        //lastPosition = transform.position;

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
        float moveStep = moveSpeed * Time.deltaTime;

        // === Drift giả lập nếu cua gắt và đang chạy nhanh ===
        if (Mathf.Abs(angleToTarget) > slowTurnThreshold && velocity.magnitude > 5f)
        {
            Vector3 driftOffset = transform.right * Mathf.Sign(angleToTarget) * driftIntensity;
            transform.position += driftOffset * Time.deltaTime;
            Debug.Log("💨 Drift giả lập!");
        }

        // === Di chuyển chính ===
        //transform.position += moveDir * moveStep;
        transform.position = Vector3.SmoothDamp(transform.position, transform.position + moveDir * moveStep, ref velocity, smoothTime*Time.deltaTime );

        // === Kiểm tra qua checkpoint ===
        if (Vector3.Distance(transform.position, target.position) < checkpointRadius)
        {
            currentCheckpointIndex++;
            if (currentCheckpointIndex >= checkpointManager.TotalCheckpoints)
                currentCheckpointIndex = 0;
        }

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
