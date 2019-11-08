$(function () {
    $('a').click(function (event) {
        alert("Errore di pagina!");
        event.preventDefault();
    });

    $('html').dblclick(function (e) {
        console.log('Double-click detected at ' + e.pageX + ', ' + e.pageY + '\n');
    });



    document.getElementById("span").textContent = $('div').length
    $('<div>HELLO</div>').css({ color: 'blue' }).appendTo('#n');
    $('<div>Hello</div>').css({ color: 'red' }).appendTo('body');
});

