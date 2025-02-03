// game.js
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

let score = 0;

const backgroundImage = new Image(); // Create a new Image object
backgroundImage.src = 'assets/bg.png'; // Specify the path to image

// Load the item image
const itemImage = new Image();
itemImage.src = 'assets/Item.png';  // Specify the path to image

const playerScoop = new Image(); // Create a new Image object
playerScoop.src = 'assets/scoop.png'; // Specify the path to image

let scoopSpeedDefault = 5;  // Speed at which the scoop moves upwards
let scoopSpeed = scoopSpeedDefault;  // Speed at which the scoop moves upwards
let scoopYPosition = canvas.height + 500;  // Initial position of the scoop (near the bottom)
let scoopXPosition = canvas.width / 2 - 50; // Initial scoop X-position (centered horizontally)

// Resize the canvas to match the container size
function resizeCanvas() {
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	draw();  // Redraw content after resizing
}

// item objects array
let items = [
	{ x: canvas.width / 4, y: 100, dx: 2, dy: 0, width: 100, height: 60 },
	{ x: canvas.width / 4, y: 200, dx: -2, dy: 0, width: 100, height: 60 },
	{ x: canvas.width / 4, y: 300, dx: 3, dy: 0, width: 100, height: 60 },
	{ x: canvas.width / 4, y: 400, dx: -3, dy: 0, width: 100, height: 60 },
];

let flash = false;  // Flag for flashing red
let flashDuration = 100;  // Duration of red flash in milliseconds
let flashTime = 0;  // Timer for flash duration


var isScooping = false;
var scoopedSuccess = false;

// Draw function that is called every frame
function draw() {

	// Clear canvas and redraw the items
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Ensure the background image has loaded before drawing
	if (backgroundImage.complete) {
		ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // Draw the image to fill the canvas
	}

	// Loop through each item and draw it
	items.forEach((item, index) => {
		// Draw the item (using the image)
		ctx.drawImage(itemImage, item.x - item.width / 2, item.y - item.height / 2, item.width, item.height);

		// Update item position
		item.x += item.dx;
		item.y += item.dy;

		// Bounce off walls
		if (item.x + item.width / 2 > canvas.width || item.x - item.width / 2 < 0) {
			item.dx = -item.dx;
		}
		if (item.y + item.height / 2 > canvas.height || item.y - item.height / 2 < 0) {
			item.dy = -item.dy;
		}

		// Check for collision with the top of the scoop (item's bottom edge)
		if (
			item.x + item.width / 2 > scoopXPosition &&  // item is within scoop's left boundary
			item.x - item.width / 2 < scoopXPosition + 100 &&  // item is within scoop's right boundary
			item.y + item.height / 2 > scoopYPosition &&  // item's bottom is below the scoop's top
			item.y - item.height / 2 < scoopYPosition + 10  // item's top is just above the scoop's top
			&&
			!scoopedSuccess
		) {
			// Remove the item and increase score
			items.splice(index, 1);
			score++;

			scoopedSuccess = true;
			scoopSpeed = -scoopSpeedDefault; // Reverse direction of scoop

			// Update the score display
			document.getElementById("scoretxt").innerHTML = "Score: " + score;
		}
	});

	if (isScooping) {
		// Move the player scoop upward
		scoopYPosition -= scoopSpeed;  // Move the scoop upward by the speed amount
	}

	// Prevent the scoop from moving off the top of the canvas
	if (scoopYPosition < 100) {
		scoopSpeed = -scoopSpeedDefault; // Reverse direction of scoop
	}

	if (scoopYPosition > canvas.height - 200) {
		isScooping = false;
		scoopedSuccess = false;
		scoopSpeed = scoopSpeedDefault;

		//check win
		if (items.length <= 0) {
			document.getElementById('endMessage').style.display = 'block';
		}
	}

	// Draw the player scoop
	ctx.drawImage(playerScoop, scoopXPosition, scoopYPosition, 100, 400); // Draw the image to fill the canvas

	// Flash red if necessary
	if (flash) {
		ctx.fillStyle = 'red';
		ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill the entire canvas with red
		flashTime += 10;
		if (flashTime >= flashDuration) {
			flash = false;  // Stop flashing after the duration
			flashTime = 0;
		}
	}
}

function detectClick(event) {
	if (isScooping)
		return;

	// console.log('clicking');

	trackMouse(event);

	isScooping = true;
}

// Track mouse movement for the scoop position
function trackMouse(event) {
	// Get the mouse X position relative to the canvas
	scoopXPosition = event.offsetX - 50; // Adjust scoop position (center the scoop)

	// Prevent the scoop from going off the canvas (left or right)
	if (scoopXPosition < 0) scoopXPosition = 0;
	if (scoopXPosition > canvas.width - 100) scoopXPosition = canvas.width - 100;
}

// Wait for the image to load before starting the game loop
itemImage.onload = function () {
	resizeCanvas();
	setInterval(draw, 10); // Update the game every 10ms
};

// Event listener for mouse clicks
canvas.addEventListener('mousedown', detectClick);

// Event listener for mouse movement to track scoop position
// canvas.addEventListener('mousemove', trackMouse);

// Call resizeCanvas when the window is resized
window.addEventListener('resize', resizeCanvas);
