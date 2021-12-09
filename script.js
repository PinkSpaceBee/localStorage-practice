function createGarden1() {
    const gardenG1 = document.querySelector('#garden-1');
    const addBtnG1 = document.querySelector('#g1-add-btn');
    const removeBtnG1 = document.querySelector('#g1-rm-btn');

    const tulip = document.createElement('div');

    addBtnG1.addEventListener('click', () => {
        localStorage.setItem('tulip', 'tulip');
        storePlant();
    });

    removeBtnG1.addEventListener('click', () => {
        localStorage.removeItem('tulip');
        tulip.remove();
    });

    function storePlant() {
        if (localStorage.getItem('tulip')) {
            tulip.textContent = localStorage.getItem('tulip');
            gardenG1.insertBefore(tulip, addBtnG1);
        }
    }
    storePlant();

}
createGarden1();

function createGarden2() {
    const gardenG2 = document.querySelector('#garden-2');
    const inputField = document.querySelector('#g2-input');
    const addBtnG2 = document.querySelector('#g2-add-btn');
    const removeBtnG2 = document.querySelector('#g2-rm-btn');
    const plantG2 = document.createElement('div');
    /*
    OKAY BUT I DIDN'T KNOW THAT I COULD REACH LOCAL VARIABLES FROM DIFFERENT SCOPES USING LOCALSTORAGE WHAT THE ACTUAL FUCK. Like, when I modify the plant variable in the G3 function, the plant variable from the G2 also gets modified??? But how and why? The plant variable is local to its function scope, how can it be accessed from a different scope? 
    */

    addBtnG2.addEventListener('click', () => {
        localStorage.setItem('plantG2', inputField.value);
        storePlant();
        inputField.value = ''; 
    });

    removeBtnG2.addEventListener('click', () => {
        localStorage.removeItem('plantG2');
        plantG2.remove();
    });

    function storePlant() {
        if (localStorage.getItem('plantG2')) {
            plantG2.textContent = localStorage.getItem('plantG2');
            gardenG2.appendChild(plantG2);
        }
    }

    storePlant();
}
createGarden2();

function createGarden3() {

    const gardenG3 = document.querySelector('#garden-3');
    const textInputG3 = document.querySelector('#g3-text-input');
    const numInputG3 = document.querySelector('#g3-num-input');
    const addBtnG3 = document.querySelector('#g3-add-btn');
    const removeBtnG3 = document.querySelector('#g3-rm-btn');
    const plantG3 = document.createElement('div');

    function PlantG3(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    let arr = [];

    addBtnG3.addEventListener('click', () => {
        removePlant();
        arr.push(new PlantG3(textInputG3.value, numInputG3.value));
        localStorage.setItem('plantG3', JSON.stringify(arr[0]));
        storePlant();
        textInputG3.value = '';
        numInputG3.value = '';
    });

    removeBtnG3.addEventListener('click', () => {
        removePlant();
    });

    function removePlant() {
        localStorage.removeItem('plantG3');
        plantG3.textContent = '';
        arr = [];
    }

    function storePlant() {
        if (localStorage.getItem('plantG3')) {

            const parsedObj = JSON.parse(localStorage.getItem('plantG3'));

            gardenG3.appendChild(plantG3);

            for (const [key, value] of Object.entries(parsedObj)) {
                    const span = document.createElement('span');
                    span.textContent = `${key}: ${value}; `;
                    plantG3.appendChild(span);
            }
    }
}

    storePlant();
}
createGarden3();

function createGarden4() {
    const gardenG4 = document.querySelector('#garden-4');
    const textInputG4 = document.querySelector('g4-text-input');
    const numInputG4 = document.querySelector('g4-num-input');
    const addBtnG4 = document.querySelector('#g4-add-btn');
    const removeBtnG4 = document.querySelector('#g4-rm-btn');
}

createGarden4();

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
