function divisible(numb) {
    if (numb % 3 == 0 && numb % 5 == 0) {
        return ("Fizz Buzz");
    }
    else if (numb % 3 == 0) {
        return ("Fizz");
    }
    else {
        return ("Buzz");
    }
}

console.log(divisible(15));
console.log(divisible(3));
console.log(divisible(20));