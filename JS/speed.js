function speed(distance, time) {
    if (distance <= 0 || time <= 0) {
        return undefined;
    }
    else if (typeof distance !== "number" || typeof time !== "number") {
        return undefined;
    }
    else {
        let velocity = distance / time;
        return velocity;
    }
}

console.log(speed("alt", "ciao") === undefined);
console.log(speed(-5, 2)=== undefined);
console.log(speed(-5, -4) === undefined);
console.log(speed(100, 10)===10);