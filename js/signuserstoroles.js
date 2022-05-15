// form variables
let nameInput = `.user-form form div.select-section div.name-section select.user-name`;
let nameIcon = `.user-form form div.select-section div.name-section .select-icon svg`;
let roleInput = `.user-form form div.select-section div.role-section select.user-role`;
let roleIcon = `.user-form form div.select-section div.role-section .select-icon svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/signuserstoroles-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/signuserstoroles-ar.css" class="style-ar" />`);
    }
});
// Toggle pet icon by focusing
$(nameInput).on({
    focus: function() {
        $(nameIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(nameIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});
// Toggle sensor icon by focusing
$(roleInput).on({
    focus: function() {
        $(roleIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(roleIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});