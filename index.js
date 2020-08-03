// Scroll Animation....
$(document).ready(function () {
    $(".first").waypoint(function (direction) {
        if (direction == "down") {
            $(".first-left").addClass("animated slideInLeft");
            $(".first-mid").addClass("animated slideInUp");
            $(".first-right").addClass("animated slideInRight");
        }
        else {
            $(".first-left").removeClass("animated slideInLeft");
            $(".first-mid").removeClass("animated slideInUp");
            $(".first-right").removeClass("animated slideInRight");
        }
    }, {
        offset: '80%'
    })

    $(".second").waypoint(function (direction) {
        if (direction === "down") {

            $(".second").addClass("animated fadeInLeft");
        }
        // else if (direction === 'up') {
        //     off = '60%';
        //     $(".second").removeClass("animated fadeInLeft");
        //     $(".second").addClass("animated fadeInRight");
        // }
        else {
            $(".second").removeClass("animated fadeInLeft");
        }
    }, {
        offset: '80%'
    })
    $(".third").waypoint(function (direction) {
        if (direction == "down") {
            $(".third").addClass("animated fadeInLeft");
        }
        else {
            $(".third").removeClass("animated fadeInLeft");
        }
    }, {
        offset: '80%'
    })
    $(".bar1").waypoint(function (direction) {
        if (direction === 'down') {
            $(".bar1").css("animation", "move 5s forwards")
        }
        else {
            $(".bar1").css("animation", "")
        }
    }, {
        offset: '100%'
    })
})



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let navlink = document.getElementById("navlink");
navlink.addEventListener("click", () => {
    gsap.fromTo(".nav-content", { x: -200, y: -19, opacity: 0 }, { x: 0, y: -19, opacity: 1, duration: 0.5 })
})

let closenav = document.getElementById("close-nav");
closenav.addEventListener("click", () => {
    gsap.fromTo(".nav-content", { y: -19, x: 0, opacity: 1 }, { y: -19, x: -200, opacity: 0, duration: 0.5 })
})
