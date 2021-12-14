class Person {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	tellMyName() {
		console.log(`I am ${this.name}`);
	}

	tellMyAge() {
		console.log(`I am ${this.age} years old`);
	}
}

const homme = new Person("John", 40);
const femme = new Person("Mary", 35);

homme.tellMyName();
homme.tellMyAge();

femme.tellMyName();
femme.tellMyAge();
