console.log("desde la consola");

let selected = null;
const $d = document;



$d.addEventListener('click', (e) => {
    if (e.target.id == 'rate-number-btn'){
        let id = e.target.dataset.id;
        let btnNumbers = $d.querySelectorAll('#rate-number-btn');
        btnNumbers.forEach((btn) => {
            btn.classList.remove('rate-enter--selected');    
        });
        e.target.classList.add('rate-enter--selected');
        localStorage.setItem('selected', id);        
        console.log("click en un rate btn", id);
    }
})