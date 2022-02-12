toggler = document.querySelector(".toggler");
navbar = document.querySelector(".navbar");
sitebody = document.querySelector(".site-body");
topbar = document.querySelector(".top-bar-fixed");

navbar_status = true;

toggler.addEventListener("click", function(event) {
    if(navbar_status) {
        navbar.classList.add("navbar-collapse");
        topbar.classList.add("top-bar-adjust");
        sitebody.classList.add("site-body-adjust");
        navbar.classList.remove("navbar-un-collapse");
        topbar.classList.remove("top-bar-un-adjust");
        sitebody.classList.remove("site-body-un-adjust");

        navbar_status = false;
    }

    else {
        navbar.classList.add("navbar-un-collapse");
        topbar.classList.add("top-bar-un-adjust");
        sitebody.classList.add("site-body-un-adjust");
        navbar.classList.remove("navbar-collapse");
        topbar.classList.remove("top-bar-adjust");
        sitebody.classList.remove("site-body-adjust");

        navbar_status = true;
    }

})

// active_page_util = document.querySelector(".keep-link-active");
active_page_util = document.querySelectorAll(".keep-link-active");
console.log(active_page_util);
// active_page = active_page_util.classList[1]
active_page = active_page_util[active_page_util.length - 1].classList[1]
console.log(active_page);
active_nav_item = document.getElementById(active_page)
console.log(active_nav_item);
active_nav_item.classList.add("nav-item-active")



function removeOthers(all_tabs, current) {
    all_tabs.forEach(function (tab) {
        if(tab != current) {
            tab.classList.remove("tab-active");
            sec = document.getElementById(tab.classList[1]);
            sec.classList.remove("section-active");
        }
    })
}


section_tabs = document.querySelectorAll(".section-tab");
sections = document.querySelectorAll(".content-section");

section_tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
        section = document.getElementById(tab.classList[1]);
        removeOthers(section_tabs, tab);
        // removeOthers(sections, section);
        tab.classList.add("tab-active");
        section.classList.add("section-active");
    })
})