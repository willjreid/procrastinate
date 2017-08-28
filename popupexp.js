'use strict';

var videos = [];

function Video (name, duration, category, path) {
  this.name = name;
  this.duration = duration;
  this.category = category;
  this.path = path;
  videos.push(this);
}

var vidName = ['laughing', 'science', 'hotKnife', 'cageBike', 'jarStory'];
var duration = ['short', 'short', 'short', 'short', 'short'];
var category = ['humor', 'educational', 'satisfying', 'diy', 'selfImprovement'];
var path = ['https://www.youtube.com/embed/Kv4XUaFERds', 'https://static01.nyt.com/video/players/offsite/index.html?videoId=100000002459293', 'https://www.youtube.com/embed/Dye7-cHhd64', 'https://www.youtube.com/embed/_dfV6LcYf9c', 'https://www.youtube.com/embed/v5ZvL4as2y0'];

function makeVideos () {
  for (var i = 0; i < vidName.length; i++) {
    new Video (vidName[i], duration[i], category[i], path[i]);
  }
}
makeVideos();

var ul = document.getElementById('question1');
ul.onclick = function(event) {
  // var target = event.target;
  //alert(event.target.id);
  localStorage.setItem('time', JSON.stringify(event.target.id));
};

var humor = 0;
var educational = 0;
var diy = 0;
var satisfying = 0;
var selfImprovement = 0;

var list = document.getElementsByClassName('questions');

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', tally);
};
var preference = ' ';

function displayVideo(){
  if (humor > educational && humor > diy && humor > satisfying && humor > selfImprovement){
    preferernce = 'humor';

  } else if (educational > humor && educational > diy && educational > satisfying && educational > selfImprovement){
    preference = 'educational';
  } else if ( diy > educational && diy > humor && diy > satisfying && diy > selfImprovement){
    preference = 'diy';
  } else if (satisfying > educational && satisfying > diy && satisfying > humor && satisfying > selfImprovement){
    preference = 'satisfying';
  } else if (selfImprovement > educational && selfImprovement > diy && selfImprovement > humor && selfImprovement > satisfying){
    preference = 'selfImprovement';
  }
  for (var i = 0; i < videos.length; i++){
    if (preference === videos[i].category && JSON.parse(localStorage.getItem('time')) === videos[i].duration){
      document.getElementsByTagName('iframe')[0].src = videos[i].path;
    }
  }
}
function tally (event) {
//  alert(event.target.className);
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
  if(humor + educational + diy + satisfying + selfImprovement === 6){
    for (var i = 0; i < list.length; i++) {
      list[i].removeEventListener('click', tally);
    };
    displayVideo();
  }
}
