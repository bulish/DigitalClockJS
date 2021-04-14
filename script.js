function getTime () {
    var date = new Date();
        hours = date.getHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }
        minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
    document.querySelector(".time").innerHTML = hours + " : " + minutes + " : " + seconds;
}

setInterval(getTime, 0);
