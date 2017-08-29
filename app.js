'use strict';

//add contestant nanme
var spinButton = document.getElementById('contestant');
spinButton.addEventListener('submit', store);

function store(event) {
  event.preventDefault();
  // localStorage.setItem('name', event.target.name);
  document.getElementById('rear').className = 'spin';
  setTimeout(function() {
    window.location = 'quiz.html';
  }, 2000);
};

console.log('submit');
console.log(name);
console.log('submit');
console.log(name);

//on the result page, recall contestant name:
// var storedName  = JSON.parse(localStorage.getItem('name'));
