var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var homme = new Person("John", 40);
var femme = new Person("Mary", 35);
homme.tellMyName();
homme.tellMyAge();
femme.tellMyName();
femme.tellMyAge();
