import { View } from "./view.js";
import { config } from "./config.js";

View.createSelectBrand();

config.brandSelect.addEventListener("change", (event) => {
    config.batteryList.innerHTML = "";
    config.modelSelect.innerHTML = `
        <option value="">--Please choose a model--</option>
    `;    
    if(config.brandSelect.value !== "") {
        View.createSelectModel(event.target.value);
    }
});

config.modelSelect.addEventListener("change", (event) => {
    config.batteryList.innerHTML = "";
    if(config.brandSelect.value !== "" && config.modelSelect.value !== "") {
        View.createListBattery(config.brandSelect.value, event.target.value, config.apcInput.value);
    }
});

config.apcInput.addEventListener("input", (event) => {
    config.batteryList.innerHTML = "";
    if(config.brandSelect.value !== "" && config.modelSelect.value !== "") {
        View.createListBattery(config.brandSelect.value, config.modelSelect.value, event.target.value);
    }
});

