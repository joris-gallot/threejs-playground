import "./style.css";

import {
  WebGLRenderer,
  Mesh,
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  PerspectiveCamera,
  AxesHelper,
  Group,
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

const scene = new Scene();

const axesHelper = new AxesHelper(2);
scene.add(axesHelper);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: "red" });

const group = new Group();
const xPositions = [-1.5, 0, 1.5];

for (let i = 0; i < xPositions.length; i++) {
  const mesh = new Mesh(geometry, material);

  mesh.translateX(xPositions[i]);
  mesh.scale.y = 2;

  group.add(mesh);
}

group.rotateZ(Math.PI * 0.25);

scene.add(group);

renderer.render(scene, camera);
