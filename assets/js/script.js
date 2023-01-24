// Show the current date at the top
$('#currentDay').html(moment().format('dddd, MMMM Do'))

// Colour code each block based on the current time
var timeblocks = $('.timeblock');
var hourEl = $('data-hour')

var currentHour = (new Date()).getHours();
    $('.timeblock').each(function(){
        var hour = parseInt($(this).attr('data-hour')); 
        if(hour < currentHour){
            $(this).addClass('past');
        }else if(hour === currentHour){
            $(this).addClass('present');
        }else {
            $(this).addClass('future');
        }
    });

//Save input to local storage
// var inputs = $('<textarea>').text();
// $('<button>').click(function(event) {
//     event.preventDefault

// })

// console.log(inputs);

// $('.saveBtn').click(function(event) {
//     event.preventDefault();
//     var textInput = $(this).siblings(".textArea").val();
//     var hourInput = $(this).parent().data("data-hour");
//     console.log (hourInput, textInput);
    
//     var LocalInputs = (textInput, hourInput)

//     localStorage.setItem('inputs', JSON.stringify(LocalInputs));
// }     


// )

