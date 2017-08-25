var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

window.setInterval(function(){

	cookieClick(cursors);

}, 1000);
