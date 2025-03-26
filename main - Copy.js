import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as Rapier from '@dimforge/rapier3d';

let world;
let cubeBody;
let cube;
let groundCollider;

async function init() {
	// Initialize Rapier physics world with gravity
	world = new Rapier.World({ x: 0, y: -9.81, z: 0 });

	// Create Three.js scene
	const scene = new THREE.Scene();
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 5, 10);
	camera.lookAt(new THREE.Vector3(0, 0, 0))
	const orbit = new OrbitControls(camera, renderer.domElement);

	// Limit the camera movement
	orbit.minPolarAngle = Math.PI / 6; // Limit up angle (in radians)
	orbit.maxPolarAngle = Math.PI / 2.2; // Limit ground (in radians)

	camera.position.set(5, 5, 10);
	orbit.update();

	// Create the Three.js cube
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);


	// Create the ground plane for the world (static body)
	const groundShape = new Rapier.Cuboid(50, 1, 50); // A large flat cuboid
	const groundDesc = Rapier.RigidBodyDesc.fixed().setTranslation(0, -3, 0); // Static body (doesn't move)
	const groundBody = world.createRigidBody(groundDesc);

	// Create a visual ground mesh in Three.js to make it visible
	const groundGeometry = new THREE.BoxGeometry(100, 2, 100); // A large box to represent the ground
	const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 }); // Gray material for ground
	const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
	groundMesh.position.set(0, -3, 0); // Position it where the physics body is
	scene.add(groundMesh); // Add the ground mesh to the Three.js scene

	// Create a collider for the ground in the physics world
	groundCollider = world.createCollider(Rapier.ColliderDesc.cuboid(50, 1, 50), groundBody);


	// Create a physics body for the cube
	const cubeShape = new Rapier.Cuboid(1, 1, 1); // Cube shape
	const rigidBodyDesc = Rapier.RigidBodyDesc.dynamic().setTranslation(0, 5, 0);
	cubeBody = world.createRigidBody(rigidBodyDesc);

	// Create a collider for the cube
	const cubeColliderDesc = Rapier.ColliderDesc.cuboid(1, 1, 1);
	world.createCollider(cubeColliderDesc, cubeBody);

	// Start the animation and physics loop
	function animate() {
		requestAnimationFrame(animate);

		// Step the physics world
		world.step();

		// Sync the Three.js cube position and rotation with Rapier's physics body
		const cubePosition = cubeBody.translation();
		const cubeRotation = cubeBody.rotation();

		cube.position.set(cubePosition.x, cubePosition.y, cubePosition.z);
		cube.rotation.set(cubeRotation.x, cubeRotation.y, cubeRotation.z);

		// Render the scene
		renderer.render(scene, camera);
	}

	animate();
}

init();


