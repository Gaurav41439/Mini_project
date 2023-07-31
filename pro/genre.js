// empty array hai ye
const selected_genre = [];
var i = 0;
function select(elementId){
 
  // ink is a temp variable that contains the selected genre
  var ink = document.getElementById(elementId);
  
  // selected button ka colour change kiya to show it's selected
  ink.style.background = "green";
  ink.style.color = "white";
 
 // selected genre appended to the empty array so that's it stored somewhere for future use
  selected_genre[i] = ink;
  console.log(selected_genre[i]);
  i = i+1;

}

function myFunc(param) {
  console.log(param)
}