$(function(){
    var counter = 0;
    var timeLeft = 60;
    var timer = $('#timer');
    timer.html(counter);
    function timeIt() {
        counter++;
        timer.html(timeLeft-counter);
    }

    setInterval(timeIt, 1000);
    
});