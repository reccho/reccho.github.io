document.addEventListener("DOMContentLoaded", function() {
  const timeEvent = new Date(document.getElementById("countdown").dataset.date).getTime();

  var countdownInterval = setInterval(function() {

    const timeCurrent = new Date().getTime();
    const timeRemain = timeEvent - timeCurrent;

    const days = Math.floor(timeRemain / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemain % (1000 * 60)) / 1000);

    const daysPrint = (days === 1) ? days + " day" : days + " days";
    const hoursPrint = (hours === 1) ? hours + " hour" : hours + " hours";
    const minutesPrint = (minutes === 1) ? minutes + " minute" : minutes + " minutes";
    const secondsPrint = (seconds === 1) ? seconds + " second" : seconds + " seconds";

    //document.getElementById("countdown").innerHTML = daysPrint + " & " + hoursPrint;
    document.getElementById("countdown").innerHTML = daysPrint + ", " + hoursPrint + ", " + minutesPrint + ", " + secondsPrint;

    if (timeRemain <= 0) {
      document.getElementById("countdown").innerHTML = "It Happened!";
    }
  }, 1000); // Counter text renews every 1000 ms
});