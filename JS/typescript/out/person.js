class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullInfo() {
        return this.first + ' ' + this.last;
    }
    fullName() {
        return this.first + ' ' + this.last;
    }
    set fullName(name) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
    static merge(p1, p2) {
        return new Person(p1.first + p2.first, p1.last + p2.last);
    }
}
let p = new Person('Tom', 'Jones');
let persons = [new Person('a', 'b'), new Person('c', 'd')];
persons.forEach((p) => {
    console.log(p.fullInfo());
});
//# sourceMappingURL=person.js.map