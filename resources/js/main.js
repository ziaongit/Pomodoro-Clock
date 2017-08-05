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
    
    

    var countTime = parseInt(timerNumber.html());
    var breakTime = parseInt(breakNumber.html());
    
    // Minus button click event
    minus.click(function(){
        if(countTime>5){
            countTime -= 5;
            timerNumber.html(countTime);
        }
        
    });

    // Plus button click event
    plus.click(function(){
        countTime += 5;
        timerNumber.html(countTime);
    });

    // Break Minus button click event
    breakMinus.click(function(){
        if(breakTime>5){
            breakTime -= 5;
            breakNumber.html(breakTime);
        }
    });

    // Break Plus button click event
    breakPlus.click(function(){
        breakTime += 5;
        breakNumber.html(breakTime);
    });

    // Disable function 
    function disable(){
        minus.attr('disabled', 'disabled');
        plus.attr('disabled', 'disabled');
        start.attr('disabled', 'disabled');
        breakMinus.attr('disabled', 'disabled');
        breakPlus.attr('disabled', 'disabled');
    }

    // Start button click event
    start.click(function(){
        var counter = setInterval(timer, 1000);
        
        disable();

        function timer(){

            countTime--;

            timerNumber.html(countTime);

            if(countTime === 0){
                clearInterval(counter);
                alarm.play();
                var startBreak = setInterval(breakTimer, 1000);
            }

            function breakTimer() {

                breakMinus.removeAttr("disabled"); 
                breakPlus.removeAttr("disabled");
                breakTime--;
                
                breakNumber.html(breakTime);
                
                if(breakTime === 0){
                    clearInterval(startBreak);
                    alarm.play();

                    breakMinus.attr('disabled', 'disabled');
                    breakPlus.attr('disabled', 'disabled');
                }
            }

            // Reset click function
            reset.click(function(){
                minus.removeAttr("disabled"); 
                plus.removeAttr("disabled");
                breakMinus.removeAttr("disabled"); 
                breakPlus.removeAttr("disabled");
                start.removeAttr("disabled");
                countTime = 25;
                breakTime = 5;
                timerNumber.html(countTime);
                breakNumber.html(breakTime);
                clearInterval(counter);
                clearInterval(startBreak);
            });


        }

    });




    
    
});