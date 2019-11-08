function ar(array, value) {
    if (value > array.length) {
        return -1;
    }
    let result = array[value] ** value;
    return result;
}

console.log(ar([1, 2], 3));
console.log(ar([1, 2, 3, 4], 2));
console.log(ar([11, 22, 43, 94], 3));
