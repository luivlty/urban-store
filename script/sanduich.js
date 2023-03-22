// CHECKBOX BOTÃO SANDUICHE
function checkSandu(){
    const sanduiche = document.getElementById("openSidebarMenu");
    const logo = document.getElementById("logo-topheader");
    const hContent = document.getElementsByClassName("mainUlHeader");

    if(sanduiche.checked){
        logo.src = "";
        for(var i = 0; i<3; i++){
            hContent[i].style.visibility = "hidden";
        }

    } else{
        logo.src = "img/logo/Lui.png";
        for(var i = 0; i<3; i++){
            hContent[i].style.visibility = "visible";
        }
    }
};
// //