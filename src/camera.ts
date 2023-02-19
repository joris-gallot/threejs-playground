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
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";

// const gui = new dat.GUI();
const { width, height } = {
  width: 600,
  height: 400,
} as const;

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / width - 0.5;
  cursor.y = -(event.clientY / height - 0.5);
});

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const renderer = new WebGLRenderer({ canvas });
renderer.setSize(width, height);

const camera = new PerspectiveCamera(75, width / height);
camera.position.z = 3;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const scene = new Scene();

const axesHelper = new AxesHelper(2);
scene.add(axesHelper);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: "red" });
const mesh = new Mesh(geometry, material);

camera.lookAt(mesh.position);

scene.add(mesh);

const tick = () => {
  // camera.position.x = cursor.x * 5;
  // camera.position.y = cursor.y * 5;

  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  // camera.position.y = cursor.y * 3;
  // camera.lookAt(mesh.position);

  controls.update();

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
