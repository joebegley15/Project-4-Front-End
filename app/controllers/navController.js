'use strict'

$(document).(ready(){

  var closeNav = function() {
    $('.navbar-collapse').hide();
  }

  $('.navbar-toggle').on ('click', function() {
    closeNav();
  });

  $('.nav-link').on ('click', function() {
    closeNav();
  });

});

