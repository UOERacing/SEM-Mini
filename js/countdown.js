// Set the date we're counting down to
let countDownDate = new Date("April 24, 2020 08:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    // Get current date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d&nbsp&nbsp" + hours + "h&nbsp&nbsp"
        + minutes + "m&nbsp&nbsp" + seconds + "s&nbsp&nbsp";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Let's Get Started";
    }
}, 1000);
