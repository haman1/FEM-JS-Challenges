'use strict'

const shareBtn = document.getElementById('share-btn');
const active = document.getElementById('active');
const shareActive = document.getElementById('share-btn-active');

shareBtn.addEventListener('click', ()=>{
    active.classList.toggle("active-state")
});

shareActive.addEventListener('click', ()=>{
    active.classList.toggle("active-state")
});
