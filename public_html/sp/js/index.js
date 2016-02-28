/* 
 Created on : 2015/10/17, 13:32:48
 Author     : Copyright (C) 2015 Gekidan-Degoba All Rights Reserved.
 */
$(function () {
    $("#menu dt").on("click", function () {
        $(this).next().slideToggle();
    });
});

$(function () {
    $('a[rel*=leanModal]').leanModal({
        top: 50,
        overlay: 0.7,
    });
});

$(window).on('open:leanModal', function () {
    console.log('open!');
    $("body").css("overflow", "hidden");
});

$(window).on('close:leanModal', function () {
    console.log('closed!');
    $("body").css("overflow", "auto");
});