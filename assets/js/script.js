// Show the current date at the top
$('#currentDay').html(moment().format('dddd, MMMM Do'))

// Colour code each block based on the current time
var timeblocks = $('.timeblock');
var hourEl = $('data-hour')

var currentHour = (new Date()).getHours();
    $('.timeblock').each(function(){
        var hour = parseInt($(this).attr('data-hour')); 
        if(hour < currentHour){
            $(this).css('background-color','Grey');
        }else if(hour === currentHour){
            $(this).css('background-color','Red');
        }else {
            $(this).css('background-color', 'Green');
        }
    });