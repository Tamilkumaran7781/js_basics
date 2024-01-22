function Erilingeriling(message, callback) {
    setTimeout(function () {
        console.log(message);
        callback();
    }, 2000);
}

function agurosergio() {
    console.log("Welcome to hell");
}

Erilingeriling("Hello halland and rodri\nwelcome to city", agurosergio);
