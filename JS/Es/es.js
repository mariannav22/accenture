function check() {
    let name = document.getElementById('color').value.split(' ');
    console.log(name);
    if (name.length < 2) {
        window.alert('!!!');


    }
    return false;
}

function changeBgColor() {
    let color = document.getElementById('color').selectedOptions[0].value;
    document.bgColor = color;
}

function immagine() {
    let mouse = document.getElementById('festa');
    mouse.height = 150;
}
function sempre() {
    let mouse = document.getElementById('festa');
    mouse.height = 200;
}


function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "es.txt");
    request.send();
}

function callback() {
    let target = document.getElementById('target');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let risposta = this.responseText.split(',')
    let vettore = []
    for (i = 0; i < risposta.length; i++) {

        vettore.push(risposta[i].split('='))

    }
    target.value += vettore[0][1] + '\n';
    target.value += vettore[1][1] + '\n';
    target.value += vettore[2][1] + '\n';
    target.value += vettore[3][1] + '\n';
    target.value += vettore[4][1] + '\n';
}
