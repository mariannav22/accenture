function distanceOrigin(x, y)
let result1 = x - 0
let result2 = y - 0
let result = Math.sqrt(result1 ** 2 + result2 ** 2)
return result;


function score(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return undefined;
    }
    let distance = distanceOrigin(x, y)

    if (distance <= 1) {
        return 10;
    }
    else if (distance <= 5) {
        return 5;
    }
    else if (distance <= 10) {
        return 1;
    }
    else
        return 0;
}

console.log(score(6,6));