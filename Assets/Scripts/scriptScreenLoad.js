#pragma strict

// Inspector Variable
var waitTime : 			float = 3.0;


function OnGUI () {
	GUI.BeginGroup(Rect(Screen.width / 2 - 50, Screen.height / 2 - 50, 200, 275));

	// Make a box to see the group on screen
	GUI.Box(Rect(0,0,200,275), "Instructions");

	// Instruction for the palyer go here
	GUI.Label(Rect(10,30,140,40),"Arrow Keys to Move");
	GUI.Label(Rect(10,60,160,70),"Spancebar to Shoot");
	GUI.Label(Rect(10,90,160,100),"Esc to Quit the Game");

	GUI.EndGroup();

}

function Update () {
	// Time for waiting
	if(Input.GetKeyDown("space")){
		Application.LoadLevel("Level_01");
	}
	else
		WaitTime();

}

function WaitTime(){
	yield WaitForSeconds(waitTime);

}