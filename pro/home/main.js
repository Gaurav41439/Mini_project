// DO NOT TOUCH ANYTHING UPTO LINE 154!!!!

// DO NOT TOUCH ANYTHING ABOVE THIS AND USE VERY SPECIFIC VARIABLE NAMES

function randcol(){
          

      //console.log("hello");  
      // selecting random color
      let hex_no1 = Math.floor(Math.random()*255);

      let hex_no2 = Math.floor(Math.random()*255);
      let hex_no3 = Math.floor(Math.random()*255);
      //console.log(hex_no1, hex_no2, hex_no3); 
        
      var ink = document.getElementById('pick');
      ink.style.color = "rgb(" + hex_no3 + "," +hex_no2 + "," + hex_no1 + ")" ;
}

function norm(){
  var ink = document.getElementById('pick');
      ink.style.color = "rgb(255,255,255)";
}

