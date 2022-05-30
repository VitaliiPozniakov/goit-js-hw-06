const inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);

function onInputChange(event) {
  // console.log (event.currentTarget.value)
  outputRef.textContent = event.currentTarget.value;

  if (event.currentTarget.value === ``) {
    outputRef.textContent = "Anonymous";
  }
}

inputRef.addEventListener(`input`, onInputChange);
