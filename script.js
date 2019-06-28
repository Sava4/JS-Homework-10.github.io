const toggleEye = ev => {
    ev.target.classList.toggle('fa-eye-slash');
    let {firstElementChild: inp} = ev.target.closest('.input-wrapper');
    inp.type === "password" ? inp.type = "text" : inp.type = "password"; 
}

document.querySelectorAll('.eye').forEach(el => {
    el.addEventListener('click', toggleEye);
})

const errFun = () => {
    let error = document.createElement('div');
    error.style = 'color: red';
    error.innerHTML = "Нужно ввести одинаковые значения";
    error.id = 'error';
    return error;
}

const button = ev => {
    ev.preventDefault();
    let [inp1, inp2] = document.querySelectorAll('.password-form input');
    document.getElementById('error') ? document.getElementById('error').remove() : console.log('ok'); 
    inp1.value === inp2.value ? alert('You are welcome!') : ev.target.before(errFun());
}

document.querySelector('.btn').addEventListener('click', button)