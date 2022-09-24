const menu = document.querySelector('#mobile');
const elementOfMenu = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    elementOfMenu.classList.toggle('active');
    }
)
function sticky_relocate_left() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('.left').addClass('mobile-sticky');
    } else {
        $('.left').removeClass('mobile-sticky');
    }
}

function sticky_relocate_right() {
    var window_top2 = $(window).scrollTop();
    var div_top2 = $('#sticky-anchor').offset().top;
    if (window_top2 > div_top2) {
        $('.right').addClass('mobile-sticky');
    } else {
        $('.right').removeClass('mobile-sticky');
    }
}

$(function () {
  (window).addEventListener("touchmove", sticky_relocate_right, false);
  setTimeout($(window).scroll(sticky_relocate_left),0);
  $(window).scroll(sticky_relocate_right);
  sticky_relocate_left();
  sticky_relocate_right();
});
//end sticky button
