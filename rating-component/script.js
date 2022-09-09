const submit = document.getElementById('submit')
const main = document.getElementById('how')
const thanks = document.querySelector('.thankyou')
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")

submit.addEventListener('click', (e) => {
    e.preventDefault()

    main.classList.add("hidden")
    thanks.classList.remove("hidden")

})
ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })

  })
