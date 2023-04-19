import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/** Canvas */
const canvas = document.querySelector('#renderer');

/** Scene */
const scene = new THREE.Scene();

/** Camera */
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.25,
  100,
);
camera.position.set(0, 0.25, 0);

/** Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setClearColor(0xf2f2f2);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

/** Light */
const color = 0xffffff;
const intensity = 1;

/** Hemisphere Light */
const hemiLight = new THREE.HemisphereLight(color, color, intensity);
scene.add(hemiLight);

/** Directional Light */
const firstDirectLight = new THREE.DirectionalLight(color, intensity);
firstDirectLight.position.set(15, 100, -20);
scene.add(firstDirectLight);

const secondDirectLight = new THREE.DirectionalLight(color, intensity);
secondDirectLight.position.set(-55, 50, -20);
scene.add(secondDirectLight);

/** Model Loader */
const loader = new GLTFLoader();
loader.load("scene.gltf", (gltf) => {
  const { scene: model } = gltf;
  console.log(model)

  model.traverse((info) => {
    if (!info.isMesh) return;
    info.castShadow = true;
  });

  // model.scale.set(50, 50, 50);
  model.scale.set(2, 2, 2);
  model.position.set(0, 0, -0.5);
  scene.add(model);

  render();
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
});

const render = () => {
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
};
