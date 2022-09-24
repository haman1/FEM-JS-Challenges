'use strict';

const content = document.querySelectorAll('content');
const mark =document.getElementById('mark');
const main = document.querySelector('.main');
const contentMessage = document.querySelector('msg')
const message = document.querySelector('.message')
mark.addEventListener('click', function(e){
    e.preventDefault();

})

main.addEventListener('click', function(e){
   
    contentMessage.classList.remove('hidden')
    
})