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
            <button ref="select" class="import_button">Select data set</button>
            <button ref="upload" class="export_button">Upload data set</button>
        </div>

            <div ref="uploadBox" class="upload-selected">
                <div ref="uploadClose"><vue-feather class="close-upload" size="25px" type="x"></vue-feather></div>
                
                <input id="file-upload" @change="changeFile()" type="file" ref="file">
                <label for="file-upload" class="fileLabel">
                    <i>Upload File</i>
                </label>
                <span id="insertFilename" ref="filename">Selected file: </span>
                    
                <button ref="submit" type="submit">Submit</button>
                
            </div>


        <div ref="datasetBox" class="dataset-selected">
            <div ref="datasetClose"><vue-feather class="close-upload" size="25px" type="x"></vue-feather></div>
            <label for="datasets">Select Dataset:</label>
            <select name="" id="" multiple size="6" v-model="selected">
                <option v-for="sets in contaminationStore.availableSets" :value="sets.Value" ref="selectedOption" :key="sets.setsKey">{{sets.Value}}</option>
            </select>
            
            <button class="dataset-button" ref="selectButton">Submit</button>
        </div>

        <div ref="values" v-for="value in contaminationStore.activeId" :key="value.Id">{{value.id}}</div>

    </div>
    
</template>

<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { onMounted, ref, onUpdated } from '@vue/runtime-core';
    import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls';
    import { useContaminationStore } from '@/pinia/ContaminationStore.js';
    import qs from 'qs';

    import axios from 'axios';

    
    export default {

        setup(){
            const MODEL = "./models/marckamer.glb";
            const modelRender = ref(null);
            const helpIcon = ref(null);
            const helpText = ref(null);
            const closeHelp = ref(null);
            const file = ref(null);
            const submit = ref(null);
            const selectButton = ref(null);
            const uploadBox = ref(null);
            const datasetBox = ref(null);
            const upload = ref(null);
            const select = ref(null);
            const filename = ref(null);
            const uploadClose = ref(null);
            const datasetClose = ref(null);
            
            const ALL = "http://159.223.225.249:3000/api/contamination/latest";
            const UPLOAD = "http://159.223.225.249:3000/api/contamination/upload/spreadsheet"
            const AVAILABLESETS = "http://159.223.225.249:3000/api/contamination/available/sets"
            const contaminationStore = useContaminationStore();
            let values = ref([]);
            const selectedOption = ref([]);


            
            onUpdated(() => {
                // console.log(values.value);
                // for(let i = 0; i < selectedOption.value.length; i++){
                //     console.log(selectedOption.value[i]);
                // }

                // const getOption = () =>{
                    

                // }

                

                
     
            }),

            onMounted(() =>{



                // selectedOption.value.addEventListener('click', () => {
                //     console.log('hallo');
                // });
                
                // console.log(selectedOption.value);
                
                
                // console.log(getSelected());


                // selectedOption.value.addEventListener('click', () =>{
                //     console.log(selectedOption.value);
                // })

                // selectButton.value.addEventListener('click', getOption());

                // console.log(selectButton.value);

                

                // console.log(contaminationStore.availableSets);

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

                select.value.onclick = () => {
                    datasetBox.value.style.display = "flex";
                }

                uploadClose.value.onclick = () =>{
                    uploadBox.value.style.display = "none";
                    datasetBox.value.style.display = "none";

                }

                datasetClose.value.onclick = () =>{
                    datasetBox.value.style.display = "none";
                }
                

                upload.value.onclick = () => {
                    uploadBox.value.style.display = "flex";
                }

 
                
                
                // 
                // datasetBox.value.style.display = "none";

                

                const renderer = new THREE.WebGLRenderer();
                modelRender.value.appendChild( renderer.domElement);
                renderer.setSize( modelRender.value.clientWidth, modelRender.value.clientHeight);

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera( 75, modelRender.value.clientWidth / modelRender.value.clientHeight, 0.1, 1000);
                const loader = new GLTFLoader();
                // const raycaster = new THREE.Raycaster();
                
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
                    // console.log(data);
                        for(let i = 0; data.length > i; i++){
                            placeSpheres(data[i].XCoördinates, data[i].YCoördinates, data[i].ZCoördinates, data[i].ID);
                        }
                    });
                }

                const getSelected = () => {
                        for(let i = 0; i < selectedOption.value.length; i++){
                        selectedOption.value[i].addEventListener('click', () => {
                            return console.log(selectedOption.value[i].innerHTML);
                        })
                    }
                }

                getSelected();

                let getSet = () =>{
                    const url = "http://159.223.225.249:3000/api/contamination/set"

                    // const searchParams = new URLSearchParams();

                    // const date = { date : '2023-01-16' }

                    // console.log(qs.stringify(date));

                    // searchParams.append('date', '2023-01-16')

                    var data = qs.stringify({
                    'date': '2023-01-16' 
                    });
                    var config = {
                    method: 'post',
                    url: url,
                    data : data,
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    
                    };

                    console.log(config.data);

                    axios(config)
                    .then((response) => {
                        console.log(response);
                        console.log(JSON.stringify(response.data));

                    }).catch((error) => {
                        console.log(error)
                    })
                }

                selectButton.value.addEventListener('click', getSet);
                
                const postContaminationData = () => {

                    let formData = new FormData();
                    formData.append('spreadsheet', file.value.files[0]);
                    formData.append('company_name', 'Test');
                    formData.append('mesh_name', 'Test mesh');
                    
                    axios.post(UPLOAD, formData,{ 
                        
                    })
                    .then(function(response){
                        console.log(response);
                        alert('file has been uploaded');
                    })
                    .catch(function(error){
                        console.log(error);
                    })


                }

                

                submit.value.addEventListener('click', postContaminationData);



                const getAvailableSet = () => {
                    axios.get(AVAILABLESETS).then((response) => {
                        let data = response.data.data;
                        // console.log(data);
                        contaminationStore.updateDataSet(data);
                    })
                }

                
                getAvailableSet();
                getAllContaminations();

                // const pointer = new THREE.Vector3();

                
                const placeSpheres = (x,y,z,id) => {
                    const geometry = new THREE.SphereGeometry(.2,.2,.2);
                    const material = new THREE.MeshBasicMaterial({color: 0xffff00});
                    const sphere = new THREE.Mesh( geometry, material);
                    sphere.position.set(x, y, z);
                    sphere.name = id;
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


                // function onPointerMove( event ) {
                //     pointer.x = ( event.clientX / modelRender.value.clientWidth ) * 2 - 1;
                //     pointer.y = - ( event.clientY / modelRender.value.clientHeight ) * 2 + 1;

                //     raycaster.setFromCamera(pointer, camera);

                //     for(let i = 0; i < scene.children.length; i++){
                //     // console.log(scene.children[i]);

                //     scene.children[i].name = "point"
                // }

                    // console.log(scene.children);
                    // const intersects = raycaster.intersectObjects( scene.children);
                    // console.log(intersects);
                    // for (let i = 0; i < intersects.length; i++ ) {
                    //     intersects[i].object.material.color.set(0xff0000);
                    //     // console.log(intersects[i]);
                    // }
 
                // }
                // const sphereValues = scene.children;
                //     const setGi = () =>{
                //         for(let i = 0; i < contaminationStore.activeId.length; i++){
                                    
                //                     // if(sphereValues[i].name === contaminationStore.activeId[i]){
                                         
                //                     // }
                //                     sphereValues[i].material.color.setHex( 0xffffff );
                //                     }
                //     }

                scene.add(light1);
                // onPointerMove 
                // console.log(window);
                // color.value.addEventListener( 'click', setGi);
                

                camera.position.z = 5;
                window.requestAnimationFrame(animate);
                
                return{
                    postContaminationData,
                }
                });

                const changeFile = () => {
                    filename.value.innerHTML += file.value.files[0].name;
                    console.log(file.value.files[0]);
                }



            return {
                modelRender,
                helpIcon,
                helpText,
                closeHelp,
                file,
                submit,
                contaminationStore,
                values,
                selectButton,
                selectedOption,
                uploadBox,
                datasetBox,
                select,
                upload,
                filename,
                changeFile,
                uploadClose,
                datasetClose,
            }
        }   
    }

</script>

<style scoped>
    .render{
        width: 100%;
        height: 100%;
        position: relative;
    }

    .help-icon{
        position: absolute;
        right: 2%;
        top: 2%;
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
        right: 1%;
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
        right: 2%;
        top: 2%;
        z-index: 3;
        display: none;
    }

    .close-help:hover{
        color: #78BC61;
    }

    .button-container{
        display: flex;
        position: absolute;
        right: 2%;
        bottom: 2%;
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

    .dataset-selected{
        position:absolute;
        display: none;
        flex-direction: column;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        padding: 20px;

    }

    .dataset-button{
        background-color: #78BC61;
        padding: 10px;
        border: none;
        margin-top: 10px;
        color: #fff
    }

    .upload-selected{
        background-color: #fff;
        padding: 20px;
        width: 200px;
        height: 200px;
        display: none;
        position: absolute;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
    }

    .close-upload{
        color: red;
        display:flex;
        justify-content: flex-end;
    }

    .fileLabel{
        background-color: #78BC61;
        padding: 10px;
    }

    .upload{
        height: 300px;
        background-color: #fff;
    }

    .upload-selected > button{
        padding: 10px;
        background-color: #78BC61;
        border: none;
    }

    input[type="file"]{
        display: none;
    }

</style>