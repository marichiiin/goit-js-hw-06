const textInput = document.getElementById("validation-input");
const textInputLength = textInput.getAttribute("data-length");
console.log(textInputLength);
textInput.addEventListener("blur", () =>{
    textInput.value = "";
});


textInput.addEventListener("input", () => {

    let converttextInput = Math.floor(textInput.value.length);
    converttextInput += 1;
    
    if (textInputLength == converttextInput) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
        console.log(textInput.value.length)
    }
    else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
});