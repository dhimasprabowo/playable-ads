import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';


var showTutorial = true;
// Get the tutorial screen element
const tutorialScreen = document.getElementById('tutorialScreen');
const endScreen = document.getElementById('endScreen');
const loadingScreen = document.getElementById('loadingScreen');

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 1;
camera.position.z = 5;
camera.rotation.x = -0.05

// Select the canvas from the document
var canvReference = document.getElementById("gameCanvas");

// Then pass it to the renderer constructor
var renderer = new THREE.WebGLRenderer({
	antialias: true,
	canvas: canvReference
});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Append Renderer to DOM
document.body.appendChild(renderer.domElement);

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

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

const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

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
	'assets/Building.fbx',
	(object) => {
		object.traverse(function (child) {
			if (child.isMesh) {
				
				// child.material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });

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
		object.position.y = -68
		object.rotation.y = 3.13
	},
	(xhr) => {
		// console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
	},
	(error) => {
		console.log(error)
	}
)


var parkingSpot;
const parkingLoader = new FBXLoader()
parkingLoader.load(
	'assets/ParkingSpot.fbx',
	(object) => {
		object.traverse((child) => {
			if (child.isMesh) {

				/* const material = new THREE.MeshStandardMaterial({
					color: 0xFF7F00,
					transparent: true,  // Enable transparency
					opacity: 0.5       // Set opacity (0.0 is fully transparent, 1.0 is fully opaque)
				}); */

				// Gradient shader with opacity
				const vertexShader = `
				void main() {
				  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			  `;

				const fragmentShader = `
				uniform vec3 color1;
				uniform vec3 color2;
				uniform float opacityStart;
				uniform float opacityEnd;
		
				void main() {
				  // Create a gradient based on the fragment's position (Y-axis)
				  float gradient = gl_FragCoord.y / 600.0; // Adjust for screen height
		
				  // Interpolate colors
				  vec3 color = mix(color1, color2, gradient); 
		
				  // Interpolate opacity based on the same gradient
				  float opacity = mix(opacityStart, opacityEnd, gradient); 
		
				  gl_FragColor = vec4(color, opacity);
				}
			  `;

				// Create geometry (plane)
				const geometry = new THREE.PlaneGeometry(5, 5);

				// Create shader material with opacity
				const material = new THREE.ShaderMaterial({
					vertexShader: vertexShader,
					fragmentShader: fragmentShader,
					uniforms: {
						color1: { value: new THREE.Color(0xFF7F00) },
						color2: { value: new THREE.Color(0xFFFD00) },
						opacityStart: { value: 1.0 }, // Start opacity (fully opaque)
						opacityEnd: { value: 0.0 }    // End opacity (fully transparent)
					},
					transparent: true // Allow transparency
				});
				child.material = material;

				// child.material = new THREE.MeshStandardMaterial({ color: 0xFF7F00 });
				// child.material.map = new THREE.TextureLoader().load('assets/ParkingSpot.jpg');

				// Make sure the material is updated
				child.material.needsUpdate = true;


				// access and modify the materials here
				// console.log(child.material);  // Log the material of each mesh
			}
		});

		scene.add(object)

		object.scale.set(.04, .04, .04)
		object.position.set(0, -1, -20);

		parkingSpot = object;
	},
	(xhr) => {
		console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
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
	'assets/Car.fbx',
	(object) => {
		// object.traverse(function (child) {
		//     if ((child as THREE.Mesh).isMesh) {
		//         // (child as THREE.Mesh).material = material
		//         if ((child as THREE.Mesh).material) {
		//             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
		//         }
		//     }
		// })

		car3D.add(object)

		let modelScale = 0.02;

		object.scale.set(modelScale, modelScale, modelScale)
		object.position.x = 1.5
		object.position.y = -1
		object.position.z = -4
		object.rotation.z = 3.13

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


//engine status
var engineOn = false;
var isPressingGas = false;
var steerDirection = 0;

/// Movement and rotation state
let velocity = { forward: 0, rotation: 0 }; // Tracks forward/backward velocity and rotation speed


let targetCameraPosition = new THREE.Vector3();
let targetCameraLookAt = new THREE.Vector3();

// Render Loop
var render = function () {
	requestAnimationFrame(render);

	// Apply movement and rotation to the model
	if (car3D) {
		// Forward movement
		const forwardVector = new THREE.Vector3(0, 0, -1); // Forward direction in model space
		forwardVector.applyQuaternion(car3D.quaternion); // Rotate to match the model's orientation
		forwardVector.normalize(); // Ensure it's a unit vector

		car3D.position.addScaledVector(forwardVector, velocity.forward);

		// Rotation (around the Y-axis)
		car3D.rotation.y += velocity.rotation;


		if (parkingSpot) {
			// console.log(car3D.position.distanceTo(parkingSpot.position));
			if (car3D.position.distanceTo(parkingSpot.position) < 2) {
				// console.log("TRIGGER");
				endScreen.style.display = 'block'; // show end game

				engineOn = false;
				updateEngineButton();
			}
		}


		// Smooth camera follow
		const followDistance = 8; // Distance behind the model
		const heightOffset = 2; // Height offset above the model

		// Calculate the target camera position (behind the model)
		const cameraOffset = new THREE.Vector3(0, heightOffset, followDistance); // Local offset in model space
		cameraOffset.applyQuaternion(car3D.quaternion); // Rotate to align with model's orientation
		targetCameraPosition.copy(car3D.position).add(cameraOffset);

		// Interpolate (lerp) the camera's position for smooth movement
		camera.position.lerp(targetCameraPosition, 0.05);

		// Set the camera to look at the model
		targetCameraLookAt.copy(car3D.position);
		targetCameraLookAt.y += 2; //add offset
		camera.lookAt(targetCameraLookAt);

		if (engineOn) {
			if (isPressingGas) {
				if (velocity.forward < 0.1)
					velocity.forward += 0.0005; // Forward/backward movement
			}

			velocity.rotation = steerDirection * -0.005;
		}

		// braking
		if (!isPressingGas && velocity.forward > 0)
			velocity.forward -= 0.001;

		// console.log(velocity.forward)
	}

	// Render the scene
	renderer.render(scene, camera);
};

render();

var updateEngineButton = function () {
	if (engineOn)
		document.getElementById("img-engine").src = "/assets/engineOn.png";
	else
		document.getElementById("img-engine").src = "/assets/engineOff.png";
}

window.toggleEngine = function () {
	engineOn = !engineOn;

	updateEngineButton();

	// console.log("engine= ", engineOn)

	//hide tutorial
	showTutorial = false;
	tutorialScreen.style.display = 'none'; // Hide tutorial screen
}

window.pressGas = function () {
	isPressingGas = true;
	// console.log("isPressingGas= ", isPressingGas)
}

window.releaseGas = function () {
	isPressingGas = false;
	// console.log("isPressingGas= ", isPressingGas)
}

window.pressLeft = function () {
	steerDirection = -1;
}
window.pressRight = function () {
	steerDirection = 1;
}
window.releaseArrow = function () {
	steerDirection = 0;
}

document.addEventListener('mouseup', function (event) {
	releaseGas();
	releaseArrow();
});




