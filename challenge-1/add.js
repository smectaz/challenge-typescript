function addition(a, b) {
	return a + b;
}

console.log(addition(4, 2));

function hello(name) {
	console.log("Hello " + name);
}

var firstName = "bob";

hello(firstName);

hello(firstName + " marley");

function concat(a, b) {
	return a + b;
}

var ds = concat("Donkey", concat(" ", "School"));

console.log(ds);
