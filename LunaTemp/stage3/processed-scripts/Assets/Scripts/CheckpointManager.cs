using UnityEngine;

public class CheckpointManager : MonoBehaviour
{
    public Transform[] checkpoints;

    public Transform GetCheckpoint(int index)
    {
        if (index >= checkpoints.Length) return null;
        return checkpoints[index];
    }

    public int TotalCheckpoints => checkpoints.Length;
}
