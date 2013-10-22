// Credit Script

function OnGUI () {

	// Make a group on the center of the screen
	GUI.BeginGroup(Rect(Screen.width / 2 - 50, Screen.height / 2 - 50, 200, 275));

	// Make a box to see the group on screen
	GUI.Box(Rect(0,0,200,275), "Credits");

	// Credits for the names of creators
	GUI.Label(Rect(10,30,200,40),"Designer:    Eric Walker");
	GUI.Label(Rect(10,60,200,70),"Artist:      Eric Walker ");
	GUI.Label(Rect(10,90,200,100),"Software:   Sa Liu");
	GUI.Label(Rect(10,120,200,130),"Level Designer:   Sa Liu");

	// Add Buttons here
	if(GUI.Button(Rect(60, 175, 80, 30), "Back")){
		Application.LoadLevel("ScreenMainMenu");			// Take us back to the start
	}

	// End the group that we started from above
	GUI.EndGroup();
}