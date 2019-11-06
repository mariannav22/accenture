function asWord(value){
    if(value===0)
    return "zero";
    else if (value===1)
    return "one";
    else if (value===2)
    return "two";
    else if (value===3)
    return "three";
    else if (value===4)
    return "four";
    else if (value===5)
    return "five";
    else if (value===6)
    return "six";
    else if (value===7)
    return "seven";
    else if (value===8)
    return "eight";
    else if (value===9)
    return "nine";
    else 
    return "undefined";
}

console.log(asWord(7));
console.log(asWord(10));