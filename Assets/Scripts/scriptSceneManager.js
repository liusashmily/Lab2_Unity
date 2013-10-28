#pragma strict

// Scene Manager Scripte

// Inspector Variables
var gameTime 		:float = 100;
static var score 	:int = 0;
static var lives	:int = 3;

// Private Variables


function Start () {
	InvokeRepeating ("CountDown", 1.0, 1.0);
}

function Update () {
	if (lives <= 0 ){
		Application.LoadLevel("ScreenLose");
		lives = 3;
	}

	if (gameTime <= 0) {
		Application.LoadLevel("ScreenWin");
		lives = 3;
	}

	print("Score:" + score);
}

function AddScore () {
	score += 1;
}

function SubtractLife () {
	lives -= 1;
}

function CountDown () {
	if (--gameTime == 0)
		CancelInvoke("CountDown");
}

function OnGUI () {
	GUI.Label (Rect (10, 10, 100, 20), "Score: " + score);
	GUI.Label (Rect (10, 25, 100, 20), "Lives: " + lives);
	GUI.Label (Rect (Screen.width - 75, 10, 100, 20), "Counter: " + gameTime);
}