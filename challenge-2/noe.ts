class Animal {
	race: string;

	constructor(race: string) {
		this.race = race;
	}

	clicClac() {
		console.log(`C'est dans la boite, quelle belle photo de ${this.race}`);
	}
}

interface CrunchCrunch {
	color: string;
	food(): void;
}

class FourPaws extends Animal {
	numberPaws: number = 4;

	caress() {
		console.log(`${this.race} adore les caresse, il est tout content.`);
	}
}

class Cat extends FourPaws {
	meow() {
		console.log(
			`Il est 3h du matin, c'est mon heure.  MIIAAAOUUUU!!! pense ${this.race}`,
		);
	}
}

class European extends Cat implements CrunchCrunch {
	color = "noir";
	food() {
		console.log(`Et une gamelle pour ${this.race}`);
	}
}

class Chartreux extends Cat {}

class Dog extends FourPaws {
	barking() {
		console.log(`${this.race} aboie et la caravane passe`);
	}
}

class TerreNeuve extends Dog implements CrunchCrunch {
	color = "noir";
	food() {
		console.log(`Et une grosse gamelle pour ${this.race}`);
	}
}

class MoonMoon extends Dog {}

class Bird extends Animal {
	free() {
		console.log(`Ouvrez ouvez la cage à ${this.race}`);
	}
}

class Merle extends Bird implements CrunchCrunch {
	color = "noir";
	food() {
		console.log(`Et une petite gamelle pour ${this.race}`);
	}
}

class Mesange extends Bird {}

class Fish extends Animal {
	ploufPlouf() {
		console.log(`${this.race} fait des bonds a la surface de l'eau`);
	}
}

class Insect extends Animal {
	grouille() {
		console.log(`BEUURRRKKK!!! des ${this.race}`);
	}
}
//chat
const european = new European("Européen");
const chartreux = new Chartreux("Chartreux");
//chien
const terreNeuve = new TerreNeuve("Terre Neuve");
const moonMoon = new MoonMoon("Moon Moon");
//oiseaux
const mesange = new Mesange("Mésange");
const merle = new Merle("Merle");
//poisson
const thuna = new Fish("Thon");
const shark = new Fish("Requin");
//insecte
const worm = new Insect("Asticot");

thuna.clicClac();
chartreux.meow();
moonMoon.barking();
terreNeuve.food();
mesange.free();
merle.food();
shark.ploufPlouf();
european.food();
worm.grouille();
