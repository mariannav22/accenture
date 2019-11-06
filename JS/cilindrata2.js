function cilindrata(alesaggio, corsa, cilindri) {
    if (typeof alesaggio !== "number" || typeof corsa !== "number" || typeof cilindri !== "number") {
        return undefined;
    }
    else {
        return (alesaggio / 2) ** 2 * Math.PI * corsa * cilindri/1000;
    }
}

console.log(cilindrata(71, 84, 3));