function isEven(b) {
    if (typeof (b) !== "number" || b % 1 !== 0) {
        return undefined;

    }


    else if ( b % 2 === 0) {
        return true;

    }
    else {

        return false;
    }
}
console.log(isEven (0)===true);
console.log(isEven (2)===true);
console.log(isEven (2.5)=== undefined);
console.log(isEven ("pizza")=== undefined);
console.log(isEven (3)===false);