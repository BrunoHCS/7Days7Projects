function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0"+hours;
    }

    if (minutes < 10) {
        minutes = "0"+minutes;
    }

    if (seconds < 10) {
        seconds = "0"+seconds;
    }
    document.getElementById("clock").innerHTML=hours+":"+minutes+":"+seconds;
}
window.setInterval("clock()",1000);

function changenight() {
    document.body.style.backgroundColor = 'black';
    document.getElementById("clock").style.color = 'white'
}

function changeday() {
    document.body.style.backgroundColor = 'white';
    document.getElementById("clock").style.color = 'black'

}