// Script Shield
#pragma strict

// Inspector Variable
var shieldStrength:      int = 2; 


function Start () {

}

function Update () {
	if(shieldStrength <= 0) {
		Destroy(gameObject);
	}

}

function OnTriggerEnter (collider: Collider) {
	if (collider.tag == "astroid"){
		shieldStrength -= 1;
	}


}