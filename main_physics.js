import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as CANNON from 'cannon-es'

// Set up the Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(60, 30, 50);
orbit.update();

// Set up the Cannon.js world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0); // Gravity

// Ground - Static plane
const groundMaterial = new CANNON.Material();
groundMaterial.restitution = 0.6; // Add restitution for the ground material (bounciness)
const groundShape = new CANNON.Plane();
const groundBody = new CANNON.Body({
	mass: 0, // Static object
	position: new CANNON.Vec3(0, -1, 0), // Ensure it's slightly lowered
	material: groundMaterial
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up
groundBody.addShape(groundShape);
world.addBody(groundBody);

// Create a 3D ground plane for visualization (Three.js)
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMesh = new THREE.Mesh(groundGeometry, new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide }));
groundMesh.rotation.x = -Math.PI / 2; // Rotate it to lie flat
scene.add(groundMesh);




// Create a dynamic sphere (with physics)
const sphereMaterial = new CANNON.Material();
sphereMaterial.restitution = 0.8; // Add restitution for the sphere (bounciness)
const sphereShape = new CANNON.Sphere(1); // Radius of 1 unit
const sphereBody = new CANNON.Body({
	mass: 1, // This object has mass
	position: new CANNON.Vec3(0, 30, 0), // Ensure it's above the ground
	material: sphereMaterial
});
sphereBody.addShape(sphereShape);
world.addBody(sphereBody);

// Create a 3D sphere for visualization (Three.js)
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMesh = new THREE.Mesh(sphereGeometry, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
scene.add(sphereMesh);

// Function to update the physics world and Three.js scene
function update() {
	world.step(1 / 60); // Step the physics world forward

	// Update Three.js objects to match Cannon.js objects
	sphereMesh.position.copy(sphereBody.position);
	// sphereMesh.quaternion.copy(sphereBody.rotation);

	// Render the scene
	renderer.render(scene, camera);

	// Request the next animation frame
	requestAnimationFrame(update);
}

// Start the update loop
update();

// Handle window resizing
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
});
