// form variables
let nameInput = `.user-form form div.medicine-section div.input-section input`;
let nameIcon = `.user-form form div.medicine-section div.input-section .input-icon svg`;
let priceInput = `.user-form form div.price-section div.input-section input`;
let priceIcon = `.user-form form div.price-section div.input-section .input-icon svg`;
let tempInput = `.user-form form div.temp-section div.input-section input`;
let tempIcon = `.user-form form div.temp-section div.input-section .input-icon svg`;
let expirtyInput = `.user-form form div.expirty-section div.input-section input`;
let expirtyIcon = `.user-form form div.expirty-section div.input-section .input-icon svg`;
let keywordInput = `.user-form form div.keyword-section div.input-section input`;
let keywordIcon = `.user-form form div.keyword-section div.input-section .input-icon svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/createmedicine-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/createmedicine-ar.css" class="style-ar" />`);
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
// Toggle Price icon by focusing
$(priceInput).on({
    focus: function() {
        $(priceIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(priceIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle temperature icon by focusing
$(tempInput).on({
    focus: function() {
        $(tempIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(tempIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle expirty icon by focusing
$(expirtyInput).on({
    focus: function() {
        $(expirtyIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(expirtyIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle keywords icon by focusing
$(keywordInput).on({
    focus: function() {
        $(keywordIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(keywordIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});