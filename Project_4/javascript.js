function countdown() {
    var end = new Date("2021-01-01 00:00:00") 

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var now = new Date();
    var distance = end - now;

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById("clock").innerHTML = days + "days " + hours + "hrs" + minutes + "mins " + seconds + "secs";
}
window.setInterval("countdown()",1000);

