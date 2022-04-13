import { config } from "/config.js";
import { cameras } from "/camera.js";

export class View {
    static createSelectBrand(brands) {
        for (let brand of brands) {
            let option = document.createElement("option");
            option.setAttribute("value", brand);
            option.innerHTML = brand;
            config.brandSelect.append(option);
        }

        config.brandSelect.addEventListener("change", (event) => {
            this.createSelectModel(event.target.value);
        });
    }

    static createSelectModel(brand) {
        config.modelSelect.innerHTML = `
            <option value="">--Please choose a model--</option>
        `;

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
    }

    static getApplicableBatteryList(cameraPowerConsumptionWh, batteryList) {
        let applicableBatteryList = [];
        for(let i = 0; i < batteryList.length; i++) {
            let curr = batteryList[i]
            let batteryPowerConsumptionWh = getPowerConsumptionWh(curr.endVoltage, curr.maxDraw);
            if(cameraPowerConsumptionWh <= batteryPowerConsumptionWh) {
                applicableBatteryList.push(curr);
            }
        }
        return applicableBatteryList;
    }
}
{/* <a href="#" class="list-group-item list-group-item-action active">
Cras justo odio
</a>
<a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
<a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
<a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
<a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a> */}