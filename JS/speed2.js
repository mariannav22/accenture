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


console.log(speed(10,2)===5);
console.log(speed("ciao","mamma")===undefined);
console.log(speed(-10,-2)===undefined);