let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (eve) => {
    nameOutput.innerText = nameInput.value;
});