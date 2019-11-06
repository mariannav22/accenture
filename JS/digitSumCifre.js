function digitSum(number) {
    if (typeof (number) !== "number" || number % 1 !== 0) {
        return undefined;
    }
    else {
        let sum = 0;
        while (number !== 0) {

            sum = number % 10 + sum
            number = Math.floor(number / 10)
        }
        return sum;
    }
}

console.log(digitSum(1) === 1);
console.log(digitSum(2) === 2);
console.log(digitSum(10) === 1);
console.log(digitSum(22) === 4);
console.log(digitSum(189) === 18);
console.log(digitSum("ciao") === undefined);