import { config } from "/config.js";
import { cameras } from "/camera.js";
import { cameraObjects } from "/camera.js";
import { batteryObjects } from "./battery.js";

export class View {
    static createSelectBrand(brands) {
        for (let brand of brands) {
            let option = document.createElement("option");
            option.setAttribute("value", brand);
            option.innerHTML = brand;
            config.brandSelect.append(option);
        }

        config.brandSelect.addEventListener("change", (event) => {
            config.batteryList.innerHTML = "";
            config.modelSelect.innerHTML = `
                <option value="">--Please choose a model--</option>
            `;    
            if(event.target.value !== "") {
                this.createSelectModel(event.target.value);
            }
        });
    }

    static createSelectModel(brand) {
        const cameraModels = new Set();
        cameras.forEach(camera => { 
            if(brand === camera.brand) cameraModels.add(camera.model);
        });

        for (let model of cameraModels) {
            let option = document.createElement("option");
            option.setAttribute("value", model);
            option.innerHTML = model;
            config.modelSelect.append(option);
        }

        config.modelSelect.addEventListener("change", (event) => {
            config.batteryList.innerHTML = "";
            if(event.target.value !== "") {
                this.createListBattery(config.brandSelect.value, event.target.value, 0);
            }
        })
    }

    static createListBattery(brand, model, apc) {
        let applicableBatteryList = [];
        // カメラを取得
        let cameraObj;
        cameraObjects.forEach(camera => {
            if(camera.brand == brand && camera.model == model) {
                cameraObj = camera;
            }
        });

        batteryObjects.forEach(battery => {
            // ここでバッテリーのパワーがカメラより大きかったら、applicableBatteryListにpush
            if(cameraObj.powerConsumptionWh <= battery.getPowerConsumptionWh()) {
                applicableBatteryList.push(battery);
            }
        });

        applicableBatteryList.forEach(battery => {
            let listItem = document.createElement("a");
            listItem.setAttribute("href", "#");
            listItem.classList.add("list-group-item", "list-group-item-action")
            listItem.innerHTML = battery.batteryName;
            listItem.addEventListener("mouseover", (event) => {
                event.target.classList.add("active");
            });
            listItem.addEventListener("mouseleave", (event) => {
                event.target.classList.remove("active");
            });

            config.batteryList.append(listItem);
        });
    }
}
{/* <a href="#" class="list-group-item list-group-item-action active">
Cras justo odio
</a>
<a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
<a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
<a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
<a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a> */}