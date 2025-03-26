// Import Three.js and Cannon.js
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
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

const gridHelper = new THREE.GridHelper(50, 50);
scene.add(gridHelper);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Create ground
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC, side: THREE.DoubleSide });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.rotation.x = -Math.PI / 2;
scene.add(groundMesh);

// Cannon.js setup
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0); // Gravity
// world.gravity.set(0, 0, 0); // Gravity

// Ground body
const groundBody = new CANNON.Body({
	mass: 0,
	shape: new CANNON.Plane(),
	position: new CANNON.Vec3(0, 0, 0)
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Directly set the rotation of the ground body
world.addBody(groundBody);

// Load texture for the wheels
const textureLoader = new THREE.TextureLoader();
const wheelTexture = textureLoader.load('assets/Point_Pole.png'); // Load the texture

// Create materials for wheels and rods
const rodWidth = 2;
const rodHeight = 0.3;
const rodSize = 4;
const wheelMaterial = new CANNON.Material();
const rodMaterial = new CANNON.Material();
const wheelThickness = 0.3;
const wheelRadius = 0.5;
const offsetXWheel = rodWidth / 2 + 0.25;
const offsetYWheel = -0.25;
const offsetZWheel = 1.75;
const posYStart = 3;

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
		mass: 10,
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

// Connecting rod (Cannon.js & Three.js)
const rod = new CANNON.Body({
	mass: 200,
	material: rodMaterial,
	shape: new CANNON.Box(new CANNON.Vec3(rodWidth, rodHeight, rodSize)),
});
rod.position.set(0, posYStart, 0);
world.addBody(rod);

const rodMesh = new THREE.Mesh(
	new THREE.BoxGeometry(rodWidth, rodHeight, rodSize),
	new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
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
}

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
	const torqueStrength = 200; // Adjust this value to increase or decrease the torque
	const brakeStrength = 500; // Adjust this value to control braking force

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
	const steeringAngleSpeed = 0.12; // Adjust this value to control the speed of steering

	// Apply angular velocity to the front wheels (index 0 and 1)
	for (let i = 0; i < 2; i++) { // Only apply to front wheels
		if (wheels[i]) {
			const wheel = wheels[i];

			// Preserve current angular velocity along X and Z axes
			// const currentAngularVelocity = wheel.angularVelocity;

			// Get the current rotation quaternion of the wheel
			let currentRotation = wheel.quaternion.clone();

			if (isTurningLeft) {
				// Apply angular velocity to steer left (positive angular velocity around Y-axis)
				// wheel.angularVelocity.set(currentAngularVelocity.x, currentAngularVelocity.y+steeringAngleSpeed, currentAngularVelocity.z);
				// Create the local rotation (rotate around the Y-axis)
				const localRotation = new CANNON.Quaternion();
				localRotation.setFromEuler(0, steeringAngleSpeed, 0);

				// Apply the local rotation to the wheel
				wheel.quaternion = localRotation.mult(currentRotation)
			} else if (isTurningRight) {
				// Apply angular velocity to steer right (negative angular velocity around Y-axis)
				// wheel.angularVelocity.set(currentAngularVelocity.x, currentAngularVelocity.y-steeringAngleSpeed, currentAngularVelocity.z);
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
	/* if (isTurningLeft) {
		rod.quaternion.setFromEuler(0, Math.PI / 2, 0);
	}
	if (isTurningRight) {
		rod.quaternion.setFromEuler(0, -Math.PI / 2, 0);
	} */
}


// Modify the render loop to include applying torque and steering
function animate() {
	requestAnimationFrame(animate);
	world.step(1 / 60); // Step the physics world forward

	applyTorqueToBackWheels(); // Apply torque when accelerating or braking
	applySteering(); // Apply steering when turning

	updateMeshesFromBodies(); // Sync meshes with physics bodies

	// Sync ground mesh with the physics body
	groundMesh.quaternion.copy(groundBody.quaternion);
	renderer.render(scene, camera);
}

animate();
