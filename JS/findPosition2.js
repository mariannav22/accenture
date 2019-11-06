function findPosition(data, value) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === value) {
            return i;
        }
    }
    return -1;
}

function findPositionEnd(data, value) {
    for (let i = data.length-1; i >=0 ; i--) {
        if (data[i] === value) {
            return i;
        }
    }
    return -1;
}


console.log(findPosition([1, 1], 1) === 0);
console.log(findPosition([4, 2, 3], 3) === 2);


console.log(findPosition([4, 2, 3, 7, 18, 22], 22) === 5);


console.log(findPositionEnd([1, 1], 1) === 1);
console.log(findPositionEnd([4, 2, 3], 3) === 2);
