using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class AICarRigidbodyController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveForce = 1000f;
    public float maxSpeed = 20f;
    public float turnSpeed = 5f;
    public float checkpointRadius = 5f;

    [Header("Drift Settings")]
    public float slowTurnThreshold = 30f;  // góc cua lớn để drift
    public float driftForce = 300f;

    [Header("Obstacle Avoidance")]
    public float obstacleDetectionRange = 10f;
    public float avoidanceForce = 1000f;
    public LayerMask obstacleLayers; // Layer chứa chướng ngại vật

    private Rigidbody rb;
    private CheckpointManager checkpointManager;
    private int currentCheckpointIndex = 0;
    private bool isGrounded = false;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        checkpointManager = FindObjectOfType<CheckpointManager>();
    }

    void FixedUpdate()
    {
        rb.AddForce(-transform.up * 1000f * Time.fixedDeltaTime, ForceMode.Acceleration);
        if (isGrounded)
        {
            Transform target = checkpointManager.GetCheckpoint(currentCheckpointIndex);
            if (target == null) return;

            Vector3 targetDir = (target.position - transform.position).normalized;

            // Góc quay giữa hướng xe và checkpoint
            float angleToTarget = Vector3.SignedAngle(transform.forward, targetDir, Vector3.up);

            // Quay mượt theo hướng checkpoint
            Quaternion targetRotation = Quaternion.LookRotation(targetDir);
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, turnSpeed * Time.fixedDeltaTime);

            // Giảm lực nếu cua gắt
            float adjustedForce = moveForce;
            if (Mathf.Abs(angleToTarget) > slowTurnThreshold)
            {
                adjustedForce *= 0.5f;
            }

            // Drift nhẹ nếu cua gắt
            if (Mathf.Abs(angleToTarget) > slowTurnThreshold)
            {
                Vector3 driftDir = transform.right * Mathf.Sign(angleToTarget); // drift trái/phải
                rb.AddForce(driftDir * driftForce * Time.fixedDeltaTime, ForceMode.Acceleration);
            }

            // Thêm lực tiến nếu chưa quá tốc độ
            if (rb.velocity.magnitude < maxSpeed)
            {
                rb.AddForce(transform.forward * adjustedForce * Time.fixedDeltaTime, ForceMode.Acceleration);
            }

            // Kiểm tra đến checkpoint
            if (Vector3.Distance(transform.position, target.position) < checkpointRadius)
            {
                currentCheckpointIndex++;
                if (currentCheckpointIndex >= checkpointManager.TotalCheckpoints)
                {
                    currentCheckpointIndex = 0;
                }
            }

            // ==== Raycast né vật cản ====
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
        
    }
    private void OnTriggerStay(Collider other)
    {
        if (other.gameObject.layer == 7)
        {
            isGrounded = true;
            Debug.Log("onGround");
        }
    }
    private void OnTriggerExit(Collider other)
    {
        if (other.gameObject.layer == 7)
        {
            isGrounded = false;
            Debug.Log("exitGround");
        }
    }
}
