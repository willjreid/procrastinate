'use strict';

//add contestant nanme
var name = document.getElementById('contestant');
name.addEventListener('submit', store);

function store(event) {
  event.preventDefault();
  localStorage.setItem('name', event.target.name);
  setTimeout(function() {
    var spin = document.getElementById('wheel');
    spin.style.-webkit-animation-name = spin;
  }, 1000);
};

console.log('submit');
console.log(name);
console.log('submit');
console.log(name);

//on the result page, recall contestant name:
var storedName  = JSON.parse(localStorage.getItem('name'));
