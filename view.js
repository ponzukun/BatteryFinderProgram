import { config } from "/config.js";
import { cameraObjects } from "/camera.js";
import { batteryObjects } from "./battery.js";

export class View {
    static createSelectBrand() {
        // ブランド名の重複を防ぐ
        const cameraBrands = new Set();
        cameraObjects.forEach(camera => { cameraBrands.add(camera.brand); });

        for (let brand of cameraBrands) {
            let option = document.createElement("option");
            option.setAttribute("value", brand);
            option.innerHTML = brand;
            config.brandSelect.append(option);
        }
    }

    static createSelectModel(brand) {
        // モデル名の重複を防ぐ
        const cameraModels = new Set();
        cameraObjects.forEach(camera => { 
            if(brand === camera.brand) cameraModels.add(camera.model);
        });

        for (let model of cameraModels) {
            let option = document.createElement("option");
            option.setAttribute("value", model);
            option.innerHTML = model;
            config.modelSelect.append(option);
        }
    }

    static createListBattery(brand, model, apc) {
        // 選択されているカメラを取得
        let cameraObj;
        cameraObjects.forEach(camera => {
            if(camera.brand == brand && camera.model == model) {
                cameraObj = camera;
            }
        });
        
        // 有効なバッテリーを取得
        let applicableBatteryList = [];
        let cameraApcPower = Number(cameraObj.powerConsumptionWh) + Number(apc);
        batteryObjects.forEach(battery => {
            if(cameraApcPower <= battery.getPowerConsumptionWh()) {
                if(0 < battery.getBatteryLifeH(cameraApcPower)) {
                    applicableBatteryList.push(battery);
                }
            }
        });

        // バッテリーをアルファベット順（昇順）にソート
        applicableBatteryList = applicableBatteryList.sort( (x, y) => {
            if (x.batteryName < y.batteryName) {return -1;}
            if (x.batteryName > y.batteryName) {return 1;}
            return 0;
        });

        // 有効な各バッテリーを表示
        applicableBatteryList.forEach(battery => {
            let listItem = document.createElement("a");
            listItem.setAttribute("href", "#");
            listItem.classList.add("list-group-item", "list-group-item-action")
            listItem.innerHTML = `
                <div class="row">
                    <div class="col-5">${battery.batteryName}</div>
                    <div class="col-7 text-right">Estimate ${battery.getBatteryLifeH(cameraApcPower)} hours</div>
                </div> 
            `;
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