'use strict';
//var name = " ";

function store(name){
    //var storage = [];
    localStorage.setItem('storage', JSON.stringify(name));
  }
//  storage = JSON.parse(localStorage.getItem('storage'));
  //storage.push(name);
  l//ocalStorage.setItem('storage', JSON.stringify(storage));
}

function processForm(event){
  event.preventDefaults();
  debugger;
  console.log(event);
  console.log(this);
  var input = document.getElementById('userName');
  var userName = input.value;
  //var name = this.element['username'].value;
  console.log(name);
  store(userName);

  window.location.href = 'popupexp.html';

  if (form != null){
    var subButton = document.getElementById('spin');
    console.log(subButton);
    storage = JSON.parse(localStorage.getItem('storage'));
    storage.push(name);
    localStorage.setItem('storage', JSON.stringify(storage));

  }
}
var spinForm = document.getElementById('contestant');
spinForm.addEventListener('submit', processForm);
