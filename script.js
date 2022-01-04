/* Huh, because localStorage shares a scope, I can't assign img as a global variable. I mean I could find a way around it; maybe later */
function createGarden1() {
    const gardenG1 = document.querySelector('#garden-1');
    const addBtnG1 = document.querySelector('#g1-add-btn');
    const removeBtnG1 = document.querySelector('#g1-rm-btn');
    const btnWrap = document.querySelector('.js-btn-wrap');

    const img = document.createElement('img');
    img.setAttribute('src', "https://img.icons8.com/ios/50/000000/flower--v1.png");

    const tulip = document.createElement('div');
    tulip.setAttribute('class', 'plant-container')
    const p = document.createElement('p');

    addBtnG1.addEventListener('click', () => {
        localStorage.setItem('tulip', 'tulip');
        //localStorage.setItem('img', img);
        storePlant();
    });

    removeBtnG1.addEventListener('click', () => {
        localStorage.removeItem('tulip');
        img.remove();
        tulip.remove();
    });

    function storePlant() {
        if (localStorage.getItem('tulip')) {
            p.textContent = localStorage.getItem('tulip');
            tulip.appendChild(img);
            tulip.appendChild(p);
            gardenG1.insertBefore(tulip, btnWrap);
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

    const img = document.createElement('img');
    img.setAttribute('src', "https://img.icons8.com/ios/50/000000/flower--v1.png");

    const plantG2 = document.createElement('div');
    plantG2.setAttribute('class', 'plant-container');
    const p = document.createElement('p');

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
            p.textContent = localStorage.getItem('plantG2');
            plantG2.appendChild(img);
            plantG2.appendChild(p);
            gardenG2.insertBefore(plantG2, inputField);
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

    function PlantG3(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    const plantG3 = document.createElement('div');
    plantG3.setAttribute('class', 'plant-container');

    const img = document.createElement('img');
    img.setAttribute('src', "https://img.icons8.com/ios/50/000000/flower--v1.png");

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
            console.dir(plantG3)
            const parsedObj = JSON.parse(localStorage.getItem('plantG3'));
            const p = document.createElement('p');

            gardenG3.insertBefore(plantG3, document.querySelector('.input-wrap'))
            plantG3.appendChild(img);
            plantG3.appendChild(p);

            for (const value of Object.values(parsedObj)) {
                    const span = document.createElement('span');
                    span.textContent = `${value}, `;
                    p.appendChild(span);
            }
            const strMinusComma = p.lastChild.textContent.slice(0, -2);
            p.lastChild.textContent = strMinusComma;
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

    function PlantG4(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    const plantsG4 = gardenG4.appendChild(document.createElement('div'));
    plantsG4.setAttribute('class', 'plant-container');

    const img = document.createElement('img');
    img.setAttribute('src', "https://img.icons8.com/ios/50/000000/flower--v1.png");

    const plantIcon = document.createElement('div');
    plantIcon.appendChild(img);
    const listTitle = plantIcon.appendChild(document.createElement('span'));
    listTitle.textContent = 'Plants:';

    addBtnG4.addEventListener('click', () => {
        storeArr();
        showPlant();
    });

    removeBtnG4.addEventListener('click', () => {
        //temporary; I kinda fucked up and can't figure out another way to do it
        document.location.reload();
        while (plantsG4.firstChild) {
            plantsG4.removeChild(plantsG4.lastChild);
        }
        plantsG4.textContent = '';
        currentArr = [];
        localStorage.removeItem('storedArr');
    });
    
    let currentArr = localStorage.getItem('storedArr') ? JSON.parse(localStorage.getItem('storedArr')) : [];

    function storeArr() {

        const entry = new PlantG4(textInputG4.value, numInputG4.value);
        currentArr.push(entry);
        localStorage.setItem('storedArr', JSON.stringify(currentArr));
    }

const ul = document.createElement('ul');

    function showPlant() {

            if (plantsG4.hasChildNodes()) {
                plantsG4.appendChild(ul);
                plantsG4.insertBefore(plantIcon, ul);
                const li = ul.appendChild(document.createElement('li'));
    
                for (const value of Object.values(currentArr[currentArr.length - 1])) {
                    const span = li.appendChild(document.createElement('span'));
                    span.textContent = `${value}, `;
                 }
                 const strMinusComma = li.lastChild.textContent.slice(0, -2);
                 li.lastChild.textContent = strMinusComma;
            } else {
                // so the DOM elements are still there after the page reload
                plantsG4.appendChild(ul);
                plantsG4.insertBefore(plantIcon, ul);
    
                for (const obj of Object.values(currentArr)) {
                    const li = ul.appendChild(document.createElement('li'));
    
                    for (const value of Object.values(obj)) {
    
                        const span = li.appendChild(document.createElement('span'));
                        span.textContent = `${value}, `;
                 }
                 const strMinusComma = li.lastChild.textContent.slice(0, -2);
                 li.lastChild.textContent = strMinusComma;
             }
            }
            textInputG4.value = '';
            numInputG4.value = '';
    }

   showPlant();

}

createGarden4();



