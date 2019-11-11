class furredAnimals {
    constructor(breed, name) {
        this.breed = breed;
        this.name = name;
    }
    brush() {
        return "L'animale è di razza " + this.breed + ' e si chiama ' + this.name;
    }
}
let animal = new furredAnimals("pastore tedesco", "Laila");
console.log(animal.brush());
class dogs extends furredAnimals {
    constructor(breed, name, color, age) {
        super(breed, name); //richiamo il costruttore della classe madre
        this.color = color;
        this.age = age;
    }
    brush() {
        return super.brush() + " , è di colore " + this.color + " ed ha " + this.age + "mesi";
        {
        }
    }
}
let dog = new dogs("pastore tedesco", "Laila", "marrone e nero", 10);
console.log(dog.brush());
let vect = [new dogs("pastore tedesco", "Laila", "marrone e nero", 18)];
vect.forEach((x) => { console.log(x.brush()); });
class cats extends furredAnimals {
    constructor(breed, name, color, age) {
        super(breed, name); //richiamo il costruttore della classe madre
        this.color = color;
        this.age = age;
    }
    brush() {
        return super.brush() + " , è di colore " + this.color + " ed ha " + this.age + "mesi";
        {
        }
    }
}
let cat = new cats("meticcio", "Minu", "bianca e nera", 10);
console.log(dog.brush());
let vec = [new cats("meticcio", "Minu", "bianca e nera", 18)];
vec.forEach((x) => { console.log(x.brush()); });
class toy {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    brush() {
        return "L'orso è di colore " + this.color + ' e si chiama ' + this.name;
    }
}
let giochi = new toy("marrone", "Balu");
console.log(giochi.brush());
class teddyB extends toy {
    constructor(color, name, breed, age) {
        super(color, name); //richiamo il costruttore della classe madre
        this.color = color;
        this.name = name;
    }
    brush() {
        return super.brush() + " , è di colore " + this.color + " e si chiama " + this.name;
        {
        }
    }
}
//# sourceMappingURL=furredAnimal.js.map