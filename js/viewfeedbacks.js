// feedback variables
let feedbacks = `.feedbacks-section .container .feedback-box`;
let feedbacksCounter = $(feedbacks).length;
let feedbackBtn = `.feedbacks-section span.feedback-link`;
let feedbackBtntxt = `.feedbacks-section span.feedback-link span`;
let feedbackArrow = `.feedbacks-section span.feedback-link svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/viewfeedbacks-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Check and edit feedbacks
if (feedbacksCounter > 4) {
    for (let i = feedbacksCounter - 1; i > 3; i--) {
        $(feedbacks)[i].classList.add("hide");
    }
} else {
    $(feedbackBtn).hide();
}
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/viewfeedbacks-ar.css" class="style-ar" />`);
    }
});
// Toggle feedbacks visiblity
$(feedbackBtn).on("click", function() {
    if ($(feedbackBtn).hasClass("more")) {
        for (let i = 3; i < feedbacksCounter; i++) {
            $(feedbacks)[i].classList.remove("hide");
        }
        $(feedbackArrow).removeClass("fa-angles-down").addClass("fa-angles-up");
        $(feedbackBtntxt).text("View Less");
        $(feedbackBtn).removeClass("more").addClass("less");
    } else if ($(feedbackBtn).hasClass("less")) {
        for (let i = feedbacksCounter - 1; i > 3; i--) {
            $(feedbacks)[i].classList.add("hide");
        }
        $(feedbackArrow).removeClass("fa-angles-up").addClass("fa-angles-down");
        $(feedbackBtntxt).text("View More");
        $(feedbackBtn).removeClass("less").addClass("more");
    }
});