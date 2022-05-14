// form variables
let formSection = `.user-form`;
let emailInput = `.user-form form div.email-section input.user-email`;
let emailIcon = `.user-form form div.email-section .email-icon svg`;
let passInput = `.user-form form div.pass-section input.user-password`;
let passIcon = `.user-form form div.pass-section .show-password`;
let passIconSvg = `.user-form form div.pass-section .show-password svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/login-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/login-ar.css" class="style-ar" />`);
    }
});
// Toggle email icon by focusing
$(emailInput).on({
    focus: function() {
        $(emailIcon).removeClass("fa-envelope").addClass("fa-envelope-open");
    },
    blur: function() {
        $(emailIcon).removeClass("fa-envelope-open").addClass("fa-envelope");
    }
});
// Toggle password value visablity
$(passIcon).on("click", function() {
    if ($(passInput).attr("type") == "password") {
        $(passInput).attr("type", "text");
        $(passIconSvg).removeClass("fa-eye-slash").addClass("fa-eye");
        $(passIconSvg).attr("title", "Hide password");
    } else if ($(passInput).attr("type") == "text") {
        $(passInput).attr("type", "password");
        $(passIconSvg).removeClass("fa-eye").addClass("fa-eye-slash");
        $(passIconSvg).attr("title", "Show password");
    }
});