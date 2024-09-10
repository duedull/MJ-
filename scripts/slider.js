var strIndex = 0;
    var slides = document.querySelectorAll(".nr-item");
    var demo = document.querySelectorAll(".demo");

    var leftarr = document.getElementById("arrow-left");
    var rightarr = document.getElementById("arrow-right");
    leftarr.addEventListener("click", function() {
        arrSlides(-1);
    });


demo.forEach(function (element){
  element.addEventListener("click", function(){
    var note = element.getAttribute('data-slide');
        currentSlide(parseInt(note));
  });
});

  

    rightarr.addEventListener("click", function() { arrSlides(1) });

    function reset() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < demo.length; i++) {
            demo[i].className = demo[i].className.replace(" active", "");
            
        }
    }

    function arrSlides(n) {
        slideShow(strIndex += n);
    }

    function currentSlide(n) {
        slideShow(strIndex = n);
    }

    function slideShow(n) {
        reset();
        var lengt = slides.length - 1;
        if (n < 0) { strIndex = lengt }
        if (n > lengt ) { strIndex = 0 }
        slides[strIndex].style.display = "block";
        demo[strIndex].classList += " active";
    }

slideShow();