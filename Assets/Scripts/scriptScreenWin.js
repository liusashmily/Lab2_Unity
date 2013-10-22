// Screen Win

// Inspector Variables
var loseQuote: String = "You Win";

function OnGUI () {

	// Make a group on the center of the screen
	GUI.BeginGroup(Rect(Screen.width / 2 - 50, Screen.height / 2 - 50, 200, 275));

	// Make a box to see the group on screen
	GUI.Box(Rect(0,0,200,275), loseQuote);

	// What was the score
	GUI.Label(Rect(10,30,200,40),"Score: ");

	// Add Buttons here
	if(GUI.Button(Rect(60, 175, 80, 30), "Main Menu")){
		Application.LoadLevel("ScreenMainMenu");			// Take us back to the start
	}

	// End the group that we started from above
	GUI.EndGroup();
}