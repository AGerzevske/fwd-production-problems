// IIFE
'use strict';
(function() {
  // Does browser support js?
  if (typeof document.querySelector === 'undefined') {
    // If no js, then return
    return;
  }
  // console.log('browser supports java');

  document.addEventListener('DOMContentLoaded', function() {
    // console.log('DOM is loaded');
    var doorbelljs = document.querySelector('#doorbell');
    var ring = document.querySelector('#ring');
    var el = document.getElementById("ring");

    doorbelljs.classList.toggle('no-visible');
    ring.classList.toggle('clickable');
    el.addEventListener("click", function ringDoorbell() {
      // console.log('Click Event');
      var doorbell = new Audio('media/doorbell.mp3');
      doorbell.play();
    }, false);

  });
}());
