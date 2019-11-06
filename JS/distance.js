function distance(x1, y1, x2, y2) {
    let x = Math.abs(x1 - x2)
    let y = Math.abs(y1 - y2)
    let result = Math.sqrt(x ** 2 + y ** 2)

    return result;

}

console.log(distance(5, 2, 5, 2))