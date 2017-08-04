$(function(){
    var timerNumber = $('#timerNumber');
    var minus = $('#minus');
    var plus = $('#plus');

    var circle = $('#circle');
    var reset = $('#reset');
    var start = $('#start');
    var alarm = $('#alarm')[0];
    
    var breakNumber = $('#breakNumber');
    var breakMinus = $('#breakMinus');
    var breakPlus = $('#breakPlus');
    
    

    var countTimer = parseInt(timerNumber.html());
    var breakTimer = parseInt(breakNumber.html());
    
    // Minus button click event
    minus.click(function(){
        if(countTimer>5){
            countTimer -= 5;
            timerNumber.html(countTimer);
        }
        
    });

    // Plus button click event
    plus.click(function(){
        countTimer += 5;
        timerNumber.html(countTimer);
    });

    // Break Minus button click event
    breakMinus.click(function(){
        if(breakTimer>5){
            breakTimer -= 5;
            breakNumber.html(breakTimer);
        }
    });

    // Break Plus button click event
    breakPlus.click(function(){
        breakTimer += 5;
        breakNumber.html(breakTimer);
    });

    // Start button click event
    start.click(function(){
        var counter = setInterval(timer, 1000);

        minus.attr('disabled', 'disabled');
        plus.attr('disabled', 'disabled');
        start.attr('disabled', 'disabled');
        breakMinus.attr('disabled', 'disabled');
        breakPlus.attr('disabled', 'disabled');
        
        function timer(){
            countTimer--;
            if(countTimer === 0){
                clearInterval(counter);
                alarm.play();
            }
            timerNumber.html(countTimer);
            
        }
    });
    
});