// form variables
let passInputOne = `.user-form form div.pass-original input.user-password`;
let passIconOne = `.user-form form div.pass-original .show-password`;
let passIconSvgOne = `.user-form form div.pass-original .show-password svg`;
let passInputTwo = `.user-form form div.pass-confirm input.user-password`;
let passIconTwo = `.user-form form div.pass-confirm .show-password`;
let passIconSvgTwo = `.user-form form div.pass-confirm .show-password svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/resetpassword-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/resetpassword-ar.css" class="style-ar" />`);
    }
});
// Toggle original password value visablity
$(passIconOne).on("click", function() {
    if ($(passInputOne).attr("type") == "password") {
        $(passInputOne).attr("type", "text");
        $(passIconSvgOne).removeClass("fa-eye-slash").addClass("fa-eye");
        $(passIconSvgOne).attr("title", "Hide password");
    } else if ($(passInputOne).attr("type") == "text") {
        $(passInputOne).attr("type", "password");
        $(passIconSvgOne).removeClass("fa-eye").addClass("fa-eye-slash");
        $(passIconSvgOne).attr("title", "Show password");
    }
});
// Toggle confirmed password value visablity
$(passIconTwo).on("click", function() {
    if ($(passInputTwo).attr("type") == "password") {
        $(passInputTwo).attr("type", "text");
        $(passIconSvgTwo).removeClass("fa-eye-slash").addClass("fa-eye");
        $(passIconSvgTwo).attr("title", "Hide password");
    } else if ($(passInputTwo).attr("type") == "text") {
        $(passInputTwo).attr("type", "password");
        $(passIconSvgTwo).removeClass("fa-eye").addClass("fa-eye-slash");
        $(passIconSvgTwo).attr("title", "Show password");
    }
});