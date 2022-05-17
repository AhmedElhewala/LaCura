// disease variables
let diseases = `.disease-section .container .disease-box`;
let diseasesCounter = $(diseases).length;
let diseaseBtn = `.disease-section span.disease-link`;
let diseaseBtntxt = `.disease-section span.disease-link span`;
let diseaseArrow = `.disease-section span.disease-link svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/searchdiseases-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Check and edit diseases
if (diseasesCounter > 4) {
    for (let i = diseasesCounter - 1; i > 3; i--) {
        $(diseases)[i].classList.add("hide");
    }
} else {
    $(diseaseBtn).hide();
}
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/searchdiseases-ar.css" class="style-ar" />`);
    }
});
// Click on view more/less btn
$(diseaseBtn).on("click", function() {
    if ($(diseaseBtn).hasClass("more")) {
        for (let i = 3; i < diseasesCounter; i++) {
            $(diseases)[i].classList.remove("hide");
        }
        $(diseaseArrow).removeClass("fa-angles-down").addClass("fa-angles-up");
        $(diseaseBtntxt).text("View Less");
        $(diseaseBtn).removeClass("more").addClass("less");
    } else if ($(diseaseBtn).hasClass("less")) {
        for (let i = diseasesCounter - 1; i > 3; i--) {
            $(diseases)[i].classList.add("hide");
        }
        $(diseaseArrow).removeClass("fa-angles-up").addClass("fa-angles-down");
        $(diseaseBtntxt).text("View More");
        $(diseaseBtn).removeClass("less").addClass("more");
    }
});