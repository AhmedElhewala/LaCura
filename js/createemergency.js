// form variables
let emergencyInput = `.user-form form div.name-section div.input-section input`;
let emergencyIcon = `.user-form form div.name-section div.input-section .input-icon svg`;
let descipInput = `.user-form form div.desrip-section div.input-section textarea`;
let desripIcon = `.user-form form div.desrip-section div.input-section .input-icon svg`;
let dealInput = `.user-form form div.deal-section div.input-section textarea`;
let dealIcon = `.user-form form div.deal-section div.input-section .input-icon svg`;
let petInput = `.user-form form div.pet-section div.input-section select.emergency-pet`;
let petIcon = `.user-form form div.pet-section div.input-section .select-icon svg`;
let medicineInput = `.user-form form div.medicine-section div.input-section select.emergency-medicine`;
let medicineIcon = `.user-form form div.medicine-section div.input-section .select-icon svg`;
let symptomInput = `.user-form form div.symptom-section div.input-section select.emergency-symptom`;
let symptomIcon = `.user-form form div.symptom-section div.input-section .select-icon svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/createemergency-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/createemergency-ar.css" class="style-ar" />`);
    }
});
// Toggle name icon by focusing
$(emergencyInput).on({
    focus: function() {
        $(emergencyIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(emergencyIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle desription icon by focusing
$(descipInput).on({
    focus: function() {
        $(desripIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(desripIcon).removeClass("fa-file-signature").addClass("fa-file");
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
// Toggle medicine icon by focusing
$(medicineInput).on({
    focus: function() {
        $(medicineIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(medicineIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});
// Toggle symptom icon by focusing
$(symptomInput).on({
    focus: function() {
        $(symptomIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(symptomIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});
// Toggle keyword icon by focusing
$(keywordInput).on({
    focus: function() {
        $(keywordIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(keywordIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});