#pragma strict

// Scene Manager Scripte

// Inspector Variables
var gameTime 		:float = 60;
static var score 	:int = 0;


// Private Variables

function Start () {

}

function Update () {
	print("Score:" + score);
	

}

function AddScore () {
	score += 1;


}