function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChange = document.querySelector('.change-color')
const textRef = document.querySelector('.color')
const bodyRef = document.querySelector('body')
btnChange.addEventListener('click',changeBackgroundColor)

function changeBackgroundColor(event) {
  const color = getRandomHexColor()
  bodyRef.style.backgroundColor = color;
  textRef.textContent = bodyRef.style.backgroundColor
 
}