function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonCreateRef: document.querySelector(`button[data-create]`),
  buttonClearRef: document.querySelector(`button[data-destroy]`),
  inputRef: document.querySelector(`input[type="number"]`),
  containerRef: document.querySelector(`#boxes`),
};

refs.buttonCreateRef.addEventListener(`click`, onButtonCreateClick);
refs.buttonClearRef.addEventListener(`click`, destroyBoxes);

function onButtonCreateClick(event) {
  createBoxes(refs.inputRef.value);
  // console.log(inputRef.value)
}

let previousSize = 0;

function createBoxes(amount) {
  if (previousSize === 0) {
    previousSize = 30;
  }

  const baseSize = previousSize;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    let size = baseSize + i * 10;
    // console.log(size);
    const itemRef = document.createElement("div");
    itemRef.style.width = `${size}px`;
    itemRef.style.height = `${size}px`;
    //  itemRef.style.cssText = `width: ${size}px; height: ${size}px;`;
    itemRef.style.backgroundColor = `${getRandomHexColor()}`;
    elements.push(itemRef);
    previousSize = size;
  }
  refs.containerRef.append(...elements);
  // console.log(Number.parseInt(refs.containerRef.lastElementChild.style.width))
  // console.log(previousSize)
  if (
    Number.parseInt(refs.containerRef.lastElementChild.style.width) ===
    previousSize
  ) {
    previousSize += 10;
  }
}

function destroyBoxes() {
  refs.containerRef.innerHTML = "";
}
