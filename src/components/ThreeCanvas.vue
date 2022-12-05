<template>
    <canvas> {{ render() }}</canvas>
</template>

<script>
    import * as THREE from 'three';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
    // import OrbitControls from 'three/examples/jsm/controls/OrbitControls';
    
    export default {
        setup(){
            
            const render = () => {
                const renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight);
                document.body.appendChild( renderer.domElement );

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const loader = new GLTFLoader();
                console.log("hallo");
                console.log(loader);
                let root;
                loader.load(
                    'Kwast.glb', (gltf) =>{
                    console.log(gltf);
                    root = gltf.scene;
                    console.log(root);
                    scene.add(root);
                }, function (xhr){
                    console.log((xhr.loaded/xhr.total * 100)+ "% loaded")
                }

                );

                function animate(){
                requestAnimationFrame( animate );
                renderer.render( scene, camera );
                }
                animate();
                camera.position.z = 5;
            }
            return {
                render
            }
        }   
    }

</script>