// preloader variable
let preLoad = `.preload`;
// profile variables
let profile = `header .container .user-section .profile`;
let profileArrow = `header .container .user-section .profile .caret`;
let profileMenu = `.profile-pop`;
// navbar variables
let navBar = `nav`;
let navMenu = `header .container .toggle-menu`;
// color options variable
let optionBox = `.option`;
let optBtn = `.option .option-icon`;
let optIcon = `.option .option-icon > svg`;
let optColors = Array.from(document.querySelectorAll(`.option .option-box .color-option ul > li`));
let themeBar = `.option .mood-option .mood .mood-bar`;
let themeMoon = `.option .mood-option .mood .moon`;
let themeSun = `.option .mood-option .mood .sun`;
let langEnglish = `.option .lang-option .lang-box > span.english`;
let langArabic = `.option .lang-option .lang-box > span.arabic`;
let englishStyle = `link.style-en`;
let arabicStyle = `link.style-ar`;
// header & footer logo variables
let headerLogo = document.querySelector(`header .container .logo-icon img`);
let footerLogo = document.querySelector(`footer .container .top .end-wish img`);
// main section variables
let mainSection = document.querySelector(`main .container`);
let mainLogo = document.querySelector(`main .container img`);
// notification list variables
let notificationList = `.notification`;
let notificationBtn = `header .container .user-section .notification-icon`;
let notificationExit = `.notification .notification-exit`;
let notificationSetting = `.notification .notification-setting`;
// go up button variables
let goUpBtn = document.querySelector(`.go-up`);
// Array of imgs of the slider
let sliderImgs = [];
for (let i = 0; i < 7; i++) {
    sliderImgs.push(`landing${i}.webp`);
}
// landing variable
let landing = document.querySelector(`.landing`);
let imgIndex = 0;
// Emergency variables
let emergencyQue = `.emergency .container .emergency-faq .faq-box div.faq-que`;
let emergencyAns = `.emergency .container .emergency-faq .faq-box div.faq-ans`;
let emergencyArrow = `.emergency .container .emergency-faq .faq-box div.faq-que svg`;
// Health variables
let healthQue = `.health .container .health-faq .faq-box div.que-box`;
let healthAsn = `.health .container .health-faq .faq-box div.ans-box`;
let healthArrow = `.health .container .health-faq .faq-box div.que-box svg`;
// Vets variables
let vetArea = document.querySelector(`.vets .container`);
let vetCard = `.vets .container .vet-content .vet-box`;
let vetCardBack = `.vets .container .vet-content .vet-box .card-back`;
// localstorage values variables
let saveLogo = localStorage.getItem("logo-color");
let saveColor = localStorage.getItem("option-color");
let saveMainLogo = localStorage.getItem("main-logo");
let saveThemeStat = localStorage.getItem("theme-status");
let saveThemeBG = localStorage.getItem("theme-background");
let saveThemeClr = localStorage.getItem("theme-color");
let saveLanguage = localStorage.getItem("page-language");
// End Variables
// Start check Localstorage
// color option value
if (saveColor !== null) {
    document.documentElement.style.setProperty("--option-color", saveColor);
    optColors.forEach(li => {
        if (li.dataset.color == saveColor) {
            li.classList.add("active");
        } else {
            if (li.classList.contains("active")) {
                li.classList.remove("active");
            }
        }
    });
}
// logo color value
if (saveLogo !== null) {
    headerLogo.setAttribute("src", `assets/imgs/${saveLogo}`);
    footerLogo.setAttribute("src", `assets/imgs/${saveLogo}`);
}
// main logo value
if (saveMainLogo !== null) {
    mainLogo.setAttribute("src", `assets/imgs/${saveMainLogo}`);
}
// theme mood value
if (saveThemeStat !== null) {
    if (!$(themeBar).hasClass(saveThemeStat)) {
        $(themeBar).toggleClass("light dark");
    }
}
// theme background color value
if (saveThemeBG !== null) {
    $("body").get(0).style.setProperty("--theme-background", saveThemeBG);
}
// theme color value
if (saveThemeClr !== null) {
    $("body").get(0).style.setProperty("--theme-color", saveThemeClr);
}
// page language value
if (saveLanguage !== null) {
    if (saveLanguage == "en") {
        if (!$(langEnglish).hasClass("active")) {
            $(langEnglish).siblings().removeClass("active");
            $(langEnglish).addClass("active");
            $("html").attr("lang", "en");
            $("body").attr("dir", "ltr");
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
            $("body").attr("dir", "rtl");
            $("body").attr("translate", "yes");
            $(englishStyle).after(`<link rel="stylesheet" href="css/home-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Fade preloader out
$(document).ready(() => {
    $(preLoad).fadeOut("slow");
});
// Toggle profile menu
$(profile).on("click", function() {
    toggleProfile();
});
// Toggle navbar menu
$(navMenu).on("click", function() {
    toggleNav();
});
// Fade navbar in after resizeing
$(window).on("resize", function() {
    if ($(document).width() >= 767) {
        $(navBar).slideDown("fast");
    } else {
        $(navBar).slideUp("fast");
        if ($(navMenu).hasClass("open")) {
            $(navMenu).removeClass("open");
        }
    }
});
// Toggle profile function
function toggleProfile() {
    if ($(navMenu).hasClass("open")) {
        $(navBar).slideUp("fast");
        $(navMenu).removeClass("open");
    }
    $(profileMenu).slideToggle("fast");
    $(profileArrow).toggleClass("fa-caret-down fa-caret-up");
}
// Toggle Navbar function
function toggleNav() {
    if ($(profileMenu).css("display") == "block") {
        $(profileMenu).slideUp("fast");
        $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
    }
    $(navBar).slideToggle("fast");
    $(navMenu).toggleClass("open");
};
// toggle notification box
$(notificationBtn).on("click", function() {
    $(notificationList).toggleClass("show");
    $(notificationBtn).toggleClass("open");
});
// close notification box by clicking X
$(notificationExit).on("click", function() {
    $(notificationList).removeClass("show");
    $(notificationBtn).removeClass("open");
});
// toggle notification settings
$(notificationSetting).on("click", function() {
    $(notificationSetting).toggleClass("open");
});
// toggle colors option box
$(optBtn).on("click", function() {
    $(optionBox).toggleClass("open");
    $(optIcon).toggleClass("fa-spin");
});
// click on a color option
optColors.forEach(li => {
    li.style.backgroundColor = li.dataset.color;
    li.addEventListener("click", () => {
        document.documentElement.style.setProperty("--option-color", li.dataset.color);
        headerLogo.setAttribute("src", `assets/imgs/${li.dataset.logo}`);
        footerLogo.setAttribute("src", `assets/imgs/${li.dataset.logo}`);
        mainLogo.setAttribute("src", `assets/imgs/${li.dataset.main}`);
        localStorage.setItem("option-color", li.dataset.color);
        localStorage.setItem("logo-color", li.dataset.logo);
        localStorage.setItem("main-logo", li.dataset.main);
        optColors.forEach(clr => {
            if (clr.classList.contains("active")) {
                clr.classList.remove("active");
            }
        });
        li.classList.add("active");
        $(optionBox).removeClass("open");
        $(optIcon).removeClass("fa-spin");
    })
});
// click on theme bar
$(themeBar).on("click", function() {
    if ($(themeBar).hasClass("light")) {
        $("body").get(0).style.setProperty("--theme-background", "#333");
        $("body").get(0).style.setProperty("--theme-color", "#fff");
        localStorage.setItem("theme-status", "dark");
        localStorage.setItem("theme-background", "#333");
        localStorage.setItem("theme-color", "#fff");
        $(themeBar).toggleClass("light dark");
    } else if ($(themeBar).hasClass("dark")) {
        $("body").get(0).style.setProperty("--theme-background", "#fff");
        $("body").get(0).style.setProperty("--theme-color", "#333");
        localStorage.setItem("theme-status", "light");
        localStorage.setItem("theme-background", "#fff");
        localStorage.setItem("theme-color", "#333");
        $(themeBar).toggleClass("dark light");
    }
});
// click on moon icon
$(themeMoon).on("click", function() {
    if ($(themeBar).hasClass("light")) {
        $("body").get(0).style.setProperty("--theme-background", "#333");
        $("body").get(0).style.setProperty("--theme-color", "#fff");
        localStorage.setItem("theme-status", "dark");
        localStorage.setItem("theme-background", "#333");
        localStorage.setItem("theme-color", "#fff");
        $(themeBar).toggleClass("light dark");
    }
});
// click on sun icon
$(themeSun).on("click", function() {
    if ($(themeBar).hasClass("dark")) {
        $("body").get(0).style.setProperty("--theme-background", "#fff");
        $("body").get(0).style.setProperty("--theme-color", "#333");
        localStorage.setItem("theme-status", "light");
        localStorage.setItem("theme-background", "#fff");
        localStorage.setItem("theme-color", "#333");
        $(themeBar).toggleClass("dark light");
    }
});
// click on english btn
$(langEnglish).on("click", function() {
    if (!$(langEnglish).hasClass("active")) {
        $(langEnglish).siblings().removeClass("active");
        $(langEnglish).addClass("active");
        $("html").attr("lang", "en");
        $("body").attr("dir", "ltr");
        $("body").attr("translate", "no");
        if ($(arabicStyle).attr("href") != undefined) {
            $(arabicStyle).remove();
        }
        localStorage.setItem("page-language", "en");
    }
});
// click on arabic btn
$(langArabic).on("click", function() {
    if (!$(langArabic).hasClass("active")) {
        $(langArabic).siblings().removeClass("active");
        $(langArabic).addClass("active");
        $("html").attr("lang", "ar");
        $("body").attr("dir", "rtl");
        $("body").attr("translate", "yes");
        $(englishStyle).after(`<link rel="stylesheet" href="css/home-ar.css" class="style-ar" />`);
        localStorage.setItem("page-language", "ar");
    }
});
// Close opened menu by clicking Escape key
$(document).on("keydown", function(e) {
    if (e.key == "Escape") {
        if ($(profileMenu).css("display") == "block") {
            $(profileMenu).slideUp("fast");
            $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
        }
        if ($(navBar).css("display") == "block" && $(document).width() <= 767) {
            $(navBar).slideUp("fast");
            $(navMenu).removeClass("open");
        }
        if ($(notificationList).hasClass("show")) {
            $(notificationList).removeClass("show");
            $(notificationBtn).removeClass("open");
        }
        if ($(optionBox).hasClass("open")) {
            $(optionBox).removeClass("open");
            $(optIcon).removeClass("fa-spin");
        }
        if ($(notificationSetting).hasClass("open")) {
            $(notificationSetting).removeClass("open");
        }
    }
});
// Close opened menu by clicking document body
$(document).on("click", function(e) {
    if ($(profileMenu).find(e.target).length == 0 && $(profile).find(e.target).length == 0 && e.target != $(profile)[0]) {
        if ($(profileMenu).css("display") == "block") {
            $(profileMenu).slideUp("fast");
            $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
        }
    }
    if ($(navMenu).find(e.target).length == 0 && $(navBar).find(e.target).length == 0 && e.target != $(navMenu)[0]) {
        if ($(navMenu).hasClass("open")) {
            $(navBar).slideUp("fast");
            $(navMenu).removeClass("open");
        }
    }
    if ($(optionBox).find(e.target).length == 0 && $(optBtn).find(e.target).length == 0 && e.target != $(optionBox)[0]) {
        if ($(optionBox).hasClass("open")) {
            $(optionBox).removeClass("open");
            $(optIcon).removeClass("fa-spin");
        }
    }
    if ($(notificationList).find(e.target).length == 0 && $(notificationBtn).find(e.target).length == 0 && e.target != $(notificationList)[0]) {
        if ($(notificationList).hasClass("show")) {
            $(notificationList).removeClass("show");
            $(notificationBtn).removeClass("open");
        }
    }
    if ($(notificationSetting).find(e.target).length == 0 && e.target != $(notificationSetting)[0]) {
        if ($(notificationSetting).hasClass("open")) {
            $(notificationSetting).removeClass("open");
        }
    }
    if ($(vetCard).find(e.target).length == 0 && e.target != $(vetCard)[0]) {
        if ($(vetCard).find($(vetCardBack)).hasClass("show")) {
            $(vetCard).find($(vetCardBack)).removeClass("show");
        }
    }
});
// showing the main section
window.onscroll = function() {
    if (window.scrollY >= window.innerHeight) {
        goUpBtn.classList.add("show");
    } else {
        goUpBtn.classList.remove("show");
    }
};
// click on go up button
goUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    });
});
// sliding the landing background
setInterval(function() {
    if (imgIndex === 7) {
        imgIndex = 0;
    }
    landing.style.backgroundImage = `url("assets/imgs/${sliderImgs[imgIndex]}")`;
    imgIndex++;
}, 3000);
// clicking on Emergency FAQ question
$(emergencyQue).on("click", function() {
    $(this).next(emergencyAns).toggleClass("show");
    $(this).toggleClass("open");
    if ($(this).next(emergencyAns).hasClass("show")) {
        $(this).children(emergencyArrow).removeClass("fa-caret-down").addClass("fa-caret-up");
    } else {
        $(this).children(emergencyArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
    }
    if ($(this).parent().siblings().children(emergencyAns).hasClass("show")) {
        $(this).parent().siblings().children(emergencyQue).removeClass("open");
        $(this).parent().siblings().children(emergencyAns).removeClass("show");
        $(this).parent().siblings().children(emergencyQue).children(emergencyArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
    }
});
// clicking on Health FAQ question
$(healthQue).on("click", function() {
    $(this).next(healthAsn).toggleClass("show");
    $(this).toggleClass("open");
    if ($(this).next(healthAsn).hasClass("show")) {
        $(this).children(healthArrow).removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
        $(this).children(healthArrow).removeClass("fa-eye").addClass("fa-eye-slash");
    }
    if ($(this).parent().siblings().children(healthAsn).hasClass("show")) {
        $(this).parent().siblings().children(healthQue).removeClass("open");
        $(this).parent().siblings().children(healthAsn).removeClass("show");
        $(this).parent().siblings().children(healthQue).children(healthArrow).removeClass("fa-eye").addClass("fa-eye-slash");
    }
});
// Swipping Vets cards
let swiper = new Swiper(vetArea, {
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
// clicking on vet card
$(vetCard).on("click", function() {
    if ($(this).hasClass("swiper-slide-active")) {
        $(this).find($(vetCardBack)).toggleClass("show");
        if ($(this).siblings().find($(vetCardBack)).hasClass("show")) {
            $(this).siblings().find($(vetCardBack)).removeClass("show");
        }
    }
});