toggler = document.querySelector(".toggler");
navbar = document.querySelector(".navbar");
content = document.querySelector(".content");

navbar_status = true;

toggler.addEventListener("click", function(event) {
    if(navbar_status) {
        navbar.classList.add("navbar-collapse");
        content.classList.add("content-adjust");
        navbar.classList.remove("navbar-un-collapse");
        content.classList.remove("content-un-adjust");

        navbar_status = false;
    }

    else {
        navbar.classList.add("navbar-un-collapse");
        content.classList.add("content-un-adjust");
        navbar.classList.remove("navbar-collapse");
        content.classList.remove("content-adjust");

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