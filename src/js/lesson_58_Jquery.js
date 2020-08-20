import $ from 'jquery';

$(document).ready(() => { // DOMContentLoaded
    $('.list-item:first').click(() => {
        console.log(1);
    });

    $('.list-item:eq(2)').click((e) => {
        $('img:even').fadeToggle('slow');
    });

    $('.list-item:eq(3)').click((e) => {
        $('img:odd').animate({
            opasity: 'toggle',
            height: 'toggle'
        }, 1000);
    });


});