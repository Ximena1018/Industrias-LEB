const btnSignIn = document.getElementById("sign-in"),
       btnSignUp = document.getElementById("sign-up"),
       formRegistrer = document.querySelector(".registrer"),
       formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegistrer.classList.add("hide");
    formLogin.classList.remove("hide");
    
})

btnSignUp.addEventListener("click",e => {
    formLogin.classList.add("hide");
    formRegistrer.classList.remove("hide")
})

