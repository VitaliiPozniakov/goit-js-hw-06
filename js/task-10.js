function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonCreateRef: document.querySelector(`button[data-create]`),
  buttonClearRef: document.querySelector(`button[data-destroy]`),
  inputRef: document.querySelector(`input[type="number"]`),
  containerRef: document.querySelector(`#boxes`),
}



function onButtonCreateClick(event) {
  createBoxes(refs.inputRef.value);
  // console.log(inputRef.value)
}

function createBoxes(amount) {
  const baseSize = 30;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const size = baseSize + i * 10;
    const itemRef = document.createElement("div");
    itemRef.style.width = `${size}px`;
    itemRef.style.height = `${size}px`;
    //  itemRef.style.cssText = `width: ${size}px; height: ${size}px;`;
    itemRef.style.backgroundColor = `${getRandomHexColor()}`;

    elements.push(itemRef);
  }
  refs.containerRef.append(...elements);
}

refs.buttonCreateRef.addEventListener(`click`, onButtonCreateClick);

refs.buttonClearRef.addEventListener(`click`, () => {
  refs.containerRef.innerHTML = "";
});
