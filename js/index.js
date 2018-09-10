document.querySelectorAll('.calc .digits-oper')
    .forEach(el => el.addEventListener('click', presedDigitOrOper));

function presedDigitOrOper(ev) {
    const displ = document.querySelector('.calc .displ');
    displ.value += ev.target.innerText;
}

document.querySelector('.calc .eval').addEventListener('click', evaluate);
document.querySelector('.calc .sqrt').addEventListener('click', sqrt);
document.querySelector('.calc .pow').addEventListener('click', pow);
document.querySelector('.calc .delThing').addEventListener('click',delThing);
document.querySelector('.calc .delAll').addEventListener('click', delAll);

function evaluate() {
    const displ = document.querySelector('.calc .displ');
    displ.value = eval(displ.value);
}

function sqrt() {
    const displ = document.querySelector('.calc .displ');
    displ.value = Math.sqrt(displ.value);
}

function pow() {
    const displ = document.querySelector('.calc .displ');
    displ.value = Math.pow(displ.value, 2);
}

function delThing() {
    let displ = document.querySelector('.calc .displ');
    displ.value = displ.value.substr(0,displ.value.length - 1);
}

function delAll() {
    const displ = document.querySelector('.calc .displ'); 
    displ.value = '';
}






