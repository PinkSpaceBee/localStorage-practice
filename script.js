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