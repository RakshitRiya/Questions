var numberofseconds = parseInt(prompt("Enter number of seconds"));
if(isNaN(numberofseconds)){
  document.write("please give a valid input")
  exit();
}
var hours = Math.floor(numberofseconds / 60 / 60);
var minutes = Math.floor(numberofseconds / 60) - (hours * 60);
var seconds = numberofseconds % 60;
document.write("Hours= "+hours+" minutes= "+minutes+" seconds= "+seconds);
