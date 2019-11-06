function messSecret(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] >= "A" && [i] <= "Z") {
            return words[i];
        } else {
            return -1;

        }
    }
}

console.log(messSecret("Ciao come Stai"));
console.log(messSecret("La Sole è Giallo"))