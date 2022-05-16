// form variables
let petInput = `.user-form form div.select-section div.input-section select.pet-name`;
let petIcon = `.user-form form div.select-section div.input-section .select-icon svg`;
let cleanInput = `.user-form form div.cleanliness-section div.input-section textarea`;
let cleanIcon = `.user-form form div.cleanliness-section div.input-section .text-icon svg`;
let careInput = `.user-form form div.care-section div.input-section textarea`;
let careIcon = `.user-form form div.care-section div.input-section .text-icon svg`;
let matingInput = `.user-form form div.mating-section div.input-section textarea`;
let matingIcon = `.user-form form div.mating-section div.input-section .text-icon svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/editlifestyle-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/editlifestyle-ar.css" class="style-ar" />`);
    }
});

// Toggle pet icon by focusing
$(petInput).on({
    focus: function() {
        $(petIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(petIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});
// Toggle cleanliness icon by focusing
$(cleanInput).on({
    focus: function() {
        $(cleanIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(cleanIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle care icon by focusing
$(careInput).on({
    focus: function() {
        $(careIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(careIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle mating icon by focusing
$(matingInput).on({
    focus: function() {
        $(matingIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(matingIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});