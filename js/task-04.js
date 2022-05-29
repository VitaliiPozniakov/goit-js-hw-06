const buttonDecrementRef = document.querySelector(`[data-action="decrement"]`)
const buttonIncrementRef = document.querySelector(`[data-action="increment"]`)
const valueRef = document.querySelector(`#value`)


const counter = {
    counterValue: 0,

    increment () {
        this.counterValue += 1
        valueRef.textContent = counter.counterValue
    },

   decrement () {
    this.counterValue -= 1
    valueRef.textContent = counter.counterValue
    },
}




buttonDecrementRef.addEventListener(`click`, counter.decrement.bind(counter))
buttonIncrementRef.addEventListener(`click`, counter.increment.bind(counter))
    

