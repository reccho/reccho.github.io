const timeEvent = new Date("Sep 4, 2025 13:00:00").getTime();

var countdownInterval = setInterval(function() {

    const timeCurrent = new Date().getTime();
    const timeRemain = timeEvent - timeCurrent;

    const days = Math.floor(timeRemain / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemain % (1000 * 60)) / 1000);

    //document.getElementById("countdown").innerHTML = days + " days & " + hours + " hours";
    document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";

    if (timeRemain < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "It Happened!";
    }
}, 1000); // Counter text renews every 1000 ms