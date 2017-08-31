'use strict';

function createLetters() {
  var letterFather = document.getElementsByClassName('theletters')[0];
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (var i = 0; i < alphabet.length; i++) {
    var letterBox = document.createElement('p');
    letterBox.className = 'letters';
    letterBox.id = alphabet[i];
    letterFather.appendChild(letterBox);
    letterBox.innerText = alphabet[i];
  }
}
createLetters();

var inputBox = document.getElementsByClassName('wordBox')[0];
inputBox.addEventListener('submit', createWord);

function createWord(event) {
  event.preventDefault();
  localStorage.setItem('word', JSON.stringify(inputBox.elements.word.value));
  var wordFather = document.getElementsByClassName('theword')[0];
  var wordInput = JSON.parse(localStorage.getItem('word'));
  for (var i = 0; i < wordInput.length; i++) {
    var letterBox = document.createElement('p');
    letterBox.className = 'wordLetters';
    wordFather.appendChild(letterBox);
    letterBox.innerText = wordInput[i].toUpperCase();
  }
  inputBox.reset();
}
