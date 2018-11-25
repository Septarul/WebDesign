$(document).ready(function () {
    fishMovement("#fish1Id", 4000)
});

$(document).ready(function () {
    fishMovement("#fish2Id", 4000)
});

$(document).ready(function () {
    var left =randomLeft($(window).width());
   $(".bubbleClass").animate({top:760,left:left},1).delay(900);
    bubblesMovement(".bubbleClass",left);
});

$("#coral").on("click",function(){
 
});
 

$("#fish1Id").on("dblclick", function() {
$("#fish1Id").stop(true);
$("#fish1Id").animate({height: "365px", width: "365px"}).delay(900).animate({height: "250px", width: "250px"}).delay(600);
    fishMovement(this,4000);
});

$("#fish2Id").on("mouseenter",function () {
    $("#fish2Id").stop(true);
    
    var y = getRandom($(window).height() - 150);
    var x = getRandom($(window).width() - 150);
    $(this).animate( {top: y , left: x }, 1000).delay(600);
    fishMovement(this,4000);
});

function bubblesMovement(idRef,left){
    $(idRef).animate({top:0,left:left},7000).fadeOut();
    
    
}

function randomLeft(max){
    return Math.floor(Math.random() * (max + 1)); 
}

function randomMovement(idRef) {
    var y = getRandom($(document).height() - 150);
    var x = getRandom($(document).width() - 150);
    $(idRef).animate( {top: y , left: x }, 1000);
};

function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
};


function fishMovement(idRef, speed) {
    var y = getRandom($(document).height() - 100);
    var x = getRandom($(document).width() - 100);
    $(idRef).animate({top: y, left: x}, speed, function () {
        fishMovement(idRef, speed)
    });
};
function coral() {
    $("#coral").css("z-index", "0");
};
$("#coral").on("click", function(event){
        var x= event.pageX-220;
        var y = event.pageY-175;
     $("#fish1Id").stop(true).animate({top:y,left:x}, 800,"swing").animate({height: "250px", width: "250px"}).delay(600);
    fishMovement("#fish1Id",4000);;
});
$("#flick").on("click", function(){
    $("#fish1Id").stop(true);
    $("#coral").css("z-index", "4");
    $("#fish1Id").animate({top:"60%",left:"45%"},1600,"swing").animate({top:"60%",left:"89%"},1000,"swing",function(){coral()});
    fishMovement("#fish1Id",4000);
});