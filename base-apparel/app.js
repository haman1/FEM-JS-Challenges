

const email = document.getElementById("email")
const submitBtn = document.getElementById("submit-btn")
const form = document.querySelector(".form")


submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.value.match(val)){
        form.classList.remove("error")
        }else{
            form.classList.add("error")

        }
        
 })
