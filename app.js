'use strict';

//add contestant nanme
var spinButton = document.getElementById('contestant');
spinButton.addEventListener('submit', store);



function store(event) {
  event.preventDefault();
  localStorage.setItem('name', JSON.stringify(spinButton.elements.username.value));
  document.getElementById('rear').className = 'spin';
  setTimeout(function() {
    window.location = 'quiz.html';
  }, 2000);
};


console.log(name);

//on the result page, recall contestant name:
// var storedName  = JSON.parse(localStorage.getItem('name'));
