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
  //(window).addEventListener("touchmove", sticky_relocate_right, false);
  setTimeout($(window).scroll(sticky_relocate_left),0);
  $(window).scroll(sticky_relocate_right);
  sticky_relocate_left();
  sticky_relocate_right();
})
//end sticky button

function sticky_relocate_left() {
    var window_top3 = $(window).scrollTop();
    var div_top3 = $('#sticky-anchor2').offset().top;
    if (window_top3 > div_top3) {
        $('.left2').addClass('mobile-sticky2');
    } else {
        $('.left2').removeClass('mobile-sticky2');
    }
}

function sticky_relocate_right() {
    var window_top4 = $(window).scrollTop();
    var div_top5 = $('#sticky-anchor2').offset().top;
    if (window_top4 > div_top5) {
        $('.right2').addClass('mobile-sticky2');
    } else {
        $('.right2').removeClass('mobile-sticky2');
    }
}

$(function () {
  //$(window).addEventListener("touchmove", sticky_relocate_right, false);
  setTimeout($(window).scroll(sticky_relocate_left),0);
  $(window).scroll(sticky_relocate_right);
  sticky_relocate_left();
  sticky_relocate_right();
});
//end sticky button

