slide_show = document.querySelector(".slide-show");
console.log(slide_show);
// sliders = document.querySelectorAll(".slider");
slider = document.querySelector(".slider");
// sliders_len = sliders.length;
// console.log(sliders);
slider_img = document.querySelector(".slider-item-img");
console.log(slider_img);
console.log(slider_img.src);

index = 0;

// src_list = slider_img.src.split("/");
// console.log(src_list)
// console.log(src_list.at(-1))
// src_list[src_list.length - 1] = "lab-1.jpg";
// slider_img.src = src_list.join("/");
// console.log(src_list)


// setInterval(function () {
    console.log(index)
    console.log(slider_img.src)
    slider.classList.add("move-slider");

    new_slider = document.createElement("div");
    new_slider.classList.add("slider");
    
    new_slider_img = document.createElement("img");
    new_slider_img.classList.add("slider-item-img");
    new_slider.appendChild(new_slider_img);
    
    src_list = slider_img.src.split("/");
    src_list[src_list.length - 1] = "lab-1.jpg";
    new_slider_img.src = src_list.join("/");
    
    slide_show.appendChild(new_slider);

    // index++;
    // index %= sliders_len;
    // setTimeout(() => {
    //     console.log("timeout");
    //     slider.classList.remove("move-slider");
    //     console.log(slider.classList);
    //     slider_img = document.querySelector(".slider-item-img");
    //     src_list = slider_img.src.split("/");
    //     src_list[src_list.length - 1] = "lab-1.jpg";
    //     slider_img.src = src_list.join("/");
    //     console.log(slider_img.src);
    // }, 2000);
    
}, 2000);

// while(index == 0) {
//     console.log(index);
//     index++;
//     setTimeout(() => {
//         sliders[index].classList.add("move-slider");
//         index++;
//     }, 2500);
// }
