// medicine variables
let medicines = `.medicine-section .container .medicine-box`;
let medicinesCounter = $(medicines).length;
let medicineBtn = `.medicine-section span.medicine-link`;
let medicineBtntxt = `.medicine-section span.medicine-link span`;
let medicineArrow = `.medicine-section span.medicine-link svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/searchmedicines-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Check and edit medicines
if (medicinesCounter > 4) {
    for (let i = medicinesCounter - 1; i > 3; i--) {
        $(medicines)[i].classList.add("hide");
    }
} else {
    $(medicineBtn).hide();
}
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/searchmedicines-ar.css" class="style-ar" />`);
    }
});
// Click on view more/less btn
$(medicineBtn).on("click", function() {
    if ($(medicineBtn).hasClass("more")) {
        for (let i = 3; i < medicinesCounter; i++) {
            $(medicines)[i].classList.remove("hide");
        }
        $(medicineArrow).removeClass("fa-angles-down").addClass("fa-angles-up");
        $(medicineBtntxt).text("View Less");
        $(medicineBtn).removeClass("more").addClass("less");
    } else if ($(medicineBtn).hasClass("less")) {
        for (let i = medicinesCounter - 1; i > 3; i--) {
            $(medicines)[i].classList.add("hide");
        }
        $(medicineArrow).removeClass("fa-angles-up").addClass("fa-angles-down");
        $(medicineBtntxt).text("View More");
        $(medicineBtn).removeClass("less").addClass("more");
    }
});