import "./style.css";

import {
  WebGLRenderer,
  Mesh,
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  PerspectiveCamera,
  AxesHelper,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import * as dat from "dat.gui";

// const gui = new dat.GUI();
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const renderer = new WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const scene = new Scene();

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const axesHelper = new AxesHelper(2);
scene.add(axesHelper);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: "red" });
const mesh = new Mesh(geometry, material);

camera.lookAt(mesh.position);

scene.add(mesh);

const tick = () => {
  controls.update();

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
