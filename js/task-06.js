const inputRef = document.querySelector(`#validation-input`);


console.log(inputRef.dataset.length)

function onInputBlur (event) {
if (event.currentTarget.value.length < inputRef.dataset.length) {
    inputRef.classList.add(`invalid`)
}
inputRef.classList.add(`valid`)

// console.log(event.currentTarget.value.length)
}

inputRef.addEventListener(`blur`, onInputBlur)