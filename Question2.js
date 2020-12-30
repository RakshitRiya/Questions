<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div id="root">
	</div>
	<script>
	var T= parseInt(prompt("Enter the number of testcases"));
	if(isNaN(T)){
		alert("Please enter a valid input")
		exit()
	}
	var cases = new Array(T);
	for(var i=0;i<cases.length;i++){
		cases[i]=new Array(2);
	}
	for(var i=0;i<cases.length;i++){
		alert((i+1)+" case");
		for(var j=0;j<2;j++){
			if(j==0){
				var numL=parseInt(prompt("Enter the left side"));
				if(isNaN(numL)){
					alert("Please enter a valid input")
					exit()
				}
				cases[i][0]=numL;
			}
			else {
				var numR=parseInt(prompt("Enter the right side"));
				if(isNaN(numR)){
					alert("Please enter a valid input")
					exit()
				}
				cases[i][1]=numR;
			}
		}
	}

	var output= document.getElementById('root');
	var result="";

	for(var i=0;i<cases.length;i++){
			result= result+checkEvenOrOddXOR(cases[i][0],cases[i][1])+"<br>";
	}

	output.innerHTML=result;

	function checkEvenOrOddXOR(L, R){
   		var oddCount = Math.floor((R - L) / 2);   
   		if (R % 2 == 1 || L % 2 == 1) {
     		oddCount++; 
   		} 
   		if (oddCount % 2 == 0) 
       		return "Even"; 
   		else
       		return "Odd"; 
}
</script>
</body>
</html>
