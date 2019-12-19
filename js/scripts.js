//vacation type
var vacationType = prompt("What kind of trip would you like to go on?", "musical, tropical, or adventurous");

//where to
if (vacationType === 'musical') {
		var loCal = "New Orleans";
} else if (vacationType === 'tropical') {
		var loCal = "a beach vacation in Mexico";
} else if (vacationType === 'adventurous') {
		var loCal = "whitewater rafting the Grand Canyon";
}

//group Size
var groupSize = prompt("How many are in your group?", "Enter a number");

//tranporation
if (groupSize <=2 ) {
		var transPo = "a first class flight";
} else if ((groupSize >= 3) && (groupSize < 6)) {
		var transPo = "a helicopter";
}	else if (groupSize >= 6) {
		var transPo = "a charter flight";
}

// final output and recommendation

if ( transPo && loCal) {
	var txt;
	var result = "Since you are a group of "+ groupSize +" going on a "+ vacationType +" you should take "+ transPo +" to "+ loCal +".";
	console.log(result);
}
	{ txt = "Since you are a group of "+ groupSize +" going on a "+ vacationType +" vacation, you should take "+ transPo +" to "+ loCal +".";
	document.getElementById("here").innerHTML = txt;
}
