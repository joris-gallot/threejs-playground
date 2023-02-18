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
// import * as dat from "dat.gui";

// const gui = new dat.GUI();
const { width, height } = {
  width: 600,
  height: 400,
} as const;

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const renderer = new WebGLRenderer({ canvas });
renderer.setSize(width, height);

const camera = new PerspectiveCamera(75, width / height);
camera.position.z = 3;
camera.position.x = 2;

const scene = new Scene();

const axesHelper = new AxesHelper(2);
scene.add(axesHelper);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: "red" });
const mesh = new Mesh(geometry, material);

mesh.rotateZ(Math.PI * 0.25);
mesh.scale.z = 2;
mesh.scale.x = 2;

camera.lookAt(mesh.position);

scene.add(mesh);

renderer.render(scene, camera);
