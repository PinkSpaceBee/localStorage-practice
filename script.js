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
    const textInputG4 = document.querySelector('#g4-text-input');
    const numInputG4 = document.querySelector('#g4-num-input');
    const addBtnG4 = document.querySelector('#g4-add-btn');
    const removeBtnG4 = document.querySelector('#g4-rm-btn');
    const plantG4 = gardenG4.appendChild(document.createElement('div'));
    
    let arr = [];

    function PlantG4(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    addBtnG4.addEventListener('click', () => {
        localStorage.removeItem(plantG4);
        // object instance is created and populated
        arr.push(new PlantG4(textInputG4.value, numInputG4.value));
        // object is stored in lS as a string
        localStorage.setItem('plantG4', JSON.stringify(arr));
        storePlant();
        console.log(localStorage.getItem('plantG4'));
    });
    removeBtnG4.addEventListener('click', () => {
        localStorage.clear();
        plantG4.textContent = '';
    });

    function storePlant() {
        if (localStorage.getItem('plantG4')) {
            // an array of objects
            const parsedArr = JSON.parse(localStorage.getItem('plantG4'));

            console.log(Array.isArray(parsedArr));
            console.log(parsedArr[parsedArr.length-1])
            /*ok so it like builds an entire array every time and appends all its children to the div. and I kinda know how to fix it, but I'm so tired and my brain is mushy */

            console.log(`s0 ${parsedArr.find(e => parsedArr.indexOf(parsedArr[[parsedArr.length-1]]))}`);
            console.log(`s1 ${parsedArr.indexOf(parsedArr[[parsedArr.length-1]])}`)

            /* ok, kinda works but each key/value pair should be stored in p or div, becausr it looks messy now, all these values are stored as one long-ass string*/
            const lastElemofArr = parsedArr[[parsedArr.length-1]];

                for (const [key, value] of Object.entries(lastElemofArr)) {
                    const span = plantG4.appendChild(document.createElement('span'));
                    span.textContent = `${key}: ${value}; `;
                    console.log(span.textContent);
                }

        }
    }
    storePlant();
}

createGarden4();
