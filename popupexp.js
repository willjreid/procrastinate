'use strict';

var videos = [];
var questionIndex = 1;
var myPreference = ' ';
var randSpin = 4000;
function spin() {
  randSpin = Math.floor(Math.random() * 500 + 3500);
}

function Video (name, duration, category, path) {
  this.name = name;
  this.duration = duration;
  this.category = category;
  this.path = path;
  videos.push(this);
}

var vidName = ['laughing', 'science', 'hotKnife', 'cageBike', 'jarStory', 'candlelight', 'wine-school', 'pouring', 'ice-cream', 'intro', 'lip-reading', 'japan', 'moulding-forms', 'handyman', 'fitness', 'babies', 'nietzsche', 'paint', 'pergola', 'chopra'];
var duration = ['short', 'short', 'short', 'short', 'short', 'medium', 'medium', 'medium', 'medium', 'medium', 'long', 'long', 'long', 'long', 'long', 'crazy', 'crazy', 'crazy', 'crazy','crazy'];
var category = ['humor', 'educational', 'satisfying', 'diy', 'selfImprovement', 'humor', 'educational', 'satisfying', 'diy', 'selfImprovement', 'humor', 'educational', 'satisfying', 'diy', 'selfImprovement', 'humor', 'educational', 'satisfying', 'diy', 'selfImprovement'];
var path = ['https://www.youtube.com/embed/Kv4XUaFERds?&autoplay=1', 'https://static01.nyt.com/video/players/offsite/index.html?videoId=100000002459293?&autoplay=1', 'https://www.youtube.com/embed/Dye7-cHhd64?&autoplay=1', 'https://www.youtube.com/embed/_dfV6LcYf9c?&autoplay=1', 'https://www.youtube.com/embed/v5ZvL4as2y0?&autoplay=1', 'https://www.youtube.com/embed/qSJCSR4MuhU?&autoplay=1', 'https://www.youtube.com/embed/bVNVVgiwZTs?list=PL80E1D1621CEE5D4B?&autoplay=1', 'https://www.youtube.com/embed/He6rvmHNlz0?&autoplay=1', 'https://www.youtube.com/embed/_Zt1EuIEhvw?&autoplay=1', 'https://www.youtube.com/embed/0dguBIfVvsE?&autoplay=1', 'https://www.youtube.com/embed/AlufgbgLC8E?&autoplay=1', 'https://www.youtube.com/embed/Mh5LY4Mz15o?&autoplay=1', 'https://www.youtube.com/embed/W8QemjhYO5Y?&autoplay=1', 'https://www.youtube.com/embed/r7yLMN-nMu0?&autoplay=1', 'https://www.youtube.com/embed/LezARmLDu6U?&autoplay=1', 'https://www.youtube.com/embed/M6EGOPVw41I?&autoplay=1', 'https://www.youtube.com/embed/S4baePsCT_E?&autoplay=1', 'https://www.youtube.com/embed/UG075ukedHE?&autoplay=1', 'https://www.youtube.com/embed/W50BPUmk_eI?&autoplay=1', 'https://www.youtube.com/embed/XSNpGyG2jSw?&autoplay=1'];

function makeVideos () {
  for (var i = 0; i < vidName.length; i++) {
    new Video (vidName[i], duration[i], category[i], path[i]);
  }
}
makeVideos();

var humor = 0;
var educational = 0;
var diy = 0;
var satisfying = 0;
var selfImprovement = 0;

function tally (event) {
  var quiz = document.getElementById('quiz');
  spin();
  console.log(randSpin);
  if (questionIndex === 1) {
    localStorage.setItem('time', JSON.stringify(event.target.id));
    var q1 = document.getElementById('q1');

    quiz.style.display = 'none';
    q1.style.display = 'none';
    document.getElementById('rear').className = 'spin';

    setTimeout(function(){
      questionIndex++;
      console.log(questionIndex);
      var q2 = document.getElementById('q2');
      quiz.style.display = 'block';
      q2.style.display = 'block';
      document.getElementById('rear').className = '';

    }, randSpin);
  } else {
    if (event.target.className === 'educational friendly') {
      educational++;
    } else if (event.target.className === 'humor friendly') {
      humor++;
    } else if (event.target.className === 'diy friendly') {
      diy++;
    } else if (event.target.className === 'satisfying friendly') {
      satisfying++;
    } else if (event.target.className === 'self-improvement friendly') {
      selfImprovement++;
    }

    var currentQuestionId = 'q' + questionIndex;
    var currentQuestion  = document.getElementById(currentQuestionId);
    quiz.style.display = 'none';
    currentQuestion.style.display = 'none';
    document.getElementById('rear').className = 'spin';
    setTimeout(function(){
      questionIndex++;
      if (questionIndex > 7){
        for (var i = 0; i < list.length; i++) {
          list[i].removeEventListener('click', tally);
        };
        displayVideo();
        closing();
        return;
      }
      var nextQuestionId = 'q' + questionIndex;
      var nextQuestion  = document.getElementById(nextQuestionId);
      quiz.style.display = 'block';
      nextQuestion.style.display = 'block';
      document.getElementById('rear').className = '';
    }, randSpin);
  }
}
var list = document.getElementsByTagName('li');

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', tally);
}
var preference = ' ';

function displayVideo(){
  var embed = document.getElementById('embed');
  document.getElementById('rear').className = '';
  embed.style.display = 'block';
  if (humor > educational && humor > diy && humor > satisfying && humor > selfImprovement){
    preference = 'humor';
  } else if (educational > humor && educational > diy && educational > satisfying && educational > selfImprovement){
    preference = 'educational';
  } else if ( diy > educational && diy > humor && diy > satisfying && diy > selfImprovement){
    preference = 'diy';
  } else if (satisfying > educational && satisfying > diy && satisfying > humor && satisfying > selfImprovement){
    preference = 'satisfying';
  } else if (selfImprovement > educational && selfImprovement > diy && selfImprovement > humor && selfImprovement > satisfying){
    preference = 'selfImprovement';
  } else {
    preference = category[(Math.floor(Math.random() * category.length))];
  }
  for (var i = 0; i < videos.length; i++){
    if (preference === videos[i].category && JSON.parse(localStorage.getItem('time')) === videos[i].duration){
      document.getElementsByTagName('iframe')[0].src = videos[i].path;
    }
  }
}

var myDiv = document.getElementsByClassName('welcome')[0];
var myName = JSON.parse( localStorage.getItem( 'name' ));
var htmlHeader = document.getElementById('myHeader');
if (myName === null || myName === ' ') {
  htmlHeader.innerHTML = 'WELCOME TO YOUR QUIZ';
  myDiv.appendChild(htmlHeader);
} else {
  var myWelcome = 'HELLO ' + myName.toUpperCase() + '!' + ' ' + 'WELCOME TO YOUR QUIZ' ;
  htmlHeader.innerHTML = myWelcome;
  myDiv.appendChild(htmlHeader);
}

function closing () {
  if (preference === 'humor'){
    myPreference = 'fun';
  } else if (preference === 'educational'){
    myPreference = 'educational';
  } else if (preference === 'diy'){
    myPreference = 'do-it-yourself';
  } else if (preference === 'satisfying'){
    myPreference = 'satisfying';
  } else if (preference === 'selfImprovement'){
    myPreference = 'self improvement';
  }
  var myDiv = document.getElementsByClassName('welcome')[0];
  var htmlHeader = document.getElementById('myHeader');
  myDiv.removeChild(htmlHeader);
  var myName = JSON.parse(localStorage.getItem('name'));
  var myWelcome = 'CONGRATULATIONS, ' + myName.toUpperCase() + '! YOU\'VE WON THIS FABULOUS ' + myPreference + ' VIDEO!!' ;
  console.log(myName);
  if (myName === null || myName === ' ') {
    htmlHeader.innerHTML = 'CONGRATULATIONS, YOU\'VE WON THIS FABULOUS ' + myPreference + ' VIDEO!!';
    myDiv.appendChild(htmlHeader);
  } else {
    htmlHeader.innerHTML = myWelcome;
    myDiv.appendChild(htmlHeader);
  }
  localStorage.clear();
}
