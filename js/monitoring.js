// monitoring variables
let normalMinVal = parseInt($("body").css("--normal-min"));
let normalMaxVal = parseInt($("body").css("--normal-max"));
let emergencyMinVal = 15;
let emergencyMaxVal = 75;
let normalMinPos = `.monitoring .container div.monitoring-current .current-value .current-range span.normal-min`;
let normalMaxPos = `.monitoring .container div.monitoring-current .current-value .current-range span.normal-max`;
let normalScaleMin = `.monitoring .container div.monitoring-normal .normal-value .normal-range span.normal-min`;
let normalScaleMax = `.monitoring .container div.monitoring-normal .normal-value .normal-range span.normal-max`;
let currentScale = `.monitoring .container div.monitoring-current .current-value .current-range .current-scale`;
let currentValue = `.monitoring .container div.monitoring-current .current-value .current-range .current-scale span.scale-value`;
let dealwaySection = `.monitoring .container div.monitoring-dealway`;
let medicineSection = `.monitoring .container div.monitoring-medicine`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/monitoring-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Update the current scale
$(document).ready(() => {
    updateNormlaRange();
    updateTheScale();
});
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/monitoring-ar.css" class="style-ar" />`);
    }
});
// Changing the scale
let changingTheScale = setInterval(function() {
    let newCurrent = Math.floor(Math.random() * 100);
    $(currentValue).text(newCurrent);
    updateTheScale()
}, 3000);
// Update the current scale
function updateTheScale() {
    $(currentScale).width(`${$(currentValue).text()}%`);
    if ($(currentValue).text() >= emergencyMaxVal || $(currentValue).text() <= emergencyMinVal) {
        if ($(currentScale).hasClass("current-normal")) {
            $(currentScale).removeClass("current-normal").addClass("current-emergency");
        } else if ($(currentScale).hasClass("current-sick")) {
            $(currentScale).removeClass("current-sick").addClass("current-emergency");
        }
    } else if (($(currentValue).text() > normalMaxVal && $(currentValue).text() < emergencyMaxVal) || ($(currentValue).text() > emergencyMinVal && $(currentValue).text() < normalMinVal)) {
        if ($(currentScale).hasClass("current-normal")) {
            $(currentScale).removeClass("current-normal").addClass("current-sick");
        } else if ($(currentScale).hasClass("current-emergency")) {
            $(currentScale).removeClass("current-emergency").addClass("current-sick");
        }
    } else if (($(currentValue).text() >= normalMinVal && $(currentValue).text() <= normalMaxVal)) {
        if ($(currentScale).hasClass("current-sick")) {
            $(currentScale).removeClass("current-sick").addClass("current-normal");
        } else if ($(currentScale).hasClass("current-emergency")) {
            $(currentScale).removeClass("current-emergency").addClass("current-normal");
        }
    }
    if ($(currentScale).hasClass("current-sick") || $(currentScale).hasClass("current-emergency")) {
        if (!$(dealwaySection).hasClass("show")) {
            $(dealwaySection).slideDown("fast");
            $(dealwaySection).addClass("show");
        }
    } else if ($(currentScale).hasClass("current-normal")) {
        if ($(dealwaySection).hasClass("show")) {
            $(dealwaySection).slideUp("fast");
            $(dealwaySection).removeClass("show");
        }
    }
    if ($(currentScale).hasClass("current-sick") || $(currentScale).hasClass("current-emergency")) {
        if (!$(medicineSection).hasClass("show")) {
            $(medicineSection).slideDown("fast");
            $(medicineSection).addClass("show");
        }
    } else if ($(currentScale).hasClass("current-normal")) {
        if ($(medicineSection).hasClass("show")) {
            $(medicineSection).slideUp("fast");
            $(medicineSection).removeClass("show");
        }
    }
};
// Update normal range positions
function updateNormlaRange() {
    $(normalScaleMin).text($(normalMinPos).text());
    $(normalScaleMax).text($(normalMaxPos).text());
    $("body").css("--normal-min", `${$(normalMinPos).text()}%`);
    $("body").css("--normal-max", `${$(normalMaxPos).text()}%`);
    normalMinVal = $(normalMinPos).text();
    normalMaxVal = $(normalMaxPos).text();
}