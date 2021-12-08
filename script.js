function createGarden1() {
    const garden = document.querySelector('#garden-1');
    const addBtn = document.querySelector('#g1-add-btn');
    const removeBtn = document.querySelector('#g1-rm-btn');

    const tulip = document.createElement('div');

    addBtn.addEventListener('click', () => {
        localStorage.setItem('tulip', 'tulip');
        storePlant();
    });

    removeBtn.addEventListener('click', () => {
        localStorage.removeItem('tulip');
        tulip.remove();
    });

    function storePlant() {
        if (localStorage.getItem('tulip')) {
            tulip.textContent = localStorage.getItem('tulip');
            garden.insertBefore(tulip, addBtn);
        }
    }
    storePlant();

}
createGarden1();

function createGarden2() {
    const garden = document.querySelector('#garden-2');
    const inputField = document.querySelector('#g2-input');
    const addBtn = document.querySelector('#g2-add-btn');
    const removeBtn = document.querySelector('#g2-rm-btn');
    const plant = document.createElement('div');

    addBtn.addEventListener('click', () => {
        localStorage.setItem('plant', inputField.value);
        storePlant();
        inputField.value = ''; 
    });

    removeBtn.addEventListener('click', () => {
        localStorage.removeItem('plant');
        plant.remove();
    });

    function storePlant() {
        if (localStorage.getItem('plant')) {
            plant.textContent = localStorage.getItem('plant');
            garden.appendChild(plant);
        }
    }

    storePlant();
}
createGarden2();

function createGarden3() {
    const garden = document.querySelector('#garden-3');
    const textInput = document.querySelector('#g3-text-input');
    const numInput = document.querySelector('#g3-num-input');
    const addBtn = document.querySelector('#g3-add-btn');
    const removeBtn = document.querySelector('#g3-rm-btn');
    
    function PlantObj(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    const arr = [];
    const plant = document.createElement('div');
    let span;

    addBtn.addEventListener('click', () => {
        arr.push(new PlantObj(textInput.value, numInput.value));
        localStorage.setItem('plant', JSON.stringify(arr[arr.length-1]));
        storePlant();

        console.log(`check ${localStorage.getItem('plant')}`);
    });

    removeBtn.addEventListener('click', () => {
        localStorage.removeItem('plant');
        plant.remove();
        console.log(`check ${localStorage.getItem('plant')}`);
    });

    function storePlant() {
        //const parsed = JSON.parse(localStorage.getItem(' '))
        if (localStorage.getItem('plant')) {

            console.dir(arr);
            console.log(arr[arr.length - 1]);

            //for (const [key, value] of Object.entries(arr[arr.length - 1])) {
            for (const [key, value] of Object.entries(JSON.parse(localStorage.getItem('plant')))) {
                span = document.createElement('span');
                plant.appendChild(span);
                span.textContent = `${key}: ${value} `;
            }
            garden.appendChild(plant);
        }
    }

    //storePlant();

}
createGarden3();

function test() {
    const arr = [{q: 'q', w: 'w'}];
    const body = document.querySelector('body');
    const div = document.createElement('div');

    const buttonA = body.appendChild(document.createElement('button'));
    buttonA.textContent = 'press me';
    const buttonR = body.appendChild(document.createElement('button'));
    buttonR.textContent = `I'M A DESTRIYER OF WORLDS`;

    buttonA.addEventListener('click', () => {
        //localStorage.setItem('div', arr[0].q); works
        //localStorage.setItem('div', strQ); works
        localStorage.setItem('div', JSON.stringify(arr[0]));
        storeObj();
        console.log(typeof arr[0].q);
        console.log(localStorage.getItem('div'))
    });
    buttonR.addEventListener('click', () => {
        removeObj();
    });

    const strQ = arr[0].q;
    const str = 'str';

    function storeObj() {
        if (localStorage.getItem('div')) {
            //localStorage.setItem('div', str);
            body.appendChild(div);
            div.textContent = localStorage.getItem('div');
            console.log(localStorage.getItem(arr[0]));
        }
    }

    function removeObj() {
        localStorage.removeItem('div');
        div.remove();
    }

    storeObj();
}

test();