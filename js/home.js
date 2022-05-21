// main section variables
let mainLogo = document.querySelector(`main .container img`);
// Array of imgs of the slider
let sliderImgs = [];
for (let i = 0; i < 7; i++) {
    sliderImgs.push(`landing${i}.webp`);
}
// landing variable
let landing = document.querySelector(`.landing`);
let imgIndex = 0;
// Emergency variables
let emergencyQue = `.emergency .container .emergency-faq .faq-box div.faq-que`;
let emergencyAns = `.emergency .container .emergency-faq .faq-box div.faq-ans`;
let emergencyArrow = `.emergency .container .emergency-faq .faq-box div.faq-que svg`;
// Health variables
let healthQue = `.health .container .health-faq .faq-box div.que-box`;
let healthAsn = `.health .container .health-faq .faq-box div.ans-box`;
let healthArrow = `.health .container .health-faq .faq-box div.que-box svg`;
// Vets variables
let vetArea = document.querySelector(`.vets .container`);
let vetCard = `.vets .container .vet-content .vet-box`;
let vetCardBack = `.vets .container .vet-content .vet-box .card-back`;
// localstorage values variables
let saveMainLogo = localStorage.getItem("main-logo");
// End Variables
// Start check Localstorage
// main logo value
if (saveMainLogo !== null) {
    mainLogo.setAttribute("src", `assets/imgs/${saveMainLogo}`);
}
// page language value
if (saveLanguage !== null) {
    if (saveLanguage == "en") {
        if (!$(langEnglish).hasClass("active")) {
            $(langEnglish).siblings().removeClass("active");
            $(langEnglish).addClass("active");
            $("html").attr("lang", "en");
            $("body").attr("translate", "no");
            if ($(arabicStyle).attr("href") != undefined) {
                $(arabicStyle).remove();
            }
        }
    } else if (saveLanguage == "ar") {
        if (!$(langArabic).hasClass("active")) {
            $(langArabic).siblings().removeClass("active");
            $(langArabic).addClass("active");
            $("html").attr("lang", "ar");
            $("body").attr("translate", "yes");
            $(englishStyle).after(`<link rel="stylesheet" href="css/home-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on a color option
optColors.forEach(li => {
    li.addEventListener("click", () => {
        mainLogo.setAttribute("src", `assets/imgs/${li.dataset.main}`);
        localStorage.setItem("main-logo", li.dataset.main);
    })
});
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/home-ar.css" class="style-ar" />`);
    }
});
// Close opened menu by clicking document body
$(document).on("click", function(e) {
    if ($(vetCard).find(e.target).length == 0 && e.target != $(vetCard)[0]) {
        if ($(vetCard).find($(vetCardBack)).hasClass("show")) {
            $(vetCard).find($(vetCardBack)).removeClass("show");
        }
    }
});
// sliding the landing background
setInterval(function() {
    if (imgIndex === 7) {
        imgIndex = 0;
    }
    landing.style.backgroundImage = `url("assets/imgs/${sliderImgs[imgIndex]}")`;
    imgIndex++;
}, 3000);
// clicking on Emergency FAQ question
$(emergencyQue).on("click", function() {
    if (!$(this).hasClass("open")) {
        $(this).next(emergencyAns).addClass("show");
        $(this).addClass("open");
        if ($(this).next(emergencyAns).hasClass("show")) {
            $(this).children(emergencyArrow).removeClass("fa-caret-down").addClass("fa-caret-up");
        } else {
            $(this).children(emergencyArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
        }
        if ($(this).parent().siblings().children(emergencyAns).hasClass("show")) {
            $(this).parent().siblings().children(emergencyQue).removeClass("open");
            $(this).parent().siblings().children(emergencyAns).removeClass("show");
            $(this).parent().siblings().children(emergencyQue).children(emergencyArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
        }
    }
});
// clicking on Health FAQ question
$(healthQue).on("click", function() {
    if (!$(this).hasClass("open")) {
        $(this).next(healthAsn).toggleClass("show");
        $(this).toggleClass("open");
        if ($(this).next(healthAsn).hasClass("show")) {
            $(this).children(healthArrow).removeClass("fa-eye-slash").addClass("fa-eye");
        } else {
            $(this).children(healthArrow).removeClass("fa-eye").addClass("fa-eye-slash");
        }
        if ($(this).parent().siblings().children(healthAsn).hasClass("show")) {
            $(this).parent().siblings().children(healthQue).removeClass("open");
            $(this).parent().siblings().children(healthAsn).removeClass("show");
            $(this).parent().siblings().children(healthQue).children(healthArrow).removeClass("fa-eye").addClass("fa-eye-slash");
        }
    }
});
// Swipping Vets cards
let swiper = new Swiper(vetArea, {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
// clicking on vet card
$(vetCard).on("click", function() {
    if ($(this).hasClass("swiper-slide-active")) {
        $(this).find($(vetCardBack)).toggleClass("show");
        if ($(this).siblings().find($(vetCardBack)).hasClass("show")) {
            $(this).siblings().find($(vetCardBack)).removeClass("show");
        }
    }
});