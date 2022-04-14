/*global $*/
var msec = 0;
var sec = 0;
var min = 0;

var timer;

$('#stop, #reset').prop('disabled', true);
$('#start').prop('disabled', false);


$('#start').click(function() {
  
    $('#face').html('00:00:00');
    timer = setInterval('countUp()', 10);
  
    $(this).prop('disabled', true);
    $('#stop, #reset').prop('disabled', false);
  
})


$('#stop').click(function() {
    
    clearInterval(timer);
    
    $(this).prop('disabled', true);
    $('#start, #reset').prop('disabled', false);
    
})


$('#reset').click(function() {
    
    msec = 0;
    sec = 0;
    min = 0;
    $('#face').html('00:00:00');
    clearInterval(timer);
    
    $('#stop, #reset').prop('disabled', true);
    $('#start').prop('disabled', false);
    
})


function countUp() {
    msec += 1;
 
    if (msec > 99) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
    
    msecNumber = ('0' + msec).slice(-2)
    secNumber = ('0' + sec).slice(-2);
    minNumber = ('0' + min).slice(-2);

    $('#face').html(minNumber + ':' + secNumber + ':' + msecNumber);
  
}