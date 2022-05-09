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
let langEnglish = `.option .lang-option .lang-box > a.english`;
let langArabic = `.option .lang-option .lang-box > a.arabic`;
let englishStyle = `link.style-en`;
let arabicStyle = `link.style-ar`;
// header & footer logo variables
let headerLogo = document.querySelector(`header .container .logo-icon img`);
let footerLogo = document.querySelector(`footer .container .top .end-wish img`);
// notification list variables
let notificationList = `.notification`;
let notificationBtn = `header .container .user-section .notification-icon`;
let notificationExit = `.notification .notification-exit`;
let notificationSetting = `.notification .notification-setting`;
// go up button variables
let goUpBtn = document.querySelector(`.go-up`);
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
// localstorage values variables
let saveLogo = localStorage.getItem("logo-color");
let saveColor = localStorage.getItem("option-color");
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
// theme mood value
if (saveThemeStat !== null) {
    if (!$(themeBar).hasClass(saveThemeStat)) {
        $(themeBar).toggleClass("light dark");
    }
}
// theme background color value
if (saveThemeBG !== null) {
    $("body").css("--theme-background", saveThemeBG);
}
// theme color value
if (saveThemeClr !== null) {
    $("body").css("--theme-color", saveThemeClr);
}
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
updateNormlaRange();
updateTheScale();
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
        localStorage.setItem("option-color", li.dataset.color);
        localStorage.setItem("logo-color", li.dataset.logo);
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
        $("body").css("--theme-background", "#333");
        $("body").css("--theme-color", "#fff");
        localStorage.setItem("theme-status", "dark");
        localStorage.setItem("theme-background", "#333");
        localStorage.setItem("theme-color", "#fff");
        $(themeBar).toggleClass("light dark");
    } else if ($(themeBar).hasClass("dark")) {
        $("body").css("--theme-background", "#fff");
        $("body").css("--theme-color", "#333");
        localStorage.setItem("theme-status", "light");
        localStorage.setItem("theme-background", "#fff");
        localStorage.setItem("theme-color", "#333");
        $(themeBar).toggleClass("dark light");
    }
});
// click on moon icon
$(themeMoon).on("click", function() {
    if ($(themeBar).hasClass("light")) {
        $("body").css("--theme-background", "#333");
        $("body").css("--theme-color", "#fff");
        localStorage.setItem("theme-status", "dark");
        localStorage.setItem("theme-background", "#333");
        localStorage.setItem("theme-color", "#fff");
        $(themeBar).toggleClass("light dark");
    }
});
// click on sun icon
$(themeSun).on("click", function() {
    if ($(themeBar).hasClass("dark")) {
        $("body").css("--theme-background", "#fff");
        $("body").css("--theme-color", "#333");
        localStorage.setItem("theme-status", "light");
        localStorage.setItem("theme-background", "#fff");
        localStorage.setItem("theme-color", "#333");
        $(themeBar).toggleClass("dark light");
    }
});
// click on english btn
$(langEnglish).on("click", function(e) {
    if (!$(langEnglish).hasClass("active")) {
        $(langEnglish).siblings().removeClass("active");
        $(langEnglish).addClass("active");
        $("html").attr("lang", "en");
        $("body").attr("translate", "no");
        if ($(arabicStyle).attr("href") != undefined) {
            $(arabicStyle).remove();
        }
        localStorage.setItem("page-language", "en");
    } else {
        e.preventDefault();
    }
});
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(langArabic).siblings().removeClass("active");
        $(langArabic).addClass("active");
        $("html").attr("lang", "ar");
        $("body").attr("translate", "yes");
        $(englishStyle).after(`<link rel="stylesheet" href="css/monitoring-ar.css" class="style-ar" />`);
        localStorage.setItem("page-language", "ar");
    } else {
        e.preventDefault();
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
});
// showing the go up btn
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