// smooth-scroll.js

import $ from 'jquery';
export default function smoothScroll(e) {
  var target = e.target.hash;
  target = target.length ? target : $('[name=' + e.target.hash.slice(1) + ']');
  if (target.length) {
    $('html,body').animate(
      {
        scrollTop: $(target).position().top
      },
      1000
    );
    return false;
  }
}
