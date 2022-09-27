'use strict';

const bill = document.getElementById('bill');
const tipBtn = document.querySelectorAll('.tip-btn');
const tipCustom = document.getElementById('custom-tip');
const errorMsg = document.querySelector('.error-msg');
const people = document.getElementById('people');
const results = document.querySelectorAll('.value');
const calcBtn = document.querySelector('.calc');
const resetBtn = document.querySelector('.reset');


bill.addEventListener('input', setBillValue);
tipBtn.forEach(btn => {
    btn.addEventListener('click', handleClick);
});
tipCustom.addEventListener('input', setTipCustomValue);
people.addEventListener('input', setPeopleValue);
resetBtn.addEventListener('click', reset);

let billValue = 142.55; 
let tipValue = 0.15; 
let peopleValue = 5; 




