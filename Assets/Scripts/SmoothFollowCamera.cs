using UnityEngine;

public class SmoothFollowCamera : MonoBehaviour
{
    [Header("Target Settings")]
    public Transform target; // Xe

    [Header("Camera Offset")]
    public Vector3 offset = new Vector3(0, 5, -10); // Vị trí lệch sau xe

    [Header("Smoothing Settings")]
    public float followSpeed = 5f;      // Tốc độ theo sau
    public float rotationSpeed = 5f;    // Tốc độ xoay

    void Start()
    {
        UIManager.Instance.startCountDownRoutine();

        // Đặt vị trí và xoay camera đúng lúc bắt đầu để tránh nhảy hình
        if (target != null)
        {
            transform.position = target.TransformPoint(offset);
            transform.LookAt(target);
        }
    }

    void LateUpdate()
    {
        if (target == null) return;

        // Vị trí mong muốn phía sau xe theo hướng xe đang quay
        Vector3 desiredPosition = target.TransformPoint(offset);

        // Di chuyển mượt
        transform.position = Vector3.Lerp(transform.position, desiredPosition, Time.deltaTime * followSpeed);

        // Xoay mượt để nhìn về xe
        Quaternion desiredRotation = Quaternion.LookRotation(target.position - transform.position);
        transform.rotation = Quaternion.Slerp(transform.rotation, desiredRotation, Time.deltaTime * rotationSpeed);
    }
}
