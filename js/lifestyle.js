// Pets section variables
let petBoxes = Array.from(document.querySelectorAll(`.lifestyle .container .lifestyle-pet .pet-box`));
let selectBox = `.lifestyle select`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/lifestyle-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Check Pet option value
petBoxes.forEach(pet => {
    if (pet.classList.contains("active")) {
        $(selectBox).val(pet.dataset.value);
    }
});
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/lifestyle-ar.css" class="style-ar" />`);
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