function isOdd(value) {
    if(!Number.isInteger(value)) {
        return undefined;
    }

    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd("ciao"));
console.log(isOdd(4.3));