/*eslint-env browser*/
/*eslint no-console: "off"*/
//---------------------------------------------------
// Modal
var modal = document.getElementsByClassName("modal")[0];
var modal_image_container = document.getElementsByClassName("modal_image_container")[0];
var modal_button = document.getElementsByClassName("modal_button")[0];
var modal_pics = document.querySelectorAll(".food_item, .modal_pic_item");

function modal_click_outside(evt) {
    if (evt.target === modal) {
        modal.style.display = "none";
    }
}

function hide_modal() {
    modal.style.display = "none";
}

function display_modal() {
    console.log("DISPLAY!");
    modal.style.display = "block";
}

function modal_show_pic(evt) {
    modal_image_container.style.backgroundImage = `url(${evt.target.src})`;
    display_modal();
}

console.log(modal_pics.length);

for (var i = 0; i < modal_pics.length; i++) {
    console.log(i);
    modal_pics[i].addEventListener("click", modal_show_pic);
}

//modal_button.onclick = hide_modal();
modal_button.addEventListener("click", hide_modal);
window.addEventListener("click", modal_click_outside);

//---------------------------------------------------
//resize the navbar
var navbar = document.querySelector("nav");

function resize_navbar(evt) {
    if (window.pageYOffset >= (window.innerHeight - 60)) {
        navbar.classList.add("small_nav");
    }
    else {
        navbar.classList.remove("small_nav");
    }
}
window.addEventListener("scroll", resize_navbar);

//---------------------------------------------------
// scrolling progress indicator
var progress_bar = document.getElementById("progress_bar");
function fill_progress_bar() {
    console.log("hello");
    const total_scroll_length = document.documentElement.scrollHeight - window.innerHeight;
    var scrolled_percentage = (window.scrollY / total_scroll_length) * 100;
    progress_bar.style.width = scrolled_percentage + "%";
}
window.addEventListener("scroll", fill_progress_bar);

// Carousel
const images = document.querySelectorAll(".nature_item img");
const front_image = document.querySelector(".nature_front_image");
const arrow_left = document.getElementById("nature_arrow_left");
const arrow_right = document.getElementById("nature_arrow_right");
var image_srcs = [];
var carousel_index = 0;

for (var i = 0; i < images.length; i++) {
    console.log(document.location.hostname);
    image_srcs.push(images[i].src);
}

function show_left_pic() {
    console.log("left clicked")
    if (carousel_index == 0) {
        carousel_index = image_srcs.length - 1;
    }
    else {
        carousel_index--;
    }
    console.log(image_srcs[carousel_index]);
    front_image.style.content = `url(${image_srcs[carousel_index]})`;
}

function show_right_pic() {
    console.log("left clicked")
    if (carousel_index == image_srcs.length - 1) {
        carousel_index = 0;
    }
    else {
        carousel_index++;
    }
    console.log(image_srcs[carousel_index]);
    front_image.style.content = `url(${image_srcs[carousel_index]})`;
}

arrow_left.addEventListener("click", show_left_pic);
arrow_right.addEventListener("click", show_right_pic);

//Reference: how to add the image source in the css file: https://stackoverflow.com/questions/10829675/how-to-put-an-image-in-div-with-css
