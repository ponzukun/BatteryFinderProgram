import { Controller } from "/controller.js";
import { camera } from "/model.js";
import { battery } from "/model.js";


export class View {
    static createSelect(name, values, count, target) {
        let div = document.createElement("div");
        div.innerHTML = `
        <label for="${name}-select">Step${count}: Select your ${name}</label>
        <div>
            <select name="${name}s" id="${name}-select">
                <option value="">--Please choose a ${name}--</option>
            </select>
        </div>
        `
        target.append(div);

        for(let i = 0; i < values.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", values[i]);
            option.innerHTML = values[i];
            document.getElementById(`${name}-select`).append(option);
        }

        const selectElement = document.querySelector(`#${name}-select`);
        selectElement.addEventListener('change', () => {
            // const result = document.querySelector('.result');
            // result.textContent = `You like ${event.target.value}`;
            console.log(Controller.getApplicableBatteryList());
        });

    }

    static createInputNum(name, idName, min, max, count, target) {
        let div = document.createElement("div");
        div.innerHTML = `
        <label for="${idName}-input">Step${count}: Input ${name}</label>
        <div>
            <input type="number" id="${idName}-input" name="${idName}-input" min="${min}" max="${max}">
        </div>
            `
        target.append(div);
    }

    static createListGroup(count, target) {
        let div = document.createElement("div");
        div.innerHTML = `
        <p>Step${count}: Choose your battery</p>
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