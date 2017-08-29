'use strict';

var videos = [];
var questionIndex = 0;

function Video (name, duration, category, path) {
  this.name = name;
  this.duration = duration;
  this.category = category;
  this.path = path;
  videos.push(this);
}

var vidName = ['laughing', 'science', 'hotKnife', 'cageBike', 'jarStory', 'candlelight', 'wine-school', 'pouring', 'ice-cream', 'intro', 'fails', 'japan', 'moulding-forms', 'handyman', 'fitness', 'babies', 'nietzsche', 'paint', 'pergola', 'chopra'];
var duration = ['short', 'short', 'short', 'short', 'short', 'medium', 'medium', 'medium', 'medium', 'medium', 'long', 'long', 'long', 'long', 'long', 'crazy', 'crazy', 'crazy', 'crazy','crazy'];
var category = ['humor', 'educational', 'satisfying', 'diy', 'selfImprovement', 'humor', 'educational', 'satisfying', 'diy', 'selfImprovement', 'humor', 'educational', 'satisfying', 'diy', 'selfImprovement', 'humor', 'educational', 'satisfying', 'diy', 'selfImprovement'];
var path = ['https://www.youtube.com/embed/Kv4XUaFERds', 'https://static01.nyt.com/video/players/offsite/index.html?videoId=100000002459293', 'https://www.youtube.com/embed/Dye7-cHhd64', 'https://www.youtube.com/embed/_dfV6LcYf9c', 'https://www.youtube.com/embed/v5ZvL4as2y0', 'https://www.youtube.com/embed/qSJCSR4MuhU', 'https://www.youtube.com/embed/bVNVVgiwZTs?list=PL80E1D1621CEE5D4B', 'https://www.youtube.com/embed/He6rvmHNlz0', 'https://www.youtube.com/embed/_Zt1EuIEhvw', 'https://www.youtube.com/embed/0dguBIfVvsE', 'https://www.youtube.com/embed/sM1hIFP2hio', 'https://www.youtube.com/embed/Mh5LY4Mz15o', 'https://www.youtube.com/embed/W8QemjhYO5Y', 'https://www.youtube.com/embed/r7yLMN-nMu0', 'https://www.youtube.com/embed/LezARmLDu6U', 'https://www.youtube.com/embed/M6EGOPVw41I', 'https://www.youtube.com/embed/S4baePsCT_E', 'https://www.youtube.com/embed/UG075ukedHE', 'https://www.youtube.com/embed/W50BPUmk_eI', 'https://www.youtube.com/embed/XSNpGyG2jSw'];

function makeVideos () {
  for (var i = 0; i < vidName.length; i++) {
    new Video (vidName[i], duration[i], category[i], path[i]);
  }
}
makeVideos();

// var ul = document.getElementById('question1');
//
// ul.onclick = function(event) {
//   // var target = event.target;
//   //alert(event.target.id);
//   localStorage.setItem('time', JSON.stringify(event.target.id));
//   var q1 = document.getElementById('q1');
//   q1.style.display = 'none';
//   setTimeout(function(){
//     questionIndex++;
//     var q2 = document.getElementById('q2');
//     q2.style.display = 'block';
//   }, 500);
// };


var humor = 0;
var educational = 0;
var diy = 0;
var satisfying = 0;
var selfImprovement = 0;

function tally (event) {
//  alert(event.target.className);
  if (questionIndex === 1) {
    localStorage.setItem('time', JSON.stringify(event.target.id));
    var q1 = document.getElementById('q1');
    q1.style.display = 'none';
    setTimeout(function(){
      questionIndex++;
      var q2 = document.getElementById('q2');
      q2.style.display = 'block';
    }, 500);
  } else {
    if (event.target.className === 'educational') {
      educational++;
    } else if (event.target.className === 'humor') {
      humor++;
    } else if (event.target.className === 'diy') {
      diy++;
    } else if (event.target.className === 'satisfying') {
      satisfying++;
    } else if (event.target.className === 'self-improvement') {
      selfImprovement++;
    }

    var currentQuestionId = 'q' + questionIndex;
    var currentQuestion  = document.getElementById(currentQuestionId);
    currentQuestion.style.display = 'none';
    setTimeout(function(){
      questionIndex++;
      if (questionIndex > 7){
        for (var i = 0; i < list.length; i++) {
          list[i].removeEventListener('click', tally);
        };
        displayVideo();
        return;
      }
      var nextQuestionId = 'q' + questionIndex;
      var nextQuestion  = document.getElementById(nextQuestionId);
      nextQuestion.style.display = 'block';
    }, 500);
  }
}
var list = document.getElementsByTagName('li');

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', tally);
}
var preference = ' ';

function displayVideo(){
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

var startBtn = document.getElementById('startBtn');
startBtn.onclick = function(){
  var quiz = document.getElementById('quiz');
  quiz.style.display = 'block';
  setTimeout(function(){
    questionIndex++;
    var q1 = document.getElementById('q1');
    q1.style.display = 'block';
    startBtn.style.display = 'none';
  }, 500);
};
