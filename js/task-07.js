let input = document.getElementById("font-size-control");
let text = document.getElementById("text");

input.addEventListener("input", (slide) => {
    let letterSize = slide.target.value;
    text.style.fontSize = letterSize + "px";
})