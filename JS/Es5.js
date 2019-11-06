function digitMultipl(value) {
    let product = 1;
    let molt = 1;
    while (value !== 0) {
        if (value % 10 === 0) {
            molt = Math.floor(value / 10);
            molt = value % 10 * product;
            value = Math.floor(value / 10);
        } else {
            product *= value % 10;
            value = Math.floor(value / 10);
        }
    }
    return product;   
}

console.log(digitMultipl(13) === 3);
console.log(digitMultipl(110) === 1);
console.log(digitMultipl(660) === 36);
