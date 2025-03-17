// Import Three.js and Cannon.js
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Three.js setup
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Setup camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(10, 10, 10); // Increase the Z position to move the camera further away from the car
camera.lookAt(new THREE.Vector3(0, 0, 0));
const orbit = new OrbitControls(camera, renderer.domElement);

// Limit the camera movement
orbit.minPolarAngle = Math.PI / 6; // Limit up angle (in radians)
orbit.maxPolarAngle = Math.PI / 2.2; // Limit ground (in radians)
orbit.update();

const SHOW_HELPER = true;

if (SHOW_HELPER) {
	const gridHelper = new THREE.GridHelper(50, 50);
	scene.add(gridHelper);

	const axesHelper = new THREE.AxesHelper(5);
	scene.add(axesHelper);
}

// Load panoramic texture
const skyLoader = new THREE.TextureLoader();
skyLoader.load('assets/sky.jpg', function (texture) {
	// Create a sphere to wrap the texture around
	const geometry = new THREE.SphereGeometry(500, 60, 40);
	geometry.scale(-1, 1, 1); // Invert the sphere to have the texture on the inside
	const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
	const sky = new THREE.Mesh(geometry, material);

	scene.add(sky);
});

// Add a light
const light = new THREE.AmbientLight(0x404040, 50);  // Soft white light
scene.add(light);


// Load the texture using TextureLoader
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(
	'assets/Building.png',
	(loadedTexture) => {
		console.log('Texture loaded successfully');
		loadedTexture.encoding = THREE.sRGBEncoding;
	},
	undefined,
	(err) => {
		console.error('Error loading texture:', err);
	}
);

//create ground
const groundLoader = new FBXLoader()
groundLoader.load(
	'assets/Garage_01.fbx',
	(object) => {
		object.traverse(function (child) {
			if (child.isMesh) {
				// Make sure the material is set to a proper shader
				child.material = new THREE.MeshStandardMaterial({
					map: texture,      // Set the texture
					metalness: 0.5,    // Adjust metalness if needed
					roughness: 0.5,    // Adjust roughness if needed
				});
				child.material.needsUpdate = true; // Ensure the material is updated with the texture
			}
		})
		scene.add(object)

		let scale = 0.03;
		object.scale.set(scale, scale, scale)
		// object.position.y = -68
		// object.rotation.y = 3.13
	},
	(xhr) => {
		// console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
	},
	(error) => {
		console.log(error)
	}
)

// Create an empty object (a parent container)
var car3D = new THREE.Object3D();
scene.add(car3D);  // Add the empty object to the scene

const fbxLoader = new FBXLoader()
fbxLoader.load(
	'assets/SUV-D.fbx',
	(object) => {
		car3D.add(object)

		let modelScale = 0.015;

		object.scale.set(modelScale, modelScale, modelScale)
		// object.position.x = 1.5
		object.position.y = -1.2
		object.position.z = -0.5
		// object.rotation.y = Math.PI
		// object.rotation.z = 3.13

		//if done loading car
		loadingScreen.style.display = 'none'; // hide loading
	},
	(xhr) => {
		let progress = (xhr.loaded / xhr.total) * 100;
		// console.log(progress + '% loaded')
	},
	(error) => {
		console.log(error)
	}
)

// Create ground
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC, side: THREE.DoubleSide });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.rotation.x = -Math.PI / 2;
// scene.add(groundMesh);

// Cannon.js setup
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0); // Gravity
// world.gravity.set(0, 0, 0); // Gravity

// Ground body
const groundBodyMaterial = new CANNON.Material('ground');
const groundBody = new CANNON.Body({
	mass: 0,
	material: groundBodyMaterial,
	shape: new CANNON.Plane(),
	position: new CANNON.Vec3(0, 0, 0)
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Directly set the rotation of the ground body
world.addBody(groundBody);

// Walls
/* var wallBodies = [];
var wallMeshes = [];
const wallData = [
	{ w: 1, h: 1, d: 3, posX: -10, posY: 8, posZ: 0 }
]

for (let i = 0; i < wallData.length; i++) {
	
	const wall = new CANNON.Body({
		mass: 5,
		material: new CANNON.Material(),
		shape: new CANNON.Box(new CANNON.Vec3(wallData[i].w, wallData[i].h, wallData[i].d)),
		position: new CANNON.Vec3(wallData[i].posX, wallData[i].posY, wallData[i].posZ)
	});
	wall.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Directly set the rotation of the ground body
	world.addBody(wall);
	wallBodies.push(wall)

	const wallMesh = new THREE.Mesh(
		new THREE.BoxGeometry(wallData[i].w, wallData[i].h, wallData[i].d, 32),
		new THREE.MeshBasicMaterial({ color: 0x0000ff })
	);
	scene.add(wallMesh);
	wallMeshes.push(wallMesh)
} */

function updateWallMeshesPos() {
	/* for (let i = 0; i < wallMeshes.length; i++) {
		wallMeshes[i].position.copy(wallBodies[i].position);
		wallMeshes[i].quaternion.copy(wallBodies[i].quaternion);
		wallMeshes[i].scale.set(wallData[i].w, wallData[i].h, wallData[i].d); 
	} */
}


// Load texture for the wheels
const textureWheelLoader = new THREE.TextureLoader();
const wheelTexture = textureWheelLoader.load('assets/Point_Pole.png'); // Load the texture

// Create materials for wheels and rods
const rodWidth = 2.4;
const rodHeight = 1;
const rodSize = 6;
const wheelMaterial = new CANNON.Material('wheel');
const rodMaterial = new CANNON.Material();
const wheelThickness = 0.3;
const wheelRadius = 0.6;
const offsetXWheel = rodWidth / 2 + 0.25;
const offsetYWheel = -0.5;
const offsetZWheel = 2;
const posYStart = 0.85;

// Number of wheels and positions
const wheelPositions = [
	{ x: -offsetXWheel, y: posYStart, z: offsetZWheel }, // Position for wheel 1
	{ x: offsetXWheel, y: posYStart, z: offsetZWheel },   // Position for wheel 2
	{ x: -offsetXWheel, y: posYStart, z: -offsetZWheel },   // Position for wheel 3
	{ x: offsetXWheel, y: posYStart, z: -offsetZWheel },   // Position for wheel 4
];

// Create arrays for wheels and wheel meshes
const wheels = [];
const wheelMeshes = [];

// Loop to create wheels and wheel meshes
for (let i = 0; i < wheelPositions.length; i++) {
	// Cannon.js wheel creation
	const wheel = new CANNON.Body({
		mass: 20,
		material: wheelMaterial,
		shape: new CANNON.Cylinder(wheelRadius, wheelRadius, wheelThickness, 32),
	});
	wheel.quaternion.setFromEuler(0, 0, Math.PI / 2); // Align wheels along the x-axis
	wheel.position.set(wheelPositions[i].x, wheelPositions[i].y, wheelPositions[i].z);
	world.addBody(wheel);
	wheels.push(wheel);

	// Three.js wheel mesh creation
	const wheelMesh = new THREE.Mesh(
		new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelThickness, 32),
		new THREE.MeshBasicMaterial({ map: wheelTexture })
	);
	scene.add(wheelMesh);
	wheelMeshes.push(wheelMesh);
}

// Create a contact material between the ground and the wheels
const wheelGroundContactMaterial = new CANNON.ContactMaterial(
	groundBodyMaterial,     // Ground material
	wheelMaterial,      // Wheel material
	{
		friction: 0.8,   // Friction between ground and wheels (adjustable)
		restitution: 0  // Bounciness (not necessary for friction but can be adjusted)
	}
);

// Add the contact material to the world
world.addContactMaterial(wheelGroundContactMaterial);

// Connecting rod (Cannon.js & Three.js)
const rod = new CANNON.Body({
	mass: 200,
	material: rodMaterial,
	shape: new CANNON.Box(new CANNON.Vec3(rodWidth, rodHeight, rodSize)),
});
rod.position.set(0, posYStart, 0);
rod.linearDamping = 0.5;

world.addBody(rod);

const rodMesh = new THREE.Mesh(
	new THREE.BoxGeometry(rodWidth, rodHeight, rodSize),
	new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

if (SHOW_HELPER)
	scene.add(rodMesh);

// Hinge Joints for the wheels
const axisWheel = new CANNON.Vec3(0, 1, 0); // Axis of rotation (vertical axis)
const axisRod = new CANNON.Vec3(1, 0, 0); // Axis of rotation (horizontal axis)

// Loop to create hinge joints for each wheel
for (let i = 0; i < wheelPositions.length; i++) {
	//front wheels
	if (i < 2) {
		const offsetX = wheelPositions[i].x > 0 ? offsetXWheel : -offsetXWheel;
		const hinge = new CANNON.HingeConstraint(wheels[i], rod, {
			pivotA: new CANNON.Vec3(0, 0, 0),
			pivotB: new CANNON.Vec3(offsetX, offsetYWheel, wheelPositions[i].z),
			axisA: new CANNON.Vec3(0, 1, 0),
			axisB: new CANNON.Vec3(1, 0, 0),
		});
		world.addConstraint(hinge);
	}
	//back wheels
	if (i >= 2) {
		const offsetX = wheelPositions[i].x > 0 ? offsetXWheel : -offsetXWheel;
		const hinge = new CANNON.HingeConstraint(wheels[i], rod, {
			pivotA: new CANNON.Vec3(0, 0, 0),
			pivotB: new CANNON.Vec3(offsetX, offsetYWheel, wheelPositions[i].z),
			axisA: axisWheel,
			axisB: axisRod,
		});
		world.addConstraint(hinge);
	}
}

// Update Three.js objects from Cannon.js bodies
function updateMeshesFromBodies() {
	for (let i = 0; i < wheelPositions.length; i++) {
		wheelMeshes[i].position.copy(wheels[i].position);
		wheelMeshes[i].quaternion.copy(wheels[i].quaternion);
	}

	rodMesh.position.copy(rod.position);
	rodMesh.quaternion.copy(rod.quaternion);

	car3D.position.copy(rod.position);
	car3D.quaternion.copy(rod.quaternion);
}

var engineOn = false;
var showTutorial = true;

// Get the screen element
const tutorialScreen = document.getElementById('tutorialScreen');
const endScreen = document.getElementById('endScreen');
const loadingScreen = document.getElementById('loadingScreen');

// Additional setup for controlling car's back wheels
let isAccelerating = false;
let isBraking = false;
let isTurningLeft = false;
let isTurningRight = false;

// Listen for keyboard events
window.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp' || event.key === 'w') {
		isAccelerating = true;
	}
	if (event.key === 'ArrowDown' || event.key === 's') {
		isBraking = true;
	}
	if (event.key === 'ArrowLeft' || event.key === 'a') {
		isTurningLeft = true;
	}
	if (event.key === 'ArrowRight' || event.key === 'd') {
		isTurningRight = true;
	}
});

window.addEventListener('keyup', (event) => {
	if (event.key === 'ArrowUp' || event.key === 'w') {
		isAccelerating = false;
	}
	if (event.key === 'ArrowDown' || event.key === 's') {
		isBraking = false;
	}
	if (event.key === 'ArrowLeft' || event.key === 'a') {
		isTurningLeft = false;
	}
	if (event.key === 'ArrowRight' || event.key === 'd') {
		isTurningRight = false;
	}
});

// Function to apply torque to the back wheels
function applyTorqueToBackWheels() {
	const torqueStrength = 300; // Adjust this value to increase or decrease the torque
	const brakeStrengthDefault = 800; // Adjust this value to control braking force

	// Apply torque to the back wheels (wheel 3 and wheel 4)
	if (isAccelerating) {
		for (let i = 0; i < wheels.length; i++) {
			if (i >= 2) {
				// Define a local torque vector (e.g., applying torque along the x-axis in local space)
				const localTorque = new CANNON.Vec3(0, -torqueStrength, 0);  // Apply along the local x-axis

				// Convert the local torque to world space using the body's quaternion
				const worldTorque = wheels[i].quaternion.vmult(localTorque);  // vmult() rotates the vector to world space

				// Apply the world space torque to the body
				wheels[i].applyTorque(worldTorque);
			}
		}
	}

	//controll braking/backward power
	let brakeStrength = brakeStrengthDefault; // Adjust this value to control braking force
	if (getCarSpeed().isForward)
		brakeStrength = brakeStrengthDefault;
	else
		brakeStrength = torqueStrength / 2;


	// Apply brake (negative torque)
	if (isBraking) {
		for (let i = 0; i < wheels.length; i++) {
			if (i >= 2) {
				// Define a local torque vector (e.g., applying torque along the x-axis in local space)
				const localTorque = new CANNON.Vec3(0, brakeStrength, 0);  // Apply along the local x-axis

				// Convert the local torque to world space using the body's quaternion
				const worldTorque = wheels[i].quaternion.vmult(localTorque);  // vmult() rotates the vector to world space

				// Apply the world space torque to the body
				wheels[i].applyTorque(worldTorque);
			}
		}
	}
}

// Function to apply steering to the front wheels (rotate front wheels mesh only)
function applySteering() {
	const steeringAngleSpeed = 0.135; // Adjust this value to control the speed of steering

	// Apply angular velocity to the front wheels (index 0 and 1)
	for (let i = 0; i < 2; i++) { // Only apply to front wheels
		if (wheels[i]) {
			const wheel = wheels[i];

			// Get the current rotation quaternion of the wheel
			let currentRotation = wheel.quaternion.clone();

			if (isTurningLeft) {
				// Create the local rotation (rotate around the Y-axis)
				const localRotation = new CANNON.Quaternion();
				localRotation.setFromEuler(0, steeringAngleSpeed, 0);

				// Apply the local rotation to the wheel
				wheel.quaternion = localRotation.mult(currentRotation)
			} else if (isTurningRight) {
				// Create the local rotation (rotate around the Y-axis)
				const localRotation = new CANNON.Quaternion();
				localRotation.setFromEuler(0, -steeringAngleSpeed, 0);

				// Apply the local rotation to the wheel
				wheel.quaternion = localRotation.mult(currentRotation)
			} else {
				// No turning, stop the Y-axis rotation (keep X and Z intact)
				// wheel.angularVelocity.set(currentAngularVelocity.x, 0, currentAngularVelocity.z);
			}
		}
	}
}

function getCarSpeed() {
	let velocity = {
		speed: 0,
		isForward: false,
		isBackward: false,
		isStationary: false,
	};

	// Get the world-space velocity of the car's rod
	const worldVelocity = rod.velocity;

	// Get the car's quaternion (rotation) from the rod's physics body
	const carRotation = rod.quaternion;

	// Invert the quaternion to transform from world space to local space
	const inverseRotation = carRotation.clone().inverse();

	// Now, transform the velocity from world space to local space
	const localVelocity = inverseRotation.vmult(worldVelocity);

	// Check if the car is moving forward or backward
	if (localVelocity.z > 0) {
		// console.log("The car is moving forward");
		velocity.isForward = true;
		velocity.isBackward = false;
		velocity.isStationary = false;
	} else if (localVelocity.z < 0) {
		// console.log("The car is moving backward");
		velocity.isForward = false;
		velocity.isBackward = true;
		velocity.isStationary = false;
	} else {
		// console.log("The car is not moving (velocity along Z-axis is zero)");
		velocity.isForward = false;
		velocity.isBackward = false;
		velocity.isStationary = true;
	}

	// Get the car's forward direction (assuming the car's forward direction is along the Z axis)
	const forwardDirection = new CANNON.Vec3(0, 0, 1); // Assuming car is moving along the Z axis

	// Calculate the speed in the forward direction
	velocity.speed = localVelocity.dot(forwardDirection);

	return velocity;
}


let targetCameraPosition = new THREE.Vector3();
let targetCameraLookAt = new THREE.Vector3();

// Modify the render loop to include applying torque and steering
function animate() {
	requestAnimationFrame(animate);
	world.step(1 / 60); // Step the physics world forward

	if (engineOn) {
		applyTorqueToBackWheels(); // Apply torque when accelerating or braking
		applySteering(); // Apply steering when turning


		// Smooth camera follow
		let followDistance = 12; // Distance behind the model
		let heightOffset = 6; // Height offset above the model

		// Calculate the target camera position (behind the model)
		const cameraOffset = new THREE.Vector3(0, heightOffset, -followDistance); // Local offset in model space
		cameraOffset.applyQuaternion(car3D.quaternion); // Rotate to align with model's orientation
		targetCameraPosition.copy(car3D.position).add(cameraOffset);

		// Interpolate (lerp) the camera's position for smooth movement
		camera.position.lerp(targetCameraPosition, 0.05);

		// Set the camera to look at the model
		targetCameraLookAt.copy(car3D.position);
		targetCameraLookAt.y += 2; //add offset
		camera.lookAt(targetCameraLookAt);
	}

	updateMeshesFromBodies(); // Sync meshes with physics bodies

	updateWallMeshesPos();

	// Sync ground mesh with the physics body
	groundMesh.quaternion.copy(groundBody.quaternion);
	renderer.render(scene, camera);
}

animate();


var updateEngineButton = function () {
	document.getElementById("img-engine-off").style.display = engineOn ? 'none' : 'block'
	document.getElementById("img-engine-on").style.display = engineOn ? 'block' : 'none'
}

window.toggleEngine = function () {
	engineOn = !engineOn;

	updateEngineButton();

	// console.log("engine= ", engineOn)

	//hide tutorial
	showTutorial = false;
	tutorialScreen.style.display = 'none'; // Hide tutorial screen

	if (engineOn) {
		document.getElementById('engineOnSound').play();
		// Add event listener for when the sound finishes playing
		document.getElementById('engineOnSound').addEventListener('ended', () => {
			document.getElementById('engineLoopSound').play();
		});

	} else {
		document.getElementById('engineOffSound').play();
		document.getElementById('engineLoopSound').pause();
	}


	//toggle orbit camera control
	orbit.enabled = !engineOn;
}


window.pressGas = function () {
	isAccelerating = true;
}

window.releaseGas = function () {
	isAccelerating = false;
}

window.pressLeft = function () {
	isTurningLeft = true;
}
window.pressRight = function () {
	isTurningRight = true;
}
window.releaseArrow = function () {
	isTurningLeft = false;
	isTurningRight = false;
}

document.addEventListener('mouseup', function (event) {
	releaseGas();
	releaseArrow();
});