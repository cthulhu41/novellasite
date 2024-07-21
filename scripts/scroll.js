const header = document.getElementById("header");
const logo = document.getElementById("logo");

if(document.documentElement.clientWidth >= 450){
    window.addEventListener("scroll", function(){
        const scrollPos = window.scrollY;
        if(scrollPos > 100){
            header.classList.add("header_scroll");
            logo.src = "./assets/header/logo_active.svg";
        } else {
            header.classList.remove("header_scroll");
            logo.src = "./assets/header/logo_inactive.svg";
        }
    })
}
