function check() {
    let name= document.getElementById('color').value.split(' ');
    console.log(name);
    if(name.length<2){
window.alert('!!!');

    
    }
    return false;
    }

    function changeBgColor(){
        let color=document.getElementById('color').selectedOptions[0].value;
        document.bgColor=color;
    }

    function immagine(){
        let mouse=document.getElementById('festa');
        mouse.height=150;
    }
    function sempre(){
        let mouse=document.getElementById('festa');
        mouse.height=200;
    }
    

    function getInfo() {
        let request = new XMLHttpRequest();
        request.onload = callback;
        request.open("GET", "esercizio.json");
        request.send();
        }

        function callback() {
            let target = document.getElementById('target');
            if (this.status != 200) {
            target.value += "[" + this.status + "]\n";
            return;
            }
            let json = JSON.parse(this.responseText);
            target.value += json.name + '\n';
            target.value += json.job.title + '\n';
            target.value += json.job.languages + '\n';
            }
