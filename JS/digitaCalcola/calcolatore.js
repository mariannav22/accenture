function roman(value) {
    let m = Math.floor(value / 1000);
    let resto = (value % 1000);
    let d = Math.floor(resto / 500);
    resto = (resto % 500);
    let c = Math.floor(resto / 100);
    resto = (resto % 100);
    let l = Math.floor(resto / 50);
    resto = (resto % 50);
    let x = Math.floor(resto / 10);
    resto = (resto % 10);
    let v = Math.floor(resto / 5);
    let i = (resto % 5);
    let result = '';
    for (let j = 0; j < m; j++) {
        result += 'M';
    }

    if (d === 1 && c === 4) {
        result += 'CM';
    }
    else if (d === 0 && c < 4 && c !== 0) {
        result += 'D';
        for (let j = 0; j < c; j++); {
            result += 'C';
        }
    }
    else if (d === 0 && c === 4) {
        result += 'CD';
    }
    else {
        for (let j = 0; j < c; j++) {
            result += 'C';
        }
    }

    if (l === 1 && x === 4) {
        result += 'XC';
    }
    else if (l === 1 && x < 4 && x !== 0) {
        result += 'L';
        for (let j = 0; j < x; j++) {
            result += 'X';
        }
    }
    else if (l === 0 && x === 4) {
        result += 'XL';
    }
    else {
        for (let j = 0; j < x; j++) {
            result += 'X';
        }
    }

    if (v === 1 && i === 4) {
        result += 'IX';
    }
    else if (v === 1 && i < 4 && i !== 0) {
        result += 'V';
        for (j = 0; j < i; j++) {
            result += 'I';
        }
    }
    else if (v === 0 && i === 4) {
        result += 'IV';
    }
    else {
        for (let j = 0; j < i; j++) {
            result += 'I';
        }
    }
    return result;
}

console.log(roman(1));
console.log(roman(10));
console.log(roman(1000));

function convert() {
    let input = document.getElementById('nmb').value;
    document.getElementById('result').value = roman(input);
}