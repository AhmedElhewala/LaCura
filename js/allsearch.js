// search variables
let filterBtn = `.search-section .container .search-filter span`;
let searchBoxes = `.search-section .container .search-box`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/allsearch-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(englishStyle).after(`<link rel="stylesheet" href="css/allsearch-ar.css" class="style-ar" />`);
    }
});
// Click search filter button
$(filterBtn).on("click", function() {
    if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        if ($(this).siblings().hasClass("active")) {
            $(this).siblings().removeClass("active")
        }
        let filterVal = $(this).attr("data-target");
        $.each($(searchBoxes), function(index) {
            if (!$(searchBoxes)[index].classList.contains(filterVal)) {
                $(searchBoxes)[index].classList.add("hide");
            } else {
                if ($(searchBoxes)[index].classList.contains("hide")) {
                    $(searchBoxes)[index].classList.remove("hide");
                }
            }
        });
    }
});