function foo() {

    const body = document.querySelector('body');
    const div = body.appendChild(document.createElement('div'));
    const btn = body.appendChild(document.createElement('button'));
    btn.textContent = 'press me';
    const rmBtn = body.appendChild(document.createElement('button'));
    rmBtn.textContent = 'clear';
    const input = body.appendChild(document.createElement('input'));
    
    function Constructor(x) {
        this.x = x;
    }
 
    rmBtn.addEventListener('click', () => {
        clear();
    })

    btn.addEventListener('click', () => {
        addInput();
    });

    function addInput() {
        let currentArr = JSON.parse(localStorage.getItem('arr'));

        const entry = input.value;

        localStorage.setItem('entry', entry);
        currentArr.push(entry);
        localStorage.setItem('arr', JSON.stringify(currentArr));

        console.log(currentArr.length);
    }


    function clear() {
        localStorage.clear();
        div.textContent = '';
        //tArr = [];
        arr = [];
    }

}

foo()