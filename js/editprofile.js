// form variables
let nameInput = `.user-form form div.name-section div.input-section input.user-name`;
let nameIcon = `.user-form form div.name-section div.input-section .input-icon svg`;
let emailInput = `.user-form form div.email-section div.input-section input.user-email`;
let emailIcon = `.user-form form div.email-section div.input-section .input-icon svg`;
let gmailInput = `.user-form form div.gmail-section div.input-section input.user-email`;
let gmailIcon = `.user-form form div.gmail-section div.input-section .input-icon svg`;
let phoneInput = `.user-form form div.phone-section div.input-section input.user-phone`;
let phoneIcon = `.user-form form div.phone-section div.input-section .input-icon svg`;
let birthInput = `.user-form form div.birthday-section div.input-section input.user-birthday`;
let birthIcon = `.user-form form div.birthday-section div.input-section .birthday-icon svg`;
let petInput = `.user-form form div.pet-section div.input-section select.user-pet`;
let petIcon = `.user-form form div.pet-section div.input-section .select-icon svg`;
let editPetBtn = `.user-form form div.pet-section .pet-link`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/editprofile-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/editprofile-ar.css" class="style-ar" />`);
    }
});
// Toggle name icon by focusing
$(nameInput).on({
    focus: function() {
        $(nameIcon).removeClass("fa-user").addClass("fa-user-pen");
    },
    blur: function() {
        $(nameIcon).removeClass("fa-user-pen").addClass("fa-user");
    }
});
// Toggle email icon by focusing
$(emailInput).on({
    focus: function() {
        $(emailIcon).removeClass("fa-envelope").addClass("fa-envelope-open");
    },
    blur: function() {
        $(emailIcon).removeClass("fa-envelope-open").addClass("fa-envelope");
    }
});
// Toggle gmail icon by focusing
$(gmailInput).on({
    focus: function() {
        $(gmailIcon).removeClass("fa-envelope").addClass("fa-envelope-open");
    },
    blur: function() {
        $(gmailIcon).removeClass("fa-envelope-open").addClass("fa-envelope");
    }
});
// Toggle phone icon by focusing
$(phoneInput).on({
    focus: function() {
        $(phoneIcon).removeClass("fa-phone").addClass("fa-tty");
    },
    blur: function() {
        $(phoneIcon).removeClass("fa-tty").addClass("fa-phone");
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
// Toggle pet icon by focusing
$(petInput).on({
    focus: function() {
        $(petIcon).removeClass("fa-box").addClass("fa-box-open");
    },
    blur: function() {
        $(petIcon).removeClass("fa-box-open").addClass("fa-box");
    },
    change: function() {
        if (!$(editPetBtn).hasClass("show")) {
            $(editPetBtn).addClass("show");
        }
    }
});