var short = false;
var medium = false;
var long = false;
var crazy = false;

// function time1() {
//   short = true;
// }
// function time2() {
//   medium = true;
// }
// function time3() {
//   long = true;
// }
// function time4() {
//   crazy = true;
// }

// fuction question1 () {
//
// }

function question1(event) {
  event = event || window.event;
  return event.target || event.srcElement;
}

var ul = document.getElementById('question1');
ul.onclick = function(event) {
  var target = getEventTarget(event);
  alert(target.innerHTML);
};
