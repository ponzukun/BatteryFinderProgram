import { camera } from "/model.js";
import { View } from "/view.js";

const config = {
    brandSelect : document.getElementById("brand-select"),
    chooseCon : document.getElementById("choose-container")
}

const cameraBrands = [];
for(let i = 0; i < camera.length; i++) {
    if(!cameraBrands.includes(camera[i].brand)) cameraBrands.push(camera[i].brand);
}
const cameraModels = [];
for(let i = 0; i < camera.length; i++) {
    if(!cameraModels.includes(camera[i].model)) cameraModels.push(camera[i].model); 
} 

View.createSelectBrand(cameraBrands);
View.createListGroup(config.chooseCon);