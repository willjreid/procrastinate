'use strict';

name.addEventListener('');
var begin = document.getElementById('spin');

function nameToPersist(event) {
  var contestantName = input.username;
  localStorage.setItem(persistedName = contestantName);
}
var elementUsername = document.getElementById('username');
elementUsername.addListener('blur', checkUsername, false);
//on the result page, recall contestant name:
contestantName = localStorage.getItem(persistedName);
