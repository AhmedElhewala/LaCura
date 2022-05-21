// form variables
let petInput = `.user-form form div.pet-section div.input-section select`;
let petIcon = `.user-form form div.pet-section div.input-section .select-icon svg`;
let nameInput = `.user-form form div.name-section div.input-section input`;
let nameIcon = `.user-form form div.name-section div.input-section .input-icon svg`;
let genderInput = `.user-form form div.gender-section div.input-section select`;
let genderIcon = `.user-form form div.gender-section div.input-section .select-icon svg`;
let birthInput = `.user-form form div.birthday-section div.input-section input`;
let birthIcon = `.user-form form div.birthday-section div.input-section .birthday-icon svg`;
let sensorInput = `.user-form form div.sensor-section div.input-section select`;
let sensorIcon = `.user-form form div.sensor-section div.input-section .select-icon svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/editpet-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/editpet-ar.css" class="style-ar" />`);
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
// Toggle name icon by focusing
$(nameInput).on({
    focus: function() {
        $(nameIcon).removeClass("fa-file").addClass("fa-file-signature");
    },
    blur: function() {
        $(nameIcon).removeClass("fa-file-signature").addClass("fa-file");
    }
});
// Toggle gender icon by focusing
$(genderInput).on({
    focus: function() {
        $(genderIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(genderIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});
// Toggle birthday icon by focusing
$(birthInput).on({
    focus: function() {
        $(birthIcon).removeClass("fa-calendar").addClass("fa-calendar-days");
    },
    blur: function() {
        $(birthIcon).removeClass("fa-calendar-days").addClass("fa-calendar");
    }
});
// Toggle sensor icon by focusing
$(sensorInput).on({
    focus: function() {
        $(sensorIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(sensorIcon).removeClass("fa-box-open").addClass("fa-box");
    }
});