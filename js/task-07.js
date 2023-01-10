const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

inputRef.addEventListener("change", textChangeSize)

function textChangeSize(event) {
    textRef.style.fontSize = inputRef.value + `px`;
}
