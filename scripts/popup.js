const openBtn = document.querySelector(".promo__func__container__btn");
const modal = document.querySelector(".promo__func__modal");
const closeBtn = document.querySelector(".promo__func__modal__box__btn-close");

openBtn.addEventListener("click", function(){
    modal.classList.add("open");
})

closeBtn.addEventListener("click", function(){
    modal.classList.remove("open");
})

window.addEventListener("keydown", (e) =>{
    if (e.key === "Escape") {
        modal.classList.remove("open");
    }
})