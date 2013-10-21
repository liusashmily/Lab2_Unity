#pragma strict

// Inspector Variable
var astroidSpeed 	:float = 2.0;
var explosion	 	:Transform;
var sceneManager 	:GameObject;

function Start () {

}

function Update () {
	//	var newSpeed = astroidSpeed * Time.timedeltaTime;
	transform.Translate(Vector3.down * astroidSpeed * Time.deltaTime);

	//  print ("before trigger lives:" + transform.GetComponent(script_player).lives);
	
	// Reset the location
	ResetEnemy();
}

function OnTriggerEnter (other :Collider) {
	//Debug.Log("Other Collider:" + other.name);
    //print ("before trigger lives:" + other.GetComponent(script_player).lives);
	if (other.gameObject.tag == "Player") {

		other.GetComponent(script_player).lives -= 1;

		if(explosion) {
			Instantiate (explosion, transform.position, transform.rotation);
		}

		// Tell scene manager that we destroyed one enemy and add a point to the score
		sceneManager.transform.GetComponent(scriptSceneManager).SubtractLife();


	}
	// Reset the location
 	ResetEnemy();
}

function ResetEnemy() {
	if (transform.position.y <= -20){
		transform.position.y = 15;
		transform.position.x = Random.Range (-20.0, 20.0);
	}
}
