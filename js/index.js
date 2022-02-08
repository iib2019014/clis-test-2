toggler = document.querySelector(".toggler");
sidenav = document.querySelector(".sidenav");
content = document.querySelector(".content");

sidenav_status = true;

toggler.addEventListener("click", function(event) {
    if(sidenav_status) {
        sidenav.classList.add("sidenav-collapse");
        content.classList.add("content-adjust");
        sidenav.classList.remove("sidenav-un-collapse");
        content.classList.remove("content-un-adjust");

        sidenav_status = false;
    }

    else {
        sidenav.classList.add("sidenav-un-collapse");
        content.classList.add("content-un-adjust");
        sidenav.classList.remove("sidenav-collapse");
        content.classList.remove("content-adjust");

        sidenav_status = true;
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
active_nav_item.classList.add("sidenav-item-active")



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