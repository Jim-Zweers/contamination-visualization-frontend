<template>
    <canvas class="threejs"> {{ render() }}</canvas>
</template>

<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    // import OrbitControls from 'three/examples/jsm/controls/OrbitControls';
    
    export default {
        setup(){
            const MODEL = "./models/Kwast.glb";

            const render = () => {
                const renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight);
                document.body.appendChild( renderer.domElement );

                const scene = new THREE.Scene();
                const light = new THREE.AmbientLight(0x404040);
                const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const loader = new GLTFLoader();
                let root;
                console.log(loader);
                loader.load(MODEL, (gltf) =>{root = gltf.scene; scene.add(root)});
                function animate(){
                requestAnimationFrame( animate );
                renderer.render( scene, camera );
                }
                scene.add(light);
                animate();
                camera.position.z = 5;
            }
            return {
                render
            }
        }   
    }

</script>

<style scoped>
    .threejs{
        width: 50%;
    }
</style>