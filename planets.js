import * as THREE from 'https://unpkg.com/three@0.152.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';

let scene;
let camera;
let renderer;


function main()
{
    const canvas = document.querySelector('#blackEarth');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true,});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.autoClear = false;
    renderer.setClearColor(0x00000, 0.0);

    const earthgeometry = new THREE.SphereGeometry(0.6,32,32);

    const eatrhmaterial = new THREE.MeshStandardMaterial({
        roughness: 1,
        metalness: 0,
        map: new THREE.TextureLoader().load('img-video/textures/basecolor.png'),
        bumpMap: new THREE.TextureLoader().load('img-video/textures/height.png'),
        bumpScale: 0.3,
    });

    const earthmesh = new THREE.Mesh(earthgeometry,eatrhmaterial);

    scene.add(earthmesh);

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientlight);

    const pointerlight =  new THREE.PointLight(0xffffff,0.9);

    pointerlight.position.set(5,3,5);
    scene.add(pointerlight);  

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const animate = () =>{
        requestAnimationFrame(animate);
        earthmesh.rotation.y -= 0.006;
        controls.update(); // Обновление контролов в каждом кадре
        renderer.render(scene, camera);
        render();
    }

    const render = () => {
        renderer.render(scene,camera);
    }
    animate();
}
window.onload = main;