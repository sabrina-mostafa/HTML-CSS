function displayClock()
{
    let time = new Date() ;      // time becomes an object of Date
    let hrs = time.getHours() ;
    let min = time.getMinutes() ;
    let sec = time.getSeconds() ;
    let en ;

    if(hrs>=12)
        en = " PM" ;
    else
        en = " AM" ;
    
    if(hrs > 12)
        hrs = hrs - 12 ;    // 12hr format
    if(hrs == 0)
        hrs = 12 ;

    if(hrs < 10)        // showing 2 digits always
        hrs = "0" + hrs;
    if(min < 10)
        min = "0" + min;
    if(sec < 10)
        sec = "0" + sec;

    document.getElementById('clock').innerHTML = hrs + ":" + min + ":" + sec + en ;
}

setInterval(displayClock, 500) ;    // repeating the function
