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
    modal.style.display = "block";
}

function modal_show_pic(evt) {
    modal_image_container.style.backgroundImage = `url(${evt.target.src})`;
    display_modal();
}


for (var i = 0; i < modal_pics.length; i++) {
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
    const total_scroll_length = document.documentElement.scrollHeight - window.innerHeight;
    var scrolled_percentage = (window.scrollY / total_scroll_length) * 100;
    progress_bar.style.width = scrolled_percentage + "%";
}
window.addEventListener("scroll", fill_progress_bar);
//---------------------------------------------------
// hightlight anchor links
var home_height = document.getElementById("home").offsetHeight;
var about_height = document.getElementById("about").offsetHeight;
var nature_height = document.getElementById("nature").offsetHeight;
var food_height = document.getElementById("food").offsetHeight;
var footer_height = document.getElementById("footer").offsetHeight;



var nav_highlight_index = 0;
var nav_anchor_links = document.getElementsByClassName("nav_anchor_link");
nav_anchor_links[nav_highlight_index].classList.add("anchor_link_highlight");

function change_obj_color(obj, background_color, color) {
    obj.style.backgroundColor = background_color;
    obj.style.color = color;
}

var nav_white = "rgba(255, 255, 255, 0.8)";
var nav_black = "rgba(0, 0, 0, 0.8)";

function highlight_anchor_link() {
    var home_top = 0;
var home_bot = home_height - navbar.clientHeight - 1;
var about_top = home_bot + 1;
var about_bot = about_top + about_height - 1;
var nature_top = about_bot + 1;
var nature_bot = nature_top + nature_height - 1;
var food_top = nature_bot + 1;
var food_bot = food_top + food_height - 1;
var footer_top = food_bot + 1;
var footer_bot = food_top + food_height;

    for (var i = 0; i < nav_anchor_links.length; i++) {
        change_obj_color(nav_anchor_links[i], nav_white, nav_black);
    }
    if (home_top <= window.scrollY &&
        window.scrollY <= home_bot) {
        change_obj_color(nav_anchor_links[0], nav_black, nav_white);
        //nav_anchor_links[0].classList.add("anchor_link_highlight");
    }
    else if (about_top <= window.scrollY &&
        window.scrollY <= about_bot) {
        change_obj_color(nav_anchor_links[1], nav_black, nav_white);
    }
    else if (nature_top <= window.scrollY &&
        window.scrollY <= nature_bot) {
        change_obj_color(nav_anchor_links[2], nav_black, nav_white);
    }
    else if (food_top <= window.scrollY &&
        window.scrollY <= document.documentElement.scrollHeight - window.innerHeight - navbar.clientHeight) {
        change_obj_color(nav_anchor_links[3], nav_black, nav_white);
    }
    else {
        change_obj_color(nav_anchor_links[4], nav_black, nav_white);
    }
}


window.addEventListener("scroll", highlight_anchor_link);
/*

*/

//---------------------------------------------------
// Carousel
var front_images = document.getElementsByClassName("nature_front_image");
const arrow_left = document.getElementById("nature_arrow_left");
const arrow_right = document.getElementById("nature_arrow_right");
var carousel_index = 0;
front_images[carousel_index].style.display = "block";

function show_left_pic() {
    front_images[carousel_index].style.display = "none";
    if (carousel_index == 0) {
        carousel_index = front_images.length - 1;
    }
    else {
        carousel_index--;
    }
    front_images[carousel_index].style.display = "block";
}

function show_right_pic() {
    front_images[carousel_index].style.display = "none";
    if (carousel_index == front_images.length - 1) {
        carousel_index = 0;
    }
    else {
        carousel_index++;
    }
    front_images[carousel_index].style.display = "block";
}

arrow_left.addEventListener("click", show_left_pic);
arrow_right.addEventListener("click", show_right_pic);

//Reference: how to add the image source in the css file: https://stackoverflow.com/questions/10829675/how-to-put-an-image-in-div-with-css
