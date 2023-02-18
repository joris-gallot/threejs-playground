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
  Clock,
} from "three";
// import * as dat from "dat.gui";
import gsap from "gsap";

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

scene.add(group);

gsap.to(group.position, { duration: 1, delay: 1, x: 2 });

// const clock = new Clock();

const tick = () => {
  // const elapsedTime = clock.getElapsedTime();

  // const [firstCube, secondCube, thirdCube] = group.children;

  // if (secondCube) {
  //   secondCube.position.x = Math.cos(elapsedTime);
  //   secondCube.position.y = Math.sin(elapsedTime);
  // }

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
