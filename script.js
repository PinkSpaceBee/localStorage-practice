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

            const parsedObj = JSON.parse(localStorage.getItem('plantG3'));
            const p = document.createElement('p');

            //gardenG3.appendChild(plantG3);
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

    addBtnG4.addEventListener('click', () => {
        storeArr();
        showPlant();
    });

    removeBtnG4.addEventListener('click', () => {
        currentArr = [];
        localStorage.removeItem('storedArr');
        document.querySelector('#g4-img').style.display = 'none';
        plantsG4.textContent = '';
    });

    let currentArr = localStorage.getItem('storedArr') ? JSON.parse(localStorage.getItem('storedArr')) : [];

    function storeArr() {
        const entry = new PlantG4(textInputG4.value, numInputG4.value);
        currentArr.push(entry);
        localStorage.setItem('storedArr', JSON.stringify(currentArr));
    }

    function showPlant() {
        document.querySelector('#g4-img').style.display = 'block';

        if (plantsG4.hasChildNodes()) {
            const ul = plantsG4.appendChild(document.createElement('ul'));
            const li = ul.appendChild(document.createElement('li'));
            for (const value of Object.values(currentArr[currentArr.length - 1])) {

                //const span = li.appendChild(document.createElement('span'));
                //span.textContent = `${value}, `;

                li.textContent = `${value}, `
             }
        } else {
            for (const obj of Object.values(currentArr)) {
                document.querySelector('#g4-img').style.display = 'block';

                const ul = plantsG4.appendChild(document.createElement('ul'));
                const li = ul.appendChild(document.createElement('li'));

                for (const value of Object.values(obj)) {

                //const span = li.appendChild(document.createElement('span'));
                //span.textContent = `${value}, `;
                li.textContent = `${value}, `
             }
         }
        }
        textInputG4.value = '';
        numInputG4.value = '';
        console.dir(currentArr);
    }

    showPlant();
/*
this is the original function that only appends the last child

    function showPlant() {
        document.querySelector('#g4-img').style.display = 'block';
        for (const value of Object.values(currentArr[currentArr.length - 1])) {

           //const div = plantsG4.appendChild(document.createElement('div'));
           const span = plantsG4.appendChild(document.createElement('span'));
           span.textContent = `${value}, `;
           localStorage.setItem('span', 'span');
           localStorage.getItem('span');
        }
        textInputG4.value = '';
        numInputG4.value = '';

        console.dir(currentArr);
    }
*/
/*
    for (const obj of Object.values(currentArr)) {
        document.querySelector('#g4-img').style.display = 'block';
        for (const value of Object.values(obj)) {
            //const div = plantsG4.appendChild(document.createElement('div'));
            
            const span = plantsG4.appendChild(document.createElement('span'));
            span.textContent = `${value}, `;
     }
 }
 */
/*
    function showPlant() {
        for (const [key, value] of Object.entries(currentArr[currentArr.length - 1])) {
            const p = plantsG4.appendChild(document.createElement('p'));
            p.textContent = `${key}: ${value} x`;
        }
        textInputG4.value = '';
        numInputG4.value = '';
    }
*/
/* ok I KNOW this is shitty, but rn I can't think of a way to do it differently. I'll return to this later when I have more experience and rewrite it. As for now, I have a function that appends new divs with content to the page and is being called in eventListener; and I have this script below that retrieving data from localStorage and creates divs based on current lS status.
*/
/*
    for (const obj of Object.values(currentArr)) {
        for (const [key, value] of Object.entries(obj)) {
            const p = plantsG4.appendChild(document.createElement('p'));
            p.textContent = `${key}: ${value} y `;
        }
    }
*/
}

createGarden4();



