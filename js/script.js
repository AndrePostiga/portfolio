var fotoperfil = 0;
var menu = 0;

function menuMobile() {
    fotoperfil++;
    if (fotoperfil == 1) {
        document.getElementById("foto-perfil").style.visibility = "hidden";

    }
    if (fotoperfil == 2) {
        document.getElementById("foto-perfil").style.visibility = "visible";

        fotoperfil = 0;
    }
}


function efeitoMenu() {
    menu++;
    if (menu == 1) {
        document.getElementById("menu-mobile").style.top = "0";
        document.getElementById("ico").style.top = "550px";
        document.getElementById("ico").style.background = "red";

    }
    if (menu == 2) {
        document.getElementById("menu-mobile").style.top = "-100%";
        document.getElementById("ico").style.top = "0";
        document.getElementById("ico").style.background = "transparent";
        menu = 0;
    }

}

