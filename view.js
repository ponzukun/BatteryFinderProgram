export class View {
    static createSelect(name, values, count, target) {
        let div = document.createElement("div");
        div.innerHTML = `
        <label for="${name}-select">Step${count}: Select your ${name}</label>
        <div>
            <select name="${name}s" id="${name}-select">
                <option value="">--Please choose an option--</option>
            </select>
        </div>
        `
        target.append(div);

        for(let i = 0; i < values.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", values[i]);
            option.innerHTML = values[i];
            document.getElementById(name + "-select").append(option);
        }
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
}