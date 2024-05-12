let slideIndex0 = 0;
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;

showSlides("slidex", slideIndex0);
showSlides("slide1", slideIndex1);
showSlides("slide2", slideIndex2);
showSlides("slide3", slideIndex3);
showSlides("slide4", slideIndex4);

function showSlides(className, slideIndex) {
    let slides = document.getElementsByClassName(className);
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    
    slides[slideIndex - 1].style.display = "block";  
    
    switch(className) {
        case "slide1":
            slideIndex1 = slideIndex;
            break;
        case "slide2":
            slideIndex2 = slideIndex;
            break;
        case "slide3":
            slideIndex3 = slideIndex;
            break;
        case "slide4":
            slideIndex4 = slideIndex;
            break;
    }
    
    setTimeout(function() { showSlides(className, slideIndex); }, 3000);
}
