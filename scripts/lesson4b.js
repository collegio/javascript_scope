/*

	Learn to Code JavaScript: Lesson 4
	Scope

	Let's take a look at how scope is determined in JavaScript

*/

// You can always use variables in the scope of your parent. Currently, we
// are in the global scope, which is accessible by any part of your script.

var alwaysAvailable = "This message is always available";

function printMessage() {
	console.log(alwaysAvailable);	// alwaysAvailable is in the global scope, will print
}

printMessage();

// However, let's see what happens when we declare a variable in a function, but
// try and print it in the global namespace

function printNewMessage() {
	var maybeAvailable = "This message may be available, but it may not.";
	console.log(maybeAvailable);	// This will print because maybeAvailable is in the same scope
}

// Let's use a try statment so that our script doesn't shut down
try {
	console.log(maybeAvailable);	// ALERT! This will not print the string.
} catch(e) {
	console.log("The maybeAvailable variable isn't available!")
}

// maybeAvailable is not in the global scope, therefore, it cannot be accessed here.
// It is always good to limit the scope of your variables to only what is needed.

