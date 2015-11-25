/* 
 Created on : 2015/10/17, 13:32:48
 Author     : Copyright (C) 2015 Gekidan-Degoba All Rights Reserved.
 */
$(function () {
    $("#menu dt").on("click", function () {
        $(this).next().slideToggle();
    });
});
