// empty array hai ye
var count = 0;
var button = document.getElementById('add');

const string = [];
function select(elementId){
  var i =0;


  var ink = document.getElementById(elementId);
  if (string.includes(ink.id)){
    
    const index = string.indexOf(ink.id);
    if (index > -1) { // only splice array when item is found
      string.splice(index, 1); // 2nd parameter means remove one item only
    }
    ink.style.background = "white";
    ink.style.color = "green";
    console.log(string);
  }
  else{
    string.push(ink.id);
    ink.style.background = "green";
    ink.style.color = "white";
    console.log(string);
  }

}


