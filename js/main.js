/*eslint-env browser*/
/*eslint no-console: "off"*/
//---------------------------------------------------
// Modal
var modal = document.getElementsByClassName("modal")[0];
var modal_image_container = document.getElementsByClassName("modal_image_container")[0];
var modal_button = document.getElementsByClassName("modal_button")[0];
var modal_pics = document.querySelectorAll('.food_item, .modal_pic_item')

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




// Reference: https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line
// Reference