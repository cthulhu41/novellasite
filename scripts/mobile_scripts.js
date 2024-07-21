const log = document.getElementById("logo");
let promo = document.createElement("blockquote");
const promoText = document.getElementById("promo-text");
const promoBlock = document.querySelector(".promo__text");
const aboutImg = document.getElementById("about__first-img");
const footerLogo = document.getElementById("footer-logo");
const footerTitle = document.getElementById("footer__title");
const footerWrapper = document.querySelector(".footer__wrapper");
const burgerBtn = document.querySelector(".header__wrapper__mobile-menu__burger");


if(document.documentElement.clientWidth <= 450){
    // меняем лого
    log.src = "./assets/header/mobile_logo.svg";
    // костыль для отступа в промо тексте
    promoText.remove;
    promoBlock.innerHTML = "<blockquote>Каждый из нас - автор истории собственной жизни. А чтобы случиться,любой истории нужно подходящее место. <br><br><br>В Красноярске мы  нашли идеальное место для по-настоящему счастливого сюжета. Это дом Novella.</blockquote>";
    // в блоке about меняем первую картинку
    aboutImg.src = "./assets/about/png/firs-img-mob.png";
    // в блоке footer меняем иконку
    footerLogo.remove();
    let footerBlock = document.createElement("div");
    footerBlock.classList.add("footer__wrapper__title");
    let map = document.createElement("img");
    map.src = "../assets/footer/svg/map-pin.svg";
    footerBlock.appendChild(map);
    let mapTtitle = document.createElement("h3");
    let mapTitleText = document.createTextNode("Офис продаж")
    mapTtitle.appendChild(mapTitleText);
    footerBlock.appendChild(mapTtitle);
    footerTitle.remove();
    footerWrapper.insertAdjacentElement("afterbegin", footerBlock);
    // бургер меню
    burgerBtn.addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open");
        let footerWrapperMenu = document.querySelector(".footer__wrapper").cloneNode(true);
        footerWrapperMenu.id = "footerMenuBurg";
        let header = document.getElementById("header");
        let menuToggler = document.getElementById("menu-toggler");
        if(header.classList.contains("open")){
            header.insertAdjacentElement("beforeend", footerWrapperMenu);
            menuToggler.src = "../assets/header/burger_close.svg";
        }else {
            let footerBurg = document.getElementById("footerMenuBurg");
            footerBurg.remove();
            menuToggler.src = "../assets/header/burger_btn.svg";
        }
    })

}else{
    log.src = "./assets/header/logo_inactive.svg";
}