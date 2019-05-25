$(document).ready(function(){

    // page load
    $(".inner_resume_container").css("opacity", "1");
    $(".inner_resume_container").css("margin-top","3vw");
    $("#median").css("opacity", "1");
    $("#median").css("margin-top","3vw");
    $("#portfolio_container").css("opacity", "1");
    $("#journal_container").css("top","0px");
    $("#journal_container").css("opacity","1");
    $("#description_container").css("left","50%");

    // index1
    $("#button").click(function(){
        $(this).hide(1000);
        $(this).css("transition", "0s");
        $("#life").css("opacity", "1");
        $("#life")[0].play();
        $(".nav1").show(2000);
    });

    $("#button").hover(function(){
        $(this).css("opacity", "1");
    }, function() {
        $(this).css("opacity", ".6");
    });

    // index2
    $("#download").hover(function(){
        $(this).css("opacity", "1");
    }, function() {
        $(this).css("opacity", ".6");
    });

    $(".icon").hover(function(){
        $(this).css("opacity", "1");
    }, function() {
        $(".icon").css("opacity", ".6");
        });

    // index4
    $(".thumbnail").hover(function(){
        $(this).css("filter", "grayscale(0)");
        $(this).animate({
            width: "+=5%",
        });
    }, function() {
        $(this).css("filter", "grayscale(100%)");
        $(this).animate({
            width: "-=5%",
        });
    });

    $(".thumbnail").click(function(){
        $(this).siblings(".photo").addClass("pic_click");
        $(this).siblings(".photo").show();
        $(this).siblings(".tall_photo").addClass("pic_click");
        $(this).siblings(".tall_photo").show();
        $(this).siblings(".square").addClass("pic_click");
        $(this).siblings(".square").show();
        $("#overlay_container").show();
    });

    $(".photo:nth-child(n + 2)").click(function(){
        $(this).css("z-index", "20");
        $(this).siblings(".photo:nth-child(n + 2)").css("z-index", "19");
        $(this).siblings(".square:nth-child(n + 2)").css("z-index", "19");
    });

    $(".tall_photo:nth-child(n + 2)").click(function(){
        $(this).css("z-index", "20");
        $(this).siblings(".tall_photo:nth-child(n + 2)").css("z-index", "19");
    });

    $("#overlay").click(function(){
        $("#overlay_container").hide();
        $(".description_container").hide();
        $(".square").hide();
        $(".photo").hide();
        $(".tall_photo").hide();
    });

    $("#x").click(function(){
        $("#overlay_container").hide();
        $(".description_container").hide();
        $(".square").hide();
        $(".photo").hide();
        $(".tall_photo").hide();
    });

    // nav
    $(".nav_icon").hover(function(){
        $(this).siblings(".nav_icon_two").css("opacity", ".6");
        $(this).siblings(".nav_title").css("opacity", ".6");
        $(this).siblings(".nav_title").css("color", "#3c5a98");
        $(this).hide();
    }, function() {
        $(this).siblings(".nav_icon_two").css("opacity", "0");
        $(this).siblings(".nav_title").css("opacity", "1");
        $(this).siblings(".nav_title").css("color", "#666666");
        $(this).show();
        });

    $(".nav_icon_two").hover(function(){
        $(this).css("opacity", ".6");
        $(this).siblings(".nav_title").css("opacity", ".6");
        $(this).siblings(".nav_title").css("color", "#3c5a98");
        $(this).siblings(".nav_icon").hide();
    }, function() {
        $(this).css("opacity", "0");
        $(this).siblings(".nav_title").css("opacity", "1");
        $(this).siblings(".nav_title").css("color", "#666666");
        $(this).siblings(".nav_icon").show();
        });

    $(".nav_title").hover(function(){
        $(this).siblings(".nav_icon_two").css("opacity", ".6");
        $(this).css("opacity", ".6");
        $(this).css("color", "#3c5a98");
        $(this).siblings(".nav_icon").hide();
    }, function() {
        $(this).siblings(".nav_icon_two").css("opacity", "0");
        $(this).css("opacity", "1");
        $(this).css("color", "#666666");
        $(this).siblings(".nav_icon").show();
        });
});