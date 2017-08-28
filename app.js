'use strict';

//add contestant nanme
var name = getElementById('username');

function store(event) {
  event.preventDefault();
  localStorage.setItem('name', username.value);
  window.location.href = 'quiz.html';
};

elUsername.addEventListener('click', store);
console.log('click');
console.log(name);
//on the result page, recall contestant name:
var storedName  = localStorage.getItem(name);
