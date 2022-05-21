// form variables
let nameInput = `.user-form form div.name-section div.input-section input`;
let nameIcon = `.user-form form div.name-section div.input-section .input-icon svg`;
let descripInput = `.user-form form div.descrip-section div.input-section textarea`;
let descripIcon = `.user-form form div.descrip-section div.input-section .input-icon svg`;
let dealInput = `.user-form form div.deal-section div.input-section textarea`;
let dealIcon = `.user-form form div.deal-section div.input-section .input-icon svg`;
let petInput = `.user-form form div.pet-section div.input-section select`;
let petIcon = `.user-form form div.pet-section div.input-section .select-icon svg`;
let diseaseInput = `.user-form form div.disease-section div.input-section select`;
let diseaseIcon = `.user-form form div.disease-section div.input-section .select-icon svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/createsensordata-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/createsensordata-ar.css" class="style-ar" />`);
    }
});
// Toggle name icon by focusing
$(nameInput).on({
    focus: function() {
        $(nameIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(nameIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle description icon by focusing
$(descripInput).on({
    focus: function() {
        $(descripIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(descripIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle deal icon by focusing
$(dealInput).on({
    focus: function() {
        $(dealIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(dealIcon).removeClass("fa-file-signature").addClass("fa-file");
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
// Toggle disease icon by focusing
$(diseaseInput).on({
    focus: function() {
        $(diseaseIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(diseaseIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});