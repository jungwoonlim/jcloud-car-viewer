import * as THREE from 'three';

/** Renderer */
const canvas = document.querySelector("#renderer");
const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
  new THREE.TorusGeometry(1, 0.4, 16, 60),
  new THREE.MeshToonMaterial({
    color: "#2f2f2f",
  })
);
scene.add(mesh);

const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 6
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
})

const render = () => {
  renderer.render(scene, camera)
}

render();