// Script Shield
#pragma strict

// Inspector Variable
var shieldStrength:      int = 2; 


function Start () {

}

function Update () {
	if(shieldStrength <= 0) {
		
		Destroy(gameObject);
		// var sp: script_player = GetComponent(script_player);
		var sp = GameObject.FindWithTag ("Player");
		sp.GetComponent(script_player).SetShieldFalse();
		// sp.shieldOn = false;
		// print ("shieldOn:" + sp.shieldOn);
	}

}

function OnTriggerEnter (collider: Collider) {
	if (collider.tag == "astroid"){
		shieldStrength -= 1;
	}


}