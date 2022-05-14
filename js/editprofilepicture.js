// form variables
let fileInput = `.user-form form div.file-section input.user-picture`;
let fileIcon = `.user-form form div.file-section .file-icon > svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/editprofilepicture-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/editprofilepicture-ar.css" class="style-ar" />`);
    }
});
// Toggle name icon by focusing
$(fileInput).on({
    focus: function() {
        $(fileIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(fileIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});