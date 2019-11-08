function prodotto(value) {
    let product = 1
    let moltiplicazione = 1
    while (value !== 0)
        if (value % 1 === 0) {
            moltiplicazione = Math.floor(value / 10);
            moltiplicazione = value % 10 * product;
            value = Math.floor(value / 10);
        } else {
            product *= value % 10;
            value = Math.floor(value % 10);
            return product;
            }
            }  

    