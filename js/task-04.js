




const counterRef = document.querySelector('#counter')
const btnIncrement = document.querySelector('[data-action="increment"]')
const btnDecrement = document.querySelector('[data-action="decrement"]')
const valueRef = document.querySelector(`#value`)
let counterValue = 0;

btnIncrement.addEventListener(`click`,btnIncrementClick)
btnDecrement.addEventListener(`click`,btnDecrementClick)

function btnIncrementClick(){
    counterValue += 1;
    return valueRef.textContent = counterValue;
}
function btnDecrementClick(){
    counterValue -= 1;
    return valueRef.textContent = counterValue;
}
