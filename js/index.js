toggler = document.querySelector(".toggler");
navbar = document.querySelector(".navbar");
sitebody = document.querySelector(".site-body");
topbar = document.querySelector(".top-bar-fixed");

navbar_status = true;
topbar_shrink = false;

// toggler.addEventListener("click", function (event) {
//     if (navbar_status) {
//         topbar.classList.add("top-bar-adjust");
//         topbar.classList.remove("top-bar-un-adjust");
//         navbar.classList.add("navbar-collapse");
//         sitebody.classList.add("site-body-adjust");
//         navbar.classList.remove("navbar-un-collapse");
//         sitebody.classList.remove("site-body-un-adjust");


//         navbar_status = false;
//     }

//     else {
//         topbar.classList.add("top-bar-un-adjust");
//         topbar.classList.remove("top-bar-adjust");
//         navbar.classList.add("navbar-un-collapse");
//         sitebody.classList.add("site-body-un-adjust");
//         navbar.classList.remove("navbar-collapse");
//         sitebody.classList.remove("site-body-adjust");


//         navbar_status = true;
//     }
// })

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
        if (tab != current) {
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


reveal_tab_heads = document.querySelectorAll(".reveal-tab-head");
// tab_details_status = false;

reveal_tab_heads.forEach((reveal_tab_head) => {
    reveal_tab_head.addEventListener("click", function (event) {
        reveal_tab_details = reveal_tab_head.nextSibling.nextSibling;

        if(reveal_tab_details.classList.contains("tab-details-un-reveal")) {
            reveal_tab_details.classList.add("tab-details-reveal");
            setTimeout(() => {
                reveal_tab_details.classList.remove("tab-details-un-reveal");
            });
        }

        else {
            reveal_tab_details.classList.add("tab-details-un-reveal");
            setTimeout(() => {
                reveal_tab_details.classList.remove("tab-details-reveal");
            });
        }
    })
})

syllabus_headers = document.querySelectorAll(".syllabus-header");

syllabus_headers.forEach((syllabus_header) => {
    syllabus_header.addEventListener("click", function (event) {
        syllabus_header_details = syllabus_header.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
        // console.log(syllabus_header_details);
        console.log(syllabus_header_details.classList);

        if(syllabus_header_details.classList.contains("tab-details-un-reveal")) {
            syllabus_header_details.classList.add("tab-details-reveal");
            setTimeout(() => {
                syllabus_header_details.classList.remove("tab-details-un-reveal");
            });
        }

        else {
            syllabus_header_details.classList.add("tab-details-un-reveal");
            setTimeout(() => {
                syllabus_header_details.classList.remove("tab-details-reveal");
            });
        }
    })
})


// scrolling js
iiita_logo_1 = document.querySelector(".iiita-logo-img-1");
iiita_header = document.querySelector(".iiita-header");
iiita_name = document.querySelectorAll(".iiita-name > h4");

// $(':root').css("--font-bree", "'Lobster', cursive");

window.addEventListener('scroll', function (event) {
    let scrollY = window.scrollY;
    // if not used let, then scrollY is bot changing,

    if(scrollY >= 325) {
        topbar_shrink = true;

        iiita_logo_1.classList.add("iiita-logo-shrink");
        iiita_logo_1.classList.remove("iiita-logo-expand");

        iiita_header.classList.add("iiita-header-shrink");
        iiita_header.classList.remove("iiita-header-expand");

        iiita_name.forEach((iiita_name_x) => {
            iiita_name_x.classList.add("iiita-name-shrink");
            iiita_name_x.classList.remove("iiita-name-expand");
        })

        topbar.classList.add("top-bar-fixed-shrink");
        topbar.classList.remove("top-bar-fixed-expand");
    }

    else {
        topbar_shrink = false;
        
        iiita_logo_1.classList.add("iiita-logo-expand");
        iiita_logo_1.classList.remove("iiita-logo-shrink");

        iiita_header.classList.add("iiita-header-expand");
        iiita_header.classList.remove("iiita-header-shrink");

        iiita_name.forEach((iiita_name_x) => {
            iiita_name_x.classList.add("iiita-name-expand");
            iiita_name_x.classList.remove("iiita-name-shrink");
        })

        topbar.classList.add("top-bar-fixed-expand");
        topbar.classList.remove("top-bar-fixed-shrink");
    }

    console.log(iiita_name.classList);
})