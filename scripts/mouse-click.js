const mouseBtn = document.querySelector(".promo__func__container__mouse");
const nextBlock = document.querySelector(".about");

mouseBtn.addEventListener("click", function(){
    nextBlock.scrollIntoView({ behavior: 'smooth' });
})