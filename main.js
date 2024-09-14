import * as THREE from 'three';

//UPDATE: import Orbit
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";


var renderer, scene, camera, controls;

init();
animate();

function init() {

  // set the scene size
  var WIDTH = 500, HEIGHT = 500;

  // set some camera attributes
  var VIEW_ANGLE = 45, ASPECT = WIDTH / HEIGHT, NEAR = 1, FAR = 1000;

  // renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // scene
  scene = new THREE.Scene();

  // camera
  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  camera.position.z = 200;
  //camera.position.set( 20, 20, 20 );

  // controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('mousemove', renderer);
  controls.autoRotate = true;

  // create a point light
  var areaLight = new THREE.RectAreaLight(0xffffff, 1);

  // ambient
  //scene.add( new THREE.AmbientLight( 0x222222 ) );
  scene.add(areaLight);

  // light
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(20, 20, 0);
  scene.add(light);

  // axes
  //scene.add( new THREE.AxesHelper( 20 ) );

  var radius = 50, segments = 32, rings = 32;
  var sphereMaterial = new THREE.MeshNormalMaterial({ color: 0xffffff });
  //create a new mesh with sphere geometry -
  // we will cover the sphereMaterial next!
  var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, rings),
    sphereMaterial);

  scene.add(sphere);


}

function animate() {

  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);

}