class Person {
    first: string;
    last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;

    }
    get fullInfo() {
        return this.first + ' ' + this.last;
        
    }
    fullName(): string {
        return this.first + ' ' + this.last;
    }
    set fullName(name: string) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
    
    static merge(p1: Person, p2: Person) {
        return new Person(p1.first + p2.first, p1.last + p2.last)
    }
}

let p: Person = new Person('Tom', 'Jones');



let persons = [new Person('a', 'b'), new Person('c', 'd')];

persons.forEach((p) => {
    console.log(p.fullInfo());

});
