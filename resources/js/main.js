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

    var countTime = 1500;
    var breakTime = 300;

    timerNumber.html(convertSecond(1500));
    breakNumber.html(convertSecond(300));
    
    // Conver second funtion
    function convertSecond(s){
        var min = Math.floor(s / 60);
        var sec = Math.floor(s % 60);
        
        if(sec<10 && min<10){
            return '0'+min + ' : ' + '0'+sec;
            
        }else if(sec<10){
            return min + ' : ' + '0'+sec;
            
        }else if(min<10){
            return '0'+min + ' : ' + sec;
            
        }
        else{
            return min + ' : ' + sec;
            
        }
        
    }
    
    // Minus button click event
    minus.click(function(){
        if(countTime>30){
            countTime -= 30;
            timerNumber.html(convertSecond(countTime));
        }
        
    });

    // Plus button click event
    plus.click(function(){
        countTime += 30;
        timerNumber.html(convertSecond(countTime));
    });

    // Break Minus button click event
    breakMinus.click(function(){
        if(breakTime>30){
            breakTime -= 30;
            breakNumber.html(convertSecond(breakTime));
        }
    });

    // Break Plus button click event
    breakPlus.click(function(){
        breakTime += 30;
        breakNumber.html(convertSecond(breakTime));
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

            timerNumber.html(convertSecond(countTime));

            if(countTime === 0){
                clearInterval(counter);
                alarm.play();
                var startBreak = setInterval(breakTimer, 1000);
            }

            function breakTimer() {

                breakMinus.removeAttr("disabled"); 
                breakPlus.removeAttr("disabled");
                breakTime--;
                
                breakNumber.html(convertSecond(breakTime));
                
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
                countTime = 1500;
                breakTime = 300;
                timerNumber.html(convertSecond(countTime));
                breakNumber.html(convertSecond(breakTime));
                clearInterval(counter);
                clearInterval(startBreak);
            });
        }

    });

});