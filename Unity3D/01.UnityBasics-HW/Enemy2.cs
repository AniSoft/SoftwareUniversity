using UnityEngine;
using System.Collections;

public class Enemy2 : MonoBehaviour
{
    float velocity;

    public Transform target;
    
    public void Start()
    {
        velocity = 2f;
    }
    
    public void Update()
    {
        transform.LookAt(target);
        Vector3 distanceVector = new Vector3(target.transform.position.x - transform.position.x,
        target.position.y - transform.position.y,
        target.position.z - transform.position.z);
        double distance = Mathf.Sqrt(Mathf.Pow(distanceVector.x, 2) +
        Mathf.Pow(distanceVector.y, 2) +
        Mathf.Pow(distanceVector.z, 2));
        
        if (distance > 2)
        {
            if (distanceVector.x != 0)
            {
                transform.Translate(new Vector3(velocity * Time.deltaTime, 0, 0));
            }
        
            if (distanceVector.y != 0)
            {
                transform.Translate(new Vector3(0, velocity * Time.deltaTime, 0));
            }
            
            if (distanceVector.z != 0)
            {
                transform.Translate(new Vector3(0, 0, velocity * Time.deltaTime));
            }
        }
    }
}
