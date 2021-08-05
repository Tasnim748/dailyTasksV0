function myFunction() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let d = new Date();
    document.getElementById('demo').innerHTML = days[d.getDay()] + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}

setInterval(myFunction, 1000);

let msg;
let dt = new Date().getHours();
if (parseInt(dt) == 6 ) {
    msg = "Hey! It's wake up time!";
}

else if (parseInt(dt) >= 9 && parseInt(dt) <= 11) {
    msg = "It's work time!";
}

else if (parseInt(dt) >= 12 && parseInt(dt) <= 14) {
    msg = "Complete your Exercise, Shower and launch!";
}

else if (parseInt(dt) >= 15 && parseInt(dt) <= 16) {
    msg = "Take rest or read some book";
}

else if (parseInt(dt) >= 17 && parseInt(dt) <= 18) {
    msg = "Go for some walk or Do some book reading on daylight";
}

else if (parseInt(dt) >= 19 && parseInt(dt) <= 21 ) {
    msg = "Hey! Let's Read academic stuffs!";
}

else if (parseInt(dt) >= 22 && parseInt(dt) <= 23 ) {
    msg = "You can do some Graphics work now!(for 1.5 to 2 hours)";
}

else {
    msg = "Set your mosquito net and head straight to bed";
}

document.getElementById('message').innerHTML = msg;