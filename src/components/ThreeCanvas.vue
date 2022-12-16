<template>
    {{ render() }}
</template>

<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { ref } from 'vue';
    // import OrbitControls from 'three/examples/jsm/controls/OrbitControls';
    
    export default {
        setup(){
            const MODEL = "./models/Kwast.glb";
            const model = ref(null);
            

            console.log(model.value);

            const render = () => {
                    const renderer = new THREE.WebGLRenderer();
                    const canvas = renderer.domElement;

                    renderer.setSize( window.innerWidth, window.innerHeight);
                    document.body.appendChild( renderer.domElement );
                    console.log(canvas);

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
    canvas{
        width: 500px;
    }
</style>