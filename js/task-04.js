let counterValue = 0;

let value = document.getElementById("value");
value.innerText = counterValue;

let incBtn = document.querySelector('[data-action="increment"]');
let decBtn = document.querySelector('[data-action="decrement"]');

incBtn.onclick = () => {
    counterValue += 1;
    value.innerText = counterValue;
};

decBtn.onclick = () => {
    counterValue -= 1;
    value.innerText = counterValue;
};