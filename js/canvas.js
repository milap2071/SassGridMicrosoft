var btnLeft = document.getElementById("btnCanvasLeft");
var btnRight = document.getElementById("btnCanvasRight");
var canvasText = document.getElementsByClassName("canvas__text--main");
var canvasPicture = document.getElementsByClassName("canvas__picture--main");
var slideIndex = 1;

showDivs(slideIndex);

btnLeft.addEventListener("click", function(){
    plusDivs(-1);
    animateLeft();
});
btnRight.addEventListener("click", function(){
    plusDivs(1);
    animateRight();
});

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var canvas = document.getElementsByClassName("canvas--main");
    var dots = document.getElementsByClassName("badge__circle--main");
    
    if (n > canvas.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = canvas.length }
    for (i = 0; i < canvas.length; i++) {
        canvas[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" bg-black", "");
    }
    canvas[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " bg-black";
    
    
    
}

function animateLeft(){
    canvasText[slideIndex-1].classList.remove("animate-right");
    canvasText[slideIndex-1].classList.add("animate-left");
    canvasPicture[slideIndex-1].classList.remove("animate-right-canvas");
    canvasPicture[slideIndex-1].classList.add("animate-left-canvas");
    

}

function animateRight(){
    canvasText[slideIndex-1].classList.remove("animate-left");
    canvasText[slideIndex-1].classList.add("animate-right");
    canvasPicture[slideIndex-1].classList.remove("animate-left-canvas");
    canvasPicture[slideIndex-1].classList.add("animate-right-canvas");
    

}