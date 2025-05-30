import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// === THREE SETUP ===
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// === CAMERA SETUP ===
let targetCameraPosition = new THREE.Vector3();
let targetCameraLookAt = new THREE.Vector3();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(8, 5, -20);

// camera control
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.target.set(0, 2, -30)

// Limit the camera movement
orbit.minPolarAngle = Math.PI / 6; // Limit up angle (in radians)
orbit.maxPolarAngle = Math.PI / 2.2; // Limit ground (in radians)

// Limit zoom
orbit.minDistance = 8;
orbit.maxDistance = 20;


// === LIGHTS ===
// Add a light
const light = new THREE.AmbientLight(0x404040, 10);  // Soft white light
scene.add(light);

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight(0xffffff, 8);
directionalLight.position.set(10, 30, 0);
scene.add(directionalLight);

// === CANNON SETUP ===
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });

// === GROUND ===
const groundSize = 5000;
const groundShape = new CANNON.Box(new CANNON.Vec3(groundSize / 2, 0.5, groundSize / 2));
const groundBody = new CANNON.Body({ mass: 0 });
groundBody.addShape(groundShape);
groundBody.position.set(0, -0.5, 0);
world.addBody(groundBody);

/* const groundMat = new THREE.MeshStandardMaterial({ color: 0x999999 });
const groundGeo = new THREE.PlaneGeometry(5000, 5000); // Match Cannon size
const groundMesh = new THREE.Mesh(groundGeo, groundMat);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.receiveShadow = true;
scene.add(groundMesh); */

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

// === CHASSIS ===
const chassisShape = new CANNON.Box(new CANNON.Vec3(1.75, 1, 4));
const chassisBody = new CANNON.Body({ mass: 150 });
chassisBody.addShape(chassisShape);
chassisBody.position.set(0, 1.5, -30);
chassisBody.linearDamping = 0.15;
chassisBody.allowSleep = true;
chassisBody.sleepSpeedLimit = 0.1;  // below this speed = sleep
chassisBody.sleepTimeLimit = 1;     // after 1s of inactivity

world.addBody(chassisBody);


var chassisMesh = new THREE.Object3D();
scene.add(chassisMesh);  // Add the empty object to the scene

const fbxLoader = new FBXLoader()
fbxLoader.load(
	'assets/SUV.fbx',
	(object) => {
		chassisMesh.add(object)

		let modelScale = 0.02;

		object.scale.set(modelScale, modelScale, modelScale)
		// object.position.x = 0
		object.position.y = -1.5
		object.position.z = -0.6
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

// === RAYCAST VEHICLE ===
const vehicle = new CANNON.RaycastVehicle({
	chassisBody: chassisBody,         // The physics body representing the car chassis
	indexRightAxis: 0,                // Local x-axis (right)
	indexUpAxis: 1,                   // Local y-axis (up)
	indexForwardAxis: 2              // Local z-axis (forward)
});

// Define common wheel options for all four wheels
const wheelOptions = {
	radius: 0.825,                            // Radius of the wheel
	directionLocal: new CANNON.Vec3(0, -1, 0), // Direction of the suspension (downward in local space)
	suspensionStiffness: 25,                 // Stiffness of the suspension spring
	suspensionRestLength: 0.75,               // Rest length of the suspension (how much travel it has at rest)
	frictionSlip: 9,                         // Friction/grip of the tires (higher = more grip)
	dampingRelaxation: 2,                  // Suspension rebound damping (how quickly it returns to rest)
	dampingCompression: 2.4,                 // Damping when suspension is compressed (absorbs impact)
	maxSuspensionForce: 100000,              // Max force the suspension can apply
	rollInfluence: 0.125,                      // How much body roll affects the vehicle
	axleLocal: new CANNON.Vec3(-1, 0, 0),     // Direction the wheels spin (typically left in local space)
	maxSuspensionTravel: 0.3,                // Maximum distance suspension can travel from rest
	customSlidingRotationalSpeed: -30,       // Speed at which wheels spin when sliding
	useCustomSlidingRotationalSpeed: true    // Enable the custom sliding speed
};

// Add 4 wheels
const offsetX = 1.75;
const offsetZ = 2.75;
[
	new CANNON.Vec3(-offsetX, 0, offsetZ),
	new CANNON.Vec3(offsetX, 0, offsetZ),
	new CANNON.Vec3(-offsetX, 0, -offsetZ),
	new CANNON.Vec3(offsetX, 0, -offsetZ),
].forEach(pos => {
	wheelOptions.chassisConnectionPointLocal = pos.clone();
	vehicle.addWheel(wheelOptions);
});

vehicle.addToWorld(world);

// === WHEEL VISUALS ===
function createWheelVisual(_index) {
	//create container
	var container = new THREE.Object3D();

	const fbxLoaderWheel = new FBXLoader()
	fbxLoaderWheel.load(
		'assets/Wheel-R.fbx',
		(object) => {
			container.add(object)
			scene.add(container);  // Add the empty object to the scene

			let modelScale = 0.02;
			object.scale.set(modelScale, modelScale, modelScale)

			// console.log("test", _index);
			if (_index % 2 != 0)
				object.rotation.y = Math.PI;

		},
		(xhr) => {
			let progress = (xhr.loaded / xhr.total) * 100;
			// console.log(progress + '% loaded')
		},
		(error) => {
			console.log(error)
		}
	)


	return container;
}

const wheelMeshes = vehicle.wheelInfos.map((wheel, index) => {
	// console.log("test", index);
	const mesh = createWheelVisual(index);
	scene.add(mesh);
	return mesh;
});

// === CONTROLS ===
const keys = { w: false, s: false, a: false, d: false };

window.addEventListener('keydown', e => keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup', e => keys[e.key.toLowerCase()] = false);

// === ANIMATE ===
const clock = new THREE.Clock();
let currentSteering = 0;

// Additional setup for controlling car's back wheels
let isAccelerating = false;
let isBraking = false;
let isTurningLeft = false;
let isTurningRight = false;

function isCarFlippedAndStopped(body) {
	// 1. Check if the car is upside down
	const up = new CANNON.Vec3(0, 1, 0);                  // Local up vector
	const worldUp = body.quaternion.vmult(up);           // Convert to world space
	const upsideDown = worldUp.y < 0;

	// 2. Check if the car is not moving
	const speed = body.velocity.length();                // Get speed
	const isStopped = speed < 0.1;                       // Consider near zero

	return upsideDown && isStopped;
}


function animate() {
	requestAnimationFrame(animate);

	const delta = clock.getDelta();
	world.step(1 / 60, delta, 5);

	// === VEHICLE CONTROLS ===
	const force = 800;
	const maxSteer = 0.45;
	const steerSpeed = 5; // higher is faster response

	let inputForward = keys.w || isAccelerating;
	let inputBackward = keys.s || isBraking;
	let inputTurningLeft = keys.a || isTurningLeft;
	let inputTurningRight = keys.d || isTurningRight;

	let isAnyInput = inputForward || inputBackward || inputTurningLeft || inputTurningRight;

	if (engineOn) {

		// Engine force
		if (inputForward) {
			vehicle.applyEngineForce(-force, 2);
			vehicle.applyEngineForce(-force, 3);
		} else if (inputBackward) {
			vehicle.applyEngineForce(force, 2);
			vehicle.applyEngineForce(force, 3);
		} else {
			vehicle.applyEngineForce(0, 2);
			vehicle.applyEngineForce(0, 3);
		}


		// Steering (smooth)
		let targetSteering = 0;
		if (inputTurningLeft) {
			targetSteering = maxSteer;
		} else if (inputTurningRight) {
			targetSteering = -maxSteer;
		}
		currentSteering = THREE.MathUtils.lerp(currentSteering, targetSteering, delta * steerSpeed);
	}

	vehicle.setSteeringValue(currentSteering, 0);
	vehicle.setSteeringValue(currentSteering, 1);

	// === SYNC MESHES ===
	chassisMesh.position.copy(chassisBody.position);
	chassisMesh.quaternion.copy(chassisBody.quaternion);

	for (let i = 0; i < vehicle.wheelInfos.length; i++) {
		vehicle.updateWheelTransform(i);
		const t = vehicle.wheelInfos[i].worldTransform;
		wheelMeshes[i].position.copy(t.position);
		wheelMeshes[i].quaternion.copy(t.quaternion);
	}

	//suppose to help with wiggling
	if (chassisBody.velocity.length() < 0.5 && !isAnyInput) {
		for (let i = 0; i < 4; i++) {
			vehicle.applyEngineForce(0, i);
			vehicle.setSteeringValue(0, i);
		}
		// chassisBody.velocity.set(0, 0, 0);
		// chassisBody.angularVelocity.set(0, 0, 0);
		chassisBody.velocity.scale(0.9, chassisBody.velocity);
		chassisBody.angularVelocity.scale(0.9, chassisBody.angularVelocity);
	}

	if (isCarFlippedAndStopped(chassisBody)) {
		showGameOver();
		console.log("Car is upside down!");
	}


	orbit.target.copy(chassisMesh.position);
	orbit.update();



	// === SYNC ===
	checkCompletion();
	updateObstaclesPos();

	// === CAMERA FOLLOW ===
	if (engineOn) {
		// Smooth camera follow
		let followDistance = 12; // Distance behind the model
		let heightOffset = 6; // Height offset above the model

		// Calculate the target camera position (behind the model)
		const cameraOffset = new THREE.Vector3(0, heightOffset, -followDistance); // Local offset in model space
		cameraOffset.applyQuaternion(chassisMesh.quaternion); // Rotate to align with model's orientation
		targetCameraPosition.copy(chassisMesh.position).add(cameraOffset);

		// Interpolate (lerp) the camera's position for smooth movement
		camera.position.lerp(targetCameraPosition, 0.025);

		// Set the camera to look at the model
		targetCameraLookAt.copy(chassisMesh.position);
		if (isCarFlippedAndStopped(chassisBody)) {
			targetCameraLookAt.y -= 2; //add offset
		} else {
			targetCameraLookAt.y += 2; //add offset
		}

		camera.lookAt(targetCameraLookAt);
	}

	// === SPEEDOMETER ===
	const localForward = new CANNON.Vec3(0, 0, 1);
	const worldForward = chassisBody.quaternion.vmult(localForward);
	const forwardSpeed = chassisBody.velocity.dot(worldForward); // signed
	const speedKmh = Math.round(Math.abs(forwardSpeed) * 3.6);
	if(speedometer) speedometer.textContent = speedKmh + ' km/h'
	// console.log(`Speed: ${speedKmh} km/h`)

	renderer.render(scene, camera);
}

// === WALLS ===
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
		if (e.body == chassisBody) {
			showGameOver();
		}
	});

	// Create and add the mesh for visual representation
	const wallMesh = new THREE.Mesh(
		new THREE.BoxGeometry(wallData[i].w, wallData[i].h, wallData[i].d),
		new THREE.MeshBasicMaterial({ color: 0x0000ff })
	);

	// if (SHOW_HELPER)
	// 	scene.add(wallMesh);

	wallMeshes.push(wallMesh);
}

function updateWallMeshesPos() {
	for (let i = 0; i < wallBodies.length; i++) {
		// Sync position and rotation
		wallMeshes[i].position.copy(wallBodies[i].position);
		wallMeshes[i].quaternion.copy(wallBodies[i].quaternion);
	}
}
updateWallMeshesPos();

// === PARKING SPOT ===
var parkingSpot = new THREE.Object3D();
parkingSpot.position.set(35, 0, 35);
scene.add(parkingSpot);  // Add the empty object to the scene

const parkingLoader = new FBXLoader()
parkingLoader.load(
	'assets/ParkingSpot.fbx',
	(object) => {
		let scaleObj = 0.04;
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

function checkCompletion() {
	if (parkingSpot) {
		var angleInDegrees = 0;
		var angleTolerance = 2;
		var distanceTolerance = 1.5;

		if (chassisMesh.position.distanceTo(parkingSpot.position) < 5) {

			// Step 1: Convert the Euler rotations to quaternions
			const quaternion1 = new THREE.Quaternion().setFromEuler(chassisMesh.rotation); // Convert object1's Euler rotation to quaternion
			const quaternion2 = new THREE.Quaternion().setFromEuler(parkingSpot.rotation); // Convert object2's Euler rotation to quaternion

			// Step 2: Calculate the angle between the two quaternions using the angleTo() method
			const angle = quaternion1.angleTo(quaternion2); // This gives the angle in radians

			// If you need the angle in degrees:
			angleInDegrees = THREE.MathUtils.radToDeg(angle);

			// console.log(`Rotation difference in radians: ${angle}`);
			// console.log(`Rotation difference in degrees: ${angleInDegrees}`);

			if (angleInDegrees < angleTolerance && chassisMesh.position.distanceTo(parkingSpot.position) < distanceTolerance) {
				showGameOver(true);

				// Freeze physics
				chassisBody.velocity.set(0, 0, 0);
				chassisBody.angularVelocity.set(0, 0, 0);
				for (let i = 0; i < 4; i++) {
					vehicle.applyEngineForce(0, i);
					vehicle.setSteeringValue(0, i);
				}
			}

			completionDisplay.style.display = 'flex'
			completion.textContent = Math.floor(100 - Math.abs(angleInDegrees - angleTolerance)) + '%'
		}
	}
}

// === OBSTACLES ===
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
		if (e.body == chassisBody) {
			showGameOver();
		}
	});

	// Create and add the mesh for visual representation
	const obstacleMesh = new THREE.Mesh(
		new THREE.BoxGeometry(obstacleW, obstacleH, obstacleD),
		new THREE.MeshBasicMaterial({ color: 0x0000ff })
	);

	// if (SHOW_HELPER) scene.add(obstacleMesh);
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


animate();


//=== UI ===
var isGameOver = false;
var engineOn = false;
var gearPosition = 'D'
var showTutorial = true;

const controlScreen = document.getElementById('controlScreen');
const tutorialStep1 = document.getElementById('tutorialStep1');
const tutorialStep2 = document.getElementById('tutorialStep2');
const endScreen = document.getElementById('endScreen');
const completeScreen = document.getElementById('completeScreen');
const loadingScreen = document.getElementById('loadingScreen');
const completionDisplay = document.getElementById('completionDisplay');
var completion = completionDisplay.children[1];
const speedoMeterDisplay = document.getElementById('speedoMeterDisplay');
var speedometer = speedoMeterDisplay.children[1];
console.log(speedoMeterDisplay)

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

function showGameOver(success = false) {
	controlScreen.style.display = 'none'; // hide control canvas

	if (success)
		completeScreen.style.display = 'flex';
	else
		endScreen.style.display = 'flex';

	// engineOn = false;
	// updateEngineButton();

	isGameOver = true;
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