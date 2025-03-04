var swiper= new Swiper(".myswiper-1",{
    slidesperview:1,
    spaceBetween:30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-nex",
        prevEl: ".swiper-button.prev",
    }
});

var swiper= new Swiper(".myswiper-2",{
    slidesperview:3,
    spaceBetween:20,
    loop:true,
 loopFillGroupWithBlank:true,
    navigation: {
        nextEl: ".swiper-button-nex",
        prevEl: ".swiper-button.prev",
    },
    breakpoints : {
        0:{
            slidesperView:1,
        },
        520: {
            slidesperView:2,
        },
        950: {
            slidesperView:3,
        }

    }
});

let tabInputs = document. querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change',function() {
let id = input.ariaValueMax;
let thisSwiper = document.getElementById('swiper' + id);
thisSWIper.swiper.update();
    })

});