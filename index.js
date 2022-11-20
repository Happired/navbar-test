var mode = "l";
var tempD = document.getElementById("d-text");
var tempL = document.getElementById("l-text");
var header = document.getElementById('header');
var headerLogo = document.getElementById('header-logo')
var body = document.body.style;

function Switch() {
    if (mode === "l") {
        /*switching to dark mode*/
        body.setProperty("background-color", "black");
        header.classList.add('header-dark')
        headerLogo.classList.add('header-logo-dark')

        tempD.classList.add('button-selected-d')
        tempL.classList.remove('button-selected-l')

        mode = "d";
    } else {
        /*switching to light mode*/
        body.setProperty("background-color", "white");
        header.classList.remove('header-dark')
        headerLogo.classList.remove('header-logo-dark')

        tempD.classList.remove('button-selected-d')
        tempL.classList.add('button-selected-l')

        mode = "l";
    }

}
