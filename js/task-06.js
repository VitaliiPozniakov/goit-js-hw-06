const inputRef = document.querySelector(`#validation-input`);

inputRef.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove(`invalid`);
    inputRef.classList.add(`valid`);
    return;
  }
  inputRef.classList.remove(`valid`);
  inputRef.classList.add(`invalid`);
}
