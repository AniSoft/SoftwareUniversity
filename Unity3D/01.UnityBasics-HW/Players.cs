// https://anisoftblog.wordpress.com/category/unity3d/unitybasics/
using UnityEngine;

public class Player : MonoBehaviour
{
    float velocity;

    public void Start()
    {
        velocity = 4;
    }

    public void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            transform.Translate(new Vector3(-velocity, 0, 0) * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.DownArrow))
        {
            transform.Translate(new Vector3(velocity, 0, 0) * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(new Vector3(0, 0, -velocity) * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Translate(new Vector3(0, 0, velocity) * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.A))
        {
            transform.Translate(new Vector3(0, velocity, 0) * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.Z))
        {
            transform.Translate(new Vector3(0, -velocity, 0) * Time.deltaTime);
        }
    }
}
