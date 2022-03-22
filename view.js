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
        for(let i = 0; i < values.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", values[i]);
            document.getElementById(name + "-select").append(option);
        }
        
        target.append(div);
    }

    static createInputNum(name, idName, min, max, count, target) {

    }
}

{/* <div>
</div>
<div>
<label for="model-select">Step2: Select your model</label>
<div>
    <select name="models" id="model-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
    </select>
</div>
</div> */}
