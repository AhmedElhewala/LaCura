// monitoring variables
let wholeStatus = `.monitoring .container .monitoring-head`;
let wholeStatusIcon = `.monitoring .container .monitoring-head svg`;
let tempNormalMinVal = parseInt($("body").css("--normal-temp-min"));
let tempNormalMaxVal = parseInt($("body").css("--normal-temp-max"));
let pulseNormalMinVal = parseInt($("body").css("--normal-pulse-min"));
let pulseNormalMaxVal = parseInt($("body").css("--normal-pulse-max"));
let glukoseNormalMinVal = parseInt($("body").css("--normal-glukose-min"));
let glukoseNormalMaxVal = parseInt($("body").css("--normal-glukose-max"));
let tempEmergencyMinVal = 15;
let tempEmergencyMaxVal = 75;
let pulseEmergencyMinVal = 20;
let pulseEmergencyMaxVal = 85;
let glukoseEmergencyMinVal = 10;
let glukoseEmergencyMaxVal = 65;
let tempNormalMinPos = `.monitoring .monitoring-temperature .current-section .monitoring-value .current-range span.normal-min`;
let tempNormalMaxPos = `.monitoring .monitoring-temperature .current-section .monitoring-value .current-range span.normal-max`;
let tempNormalScaleMin = `.monitoring .monitoring-temperature .normal-section .monitoring-value .normal-range span.normal-min`;
let tempNormalScaleMax = `.monitoring .monitoring-temperature .normal-section .monitoring-value .normal-range span.normal-max`;
let tempCurrentScale = `.monitoring .monitoring-temperature .current-section .monitoring-value .current-range .current-scale`;
let tempCurrentValue = `.monitoring .monitoring-temperature .current-section .monitoring-value .current-range .current-scale span.scale-value`;
let tempDealSection = `.monitoring .monitoring-temperature .deal-section`;
let tempMedicineSection = `.monitoring .monitoring-temperature .medicine-section`;
let pulseNormalMinPos = `.monitoring .monitoring-pulse .current-section .monitoring-value .current-range span.normal-min`;
let pulseNormalMaxPos = `.monitoring .monitoring-pulse .current-section .monitoring-value .current-range span.normal-max`;
let pulseNormalScaleMin = `.monitoring .monitoring-pulse .normal-section .monitoring-value .normal-range span.normal-min`;
let pulseNormalScaleMax = `.monitoring .monitoring-pulse .normal-section .monitoring-value .normal-range span.normal-max`;
let pulseCurrentScale = `.monitoring .monitoring-pulse .current-section .monitoring-value .current-range .current-scale`;
let pulseCurrentValue = `.monitoring .monitoring-pulse .current-section .monitoring-value .current-range .current-scale span.scale-value`;
let pulseDealSection = `.monitoring .monitoring-pulse .deal-section`;
let pulseMedicineSection = `.monitoring .monitoring-pulse .medicine-section`;
let glukoseNormalMinPos = `.monitoring .monitoring-glukose .current-section .monitoring-value .current-range span.normal-min`;
let glukoseNormalMaxPos = `.monitoring .monitoring-glukose .current-section .monitoring-value .current-range span.normal-max`;
let glukoseNormalScaleMin = `.monitoring .monitoring-glukose .normal-section .monitoring-value .normal-range span.normal-min`;
let glukoseNormalScaleMax = `.monitoring .monitoring-glukose .normal-section .monitoring-value .normal-range span.normal-max`;
let glukoseCurrentScale = `.monitoring .monitoring-glukose .current-section .monitoring-value .current-range .current-scale`;
let glukoseCurrentValue = `.monitoring .monitoring-glukose .current-section .monitoring-value .current-range .current-scale span.scale-value`;
let glukoseDealSection = `.monitoring .monitoring-glukose .deal-section`;
let glukoseMedicineSection = `.monitoring .monitoring-glukose .medicine-section`;
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
    updateTempNormlaRange();
    updateTempScale();
    updatePulseNormlaRange();
    updatePulseScale();
    updateGlukoseNormlaRange();
    updateGlukoseScale();
    updateWholeStatus();
});
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/monitoring-ar.css" class="style-ar" />`);
    }
});
// Changing scales & status
let changingTempScale = setInterval(function() {
    let newTempCurrent = Math.floor(Math.random() * 100);
    let newPulseCurrent = Math.floor(Math.random() * 100);
    let newGlukoseCurrent = Math.floor(Math.random() * 100);
    $(tempCurrentValue).text(newTempCurrent);
    $(pulseCurrentValue).text(newPulseCurrent);
    $(glukoseCurrentValue).text(newGlukoseCurrent);
    updateTempScale();
    updatePulseScale();
    updateGlukoseScale();
    updateWholeStatus();
}, 3000);
// Update The whole state
function updateWholeStatus() {
    if ($(tempCurrentScale).hasClass("current-emergency") || $(pulseCurrentScale).hasClass("current-emergency") || $(glukoseCurrentScale).hasClass("current-emergency")) {
        if ($(wholeStatus).hasClass("sick")) {
            $(wholeStatus).removeClass("sick").addClass("emergency");
            $(wholeStatusIcon).removeClass("fa-triangle-exclamation").addClass("fa-skull-crossbones");
        } else if ($(wholeStatus).hasClass("normal")) {
            $(wholeStatus).removeClass("normal").addClass("emergency");
            $(wholeStatusIcon).removeClass("fa-square-check").addClass("fa-skull-crossbones");
        }
    } else if ($(tempCurrentScale).hasClass("current-sick") || $(pulseCurrentScale).hasClass("current-sick") || $(glukoseCurrentScale).hasClass("current-sick")) {
        if ($(wholeStatus).hasClass("emergency")) {
            $(wholeStatus).removeClass("emergency").addClass("sick");
            $(wholeStatusIcon).removeClass("fa-skull-crossbones").addClass("fa-triangle-exclamation");
        } else if ($(wholeStatus).hasClass("normal")) {
            $(wholeStatus).removeClass("normal").addClass("sick");
            $(wholeStatusIcon).removeClass("fa-square-check").addClass("fa-triangle-exclamation");
        }
    } else if ($(tempCurrentScale).hasClass("current-normal") || $(pulseCurrentScale).hasClass("current-normal") || $(glukoseCurrentScale).hasClass("current-normal")) {
        if ($(wholeStatus).hasClass("emergency")) {
            $(wholeStatus).removeClass("emergency").addClass("normal");
            $(wholeStatusIcon).removeClass("fa-skull-crossbones").addClass("fa-square-check");
        } else if ($(wholeStatus).hasClass("sick")) {
            $(wholeStatus).removeClass("sick").addClass("normal");
            $(wholeStatusIcon).removeClass("fa-triangle-exclamation").addClass("fa-square-check");
        }
    }
}
// Update temperature current scale
function updateTempScale() {
    $(tempCurrentScale).width(`${$(tempCurrentValue).text()}%`);
    if ($(tempCurrentValue).text() >= tempEmergencyMaxVal || $(tempCurrentValue).text() <= tempEmergencyMinVal) {
        if ($(tempCurrentScale).hasClass("current-normal")) {
            $(tempCurrentScale).removeClass("current-normal").addClass("current-emergency");
        } else if ($(tempCurrentScale).hasClass("current-sick")) {
            $(tempCurrentScale).removeClass("current-sick").addClass("current-emergency");
        }
    } else if (($(tempCurrentValue).text() > tempNormalMaxVal && $(tempCurrentValue).text() < tempEmergencyMaxVal) || ($(tempCurrentValue).text() > tempEmergencyMinVal && $(tempCurrentValue).text() < tempNormalMinVal)) {
        if ($(tempCurrentScale).hasClass("current-normal")) {
            $(tempCurrentScale).removeClass("current-normal").addClass("current-sick");
        } else if ($(tempCurrentScale).hasClass("current-emergency")) {
            $(tempCurrentScale).removeClass("current-emergency").addClass("current-sick");
        }
    } else if (($(tempCurrentValue).text() >= tempNormalMinVal && $(tempCurrentValue).text() <= tempNormalMaxVal)) {
        if ($(tempCurrentScale).hasClass("current-sick")) {
            $(tempCurrentScale).removeClass("current-sick").addClass("current-normal");
        } else if ($(tempCurrentScale).hasClass("current-emergency")) {
            $(tempCurrentScale).removeClass("current-emergency").addClass("current-normal");
        }
    }
    if ($(tempCurrentScale).hasClass("current-sick") || $(tempCurrentScale).hasClass("current-emergency")) {
        if (!$(tempDealSection).hasClass("show")) {
            $(tempDealSection).slideDown("fast");
            $(tempDealSection).addClass("show");
        }
    } else if ($(tempCurrentScale).hasClass("current-normal")) {
        if ($(tempDealSection).hasClass("show")) {
            $(tempDealSection).slideUp("fast");
            $(tempDealSection).removeClass("show");
        }
    }
    if ($(tempCurrentScale).hasClass("current-sick") || $(tempCurrentScale).hasClass("current-emergency")) {
        if (!$(tempMedicineSection).hasClass("show")) {
            $(tempMedicineSection).slideDown("fast");
            $(tempMedicineSection).addClass("show");
        }
    } else if ($(tempCurrentScale).hasClass("current-normal")) {
        if ($(tempMedicineSection).hasClass("show")) {
            $(tempMedicineSection).slideUp("fast");
            $(tempMedicineSection).removeClass("show");
        }
    }
};
// Update temperature normal range positions
function updateTempNormlaRange() {
    $(tempNormalScaleMin).text($(tempNormalMinPos).text());
    $(tempNormalScaleMax).text($(tempNormalMaxPos).text());
    $("body").css("--normal-temp-min", `${$(tempNormalMinPos).text()}%`);
    $("body").css("--normal-temp-max", `${$(tempNormalMaxPos).text()}%`);
    normalMinVal = $(tempNormalMinPos).text();
    normalMaxVal = $(tempNormalMaxPos).text();
}
// Update Pulse current scale
function updatePulseScale() {
    $(pulseCurrentScale).width(`${$(pulseCurrentValue).text()}%`);
    if ($(pulseCurrentValue).text() >= pulseEmergencyMaxVal || $(pulseCurrentValue).text() <= pulseEmergencyMinVal) {
        if ($(pulseCurrentScale).hasClass("current-normal")) {
            $(pulseCurrentScale).removeClass("current-normal").addClass("current-emergency");
        } else if ($(pulseCurrentScale).hasClass("current-sick")) {
            $(pulseCurrentScale).removeClass("current-sick").addClass("current-emergency");
        }
    } else if (($(pulseCurrentValue).text() > pulseNormalMaxVal && $(pulseCurrentValue).text() < pulseEmergencyMaxVal) || ($(pulseCurrentValue).text() > pulseEmergencyMinVal && $(pulseCurrentValue).text() < pulseNormalMinVal)) {
        if ($(pulseCurrentScale).hasClass("current-normal")) {
            $(pulseCurrentScale).removeClass("current-normal").addClass("current-sick");
        } else if ($(pulseCurrentScale).hasClass("current-emergency")) {
            $(pulseCurrentScale).removeClass("current-emergency").addClass("current-sick");
        }
    } else if (($(pulseCurrentValue).text() >= pulseNormalMinVal && $(pulseCurrentValue).text() <= pulseNormalMaxVal)) {
        if ($(pulseCurrentScale).hasClass("current-sick")) {
            $(pulseCurrentScale).removeClass("current-sick").addClass("current-normal");
        } else if ($(pulseCurrentScale).hasClass("current-emergency")) {
            $(pulseCurrentScale).removeClass("current-emergency").addClass("current-normal");
        }
    }
    if ($(pulseCurrentScale).hasClass("current-sick") || $(pulseCurrentScale).hasClass("current-emergency")) {
        if (!$(pulseDealSection).hasClass("show")) {
            $(pulseDealSection).slideDown("fast");
            $(pulseDealSection).addClass("show");
        }
    } else if ($(pulseCurrentScale).hasClass("current-normal")) {
        if ($(pulseDealSection).hasClass("show")) {
            $(pulseDealSection).slideUp("fast");
            $(pulseDealSection).removeClass("show");
        }
    }
    if ($(pulseCurrentScale).hasClass("current-sick") || $(pulseCurrentScale).hasClass("current-emergency")) {
        if (!$(pulseMedicineSection).hasClass("show")) {
            $(pulseMedicineSection).slideDown("fast");
            $(pulseMedicineSection).addClass("show");
        }
    } else if ($(pulseCurrentScale).hasClass("current-normal")) {
        if ($(pulseMedicineSection).hasClass("show")) {
            $(pulseMedicineSection).slideUp("fast");
            $(pulseMedicineSection).removeClass("show");
        }
    }
};
// Update Pulse normal range positions
function updatePulseNormlaRange() {
    $(pulseNormalScaleMin).text($(pulseNormalMinPos).text());
    $(pulseNormalScaleMax).text($(pulseNormalMaxPos).text());
    $("body").css("--normal-pulse-min", `${$(pulseNormalMinPos).text()}%`);
    $("body").css("--normal-pulse-max", `${$(pulseNormalMaxPos).text()}%`);
    normalMinVal = $(pulseNormalMinPos).text();
    normalMaxVal = $(pulseNormalMaxPos).text();
}
// Update Glukose current scale
function updateGlukoseScale() {
    $(glukoseCurrentScale).width(`${$(glukoseCurrentValue).text()}%`);
    if ($(glukoseCurrentValue).text() >= glukoseEmergencyMaxVal || $(glukoseCurrentValue).text() <= glukoseEmergencyMinVal) {
        if ($(glukoseCurrentScale).hasClass("current-normal")) {
            $(glukoseCurrentScale).removeClass("current-normal").addClass("current-emergency");
        } else if ($(glukoseCurrentScale).hasClass("current-sick")) {
            $(glukoseCurrentScale).removeClass("current-sick").addClass("current-emergency");
        }
    } else if (($(glukoseCurrentValue).text() > glukoseNormalMaxVal && $(glukoseCurrentValue).text() < glukoseEmergencyMaxVal) || ($(glukoseCurrentValue).text() > glukoseEmergencyMinVal && $(glukoseCurrentValue).text() < glukoseNormalMinVal)) {
        if ($(glukoseCurrentScale).hasClass("current-normal")) {
            $(glukoseCurrentScale).removeClass("current-normal").addClass("current-sick");
        } else if ($(glukoseCurrentScale).hasClass("current-emergency")) {
            $(glukoseCurrentScale).removeClass("current-emergency").addClass("current-sick");
        }
    } else if (($(glukoseCurrentValue).text() >= glukoseNormalMinVal && $(glukoseCurrentValue).text() <= glukoseNormalMaxVal)) {
        if ($(glukoseCurrentScale).hasClass("current-sick")) {
            $(glukoseCurrentScale).removeClass("current-sick").addClass("current-normal");
        } else if ($(glukoseCurrentScale).hasClass("current-emergency")) {
            $(glukoseCurrentScale).removeClass("current-emergency").addClass("current-normal");
        }
    }
    if ($(glukoseCurrentScale).hasClass("current-sick") || $(glukoseCurrentScale).hasClass("current-emergency")) {
        if (!$(glukoseDealSection).hasClass("show")) {
            $(glukoseDealSection).slideDown("fast");
            $(glukoseDealSection).addClass("show");
        }
    } else if ($(glukoseCurrentScale).hasClass("current-normal")) {
        if ($(glukoseDealSection).hasClass("show")) {
            $(glukoseDealSection).slideUp("fast");
            $(glukoseDealSection).removeClass("show");
        }
    }
    if ($(glukoseCurrentScale).hasClass("current-sick") || $(glukoseCurrentScale).hasClass("current-emergency")) {
        if (!$(glukoseMedicineSection).hasClass("show")) {
            $(glukoseMedicineSection).slideDown("fast");
            $(glukoseMedicineSection).addClass("show");
        }
    } else if ($(glukoseCurrentScale).hasClass("current-normal")) {
        if ($(glukoseMedicineSection).hasClass("show")) {
            $(glukoseMedicineSection).slideUp("fast");
            $(glukoseMedicineSection).removeClass("show");
        }
    }
};
// Update Glukose normal range positions
function updateGlukoseNormlaRange() {
    $(glukoseNormalScaleMin).text($(glukoseNormalMinPos).text());
    $(glukoseNormalScaleMax).text($(glukoseNormalMaxPos).text());
    $("body").css("--normal-glukose-min", `${$(glukoseNormalMinPos).text()}%`);
    $("body").css("--normal-glukose-max", `${$(glukoseNormalMaxPos).text()}%`);
    normalMinVal = $(glukoseNormalMinPos).text();
    normalMaxVal = $(glukoseNormalMaxPos).text();
}
// Swipping Monitoring cards
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});