#pragma strict
//Player Script

//Inspector Variables
var lives						:int = 3;			// lives of the player
var playerSpeedHorizontal		:float = 10.0;		// speed of player along the vertical axis
var playerSpeedVertical			:float = 10.0;		// speed of player along the horizontal axis
var horMin						:float = -25.0;		// limits for player left
var horMax						:float = 25.0;		// limits for player right
var VerMin						:float = -20.0;		// limits for player movement doewn
var VerMax						:float = 20.0;		// limits for player movement on
var projectile					:Transform;
var socketProjectile			:Transform;
var numberOfShields				:int = 4;			// Set the sheileds that player will use 
var shieldMesh					:Transform;			// Load shield mesh
var shieldKeyInput				:KeyCode;

//Private Variables


function Start () {

}

// game loop
function Update () {
	//transform.Translate(playerSpeed * Time.deltaTime,0,0);
	//transform.Translate(0,0, playerSpeed * Time.deltaTime);
	var transV:float = Input.GetAxis("Vertical") * playerSpeedVertical * Time.deltaTime;			//use to store variable for vertical movement
	var transH:float = Input.GetAxis("Horizontal") * playerSpeedHorizontal * Time.deltaTime;		//use to store variable for horizontal movement

	transform.Translate(transH, transV, 0);		// Here we use the x to move left and right, and y to move up and down

	//player position is equal to "X" number then number equals "X"
	transform.position.x = Mathf.Clamp(transform.position.x, horMin, horMax);						// set horizontal limits;
	transform.position.y = Mathf.Clamp(transform.position.y, VerMin, VerMax);						// set vertical limits

/*	if(transform.position.x >= 25)
		transform.position.x = 25;
	if(transform.position.x <= -25 )
		transform.position.x = -25;
*/
	//print(Mathf.Clamp(12, 1, 7));

	// Create a bullet
	if(Input.GetKeyDown("space")){
		Instantiate(projectile,socketProjectile.position,socketProjectile.rotation);

	}

	// Create a shield
	if(Input.GetKeyDown(shieldKeyInput)){
		print("press E");
		Instantiate(shieldMesh, transform.position, transform.rotation);
	}



}