var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// 1. 
function problemOne() {
	for (var i = 0; i < animals.length-1; i++) {
	console.log(animals[i])
	}
}

// 2. 
function probleTwo() {
	for (var i = 0; i < animals.length; i++) {
		console.log(animals[i])
		i++
	};
}

// 3.
function problemThree() {
	for (var i = animals.length-1; i >= 0; i--) {
		console.log(animals[i])
	}
}

function problemFour() {
	for (var i = 0; i < animals.length; i++) {
		if (i === 0 || i === animals.length - 1) {
			console.log(animals[i])
		}
		else {
			console.log(animals[i])
			console.log(animals[i])
		}
	}
}