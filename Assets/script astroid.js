#pragma strict

// Inspector Variable
var astroidSpeed :float = 6.0;

function Start () {

}

function Update () {
//	var newSpeed = astroidSpeed * Time.timedeltaTime;
	transform.Translate(Vector3.down * astroidSpeed * Time.deltaTime);

	if (transform.position.y <= -20){
		transform.position.y = 15;
		transform.position.x = Random.Range (-20.0, 20.0);
	}


}