/*eslint-env browser*/
/*eslint no-console: "off"*/
//---------------------------------------------------
// Modal
var modal = document.getElementsByClassName("modal")[0];
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
    modal.appendChild(evt.target);
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

function resize_navbar() {
    if (window.pageYOffset >= (window.innerHeight - 60)) {
        navbar.classList.add("small_nav");
    }
    else {
        navbar.classList.remove("small_nav");
    }
}
window.addEventListener("mousemove", resize_navbar);
window.addEventListener("scroll", resize_navbar);





// Reference: https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line
