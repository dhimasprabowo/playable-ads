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
// Place the camera slightly further back from the car and set it above the car
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
world.gravity.set(0, -9.82, 0);
// world.gravity.set(0, 0, 0);

// Fix the ground body orientation
const groundBody = new CANNON.Body({
	mass: 0,
	shape: new CANNON.Plane(),
	position: new CANNON.Vec3(0, 0, 0)
});

// Set the orientation of the ground body to match the rotated plane
// groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Directly set the rotation of the ground body
groundBody.quaternion.setFromEuler(-1.5, 0, 0);

world.addBody(groundBody);


// Create car body
const carGeometry = new THREE.BoxGeometry(2, 1, 4);
const carMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const carMesh = new THREE.Mesh(carGeometry, carMaterial);
scene.add(carMesh);

// pos Y start for car and wheels
let posYStart = 2;

// wheel size
let wheelThickness = 0.5;
let wheelRadius = 0.5;

// Load texture for the wheels
const textureLoader = new THREE.TextureLoader();
const wheelTexture = textureLoader.load('assets/Point_Pole.png'); // Load the texture

// Create wheels with texture
const wheelGeometry = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelThickness, 32);
const wheelMaterial = new THREE.MeshBasicMaterial({ map: wheelTexture }); // Apply texture to wheels

const wheels = [];
for (let i = 0; i < 4; i++) {
	const wheelMesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
	wheelMesh.rotation.z = Math.PI / 2;
	wheels.push(wheelMesh);
	scene.add(wheelMesh);
}

// Position wheels
let offsetXWheel = 1.5;
wheels[0].position.set(-offsetXWheel, posYStart, 2);
wheels[1].position.set(offsetXWheel, posYStart, 2);
wheels[2].position.set(-offsetXWheel, posYStart, -2);
wheels[3].position.set(offsetXWheel, posYStart, -2);

// Adjust the car's initial position slightly higher to avoid collision
const carBody = new CANNON.Body({
	mass: 500,
	position: new CANNON.Vec3(0, posYStart, 0), // Set Y position higher to avoid bouncing
	shape: new CANNON.Box(new CANNON.Vec3(1, 0.5, 2))
});
world.addBody(carBody);

const wheelBodies = [];
for (let i = 0; i < 4; i++) {
	const wheelBody = new CANNON.Body({
		mass: 5,
		position: new CANNON.Vec3(wheels[i].position.x, wheels[i].position.y, wheels[i].position.z),
		shape: new CANNON.Cylinder(wheelRadius, wheelRadius, wheelThickness, 32),
		material: new CANNON.Material({ friction: 0.8 })
	});
	wheelBody.quaternion.setFromEuler(0, 0, -Math.PI / 2); // Directly set the rotation of the ground body
	world.addBody(wheelBody);
	wheelBodies.push(wheelBody);

	// Connect wheels to car body
	const joint = new CANNON.PointToPointConstraint(
		carBody, 
		new CANNON.Vec3(wheels[i].position.x, -0.5, wheels[i].position.z), 
		wheelBody, 
		new CANNON.Vec3(0, 0, 0));
	world.addConstraint(joint);

	// Connect wheels to car body using HingeConstraint
	/* const hinge = new CANNON.HingeConstraint(carBody, wheelBody, {
		pivotA: new CANNON.Vec3(wheels[i].position.x, -0.5, wheels[i].position.z), // Pivot on the car
		pivotB: new CANNON.Vec3(0, 0, 0), // Pivot on the wheel
		axisA: new CANNON.Vec3(0, 1, 0), // This is the vertical axis of the car (used to define the pivot point)
		axisB: new CANNON.Vec3(0, 0, 1) // This is the axis of rotation for the wheel (around Z axis)
	});
	world.addConstraint(hinge); */
}


// Global variables for movement and speed
const movement = {
	forward: false,
	backward: false,
	left: false,
	right: false,
};

const carSpeed = 300; // Force applied for acceleration
const turnSpeed = 1000; // Speed at which the car turns (applied as torque)

// Key event listeners
document.addEventListener('keydown', (event) => {
	if (event.key === 'w' || event.key === 'W') {
		movement.forward = true;
	}
	if (event.key === 's' || event.key === 'S') {
		movement.backward = true;
	}
	if (event.key === 'a' || event.key === 'A') {
		movement.left = true;
	}
	if (event.key === 'd' || event.key === 'D') {
		movement.right = true;
	}
});

document.addEventListener('keyup', (event) => {
	if (event.key === 'w' || event.key === 'W') {
		movement.forward = false;
	}
	if (event.key === 's' || event.key === 'S') {
		movement.backward = false;
	}
	if (event.key === 'a' || event.key === 'A') {
		movement.left = false;
	}
	if (event.key === 'd' || event.key === 'D') {
		movement.right = false;
	}
});

// Function to apply force and torque to the wheels
function applyWheelForces() {
	const forwardForce = new CANNON.Vec3(0, 0, 0);
	const steeringTorque = new CANNON.Vec3(0, 0, 0);

	// Apply forward/backward forces to the rear wheels (usually rear-wheel drive)
	if (movement.forward) {
		forwardForce.z = carSpeed; // Move forward (negative Z direction)
	}
	if (movement.backward) {
		forwardForce.z = -carSpeed; // Move backward (positive Z direction)
	}

	// Apply torque for steering to the front wheels
	if (movement.left) {
		steeringTorque.y = turnSpeed; // Apply torque to rotate counterclockwise (left)
	}
	if (movement.right) {
		steeringTorque.y = -turnSpeed; // Apply torque to rotate clockwise (right)
	}

	// Apply force and torque to rear wheels (for forward/backward motion)
	for (let i = 2; i < 4; i++) {
		wheelBodies[i].applyForce(forwardForce, wheelBodies[i].position);
	}

	// Apply steering torque to the front wheels
	for (let i = 0; i < 2; i++) {
		wheelBodies[i].applyTorque(steeringTorque);
	}
}

function animate() {
	requestAnimationFrame(animate);

	// Update physics world
	world.step(1 / 60);

	// Apply forces and torque to the wheels for movement and steering
	applyWheelForces();

	// Sync ground mesh with the physics body
	groundMesh.quaternion.copy(groundBody.quaternion);

	// Sync Three.js meshes with the physics bodies
	carMesh.position.copy(carBody.position);
	carMesh.quaternion.copy(carBody.quaternion);

	// Sync wheel meshes with wheel physics bodies
	for (let i = 0; i < 4; i++) {
		wheels[i].position.copy(wheelBodies[i].position);
		wheels[i].quaternion.copy(wheelBodies[i].quaternion);
	}

	renderer.render(scene, camera);
}


animate();
