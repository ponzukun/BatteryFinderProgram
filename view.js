import { Controller } from "/controller.js";
import { camera } from "/model.js";
import { battery } from "/model.js";


export class View {
    static createSelectBrand(values) {
        for(let i = 0; i < values.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", values[i]);
            option.innerHTML = values[i];
            document.getElementById("brand-select").append(option);
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