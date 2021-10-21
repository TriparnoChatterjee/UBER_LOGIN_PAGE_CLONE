var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n,target) {
    var value = parseInt(document.getElementById("slide_no").value|0);
    value+=n;
    var slides = document.getElementsByClassName("specifications--item");
    if (value> slides.length) { value = 1 }
    if (value < 1) { value = slides.length }
    document.getElementById("slide_no").value = value;
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("specifications--item");
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";

}

//Medium Controls

var slideIndex = 1;
showSlidesMd(slideIndex);

// Next/previous controls
function plusSlidesMd(n,target) {
    var value = parseInt(document.getElementById("slide_no--md").value|0);
    value+=n;
    var slides = document.getElementsByClassName("specifications--item-md");
    if (value> slides.length) { value = 1 }
    if (value < 1) { value = slides.length }
    document.getElementById("slide_no--md").value = value;
    showSlidesMd(slideIndex += n);
}


function showSlidesMd(n) {
    var i;
    var slides = document.getElementsByClassName("specifications--item-md");
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "flex";

}

