// vet variables
let vets = `.vet-section .container .vet-box`;
let vetsCounter = $(vets).length;
let vetBtn = `.vet-section span.vet-link`;
let vetBtntxt = `.vet-section span.vet-link span`;
let vetArrow = `.vet-section span.vet-link svg`;
// End Variables
// Start check Localstorage
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/allvets-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Check and edit vets
if (vetsCounter > 4) {
    for (let i = vetsCounter - 1; i > 3; i--) {
        $(vets)[i].classList.add("hide");
    }
} else {
    $(vetBtn).hide();
}
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/allvets-ar.css" class="style-ar" />`);
    }
});
// Click on view more/less btn
$(vetBtn).on("click", function() {
    if ($(vetBtn).hasClass("more")) {
        for (let i = 3; i < vetsCounter; i++) {
            $(vets)[i].classList.remove("hide");
        }
        $(vetArrow).removeClass("fa-angles-down").addClass("fa-angles-up");
        $(vetBtntxt).text("View Less");
        $(vetBtn).removeClass("more").addClass("less");
    } else if ($(vetBtn).hasClass("less")) {
        for (let i = vetsCounter - 1; i > 3; i--) {
            $(vets)[i].classList.add("hide");
        }
        $(vetArrow).removeClass("fa-angles-up").addClass("fa-angles-down");
        $(vetBtntxt).text("View More");
        $(vetBtn).removeClass("less").addClass("more");
    }
});
// Toggle full vet card by clicking
$(vets).on("click", function() {
    if (!$(this).hasClass("open")) {
        $(this).toggleClass("open");
        if ($(this).siblings().hasClass("open")) {
            $(this).siblings().removeClass("open");
        }
    }
})