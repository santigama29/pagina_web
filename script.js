let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible= true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("csharp");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

//aplicar cambio de idioma
var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/index.html";
    }else{
        location.href="../index.html";
    }

}