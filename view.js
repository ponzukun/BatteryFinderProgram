import { Controller } from "/controller.js";
import { cameras } from "/model.js";
import { battery } from "/model.js";


export class View {
    static createSelectBrand(brands) {
        let brandSelect = document.getElementById("brand-select");

        for (let brand of brands) {
            let option = document.createElement("option");
            option.setAttribute("value", brand);
            option.innerHTML = brand;
            brandSelect.append(option);
        }

        brandSelect.addEventListener("change", (event) => {
            this.createSelectModel(event.target.value);
        });
    }

    static createSelectModel(brand) {
        let modelSelect = document.getElementById("model-select");
        modelSelect.innerHTML = `
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
            modelSelect.append(option);
        }
    }

    static createListGroup(target) {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="list-group">
        </div>
        `
        target.append(div);
    }
}
{/* <a href="#" class="list-group-item list-group-item-action active">
Cras justo odio
</a>
<a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
<a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
<a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
<a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a> */}