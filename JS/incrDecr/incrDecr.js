$(function () {
    $('#addText').click(function () {
        $('#saluti').text($('text').val('Something'))
    });

    $('#incrSize').click(function () {
        let cur = parseInt($('#msg').css('font-size'));
        $('#saluti').css('font-size', cur * 2);
    });

    $('#decrSize').click(function () {
        let cur = parseInt($('#msg').css('font-size'));
        $('#saluti').css('font-size', cur / 2);
    });
});