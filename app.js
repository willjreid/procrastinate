'use strict';

var spinButton = document.getElementById('contestant');
spinButton.addEventListener('submit', store);



function store(event) {
  event.preventDefault();
  localStorage.setItem('name', JSON.stringify(spinButton.elements.username.value));
  document.getElementById('rear').className = 'spin';
  setTimeout(function() {
    window.location = 'quiz.html';
  }, 4000);
};


console.log(name);
