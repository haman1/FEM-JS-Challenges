
const submitBtn = document.getElementById("submit-btn");
const email = document.getElementById("email")
const form = document.getElementById("form")


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const regEX= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.match(regEX)){
        form.classList.remove('error')
    }else
      
      form.classList.add('error')
})





 

