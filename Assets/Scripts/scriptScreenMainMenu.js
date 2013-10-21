#pragma strict

// Main Menu Script


// Inspector Variable
var waitTime : 			float = 3.0;

function OnGUI () {
	// Make a group on the center of the screen
	GUI.BeginGroup (Rect(Screen.width / 2 - 50, Screen.height / 2 - 50, 100, 175));

	// Make a box to see the group on screen
	GUI.Box (Rect(0,0,100,175), "Main Menu");

	// Add buttons for game navigation
	if(GUI.Button(Rect(10,30,80,30), "Start Game")){
		Application.LoadLevel("ScreenLoad");
	}

	// Add buttons for game navigation
	if(GUI.Button(Rect(10,60,80,30), "Credits")){
		Application.LoadLevel("ScreenCredit");
	}

	// Add buttons for game navigation
	if(GUI.Button(Rect(10,90,80,30), "Exit")){
		Application.Quit();
	}

	// Add buttons for game navigation
	if(GUI.Button(Rect(10,120,80,30), "Home Page")){
		Application.OpenURL("http://www.lisaliu.info");
	}

	GUI.EndGroup ();
}