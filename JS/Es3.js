function indexPower(array, n) {
    if (n < 0 || n > array.length - 1) {
        return -1;
    } else {
        return array[n] ** n;
    }
}
console.log(indexPower([1, 2, 3, 4], 2) === 9);
console.log(indexPower([1, 2, 3, 4], 5) === -1);