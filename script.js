document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    function showSlides() {
        let i;
        const slides = document.querySelectorAll('.fade');

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = 'block';

        setTimeout(showSlides, 2000);
    }

    showSlides();
});
document.addEventListener("DOMContentLoaded", function () {
  
    var mybutton = document.getElementById("scrollToTopBtn");

    
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }


    mybutton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});



