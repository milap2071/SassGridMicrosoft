var btnLeftFooter = document.getElementById("btnCanvasFooterLeft");
var btnRightFooter = document.getElementById("btnCanvasFooterRight");
var canvasTextFooter = document.getElementsByClassName("canvas__text--footer");
var canvasPictureFooter = document.getElementsByClassName("canvas__picture--footer");
var slideIndexFooter = 1;

showDivsFooter(slideIndexFooter);

btnLeftFooter.addEventListener("click", function(){
    plusDivsFooter(-1);
    animateLeftFooter();
});
btnRightFooter.addEventListener("click", function(){
    plusDivsFooter(1);
    animateRightFooter();
});

function plusDivsFooter(n) {
    showDivsFooter(slideIndexFooter += n);
}

function currentDivFooter(n) {
    showDivsFooter(slideIndexFooter = n);
}

function showDivsFooter(n) {
    var i;
    var canvas = document.getElementsByClassName("canvas--footer");
    var dots = document.getElementsByClassName("badge__circle--footer");
    
    if (n > canvas.length) { slideIndexFooter = 1 }
    if (n < 1) { slideIndexFooter = canvas.length }
    for (i = 0; i < canvas.length; i++) {
        canvas[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" bg-white", "");
    }
    canvas[slideIndexFooter - 1].style.display = "block";
    dots[slideIndexFooter - 1].className += " bg-white";
    
    
    
}

function animateLeftFooter(){
    canvasTextFooter[slideIndexFooter-1].classList.remove("animate-right");
    canvasTextFooter[slideIndexFooter-1].classList.add("animate-left");
    canvasPictureFooter[slideIndexFooter-1].classList.remove("animate-right-canvas");
    canvasPictureFooter[slideIndexFooter-1].classList.add("animate-left-canvas");
    

}

function animateRightFooter(){
    canvasTextFooter[slideIndexFooter-1].classList.remove("animate-left");
    canvasTextFooter[slideIndexFooter-1].classList.add("animate-right");
    canvasPictureFooter[slideIndexFooter-1].classList.remove("animate-left-canvas");
    canvasPictureFooter[slideIndexFooter-1].classList.add("animate-right-canvas");
    

}