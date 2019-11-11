class furredAnimals {
    breed: string;
    name: string;
    constructor(breed: string, name: string) {
        this.breed = breed;
        this.name = name;
    }
    brush(): string {
        return "L'animale è di razza " + this.breed + ' e si chiama ' + this.name;
    }
}

let animal = new furredAnimals("pastore tedesco", "Laila")

console.log(animal.brush());

class dogs extends furredAnimals {

    color: string;
    age: number;
    constructor(breed: string, name: string, color: string, age: number) {
        super(breed, name);//richiamo il costruttore della classe madre
        this.color = color;
        this.age = age;
    }
    brush() {
        return super.brush() + " , è di colore " + this.color + " ed ha " + this.age + "mesi"{
            
        }
    }
}

let dog = new dogs("pastore tedesco", "Laila", "marrone e nero", 10)
console.log(dog.brush());

let vect: furredAnimals[]= [new dogs ("pastore tedesco", "Laila", "marrone e nero", 18)];
vect.forEach((x)=>{console.log(x.brush())});



class cats extends furredAnimals {

    color: string;
    age: number;
    constructor(breed: string, name: string, color: string, age: number) {
        super(breed, name);//richiamo il costruttore della classe madre
        this.color = color;
        this.age = age;
    }
    brush() {
        return super.brush() + " , è di colore " + this.color + " ed ha " + this.age + "mesi"{
            
        }
    }
}

let cat = new cats("meticcio", "Minu", "bianca e nera", 10)
console.log(dog.brush());

let vec: furredAnimals[]= [new cats ("meticcio", "Minu", "bianca e nera", 18)];
vec.forEach((x)=>{console.log(x.brush())});


class toy {
    color: string;
    name: string;
    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    brush(): string {
        return "L'orso è di colore " + this.color + ' e si chiama ' + this.name;
    }
}

let giochi = new toy("marrone", "Balu")

console.log(giochi.brush());

class teddyB extends toy {

    breed: string;
    age: number;
    constructor(color: string, name: string, breed: string, age: number) {
        super(color, name);//richiamo il costruttore della classe madre
        this.color = color;
        this.name = name;
    }
    brush() {
        return super.brush() + " , è di colore " + this.color + " e si chiama " + this.name {
            
        }
    }
}

