window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader")
var sideNav = document.getElementById("myNav")
var sticky = sideNav.offsetLeft;
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        sideNav.classList.add("sticky");
        header.classList.add("sticky");
    }

    else {
        sideNav.classList.remove("sticky");
        header.classList.remove("sticky");
    }

}