//partie 1

function add(a: number, b: number) {
	return a + b;
}

console.log(add(4, 2));

function hello(name: string) {
	console.log("Hello " + name);
}

var firstName = "paul";

hello(firstName);
hello(firstName + " marley");

function concat(a: string, b: string) {
	return a + b;
}

var ds = concat("Donkey", concat(" ", "School"));
console.log(ds);
