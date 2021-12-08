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
    const plantG2 = document.createElement('div');
    /*
    OKAY BUT I DIDN'T KNOW THAT I COULD REACH LOCAL VARIABLES FROM DIFFERENT SCOPES USING LOCALSTORAGE WHAT THE ACTUAL FUCK. Like, when I modify the plant variable in the G3 function, the plant variable from the G2 also gets modified??? But how and why? The plant variable is local to the function scope, how can it be accessed from a different scope? 
    */

    addBtn.addEventListener('click', () => {
        localStorage.setItem('plantG2', inputField.value);
        storePlant();
        inputField.value = ''; 
    });

    removeBtn.addEventListener('click', () => {
        localStorage.removeItem('plantG2');
        plantG2.remove();
    });

    function storePlant() {
        if (localStorage.getItem('plantG2')) {
            plantG2.textContent = localStorage.getItem('plantG2');
            garden.appendChild(plantG2);
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
    const plant = document.createElement('div');

    function PlantObj(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    let arr = [];

    addBtn.addEventListener('click', () => {
        if (arr.length > 0) {
            arr = [];
            arr.push(new PlantObj(textInput.value, numInput.value));
        } else {
            arr.push(new PlantObj(textInput.value, numInput.value));
            localStorage.setItem('plant', JSON.stringify(arr[0]));

            storePlant();
        }
        textInput.value = '';
        numInput.value = '';
    });

    removeBtn.addEventListener('click', () => {
        localStorage.removeItem('plant');
        plant.textContent = '';
        arr = [];
    });

    function storePlant() {
        if (localStorage.getItem('plant')) {

            const parsedObj = JSON.parse(localStorage.getItem('plant'));

            garden.appendChild(plant);

            for (const [key, value] of Object.entries(parsedObj)) {
                    const span = document.createElement('span');
                    span.textContent = `${key}: ${value}; `;
                    plant.appendChild(span);
            }
    }
}

    storePlant();
}
createGarden3();


/*
function test() {
    const arr = [{q: 'q1', w: 'w1'}];
    const body = document.querySelector('body');
    const div = document.createElement('div');

    const buttonA = body.appendChild(document.createElement('button'));
    buttonA.textContent = 'press me';
    const buttonR = body.appendChild(document.createElement('button'));
    buttonR.textContent = `I'M A DESTRIYER OF WORLDS`;

    buttonA.addEventListener('click', () => {
        localStorage.setItem('div', JSON.stringify(arr[0]));
        storeObj();

    });
    buttonR.addEventListener('click', () => {
        removeObj();
    });

    function storeObj() {
        if (localStorage.getItem('div')) {
            body.appendChild(div);

            const parsed = JSON.parse(localStorage.getItem('div'));
            const nonParsed = localStorage.getItem('div');

            console.log(`check p0 ${JSON.parse(localStorage.getItem('div'))}`);
            console.log(`check p1 ${typeof JSON.parse(localStorage.getItem('div'))}`);
            console.log(`check p2 ${JSON.parse(localStorage.getItem('div'['length']))}`);
            console.log(`check p3 ${parsed.hasOwnProperty('q')}`);
            console.log(`check np0 ${nonParsed}`);

            for (const value of Object.values(parsed)) {
                const span = document.createElement('span');
                span.textContent = `${value }`;
                div.appendChild(span);
            }

            console.log(`check 0 ${localStorage.getItem(arr[0])}`);
            console.log(`check 1 ${localStorage.getItem('div')}`);
            console.log(`check 2 ${typeof localStorage.getItem('div')}`);
        }
    }

    function removeObj() {
        localStorage.removeItem('div');
        div.remove();
    }

    storeObj();
    }
*/
