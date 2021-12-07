function createGarden1() {
    const gardenG1 = document.querySelector('#garden-1');
    const addBtnG1 = document.querySelector('#g1-add-btn');
    const removeBtnG1 = document.querySelector('#g1-rm-btn');

    const tulip = document.createElement('p');

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
            gardenG1.appendChild(tulip);
        }
    }
    storePlant();

}

createGarden1();