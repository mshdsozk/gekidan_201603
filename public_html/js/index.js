/* 
    Created on : 2015/10/17, 13:32:48
    Author     : Copyright (C) 2015 Gekidan-Degoba All Rights Reserved.
*/

$(function() {
  // All elements
  $('section.inside-menu>nav').fontFlex(10, 48, 30);
  $('section.inside-menu p').fontFlex(10, 48, 30);
  $('p').fontFlex(10, 48, 30);
 
  // H1 only
  $('#title').fontFlex(25, 80, 16); 
});

$(function() {
  $( 'a[rel*=leanModal]').leanModal({
    top: 50,
    overlay : 0.7,
  });
});
