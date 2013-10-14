#pragma strict

//Inspector Variable
var bulletSpeed: float = 15.0;			// Speed of bullet


function Start () {

}

// Game Loop
function Update () {
	transform.Translate(0, bulletSpeed * Time.deltaTime, 0);
	if (transform.position.y >= 10)
		Destroy (gameObject);
}