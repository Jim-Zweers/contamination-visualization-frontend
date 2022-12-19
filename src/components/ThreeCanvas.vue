<template>
    <div class="render" ref="modelRender" id="modelRender">
        {{ render() }}
    </div>
    
</template>

<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { onMounted, ref } from '@vue/runtime-core';
    // import OrbitControls from 'three/examples/jsm/controls/OrbitControls';
    
    export default {

        setup(){
            const MODEL = "./models/Kwast.glb";
            const modelRender = ref(null);
            onMounted(() =>{                       
                const renderer = new THREE.WebGLRenderer();
                console.log(modelRender.value);
                modelRender.value.appendChild( renderer.domElement);
                renderer.setSize( modelRender.value.clientWidth, modelRender.value.clientHeight);    

                const scene = new THREE.Scene();
                const light = new THREE.AmbientLight(0x404040);
                const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const loader = new GLTFLoader();
                let root;

                loader.load(MODEL, (gltf) =>{root = gltf.scene; scene.add(root)});
                function animate(){
                requestAnimationFrame( animate );
                renderer.render( scene, camera );
                renderer.setClearColor( 0xffffff );

                }

                scene.add(light);
                animate();
                camera.position.z = 5;  

                } );


            const render = () => {




               
            

            }
            return {
                render,
                modelRender
            }
        }   
    }

</script>

<style scoped>
    .render{
        width: 100%;
        height: 100%;
    }
</style>