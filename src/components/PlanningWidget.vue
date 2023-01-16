<template lang="">
    <div class="plan">
        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
            <span class="selection">Cleaning</span>
            <span class="selection">Swabbing</span>
        </label>

        <section class="plan__grid">
            <div class="plan__grid__card" ref="planCard">
                <div>
                    <vue-feather type="plus-circle" size="40px"></vue-feather>
                    <h3>Create Planning</h3>
                </div>
            </div>
        </section>
        <section class="render-container">
            <div class="render" ref="modelRender">
                <div class="button-container">
                    <button class="point-button" ref="pointButton">Add Point</button>
                    <button class="save-button">Save</button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { onMounted, ref } from '@vue/runtime-core';
import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

export default {
    setup(){

        const planCard = ref(null);
        const modelRender = ref(null);
        const pointButton = ref(null);
        const MODEL = "./models/marckamer.glb";


        onMounted(() => {
            console.log(planCard.value);
            const renderer = new THREE.WebGLRenderer();
            modelRender.value.appendChild( renderer.domElement);
            renderer.setSize( modelRender.value.clientWidth, modelRender.value.clientHeight);    

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const loader = new GLTFLoader();
            // const raycaster = new THREE.Raycaster();
            // const pointer = new THREE.Vector3();
            const controls = new OrbitControls(camera, renderer.domElement);
            const control = new TransformControls(camera, renderer.domElement);
            control.addEventListener('change', animate);

            control.addEventListener('mouseDown', function(){
                controls.enabled = false;
            });
            control.addEventListener('mouseUp', function(){
                controls.enabled = true;
            });
            let root;
            renderer.setAnimationLoop(animate);
            camera.position.set(-2,1,0);
            
            const light1 = new THREE.PointLight( 0xffffff, 1.5, 100 );
            light1.position.set( 5, 10, 0 );

            const addPoint = () =>{
                const geometry = new THREE.SphereGeometry( .2, .2, .2);
                const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
                const sphere = new THREE.Mesh( geometry, material );
                control.attach(sphere);
                scene.add(sphere);

                sphere.addEventListener('click', () =>{
                    control.attach(sphere);
                })
            }

            pointButton.value.addEventListener('click', () =>{
                addPoint();
                console.log(scene.children);
            })

            scene.add(control);
            

            loader.load(MODEL, (gltf) =>{root = gltf.scene; scene.add(root)});

            function animate() {
                    requestAnimationFrame( animate );
                    // transform.update();
                    controls.update();
                    renderer.render( scene, camera );
                    renderer.setClearColor( 0xffffff );
                    
                }

                animate();
            scene.add(light1);    
        });

        return{
            planCard,
            modelRender,
            pointButton,
        }
    }
}
</script>
<style scoped>
    .plan{
        background-color: #fff;
        margin: 20px;
    }

    .plan__grid{
        position: relative;
        margin: 20px;
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr; 
        gap: 0px 0px;
        height: 100%;
        width: 100%;
        grid-template-areas: 
            ". . . ."
            ". . . ."
            ". . . ."
            ". . . ."; 

    }

    .plan__grid__card{
        color: #fff;
        position: relative;
        width: 300px;
        height: 200px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        background-color: #78BC61;
    }

    .plan__grid__card > div{
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
    }

    .switch input{
        position: absolute;
        opacity: 0;
        width: 0px;
        height: 0px;
        z-index: 3;
    }

    .slider{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #D9D9D9;
        border-radius: 20px;
        z-index: 1;
    }

    .slider:before{
        position: absolute;
        content: "";
        height: 32px;
        width: 90px;
        right: 0;
        background-color: #78BC61;
        border-radius: 20px;
        transition: .2s linear;
    }

    .selection{
        z-index: 2;
    }

    .switch{
        position: relative;
        display: flex;
        padding: 5px 10px 5px 10px;
        width: 155px;
        justify-content: space-between;
        user-select: none;
    }

    input:checked + .slider:before{
        transform: translateX(-90px);
    }

    .render{
        position: relative;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .render-container{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 1200px;
        height: 800px;
        padding: 10px;
        background-color: #fff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    
    .point-button, .save-button{
       background-color: #78BC61;
       color: white;
       border: none;
       padding: 10px 5px 5px 10px;
    }

    .button-container{
        position: absolute;
        width: 150px;
        display: flex;
        justify-content: space-between;
        bottom: 20px;
        right: 20px;
    }

</style>