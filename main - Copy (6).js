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
// camera.position.set(10, 10, 10); // Increase the Z position to move the camera further away from the car
// camera.lookAt(new THREE.Vector3(0, 0, 0));
const orbit = new OrbitControls(camera, renderer.domElement);

// Limit the camera movement
orbit.minPolarAngle = Math.PI / 6; // Limit up angle (in radians)
orbit.maxPolarAngle = Math.PI / 2.2; // Limit ground (in radians)
orbit.update();

const SHOW_HELPER = true;

if (SHOW_HELPER) {
	const gridHelper = new THREE.GridHelper(100, 100);
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
const light = new THREE.AmbientLight(0x404040, 10);  // Soft white light
scene.add(light);

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight(0xffffff, 8);
directionalLight.position.set(10, 30, 0);
scene.add(directionalLight);


// Load the texture using TextureLoader
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(
	'assets/Garage_01.png',
	(loadedTexture) => {
		console.log('Texture loaded successfully');
		loadedTexture.encoding = THREE.sRGBEncoding;
	},
	undefined,
	(err) => {
		console.error('Error loading texture:', err);
	}
);

//create garage
const garageLoader = new FBXLoader()
garageLoader.load(
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

// Load the texture using TextureLoader
const textureGroundLoader = new THREE.TextureLoader();
const textureGround = textureGroundLoader.load(
	'assets/Garage_01_Floor.png',
	(loadedTexture) => {
		console.log('Texture loaded successfully');
		loadedTexture.encoding = THREE.sRGBEncoding;
	},
	undefined,
	(err) => {
		console.error('Error loading texture:', err);
	}
);

//create garage
const groundLoader = new FBXLoader()
groundLoader.load(
	'assets/Garage_01_Floor.fbx',
	(object) => {
		object.traverse(function (child) {
			if (child.isMesh) {
				// Make sure the material is set to a proper shader
				child.material = new THREE.MeshStandardMaterial({
					map: textureGround,      // Set the texture
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
var parkingSpot = new THREE.Object3D();
parkingSpot.position.set(35, 0, 35);
scene.add(parkingSpot);  // Add the empty object to the scene

const parkingLoader = new FBXLoader()
parkingLoader.load(
	'assets/ParkingSpot.fbx',
	(object) => {
		let scaleObj = 0.03;
		object.scale.set(scaleObj, scaleObj, scaleObj)

		parkingSpot.add(object)
	},
	(xhr) => {
		console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
	},
	(error) => {
		console.log(error)
	}
)


// Load the texture using TextureLoader
/* const textureCarLoader = new THREE.TextureLoader();
const textureCar = textureCarLoader.load(
	'assets/SAX.png',
	(loadedTexture) => {
		console.log('Texture loaded successfully');
		loadedTexture.encoding = THREE.sRGBEncoding;
	},
	undefined,
	(err) => {
		console.error('Error loading texture:', err);
	}
); */

// Create an empty object (a parent container)
var car3D = new THREE.Object3D();
scene.add(car3D);  // Add the empty object to the scene

const fbxLoader = new FBXLoader()
fbxLoader.load(
	'assets/SUV.fbx',
	(object) => {
		/* object.traverse(function (child) {
			if (child.isMesh) {
				// Make sure the material is set to a proper shader
				child.material = new THREE.MeshPhongMaterial({
					map: textureCar,      // Set the texture
					shininess: 0.9,
					roughness: 0.1,    // Adjust roughness if needed
				});
				child.material.needsUpdate = true; // Ensure the material is updated with the texture
			}
		}) */

		car3D.add(object)

		let modelScale = 0.015;

		object.scale.set(modelScale, modelScale, modelScale)
		// object.position.x = 1.5
		object.position.y = -1.2
		object.position.z = -0.45
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
var wallBodies = [];
var wallMeshes = [];
const wallData = [
	{ w: 1, h: 100, d: 10, posX: 45, posY: 3, posZ: 0 },
	{ w: 1, h: 100, d: 10, posX: -45, posY: 3, posZ: 0 },
	{ w: 100, h: 1, d: 10, posX: 0, posY: 3, posZ: 48 },
	{ w: 100, h: 1, d: 10, posX: 0, posY: 3, posZ: -48 },
]

for (let i = 0; i < wallData.length; i++) {
	const wall = new CANNON.Body({
		mass: 0,
		material: new CANNON.Material(),
		shape: new CANNON.Box(new CANNON.Vec3(wallData[i].w / 2, wallData[i].h / 2, wallData[i].d / 2)),
		position: new CANNON.Vec3(wallData[i].posX, wallData[i].posY, wallData[i].posZ)
	});

	// Apply rotation to the physics body
	wall.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

	// Add to the world
	world.addBody(wall);
	wallBodies.push(wall);

	//handle collision
	wall.addEventListener("collide", function (e) {
		if (e.body == rod) {
			showGameOver();
		}
	});

	// Create and add the mesh for visual representation
	const wallMesh = new THREE.Mesh(
		new THREE.BoxGeometry(wallData[i].w, wallData[i].h, wallData[i].d),
		new THREE.MeshBasicMaterial({ color: 0x0000ff })
	);

	if (SHOW_HELPER)
		scene.add(wallMesh);

	wallMeshes.push(wallMesh);
}

function updateWallMeshesPos() {
	for (let i = 0; i < wallBodies.length; i++) {
		// Sync position and rotation
		wallMeshes[i].position.copy(wallBodies[i].position);
		wallMeshes[i].quaternion.copy(wallBodies[i].quaternion);
	}
}

// Obstacles
var obstacleBodies = [];
var obstacleMeshes = [];
var obstacleObj3D = [];
let obstacleW = 3;
let obstacleH = 5;
let obstacleD = 10;
const obstacleData = [
	{ posX: -15, posY: 3, posZ: -40 },
	{ posX: -15, posY: 3, posZ: -30 },
	{ posX: -15, posY: 3, posZ: -20 },
	{ posX: -15, posY: 3, posZ: -10 },
	{ posX: -11.5, posY: 3, posZ: 0, rot: Math.PI / 2 },
	{ posX: -8, posY: 3, posZ: 10 },
	{ posX: -8, posY: 3, posZ: 20 },

	{ posX: 10, posY: 3, posZ: 0 },
	{ posX: 10, posY: 3, posZ: -10 },
	{ posX: 13.5, posY: 3, posZ: -20, rot: Math.PI / 2 },
];

for (let i = 0; i < obstacleData.length; i++) {
	let obstacle = new CANNON.Body({
		mass: 50,
		material: new CANNON.Material(),
		shape: new CANNON.Box(new CANNON.Vec3(obstacleW / 2, obstacleH / 2, obstacleD / 2)),
		position: new CANNON.Vec3(obstacleData[i].posX, obstacleData[i].posY, obstacleData[i].posZ)
	});

	// Apply rotation to the physics body
	obstacle.quaternion.setFromEuler(0, obstacleData[i].rot ? obstacleData[i].rot : 0, 0);
	world.addBody(obstacle);
	obstacleBodies.push(obstacle);

	// Handle collision
	obstacle.addEventListener("collide", function (e) {
		if (e.body == rod) {
			showGameOver();
		}
	});

	// Create and add the mesh for visual representation
	const obstacleMesh = new THREE.Mesh(
		new THREE.BoxGeometry(obstacleW, obstacleH, obstacleD),
		new THREE.MeshBasicMaterial({ color: 0x0000ff })
	);

	if (SHOW_HELPER) scene.add(obstacleMesh);
	obstacleMeshes.push(obstacleMesh);

	// Set the position and rotation for visual representation
	obstacleMesh.position.copy(obstacle.position);
	obstacleMesh.quaternion.copy(obstacle.quaternion);

	// Load the FBX model
	let obstacleObjLoader = new FBXLoader();
	obstacleObjLoader.load(
		'assets/Obstacle01.fbx',
		(object) => {
			let scaleObj = 0.02;
			object.scale.set(scaleObj, scaleObj, scaleObj);

			// Create an empty container (Object3D) to act as a pivot
			var pivot = new THREE.Object3D();
			pivot.position.set(0, -2.5, 0);
			pivot.add(object);

			// Add the loaded FBX model to the obstacleObj
			scene.add(pivot);
			obstacleObj3D.push(object);
		},
		(xhr) => {
			console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
		},
		(error) => {
			console.log(error);
		}
	);
}



function updateObstaclesPos() {
	for (let i = 0; i < obstacleObj3D.length; i++) {
		// Sync position and rotation
		obstacleMeshes[i].position.copy(obstacleBodies[i].position);
		obstacleMeshes[i].quaternion.copy(obstacleBodies[i].quaternion);

		obstacleObj3D[i].position.copy(obstacleBodies[i].position);
		obstacleObj3D[i].quaternion.copy(obstacleBodies[i].quaternion);
	}
}

// Car Params
const POS_START = { x: 0, y: 2, z: -30 };

const TORQUE_STRENGTH = 1200; // Adjust this value to increase or decrease the torque
const BRAKE_STRENGTH = 2000; // Adjust this value to control braking force
const STEERING_ANGLE = 0.15;
const STEERING_SPEED = 0.0008;

// Create materials for wheels and rods
const rodWidth = 2.5;
const rodHeight = 1;
const rodSize = 6;
const rodMaterial = new CANNON.Material();
const wheelMaterial = new CANNON.Material('wheel');
const wheelThickness = 0.3;
const wheelRadius = 1;
const offsetXWheel = rodWidth / 2;
const offsetYWheel = -0.5;
const offsetZWheel = 2;

//set camera based on starting pos
camera.position.set(POS_START.x + 8, 5, POS_START.z + 8);
orbit.target.set(POS_START.x, POS_START.y + 2, POS_START.z)
orbit.update();

// Number of wheels and positions
const wheelLocalPositions = [
	{ x: -offsetXWheel, y: offsetYWheel, z: offsetZWheel }, // Position for wheel 1
	{ x: offsetXWheel, y: offsetYWheel, z: offsetZWheel },   // Position for wheel 2
	{ x: -offsetXWheel, y: offsetYWheel, z: -offsetZWheel },   // Position for wheel 3
	{ x: offsetXWheel, y: offsetYWheel, z: -offsetZWheel },   // Position for wheel 4
];

const wheelPositions = [];
for (let i = 0; i < wheelLocalPositions.length; i++) {
	wheelPositions.push(
		{
			x: wheelLocalPositions[i].x + POS_START.x,
			y: wheelLocalPositions[i].y + POS_START.y,
			z: wheelLocalPositions[i].z + POS_START.z,
		}
	)
}

// Create arrays for wheels and wheel meshes
const wheels = [];

// Loop to create wheels and wheel meshes
for (let i = 0; i < wheelPositions.length; i++) {
	// Cannon.js wheel creation
	const wheel = new CANNON.Body({
		mass: 100,
		material: wheelMaterial,
		shape: new CANNON.Cylinder(wheelRadius, wheelRadius, wheelThickness, 128),
	});
	wheel.quaternion.setFromEuler(0, 0, Math.PI / 2); // Align wheels along the x-axis
	wheel.position.set(wheelPositions[i].x, wheelPositions[i].y, wheelPositions[i].z);
	world.addBody(wheel);
	wheels.push(wheel);
}

// Create a contact material between the ground and the wheels
const wheelGroundContactMaterial = new CANNON.ContactMaterial(
	groundBodyMaterial,     // Ground material
	wheelMaterial,      // Wheel material
	{
		friction: 0.9,   // Friction between ground and wheels (adjustable)
		restitution: 0.01  // Bounciness (not necessary for friction but can be adjusted)
	}
);

// Add the contact material to the world
world.addContactMaterial(wheelGroundContactMaterial);

//handle wheels model
var wheelsModel = []
for (let i = 0; i < wheelLocalPositions.length; i++) {
	const fbxLoaderWheel = new FBXLoader()
	fbxLoaderWheel.load(
		'assets/Wheel-R.fbx',
		(object) => {
			//create container
			var wheelObj = new THREE.Object3D();
			scene.add(wheelObj);  // Add the empty object to the scene

			wheelObj.add(object)

			let modelScale = 0.015;

			object.scale.set(modelScale, modelScale, modelScale)
			if (wheelLocalPositions[i].x < 0)
				object.rotation.z = Math.PI / 2
			else
				object.rotation.z = -Math.PI / 2

			wheelsModel.push(wheelObj);
		},
		(xhr) => {
			let progress = (xhr.loaded / xhr.total) * 100;
			// console.log(progress + '% loaded')
		},
		(error) => {
			console.log(error)
		}
	)
}

// Connecting rod (Cannon.js & Three.js)
const rod = new CANNON.Body({
	mass: 600,
	material: rodMaterial,
	shape: new CANNON.Box(new CANNON.Vec3(rodWidth / 2, rodHeight / 2, rodSize / 2)),
});
rod.position.set(POS_START.x, POS_START.y, POS_START.z);
rod.linearDamping = 0.35;

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
for (let i = 0; i < wheelLocalPositions.length; i++) {
	const offsetX = wheelLocalPositions[i].x < 0 ? offsetXWheel : -offsetXWheel;
	const offsetZ = i < 2 ? offsetZWheel : -offsetZWheel; //pos Z for front or back wheels

	const hinge = new CANNON.HingeConstraint(wheels[i], rod, {
		pivotA: new CANNON.Vec3(0, 0, 0),
		pivotB: new CANNON.Vec3(offsetX, offsetYWheel, offsetZ),
		axisA: axisWheel,
		axisB: axisRod,
	});

	world.addConstraint(hinge);
}

// Update Three.js objects from Cannon.js bodies
function updateMeshesFromBodies() {
	rodMesh.position.copy(rod.position);
	rodMesh.quaternion.copy(rod.quaternion);

	car3D.position.copy(rod.position);
	car3D.quaternion.copy(rod.quaternion);

	for (let i = 0; i < wheelsModel.length; i++) {
		wheelsModel[i].position.copy(wheels[i].position);
		wheelsModel[i].quaternion.copy(wheels[i].quaternion);
	}
}

var isGameOver = false;
var engineOn = false;
var gearPosition = 'D'
var showTutorial = true;

// Get the screen element
const controlScreen = document.getElementById('controlScreen');
const tutorialStep1 = document.getElementById('tutorialStep1');
const tutorialStep2 = document.getElementById('tutorialStep2');
const endScreen = document.getElementById('endScreen');
const completeScreen = document.getElementById('completeScreen');
const loadingScreen = document.getElementById('loadingScreen');
const completionDisplay = document.getElementById('completionDisplay');
var completion = completionDisplay.children[1];

// Additional setup for controlling car's back wheels
let isAccelerating = false;
let isBraking = false;
let isTurningLeft = false;
let isTurningRight = false;

// Listen for keyboard events
window.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp' || event.key === 'w') {
		isAccelerating = true;

		//update UI
		gearPosition = 'D';
		updateGearButton();
		tutorialStep2.style.display = 'none'; // Hide tutorial screen
	}
	if (event.key === 'ArrowDown' || event.key === 's') {
		isBraking = true;

		//update UI
		gearPosition = 'R';
		updateGearButton();
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
	// Apply torque to the back wheels (wheel 3 and wheel 4)
	if (isAccelerating) {
		for (let i = 0; i < wheels.length; i++) {
			if (i >= 2) {
				// Define a local torque vector (e.g., applying torque along the x-axis in local space)
				const localTorque = new CANNON.Vec3(0, -TORQUE_STRENGTH, 0);  // Apply along the local x-axis

				// Convert the local torque to world space using the body's quaternion
				const worldTorque = wheels[i].quaternion.vmult(localTorque);  // vmult() rotates the vector to world space

				// Apply the world space torque to the body
				wheels[i].applyTorque(worldTorque);
			}
		}
	}

	//controll braking/backward power
	let brakeStrength = BRAKE_STRENGTH; // Adjust this value to control braking force
	if (getCarSpeed().isForward)
		brakeStrength = BRAKE_STRENGTH;
	else
		brakeStrength = TORQUE_STRENGTH / 3;


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
var steeringAngleSpeed = 0; // Adjust this value to control the speed of steering

function applySteering() {
	// Apply angular velocity to the front wheels (index 0 and 1)
	for (let i = 0; i < 2; i++) { // Only apply to front wheels
		if (wheels[i]) {
			const wheel = wheels[i];

			// Get the current rotation quaternion of the wheel
			let currentRotation = wheel.quaternion.clone();

			if (isTurningLeft) {
				if (steeringAngleSpeed < STEERING_ANGLE)
					steeringAngleSpeed += STEERING_SPEED;
			} else if (isTurningRight) {
				if (steeringAngleSpeed > -STEERING_ANGLE)
					steeringAngleSpeed -= STEERING_SPEED;
			} else {
				steeringAngleSpeed = 0;
			}

			// Create the local rotation (rotate around the Y-axis)
			const localRotation = new CANNON.Quaternion();
			localRotation.setFromEuler(0, steeringAngleSpeed, 0);

			// Apply the local rotation to the wheel
			wheel.quaternion = localRotation.mult(currentRotation)
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

	updateObstaclesPos();

	if (parkingSpot) {
		var angleInDegrees = 0;
		var angleTolerance = 2;
		var distanceTolerance = 1.5;

		// console.log(car3D.position.distanceTo(parkingSpot.position));
		if (car3D.position.distanceTo(parkingSpot.position) < 5) {

			// Step 1: Convert the Euler rotations to quaternions
			const quaternion1 = new THREE.Quaternion().setFromEuler(car3D.rotation); // Convert object1's Euler rotation to quaternion
			const quaternion2 = new THREE.Quaternion().setFromEuler(parkingSpot.rotation); // Convert object2's Euler rotation to quaternion

			// Step 2: Calculate the angle between the two quaternions using the angleTo() method
			const angle = quaternion1.angleTo(quaternion2); // This gives the angle in radians

			// If you need the angle in degrees:
			angleInDegrees = THREE.MathUtils.radToDeg(angle);

			// console.log(`Rotation difference in radians: ${angle}`);
			// console.log(`Rotation difference in degrees: ${angleInDegrees}`);

			if (angleInDegrees < angleTolerance && car3D.position.distanceTo(parkingSpot.position) < distanceTolerance) {
				showGameOver(true);
			}

			completionDisplay.style.display = 'flex'
			completion.textContent = Math.floor(100 - Math.abs(angleInDegrees - angleTolerance)) + '%'
		}
	}

	// Sync ground mesh with the physics body
	groundMesh.quaternion.copy(groundBody.quaternion);
	renderer.render(scene, camera);
}

animate();

function showGameOver(success = false) {
	controlScreen.style.display = 'none'; // hide control canvas

	if (success)
		completeScreen.style.display = 'flex';
	else
		endScreen.style.display = 'flex';

	engineOn = false;
	updateEngineButton();

	isGameOver = true;
}


function updateEngineButton() {
	document.getElementById("img-engine-off").style.display = engineOn ? 'none' : 'block'
	document.getElementById("img-engine-on").style.display = engineOn ? 'block' : 'none'
}

window.toggleEngine = function () {
	engineOn = !engineOn;

	updateEngineButton();

	// console.log("engine= ", engineOn)

	//hide tutorial
	showTutorial = false;
	tutorialStep1.style.display = 'none'; // Hide tutorial screen
	tutorialStep2.style.display = 'block'; // Hide tutorial screen

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

var updateGearButton = function () {
	// document.getElementById("img-gear-drive").style.display = gearPosition == 'D' ? 'block' : 'none'
	// document.getElementById("img-gear-reverse").style.display = gearPosition == 'R' ? 'block' : 'none'
}
updateGearButton();

window.toggleGearPos = function () {
	if (gearPosition == 'D')
		gearPosition = 'R'
	else
		gearPosition = 'D'

	updateGearButton();
}


window.pressGas = function () {
	isAccelerating = true;

	tutorialStep2.style.display = 'none'; // Hide tutorial screen
}

window.pressBrake = function () {
	isBraking = true;
}

window.releasePedal = function () {
	isAccelerating = false;
	isBraking = false;
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


// Get the button element (btnAccelerate)
const btnAccelerate = document.getElementById('btnAccelerate');
const btnBrake = document.getElementById('btnBrake');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// Adding event listeners for both touch and mouse events
btnAccelerate.addEventListener('touchstart', pressGas);
btnAccelerate.addEventListener('mousedown', pressGas); // For desktop or mouse users

btnAccelerate.addEventListener('touchend', releasePedal);
btnAccelerate.addEventListener('mouseup', releasePedal); // For desktop or mouse users
btnAccelerate.addEventListener('touchcancel', releasePedal); // Handle touch cancel event (e.g., user swipes away)


btnBrake.addEventListener('touchstart', pressBrake);
btnBrake.addEventListener('mousedown', pressBrake); // For desktop or mouse users

btnBrake.addEventListener('touchend', releasePedal);
btnBrake.addEventListener('mouseup', releasePedal); // For desktop or mouse users
btnBrake.addEventListener('touchcancel', releasePedal); // Handle touch cancel event (e.g., user swipes away)


btnLeft.addEventListener('touchstart', pressLeft);
btnLeft.addEventListener('mousedown', pressLeft); // For desktop or mouse users

btnLeft.addEventListener('touchend', releaseArrow);
btnLeft.addEventListener('mouseup', releaseArrow); // For desktop or mouse users
btnLeft.addEventListener('touchcancel', releaseArrow); // Handle touch cancel event (e.g., user swipes away)


btnRight.addEventListener('touchstart', pressRight);
btnRight.addEventListener('mousedown', pressRight); // For desktop or mouse users

btnRight.addEventListener('touchend', releaseArrow);
btnRight.addEventListener('mouseup', releaseArrow); // For desktop or mouse users
btnRight.addEventListener('touchcancel', releaseArrow); // Handle touch cancel event (e.g., user swipes away)

// Prevent the context menu from appearing on right-click or long press
window.addEventListener('contextmenu', function (event) {
	event.preventDefault(); // Prevent the context menu
});

