<template>
    <div class="render" ref="modelRender" id="modelRender">

        <div class="help-icon" ref="helpIcon" id="helpIcon" onclick="openModal()">
            <vue-feather type="help-circle"></vue-feather>
        </div>

        <div class="close-help" ref="closeHelp" id="closeHelp">
            <vue-feather type="x"></vue-feather>
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
        
    </div>
    
</template>

<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    // import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
    import { onMounted, ref } from '@vue/runtime-core';
    import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls';
    
    export default {

        setup(){
            const MODEL = "./models/marckamer.glb";
            // const MODEL = "./models/SpatialMapping_1.obj";
            const modelRender = ref(null);
            const helpIcon = ref(null);
            const helpText = ref(null);
            const closeHelp = ref(null);



            onMounted(() =>{          

                closeHelp;

                console.log(helpText.value);

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
                console.log(modelRender.value);
                modelRender.value.appendChild( renderer.domElement);
                renderer.setSize( modelRender.value.clientWidth, modelRender.value.clientHeight);    

                const scene = new THREE.Scene();
                const light = new THREE.AmbientLight(0x404040, 2);
                const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const loader = new GLTFLoader();
                const controls = new OrbitControls(camera, renderer.domElement);
                let root;
                
                camera.position.set(-2,1,0);
                controls.update();

                loader.load(MODEL, (gltf) =>{root = gltf.scene; scene.add(root)});
                
                function animate() {
                    requestAnimationFrame( animate );
                    controls.update();
                    renderer.render( scene, camera );
                    renderer.setClearColor( 0xffffff );
                    
                }

                scene.add(light);
                animate();
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
    }

    .help-icon:hover{
        color: blue;
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


</style>