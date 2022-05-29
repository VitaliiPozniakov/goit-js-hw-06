const inputRef = document.querySelector(`#font-size-control`);
const textRef = document.querySelector(`#text`);

function onInputChange(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

inputRef.addEventListener(`input`, onInputChange);
