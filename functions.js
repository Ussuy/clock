(function() {

    function clock() {
        const fullDate = new Date();
        const hours = fullDate.getHours();
        const minutes = fullDate.getMinutes();
        const seconds = fullDate.getSeconds();
    
        if(hours < 10) 
            hours = "0" + hours

        if(minutes < 10) 
            minutes = "0" + minutes
            
        if(seconds < 10) 
            seconds = "0" + seconds

        document.getElementById('hours').innerHTML = hours + ":"
        document.getElementById('minutes').innerHTML = minutes + ":"
        document.getElementById('seconds').innerHTML = seconds
    }

    setInterval(() => {
        clock() 
    }, 500);
})()