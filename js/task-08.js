let form = document.querySelector(".login-form");
let email = document.querySelector('[name="email"]');
let password = document.querySelector('[name="password"]');

const emailPass = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if ((email.value == "" || email.value == null) || (password.value == "" || password.value == null)) {
        alert("Please enter valid email and/or Password");
    }
    else {
        emailPass.email = email.value;
        emailPass.password= password.value;
        console.log(emailPass);
    }

    form.reset();


    
})
