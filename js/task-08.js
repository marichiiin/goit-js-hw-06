let form = document.querySelector(".login-form");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email === null) {
        alert("Please enter valid email and/or Password")
    }
    
})
