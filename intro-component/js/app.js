"use strict";

const input = document.querySelectorAll(".input");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");

console.log(input)
const Validation = ()=> {
    const inputFirst = document.getElementById('input-first');
    const inputLast = document.getElementById('input-last')
    const inputEmail = document.getElementById('input-email')
    const inputPassword = document.getElementById('input-password')

   
   const FirstName = inputFirst.value.trim();
   const LastName = inputLast.value.trim();
   const  email = inputEmail.value.trim();
   const  password = inputPassword.value.trim();

   const regEX= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
   if(FirstName === ''){
        input[0].classList.add('error')
   }else {
        input[0].classList.remove('error')
   }

   if(LastName === ''){
       input[1].classList.add('error')
    }else {
        input[1].classList.remove('error')
    }

    if(email.match(regEX)){
        input[2].classList.remove('error')
    }else {
        input[2].classList.add('error')
    }

    if(password === ''){
        input[3].classList.add('error')
    }else {
        input[3].classList.remove('error')
    }


}


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Validation();
})