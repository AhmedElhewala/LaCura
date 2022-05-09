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
// form variables
let nameInput = `.user-form form div.name-section div.input-section input.user-name`;
let nameIcon = `.user-form form div.name-section div.input-section .name-icon svg`;
let emailInput = `.user-form form div.site-email div.input-section input.user-email`;
let emailIcon = `.user-form form div.site-email div.input-section .email-icon svg`;
let gmailInput = `.user-form form div.gmail-email div.input-section input.user-email`;
let gmailIcon = `.user-form form div.gmail-email div.input-section .email-icon svg`;
let phoneInput = `.user-form form div.phone-section div.input-section input.user-phone`;
let phoneIcon = `.user-form form div.phone-section div.input-section .phone-icon svg`;
let birthInput = `.user-form form div.birthday-section div.input-section input.user-birthday`;
let birthIcon = `.user-form form div.birthday-section div.input-section .birthday-icon svg`;
let petInput = `.user-form form div.pet-section div.input-section select.user-pet`;
let petIcon = `.user-form form div.pet-section div.input-section .select-icon svg`;
let sensorInput = `.user-form form div.sensor-section div.input-section select.pet-sensor`;
let sensorIcon = `.user-form form div.sensor-section div.input-section .select-icon svg`;
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
            $(englishStyle).after(`<link rel="stylesheet" href="css/editprofile-ar.css" class="style-ar" />`);
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
        $(englishStyle).after(`<link rel="stylesheet" href="css/editprofile-ar.css" class="style-ar" />`);
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