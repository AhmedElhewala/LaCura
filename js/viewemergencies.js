// Pets section variables
let petBoxes = Array.from(document.querySelectorAll(`.emergency .container .emergency-pet .pet-box`));
let selectBox = `.emergency select`;
// emergency variables
let emergencies = `.emergency .container.emergency-section .emergency-box`;
let emergenciesCounter = $(emergencies).length;
let emergencyBtn = `.emergency span.emergency-link`;
let emergencyBtntxt = `.emergency span.emergency-link span`;
let emergencyArrow = `.emergency span.emergency-link svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/viewemergencies-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Check and edit emergencies
if (emergenciesCounter > 4) {
    for (let i = emergenciesCounter - 1; i > 3; i--) {
        $(emergencies)[i].classList.add("hide");
    }
} else {
    $(emergencyBtn).hide();
}
// Check Pet option value
petBoxes.forEach(pet => {
    if (pet.classList.contains("active")) {
        $(selectBox).val(pet.dataset.value);
    }
});

// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/viewemergencies-ar.css" class="style-ar" />`);
    }
});
// Clicking on pet img
petBoxes.forEach(pet => {
    pet.addEventListener("click", () => {
        petBoxes.forEach(icon => {
            if (icon.classList.contains("active")) {
                icon.classList.remove("active");
            }
        });
        pet.classList.add("active");
        $(selectBox).val(pet.dataset.value);
    });
});
// Click on view more/less btn
$(emergencyBtn).on("click", function() {
    if ($(emergencyBtn).hasClass("more")) {
        for (let i = 3; i < emergenciesCounter; i++) {
            $(emergencies)[i].classList.remove("hide");
        }
        $(emergencyArrow).removeClass("fa-angles-down").addClass("fa-angles-up");
        $(emergencyBtntxt).text("View Less");
        $(emergencyBtn).removeClass("more").addClass("less");
    } else if ($(emergencyBtn).hasClass("less")) {
        for (let i = emergenciesCounter - 1; i > 3; i--) {
            $(emergencies)[i].classList.add("hide");
        }
        $(emergencyArrow).removeClass("fa-angles-up").addClass("fa-angles-down");
        $(emergencyBtntxt).text("View More");
        $(emergencyBtn).removeClass("less").addClass("more");
    }
});