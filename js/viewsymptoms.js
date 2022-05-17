// symptom variables
let symptoms = `.symptom-section .container .symptom-box`;
let symptomsCounter = $(symptoms).length;
let symptomBtn = `.symptom-section span.symptom-link`;
let symptomBtntxt = `.symptom-section span.symptom-link span`;
let symptomArrow = `.symptom-section span.symptom-link svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/viewsymptoms-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Check and edit symptoms
if (symptomsCounter > 4) {
    for (let i = symptomsCounter - 1; i > 3; i--) {
        $(symptoms)[i].classList.add("hide");
    }
} else {
    $(symptomBtn).hide();
}
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/viewsymptoms-ar.css" class="style-ar" />`);
    }
});
// Click on view more/less btn
$(symptomBtn).on("click", function() {
    if ($(symptomBtn).hasClass("more")) {
        for (let i = 3; i < symptomsCounter; i++) {
            $(symptoms)[i].classList.remove("hide");
        }
        $(symptomArrow).removeClass("fa-angles-down").addClass("fa-angles-up");
        $(symptomBtntxt).text("View Less");
        $(symptomBtn).removeClass("more").addClass("less");
    } else if ($(symptomBtn).hasClass("less")) {
        for (let i = symptomsCounter - 1; i > 3; i--) {
            $(symptoms)[i].classList.add("hide");
        }
        $(symptomArrow).removeClass("fa-angles-up").addClass("fa-angles-down");
        $(symptomBtntxt).text("View More");
        $(symptomBtn).removeClass("less").addClass("more");
    }
});