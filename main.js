import { camera } from "/model.js";
import { View } from "/view.js";

function initializeApp() {
    let target = document.getElementById("target");
    target.innerHTML = `
        <div class="bg-primary d-flex justify-content-center">
            <h1 class="text-white p-1">Battery Finder Program</h1>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div id="inputContainer" class="col-7">
            </div>
            <div id="chooseContainer" class="col-7">
            </div>
        </div>
    `
}
initializeApp();

const config = {
    inputCon : document.getElementById("inputContainer"),
    chooseCon : document.getElementById("chooseContainer")
}

const cameraBrands = [];
for(let i = 0; i < camera.length; i++) {
    if(!cameraBrands.includes(camera[i].brand)) cameraBrands.push(camera[i].brand);
}
const cameraModels = [];
for(let i = 0; i < camera.length; i++) {
    if(!cameraModels.includes(camera[i].model)) cameraModels.push(camera[i].model); 
} 

View.createSelect("brand", cameraBrands, 1, config.inputCon);
View.createSelect("model", cameraModels, 2, config.inputCon);
View.createInputNum("accessory power consumption", "apc", 0, 100, 3, config.inputCon);
View.createListGroup(4, config.chooseCon);