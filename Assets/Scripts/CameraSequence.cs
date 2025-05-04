using UnityEngine;
using System.Collections;

public class CameraSequence : MonoBehaviour
{
    public Transform pointA; // Tâm xoay
    public Transform pointB; // Vị trí bắt đầu di chuyển
    public Transform pointC; // Vị trí kết thúc di chuyển
    public SmoothFollowCamera smoothFollowCamera;

    public float rotateDuration = 3f;
    public float moveDuration = 2f;
    public float rotationSpeed = 50f;
    public CanvasGroup flashEffect; // UI Panel trắng full screen (alpha 0 -> 1 -> 0)

    private void Start()
    {
        StartCoroutine(CameraSequenceRoutine());
    }

    IEnumerator CameraSequenceRoutine()
    {
        // Bước 1: Xoay quanh điểm A
        float timer = 0f;
        while (timer < rotateDuration)
        {
            transform.RotateAround(pointA.position, Vector3.up, rotationSpeed * Time.deltaTime);
            timer += Time.deltaTime;
            yield return null;
        }

        // Bước 2: Move từ B đến C
        transform.position = pointB.position;
        transform.rotation = pointB.rotation;

        Vector3 startPos = pointB.position;
        Quaternion startRot = pointB.rotation;
        Vector3 endPos = pointC.position;
        Quaternion endRot = pointC.rotation;

        timer = 0f;
        while (timer < moveDuration)
        {
            float t = timer / moveDuration;
            transform.position = Vector3.Lerp(startPos, endPos, t);
            transform.rotation = Quaternion.Slerp(startRot, endRot, t);
            timer += Time.deltaTime;
            yield return null;
        }

        transform.position = endPos;
        transform.rotation = endRot;

        // Bước 3: Flash (chớp sáng)
        if (flashEffect != null)
        {
            yield return StartCoroutine(Flash());
        }

       
    }

    IEnumerator Flash()
    {
        float flashTime = 0.7f;
        flashEffect.alpha = 0;
        flashEffect.gameObject.SetActive(true);

        // Alpha lên 1
        float t = 0f;
        while (t < flashTime)
        {
            flashEffect.alpha = Mathf.Lerp(0, 1, t / flashTime);
            t += Time.deltaTime;
            yield return null;
        }
        flashEffect.alpha = 1;

        // Bật SmoothFollowCamera
        smoothFollowCamera.enabled = true;

        // Alpha xuống 0
        t = 0f;
        while (t < flashTime)
        {
            flashEffect.alpha = Mathf.Lerp(1, 0, t / flashTime);
            t += Time.deltaTime;
            yield return null;
        }

        flashEffect.alpha = 0;
        flashEffect.gameObject.SetActive(false);
    }
}
