function isPangramma(str) {
    if (typeof (str) !== "string") {
        throw "Not a string";
    }
    if (str.length < 26) {
        return false;
    }
    let aux = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
    for (let i = o; i < str.length; i++){
        if (aux.has(str[i].toLowerCase())){
        } else {
            continue
        }
        };
    if (aux.size === 0) {
        return true;
    } else {
        return false;
    }

}
