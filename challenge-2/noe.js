var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(race) {
        this.race = race;
    }
    Animal.prototype.clicClac = function () {
        console.log("C'est dans la boite, quelle belle photo de ".concat(this.race));
    };
    return Animal;
}());
var FourPaws = /** @class */ (function (_super) {
    __extends(FourPaws, _super);
    function FourPaws() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberPaws = 4;
        return _this;
    }
    FourPaws.prototype.caress = function () {
        console.log("".concat(this.race, " adore les caresse, il est tout content."));
    };
    return FourPaws;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        console.log("Il est 3h du matin, c'est mon heure.  MIIAAAOUUUU!!! pense ".concat(this.race));
    };
    return Cat;
}(FourPaws));
var European = /** @class */ (function (_super) {
    __extends(European, _super);
    function European() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = "noir";
        return _this;
    }
    European.prototype.food = function () {
        console.log("Et une gamelle pour ".concat(this.race));
    };
    return European;
}(Cat));
var Chartreux = /** @class */ (function (_super) {
    __extends(Chartreux, _super);
    function Chartreux() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chartreux;
}(Cat));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.barking = function () {
        console.log("".concat(this.race, " aboie et la caravane passe"));
    };
    return Dog;
}(FourPaws));
var TerreNeuve = /** @class */ (function (_super) {
    __extends(TerreNeuve, _super);
    function TerreNeuve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = "noir";
        return _this;
    }
    TerreNeuve.prototype.food = function () {
        console.log("Et une grosse gamelle pour ".concat(this.race));
    };
    return TerreNeuve;
}(Dog));
var MoonMoon = /** @class */ (function (_super) {
    __extends(MoonMoon, _super);
    function MoonMoon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MoonMoon;
}(Dog));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.free = function () {
        console.log("Ouvrez ouvez la cage \u00E0 ".concat(this.race));
    };
    return Bird;
}(Animal));
var Merle = /** @class */ (function (_super) {
    __extends(Merle, _super);
    function Merle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = "noir";
        return _this;
    }
    Merle.prototype.food = function () {
        console.log("Et une petite gamelle pour ".concat(this.race));
    };
    return Merle;
}(Bird));
var Mesange = /** @class */ (function (_super) {
    __extends(Mesange, _super);
    function Mesange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mesange;
}(Bird));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.prototype.ploufPlouf = function () {
        console.log("".concat(this.race, " fait des bonds a la surface de l'eau"));
    };
    return Fish;
}(Animal));
var Insect = /** @class */ (function (_super) {
    __extends(Insect, _super);
    function Insect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insect.prototype.grouille = function () {
        console.log("BEUURRRKKK!!! des ".concat(this.race));
    };
    return Insect;
}(Animal));
//chat
var european = new European("Européen");
var chartreux = new Chartreux("Chartreux");
//chien
var terreNeuve = new TerreNeuve("Terre Neuve");
var moonMoon = new MoonMoon("Moon Moon");
//oisseaux
var mesange = new Mesange("Mésange");
var merle = new Merle("Merle");
//poisson
var thuna = new Fish("Thon");
var shark = new Fish("Requin");
//insecte
var worm = new Insect("Asticot");
thuna.clicClac();
chartreux.meow();
moonMoon.barking();
terreNeuve.food();
mesange.free();
merle.food();
shark.ploufPlouf();
european.food();
worm.grouille();
