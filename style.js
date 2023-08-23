$(document).ready(function() {
    $("#menu").click(function() {
        $("#navbar").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#searchbar").click(function() {
        $("#search").slideToggle("slow");
    });
});

var swiper = new Swiper(".heroslider", {
    grabCursor: true,
    effect: "creative",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [-1000, 0, 0],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});