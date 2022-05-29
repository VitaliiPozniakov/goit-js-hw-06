function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyRef = document.querySelector(`body`)
const buttonRef = document.querySelector(`.change-color`)
const colorRef = document.querySelector(`.color`)


function onButtonClick (event){
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  colorRef.textContent = `${getRandomHexColor()}`
}


buttonRef.addEventListener("click", onButtonClick);








// console.log(getRandomHexColor())
