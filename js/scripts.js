var txt;
var loCal;
var transPo;

function vaCay() {
	var vacationType = prompt("What kind of trip would you like to go on?", "musical, tropical, or adventurous");
		console.log(vacationType);

		if (vacationType == null || vacationType == "") {
		alert("Please choose the type of vacation you would like to go on")
	} else if (vacationType === 'musical') {
			var loCal = "New Orleans";
	} else if (vacationType === 'tropical') {
			var loCal = "a beach resort in Mexico";
	} else if (vacationType === 'adventurous') {
			var loCal = "go whitewater rafting the Grand Canyon";
	}

	var groupSize = prompt("How many are in your group?", "Enter a number");
		console.log(groupSize);

	if ((groupSize > 0) && (groupSize <= 2)) {
			var transPo = "a first class flight";
	} else if ((groupSize >= 3) && (groupSize < 6)) {
			var transPo = "a helicopter";
	}	else if (groupSize >= 6) {
			var transPo = "a charter flight";
	}

	if (transPo && loCal) {
		var txt;
		var result = "Since you are a group of "+ groupSize +" going on a "+ vacationType +" you should take "+ transPo +" to "+ loCal +".";
		alert(result);
		console.log(result);
	}
}
