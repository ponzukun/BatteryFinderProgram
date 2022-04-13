import { cameras } from "/model.js";
import { View } from "/view.js";
import { Camera } from "/camera.js";
// import { Battery } from "/battery.js";

const config = {
    brandSelect : document.getElementById("brand-select"),
    chooseCon : document.getElementById("choose-container")
}

const cameraObjects = cameras.map(camera => new Camera(camera.brand, camera.model, camera.powerConsumptionWh));

const cameraBrands = new Set();
cameraObjects.forEach(camera => { cameraBrands.add(camera.brand); });

View.createSelectBrand(cameraBrands);
View.createListGroup(config.chooseCon);