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
	var stringarray = new Array(T);
	var i=0;
	while(i<stringarray.length){
		var value=prompt("Enter "+(i+1)+" string");
		if((value.charAt(0)>='A'&&value.charAt(0)<='Z')||(value.charAt(0)>='a'&&value.charAt(0)<='z'))
			{
				stringarray[i]=value.toUpperCase();
				i++;
			}
		else{
			alert("Please enter a string that starts with an alphabet")
		}
	}
		stringarray.sort(function(a,b){
			if (a.charAt(0) < b.charAt(0)) {
        		return -1;
    		}
    		if (b.charAt(0) < a.charAt(0)) {
        		return 1;
    		}
    		return 0;
		});

		var result="";
		for(var i=0;i<stringarray.length;i++){
			result=result+stringarray[i]+"<br>";
		}
	document.getElementById('root').innerHTML=result;
</script>
</body>
</html>
