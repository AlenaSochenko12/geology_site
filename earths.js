import * as THREE from 'https://unpkg.com/three@0.152.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';

let scene;
let camera;
let renderer;

let hide1 = "";
let hide2 = "";
let hide3 = "";
let hide4 = "";
let textureMap = "";
let textureBump = "";
let textureAO = "";
let textureMetall = "";
let textureNormal = "";
let textureRoughness = "";
let name = "";

document.addEventListener('DOMContentLoaded', (event) => {
    const button1 = document.getElementById('myButton1');
    const textButton1 = document.getElementById('textButton1');
    const button2 = document.getElementById('myButton2');
    const textButton2 = document.getElementById('textButton2');
    const button3 = document.getElementById('myButton3');
    const textButton3 = document.getElementById('textButton3');
    const button4 = document.getElementById('myButton4');
    const textButton4 = document.getElementById('textButton4');
    let active = 0;

    const objects = document.querySelectorAll('.article');
    const content = document.getElementById('content');
    const objectInfo = document.getElementById('object-info');
    const titleContent = document.getElementById('title-content');
    const infoTime = document.getElementById('info-time');
    const infoContent = document.getElementById('info-content');
    const backButton = document.getElementById('back-button');

    function showObjectInfo(title, time, text) {
      titleContent.textContent = `${title}`;
      infoTime.textContent = `${time}`;
      infoContent.innerHTML = `<p>${text}</p>`;
      objectInfo.style.display = 'block';
      content.style.display = 'none';
    }

    objects.forEach(object => {
      object.addEventListener('click', function() {
        const objectTitle = this.getAttribute('data-title');
        const objectTime = this.getAttribute('data-time');
        const objectText = object.querySelector('.article-text').innerHTML;
        showObjectInfo(objectTitle, objectTime, objectText);
      });
    });

    backButton.addEventListener('click', function() {
      objectInfo.style.display = 'none';
      content.style.display = 'block';
    });

    const activeButton = (activeButton, inactiveButton1, inactiveButton2, inactiveButton3, activeText, inactiveText1, inactiveText2, inactiveText3) => {
        activeButton.classList.add('clicked-btn');
        inactiveButton1.classList.remove('clicked-btn');
        inactiveButton2.classList.remove('clicked-btn');
        inactiveButton3.classList.remove('clicked-btn');
        inactiveText1.classList.remove('clicked-text');
        inactiveText1.classList.add('btn-format');
        inactiveText2.classList.remove('clicked-text');
        inactiveText2.classList.add('btn-format');
        inactiveText3.classList.remove('clicked-text');
        inactiveText3.classList.add('btn-format');
        activeText.classList.remove('btn-format');
        activeText.classList.add('clicked-text');
        return active;
    }
    const inactiveButton = (activeButton, activeText) => {
        activeButton.classList.remove('clicked-btn');
        activeText.classList.remove('clicked-text');
        activeText.classList.add('btn-format');
        return active;
    }
    
    function first() {
        if (!active) {
            activeButton(button1, button2, button3, button4, textButton1, textButton2, textButton3, textButton4);
            active = 1;
            $(`#${hide1}`).slideToggle('slow');
        } 
        else if (active == 1) {
            inactiveButton(button1, textButton1);
            active = 0;
            $(`#${hide1}`).slideToggle('slow');
        }
        else {
            $(`#${hide2}`).hide(); 
            $(`#${hide3}`).hide(); 
            $(`#${hide4}`).hide(); 
            objectInfo.style.display = 'none';
            content.style.display = 'block';
            inactiveButton(button2, textButton2);
            inactiveButton(button3, textButton3);
            inactiveButton(button4, textButton4);
            activeButton(button1, button2, button3, button4, textButton1, textButton2, textButton3, textButton4);
            active = 1;
            $(`#${hide1}`).slideToggle('slow');
        }
    }
    function second() {
        if (!active) {
            activeButton(button2, button1, button3, button4, textButton2, textButton1, textButton3, textButton4);
            active = 2;
            $(`#${hide2}`).slideToggle('slow');
        } 
        else if (active == 2) {
            inactiveButton(button2, textButton2);
            active = 0;
            $(`#${hide2}`).slideToggle('slow');
        }
        else {
            $(`#${hide1}`).hide(); 
            $(`#${hide3}`).hide(); 
            $(`#${hide4}`).hide(); 
            objectInfo.style.display = 'none';
            content.style.display = 'block';
            inactiveButton(button1, textButton1);
            inactiveButton(button3, textButton3);
            inactiveButton(button4, textButton4);
            activeButton(button2, button1, button3, button4, textButton2, textButton1, textButton3, textButton4);
            active = 2;
            $(`#${hide2}`).slideToggle('slow');
        }
    }

    function third() {
        if (!active) {
            activeButton(button3, button1, button2, button4, textButton3, textButton1, textButton2, textButton4);
            active = 3;
            $(`#${hide3}`).slideToggle('slow');
        } 
        else if (active == 3) {
            inactiveButton(button3, textButton3);
            active = 0;
            $(`#${hide3}`).slideToggle('slow');
        }
        else {
            $(`#${hide1}`).hide(); 
            $(`#${hide2}`).hide(); 
            $(`#${hide4}`).hide(); 
            objectInfo.style.display = 'none';
            content.style.display = 'block';
            inactiveButton(button1, textButton1);
            inactiveButton(button2, textButton2);
            inactiveButton(button4, textButton4);
            activeButton(button3, button1, button2, button4, textButton3, textButton1, textButton2, textButton4);
            active = 3;
            $(`#${hide3}`).slideToggle('slow');
        }
    }

    function fourth() {
        if (!active) {
            activeButton(button4, button1, button2, button3, textButton4, textButton1, textButton2, textButton3);
            active = 4;
            blackEarth(textureMap, textureBump);
            $(`#${hide4}`).slideToggle('slow');
        } 
        else if (active == 4) {
            inactiveButton(button4, textButton4);
            active = 0;
            $(`#${hide4}`).slideToggle('slow');
        }
        else {
            $(`#${hide1}`).hide(); 
            $(`#${hide2}`).hide(); 
            $(`#${hide3}`).hide(); 
            objectInfo.style.display = 'none';
            content.style.display = 'block';
            inactiveButton(button1, textButton1);
            inactiveButton(button2, textButton2);
            inactiveButton(button3, textButton3);
            activeButton(button4, button1, button2, button3, textButton4, textButton1, textButton2, textButton3);
            active = 4;
            blackEarth(textureMap, textureBump);
            $(`#${hide4}`).slideToggle('slow');
        }
    }

    const hideObjects = () => {
        inactiveButton(button1, textButton1);
        inactiveButton(button2, textButton2);
        inactiveButton(button3, textButton3);
        inactiveButton(button4, textButton4);
        if (hide1) {
            $(`#${hide1}`).hide(); 
            $(`#${hide2}`).hide(); 
            $(`#${hide3}`).hide(); 
            $(`#${hide4}`).hide(); 
            objectInfo.style.display = 'none';
            content.style.display = 'block';
        }
        active = 0;
    }
    const initHiddens = (video, articles, photos, earth) => {
        hide1 = video;
        hide2 = articles;
        hide3 = photos;
        hide4 = earth;
    }

    const createTexture = (source1, source2, source3, source4, source5, source6, sourceName) => {
        textureMap = source1;
        textureBump = source2;
        textureAO = source3;
        textureMetall = source4;
        textureNormal = source5;
        textureRoughness = source6;
        name = sourceName;
        return { textureMap, textureBump, textureAO, textureMetall, textureNormal, textureRoughness, name };
    }
    function blackEarth(textureMap, textureBump){
        console.log(name);
        const canvas = document.querySelector(name);

        const width = 1000;
        const height = 600;
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.z = 2;
        scene.add(camera);

        renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true,});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        renderer.autoClear = false;

        const earthgeometry = new THREE.SphereGeometry(0.6,32,32);

        const eatrhmaterial = new THREE.MeshStandardMaterial({
            roughness: 1,
            metalness: 0,
            color: new THREE.Color(0xffffff),
            map: new THREE.TextureLoader().load(textureMap),
            bumpMap: new THREE.TextureLoader().load(textureBump),
            bumpScale: 1,     
            aoMap: new THREE.TextureLoader().load(textureAO),
            metalnessMap: new THREE.TextureLoader().load(textureMetall),
            normalMap: new THREE.TextureLoader().load(textureNormal),
            roughnessMap: new THREE.TextureLoader().load(textureRoughness),
        });

        const earthmesh = new THREE.Mesh(earthgeometry,eatrhmaterial);

        scene.add(earthmesh);

        const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientlight);

        const pointerlight =  new THREE.PointLight(0xffffff,0.5);

        pointerlight.position.set(5,3,5);
        scene.add(pointerlight);  

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.update();

        const render = () => {
            renderer.render(scene,camera);
        }

        const animate = () =>{
            requestAnimationFrame(animate);
            earthmesh.rotation.y -= 0.006;
            controls.update();
            renderer.render(scene, camera);
            render();
        }

        animate();
    }

    button1.addEventListener("click", first);
    button2.addEventListener("click", second);
    button3.addEventListener("click", third);
    button4.addEventListener("click", fourth);
    createTexture("img-video/textures/basecolor1.png", 'img-video/textures/height1.png', 'img-video/textures/ambientocclusion1.png', 'img-video/textures/metallic1.png', 'img-video/textures/normal1.png', 'img-video/textures/roughness1.png', '#blackEarth');

    initHiddens("hide1", "hide2", "hide3", "blackEarth1"); 
    function getSelectValue(e){
        let selectedValue = e.target.value;
        if (selectedValue === "black") {
            hideObjects();
            initHiddens("hide1", "hide2", "hide3", "blackEarth1"); 
            createTexture("img-video/textures/basecolor1.png", 'img-video/textures/height1.png', 'img-video/textures/ambientocclusion1.png', 'img-video/textures/metallic1.png', 'img-video/textures/normal1.png', 'img-video/textures/roughness1.png', '#blackEarth');
        } else if (selectedValue === "blue") {
            hideObjects();
            initHiddens("hide4", "hide5", "hide6", "blueEarth1");
            createTexture("img-video/textures/basecolor2.png", 'img-video/textures/height2.png', 'img-video/textures/ambientocclusion2.png', 'img-video/textures/metallic2.png', 'img-video/textures/normal2.png', 'img-video/textures/roughness2.png', '#blueEarth');
        } else if (selectedValue === "gray") {
            hideObjects();
            initHiddens("hide7", "hide8", "hide9", "grayEarth1");
            createTexture("img-video/textures/basecolor3.png", 'img-video/textures/height3.png', 'img-video/textures/ambientocclusion3.png', 'img-video/textures/metallic3.png', 'img-video/textures/normal3.png', 'img-video/textures/roughness3.png', '#grayEarth');
        } else if (selectedValue === "live") {
            hideObjects();
            initHiddens("hide10", "hide11", "hide12", "livingEarth1");
            createTexture("img-video/textures/basecolor4.png", 'img-video/textures/height4.png', 'img-video/textures/ambientocclusion4.png', 'img-video/textures/metallic4.png', 'img-video/textures/normal4.png', 'img-video/textures/roughness4.png', '#livingEarth');
        } else if (selectedValue === "red") {
            hideObjects();
            initHiddens("hide13", "hide14", "hide15", "redEarth1");
            createTexture("img-video/textures/basecolor5.png", 'img-video/textures/height5.png', 'img-video/textures/ambientocclusion5.png', 'img-video/textures/metallic5.png', 'img-video/textures/normal5.png', 'img-video/textures/roughness5.png', '#redEarth');
        } else if (selectedValue === "boring") {
            hideObjects();
            initHiddens("hide16", "hide17", "hide18", "boringEarth1");
            createTexture("img-video/textures/basecolor6.png", 'img-video/textures/height6.png', 'img-video/textures/ambientocclusion6.png', 'img-video/textures/metallic6.png', 'img-video/textures/normal6.png', 'img-video/textures/roughness6.png', '#boringEarth');
        } else if (selectedValue === "white") {
            hideObjects();
            initHiddens("hide19", "hide20", "hide21", "whiteEarth1");
            createTexture("img-video/textures/basecolor7.png", 'img-video/textures/height7.png', 'img-video/textures/ambientocclusion7.png', 'img-video/textures/metallic7.png', 'img-video/textures/normal7.png', 'img-video/textures/roughness7.png', '#whiteEarth');
        } else if (selectedValue === "green") {
            hideObjects();
            initHiddens("hide22", "hide23", "hide24", "greenEarth1");
            createTexture("img-video/textures/basecolor8.png", 'img-video/textures/height8.png', 'img-video/textures/ambientocclusion8.png', 'img-video/textures/metallic8.png', 'img-video/textures/normal8.png', 'img-video/textures/roughness8.png', '#greenEarth');
        } else if (selectedValue === "human") {
            hideObjects();
            initHiddens("hide25", "hide26", "hide27", "humanEarth1");
            createTexture("img-video/textures/basecolor9.png", 'img-video/textures/height9.png', 'img-video/textures/ambientocclusion9.png', 'img-video/textures/metallic9.png', 'img-video/textures/normal9.png', 'img-video/textures/roughness9.png', '#humanEarth');
        } else if (selectedValue === "now") {
            hideObjects();
            initHiddens("hide28", "hide29", "hide30", "nowEarth1");
            createTexture("img-video/textures/basecolor10.png", 'img-video/textures/height10.png', 'img-video/textures/ambientocclusion10.png', 'img-video/textures/metallic10.png', 'img-video/textures/normal9.png', 'img-video/textures/roughness10.png', '#nowEarth');
        } else if (selectedValue === "future") {
            hideObjects();
            initHiddens("hide31", "hide32", "hide33", "futureEarth1");
            createTexture("img-video/textures/basecolor10.png", 'img-video/textures/height10.png', 'img-video/textures/ambientocclusion10.png', 'img-video/textures/metallic10.png', 'img-video/textures/normal9.png', 'img-video/textures/roughness10.png', '#futureEarth');
        }
    }
      
    const list = document.querySelector('#earths');

    list.addEventListener('change', function(e) {  
      getSelectValue(e);
    });

});