#pragma strict

// Inspector Variable
var astroidSpeed 	:float = 0.1;
var explosion	 	:Transform;
var sceneManager 	:GameObject;

function Start () {

}

function Update () {
	//	var newSpeed = astroidSpeed * Time.timedeltaTime;
	transform.Translate(Vector3.down * astroidSpeed);

	//  print ("before trigger lives:" + transform.GetComponent(script_player).lives);
	
	// Reset the location
	if(transform.position.y <= -20){
		ResetEnemy();
		astroidSpeed = 0.1;
	}
 	
}

function OnTriggerEnter (other :Collider) {

	if (other.gameObject.tag == "Player") {

		other.GetComponent(script_player).lives -= 1;

		if(explosion) {
			Instantiate (explosion, transform.position, transform.rotation);
		}

		// Tell scene manager that we destroyed one enemy and add a point to the score
		sceneManager.transform.GetComponent(scriptSceneManager).SubtractLife();
		
		// Reset the location
 		ResetEnemy();
	}

	if (other.gameObject.tag == "shield") {
		if(explosion) {
			Instantiate (explosion, transform.position, transform.rotation);
		}
		// Reset the location
 		ResetEnemy();
	}

}

function ResetEnemy() {
	transform.position.y = 15;
	transform.position.x = Random.Range (-20.0, 20.0);

}
