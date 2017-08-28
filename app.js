'use strict';

//add contestant nanme
var name = document.getElementById('contestant');

function store(event) {
  event.preventDefault();
  localStorage.setItem('name', event.target.name);
};
console.log('submit');
console.log(name);
name.addEventListener('submit', store);
console.log('submit');
console.log(name);

//on the result page, recall contestant name:
var storedName  = JSON.parse(localStorage.getItem('name'));
