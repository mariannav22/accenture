function asWord(value){
    if(value===0){
    return 0;
}
    else if(value===1){
    return 1;
}
    else if(value===2){
    return 2;
}
    else if (value===3){
    return 3;
}
    else if (value===4){
    return 4;
}
    else if (value===5){
    return 5;
}
    else if (value===6){
    return 6;
}
    else if (value===7){
    return 7;
}
    else if(value===8){
    return 8;
}
    else if (value===9){
    return 9;
}
    else{
        return undefined;
    }
}

console.log(asWord(5));
console.log(asWord(18));
