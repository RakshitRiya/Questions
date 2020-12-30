var timestamp = parseInt(prompt("Enter number of seconds"));
var hours = Math.floor(timestamp / 60 / 60);
var minutes = Math.floor(timestamp / 60) - (hours * 60);
var seconds = timestamp % 60;
document.write("Hours= "+hours+" minutes= "+minutes+" seconds= "+seconds);
