function secInd(data, letter) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === letter) {
            return i;
        }

        
    }
    return undefined;

}


console.log(secInd("ciao","")===undefined);
console.log(secInd("ciao","o")===3);
console.log(secInd("altalena","t")===2);