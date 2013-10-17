﻿#pragma strict

//Inspector Variable
var bulletSpeed		:float = 15.0;			// Speed of bullet
var explosion		:Transform;

function Start () {

}

// Game Loop
function Update () {
	transform.Translate(0, bulletSpeed * Time.deltaTime, 0);
	if(transform.position.y >= 10)
		Destroy (gameObject);
}

function OnTriggerEnter (other : Collider) {
	//	print("We hit the ball");
	//	print(other.name);

	//Check for the astroid
	if (other.gameObject.tag == "astroid")
	{
		other.transform.position.y = 15;
		other.transform.position.x = Random.Range (-20.0, 20.0);

		// Create the explosion on impact
		if (explosion) {
			Instantiate(explosion, transform.position, transform.rotation);
		}
		
		// Get rid of the bullet
		Destroy (gameObject);
	}

}