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
const rodHeight = 0.2;
const rodSize = 4;
const wheelMaterial = new CANNON.Material();
const rodMaterial = new CANNON.Material();
const wheelThickness = 0.3;
const wheelRadius = 0.5;
const offsetXWheel = rodWidth / 2 + 0.35;
const offsetZWheel = 1.85;

// Number of wheels and positions
const wheelPositions = [
	{ x: -offsetXWheel, y: 1, z: offsetZWheel }, // Position for wheel 1
	{ x: offsetXWheel, y: 1, z: offsetZWheel },   // Position for wheel 2
	{ x: -offsetXWheel, y: 1, z: -offsetZWheel },   // Position for wheel 3
	{ x: offsetXWheel, y: 1, z: -offsetZWheel },   // Position for wheel 4
];

// Create arrays for wheels and wheel meshes
const wheels = [];
const wheelMeshes = [];

// Loop to create wheels and wheel meshes
for (let i = 0; i < wheelPositions.length; i++) {
	// Cannon.js wheel creation
	const wheel = new CANNON.Body({
		mass: 1,
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
	mass: 1,
	material: rodMaterial,
	shape: new CANNON.Box(new CANNON.Vec3(rodWidth, rodHeight, rodSize)),
});
rod.position.set(0, 1, 0);
world.addBody(rod);

const rodMesh = new THREE.Mesh(
	new THREE.BoxGeometry(rodWidth, rodHeight, rodSize),
	new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
scene.add(rodMesh);

// Hinge Joints for the wheels
const axis = new CANNON.Vec3(0, 1, 0); // Axis of rotation (vertical axis)
const axis2 = new CANNON.Vec3(1, 0, 0); // Axis of rotation (horizontal axis)

// Loop to create hinge joints for each wheel
for (let i = 0; i < wheelPositions.length; i++) {
	const offsetX = wheelPositions[i].x > 0 ? offsetXWheel : -offsetXWheel;
	const hinge = new CANNON.HingeConstraint(wheels[i], rod, {
		pivotA: new CANNON.Vec3(0, 0, 0),
		pivotB: new CANNON.Vec3(offsetX, 0, wheelPositions[i].z),
		axisA: axis,
		axisB: axis2,
	});
	world.addConstraint(hinge);
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
	const torqueStrength = 5; // Adjust this value to increase or decrease the torque
	const brakeStrength = 20; // Adjust this value to control braking force

	// Apply torque to the back wheels (wheel 3 and wheel 4)
	if (isAccelerating) {
		for (let i = 0; i < wheels.length; i++) {
			if (i >= 2) {
				// Apply forward torque (along the X-axis of the wheel)
				wheels[i].applyTorque(new CANNON.Vec3(torqueStrength, 0, 0)); // Back left wheel
			}
		}
	}

	// Apply brake (negative torque)
	if (isBraking) {
		for (let i = 0; i < wheels.length; i++) {
			if (i >= 2) {
				// Apply backward torque (negative along the X-axis of the wheel)
				wheels[i].applyTorque(new CANNON.Vec3(-brakeStrength, 0, 0)); // Back left wheel
			}
		}
	}
}

// Function to apply steering to the front wheels (rotate front wheels mesh only)
/* function applySteering() {
	const steeringAngle = 0.5; // Adjust the angle for sharper or smoother turning

	if (isTurningLeft || isTurningRight) {
		const steeringDirection = isTurningLeft ? 1 : -1; // Determine the turn direction

		for (let i = 0; i < wheels.length; i++) {
			if (i < 2) {
				wheels[i].quaternion.set(wheels[i].quaternion.x, wheels[i].quaternion.y, wheels[i].quaternion.z, wheels[i].quaternion.w);
			}
		}
	} else {
		// Reset the front wheels to face forward when no turning
		for (let i = 0; i < wheels.length; i++) {
			if (i < 2) {
				wheels[i].quaternion.set(wheels[i].quaternion.x, wheels[i].quaternion.y, wheels[i].quaternion.z, wheels[i].quaternion.w);
			}
		}
	}
} */


// Modify the render loop to include applying torque and steering
function animate() {
	requestAnimationFrame(animate);
	world.step(1 / 60); // Step the physics world forward

	applyTorqueToBackWheels(); // Apply torque when accelerating or braking
	// applySteering(); // Apply steering when turning

	updateMeshesFromBodies(); // Sync meshes with physics bodies

	// Sync ground mesh with the physics body
	groundMesh.quaternion.copy(groundBody.quaternion);
	renderer.render(scene, camera);
}

animate();
