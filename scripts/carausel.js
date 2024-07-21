
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
var dotCount = 2;


nextBtn.addEventListener("click", function() {
    var dot = document.querySelector(".author__container__gallery-controls");
    var dotArr = Array.from(dot.querySelectorAll(".author__container__gallery-controls__dot"));
    dotArr[dotCount].classList.remove("dot-active");
    dotCount += 1;
    if (dotCount == 5){
        dotArr[dotCount - 1].classList.remove("dot-active");
        dotCount = 0;
    }
    dotArr[dotCount].classList.add("dot-active");


    var slider = document.querySelector(".author__container__gallery");
    var slides = Array.from(slider.querySelectorAll("img"));
    var slideCount = slides.length;
    var lastImg = slides[slideCount-1];
    slides[slideCount-1].remove();
    let firstI = document.querySelector(".author__container__gallery");
    firstI.insertAdjacentElement("afterbegin", lastImg);
    for (i=0; i < slideCount; i++){
        slides[i].classList.remove("active");
    }
    slides[(slideCount - slideCount % 2)/2-1].classList.add("active");
})

prevBtn.addEventListener("click", function() {
    var dot = document.querySelector(".author__container__gallery-controls");
    var dotArr = Array.from(dot.querySelectorAll(".author__container__gallery-controls__dot"));
    dotArr[dotCount].classList.remove("dot-active");
    dotCount -= 1;
    if (dotCount == -1){
        dotArr[dotCount + 1].classList.remove("dot-active");
        dotCount = 4;
    }
    dotArr[dotCount].classList.add("dot-active");


    var slider = document.querySelector(".author__container__gallery");
    var slides = Array.from(slider.querySelectorAll("img"));
    var slideCount = slides.length;
    var firstImg = slides[0];
    slides[0].remove();
    let firstI = document.querySelector(".author__container__gallery");
    firstI.insertAdjacentElement("beforeEnd", firstImg);
    for (i=0; i < slideCount; i++){
        slides[i].classList.remove("active");
    }
    slides[(slideCount - slideCount % 2)/2+1].classList.add("active");
})