function Autofill() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "aJax.json");
    request.send();
}

function callback() {      
    let json = JSON.parse(this.responseText);
    
    document.getElementById("name").value=json.name;
    document.getElementById("job").value=json.job.title;
    for(let i=0;i<json.job.languages.length;i++);{
    document.getElementById(json.job.languages[i]).checked=true;
}

}