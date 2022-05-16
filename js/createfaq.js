// form variables
let queInput = `.user-form form div.text-section div.input-section input`;
let queIcon = `.user-form form div.text-section div.input-section .input-icon svg`;
let ansInput = `.user-form form div.area-section div.input-section textarea`;
let ansIcon = `.user-form form div.area-section div.input-section .input-icon svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/createfaq-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/createfaq-ar.css" class="style-ar" />`);
    }
});
// Toggle question icon by focusing
$(queInput).on({
    focus: function() {
        $(queIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(queIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle answere icon by focusing
$(ansInput).on({
    focus: function() {
        $(ansIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(ansIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});