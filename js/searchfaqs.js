// faq variables
let faqs = `.faq-section .container .faq-box`;
let faqsCounter = $(faqs).length;
let faqBtn = `.faq-section span.faq-link`;
let faqBtntxt = `.faq-section span.faq-link span`;
let faqArrow = `.faq-section span.faq-link svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/searchfaqs-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Check and edit faqs
if (faqsCounter > 4) {
    for (let i = faqsCounter - 1; i > 3; i--) {
        $(faqs)[i].classList.add("hide");
    }
} else {
    $(faqBtn).hide();
}
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/searchfaqs-ar.css" class="style-ar" />`);
    }
});
// Click on view more/less btn
$(faqBtn).on("click", function() {
    if ($(faqBtn).hasClass("more")) {
        for (let i = 3; i < faqsCounter; i++) {
            $(faqs)[i].classList.remove("hide");
        }
        $(faqArrow).removeClass("fa-angles-down").addClass("fa-angles-up");
        $(faqBtntxt).text("View Less");
        $(faqBtn).removeClass("more").addClass("less");
    } else if ($(faqBtn).hasClass("less")) {
        for (let i = faqsCounter - 1; i > 3; i--) {
            $(faqs)[i].classList.add("hide");
        }
        $(faqArrow).removeClass("fa-angles-up").addClass("fa-angles-down");
        $(faqBtntxt).text("View More");
        $(faqBtn).removeClass("less").addClass("more");
    }
});