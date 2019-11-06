function check() {
    let name = document.getElementById('color').value.split(' ');
    console.log(name);
    if (name.length < 2) {
        window.alert('!!!');


    }
    return false;
}

function changeBgColor() {
    document.bgColor = document.getElementById('color').value;
}