<template>
    <div class="render" ref="modelRender" id="modelRender">

        <div class="help-icon" ref="helpIcon" id="helpIcon" onclick="openModal()">
            <vue-feather size="25px" type="help-circle"></vue-feather>
        </div>

        <div class="close-help" ref="closeHelp" id="closeHelp">
            <vue-feather size="25px" type="x"></vue-feather>
        </div>

        <div class="help-text" ref="helpText">
            <article class="help-text__container">
                <section>
                    <vue-feather type="move"></vue-feather>
                    <p>Om de camera te verplaatsen in het model kan je gebruik maken van de linker muisknop</p>
                </section>
                <section id="border-boy">
                    <vue-feather type="refresh-ccw"></vue-feather>
                    <p>Om te het model te draaien kan je gebruik maken van de rechter muisknop</p>
                </section>
                <section>
                    <vue-feather type="zoom-in"></vue-feather>
                    <p>Om in en uit te zoomen in het model kan je gebruik maken van het scroll wheel</p>
                </section>
            </article>
        </div>

        <div class="button-container">
            <button class="import_button">Select data set</button>
            <button class="export_button">Import data set</button>
        </div>
    </div>
    
</template>

<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    // import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { onMounted, ref } from '@vue/runtime-core';
    import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls';
    import axios from 'axios';

    
    export default {

        setup(){
            const MODEL = "./models/marckamer.glb";
            const modelRender = ref(null);
            const helpIcon = ref(null);
            const helpText = ref(null);
            const closeHelp = ref(null);
            const ALL = "http://159.223.225.249:3000/api/contamination/all";

            onMounted(() =>{

                helpIcon.value.onclick = () =>{
                    helpText.value.style.display = "block";
                    closeHelp.value.style.display = "block";
                    helpIcon.value.style.display = "none";
                }
                
                closeHelp.value.onclick = () => {
                    helpText.value.style.display = "none";
                    closeHelp.value.style.display = "none";
                    helpIcon.value.style.display = "block";
                }

                const renderer = new THREE.WebGLRenderer();
                // console.log(modelRender.value);
                modelRender.value.appendChild( renderer.domElement);
                renderer.setSize( modelRender.value.clientWidth, modelRender.value.clientHeight);    

                const scene = new THREE.Scene();
                // const light = new THREE.AmbientLight(0x404040, 2);
                const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const loader = new GLTFLoader();
                const raycaster = new THREE.Raycaster();
                const pointer = new THREE.Vector3();
                const controls = new OrbitControls(camera, renderer.domElement);
                let root;
                renderer.setAnimationLoop(animate);
                camera.position.set(-2,1,0);
                controls.update();
                const light1 = new THREE.PointLight( 0xffffff, 1.5, 100 );
                light1.position.set( 5, 10, 0 );

                loader.load(MODEL, (gltf) =>{root = gltf.scene; scene.add(root)});

                const getAllContaminations = () => {
                    axios.get(ALL).then((response ) => {
                    let data = response.data.data;
                        for(let i = 0; data.length > i; i++){
                            placeSpheres(data[i].XCoördinates, data[i].YCoördinates, data[i].ZCoördinates);
                        }
                    });
                }

                getAllContaminations();

                
                const placeSpheres = (x,y,z) => {
                    const geometry = new THREE.SphereGeometry(1,1,1);
                    const material = new THREE.MeshBasicMaterial({color: 0xffff00});
                    const sphere = new THREE.Mesh( geometry, material);
                    sphere.position.set(x, y, z);
                    scene.add(sphere);
                }
                
                function animate() {
                    requestAnimationFrame( animate );
                    controls.update();
                    renderer.render( scene, camera );
                    renderer.setClearColor( 0xffffff );
                    
                }
                
                const sphereSize = 1;
                const pointLightHelper1 = new THREE.PointLightHelper(light1, sphereSize);
                // const pointLightHelper2 = new THREE.PointLightHelper(light2, sphereSize);
                scene.add( pointLightHelper1);


                function onPointerMove( event ) {
                    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
                    pointer.z = 0;
                    pointer.unproject(camera);
                    console.log(pointer);

                    // placeSpheres(pointer.x,pointer.y,pointer.z);
                    raycaster.setFromCamera(pointer, camera);

                    const intersects = raycaster.intersectObjects( scene.children );
                    for (let i = 0; i < intersects.length; i++ ) {
                        intersects[i].object.material.color.set(0xff0000);
                        console.log(intersects[i]);
                    }

                    console.log(intersects);

                }

                scene.add(light1);

                animate();
                console.log(window);
                window.addEventListener( 'click', onPointerMove );

                camera.position.z = 5;

                
                } );

            return {
                modelRender,
                helpIcon,
                helpText,
                closeHelp,

            }
        }   
    }

</script>

<style scoped>
    .render{
        width: 100%;
        height: 100%;
    }

    .help-icon{
        position: absolute;
        right: 50px;
        top: 50px;
        z-index: 3;
        background-color: #fff;
        border-radius: 50px;
        height: 25px;
    }

    .help-icon:hover{
        color: #78BC61;
        cursor: pointer;
    }

    .help-text{
        position:absolute;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        z-index: 2;
        border-radius: 5px;
        padding: 10px;
        width: 35%;
        height: 200px;
        background-color: #fff;
        font-size: 0.8rem;
        right: 40px;
        display: none;
    }
    
    .help-text__container{
        display:flex;
        position:relative;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
    }

    .help-text__container > section{
        padding: 10px;
    }

    #border-boy{
        border-left: 1px solid;
        border-right: 1px solid;
    }

    .close-help{
        position: absolute;
        right: 50px;
        top: 50px;
        z-index: 3;
        display: none;
    }

    .close-help:hover{
        color: #78BC61;
    }

    .button-container{
        display: flex;
        position: absolute;
        right: 3%;
        bottom: 45%;
        width: 280px;
        justify-content: space-between;
    }

    .button-container > button{
        width: 120px;
        height: 36px;
        color: #fff;
        border-radius: 5px;
        border: none;
    }

    .import_button{
        background-color: #78BC61;
    }

    .export_button{
        background-color: #A06E85;
    }

    .import_button:hover{
        background-color: #60944E;
        cursor: pointer;
    }

    .export_button:hover{
        background-color: #684756;
        cursor: pointer;
    }
</style>