import { config } from "./config.js";
import { cameraObjects } from "./camera.js";
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
        // ブランドにあるカメラのモデルを取得（オブジェクトで）
        const cameraModels = cameraObjects.filter(camera => brand === camera.brand);

        cameraModels.forEach(camera => {
            let option = document.createElement("option");
            option.setAttribute("value", camera.model);
            option.innerHTML = camera.model;
            config.modelSelect.append(option);
        });
    }

    static createListBattery(brand, model, apc) {
        // 選択されているカメラを取得
        const cameraObj = cameraObjects.find(camera => camera.brand == brand && camera.model == model);
        
        // 有効なバッテリーを取得
        let cameraApcPower = Number(cameraObj.powerConsumptionWh) + Number(apc);
        let applicableBatteryList = batteryObjects.filter(battery => 
            cameraApcPower <= battery.getPowerConsumptionWh() && 0 < battery.getBatteryLifeH(cameraApcPower)
        );

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