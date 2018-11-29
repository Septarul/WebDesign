$(document).ready(function () {
    fishMovement("#fish1Id", 4000);
});

$(document).ready(function () {
    fishMovement("#fish2Id", 4000);
});

$(document).ready(function () {
    bubblesStart("#bubble1Id");
    bubblesStart("#bubble2Id");
    bubblesStart("#bubble3Id");
    bubblesStart("#bubble4Id");
});
$("#coral").on("click",function(event){
    
    var x=event.pageX-200;
    var y=event.pageY-120;
    $("#fish1Id").stop(true).animate({top:y,left:x},1000,"swing").delay(400);
    fishMovement("#fish1Id",4000);
    
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
$(document).ready(function(){
    $("ul").hide();
});
$("#menu").on("click",function(){
    $("ul").toggle();
});

$("#trick").on("click", function(){
    $("#fish1Id").stop(true);
    $("#coral").css("z-index", "4");
    $("#fish1Id").animate({top:"60%",left:"45%"},1600,"swing").animate({top:"60%",left:"89%"},1000,"swing",function(){coral()});
    fishMovement("#fish1Id",4000);
});

$("#bubble1Id").on("click",function(){
    $(this).stop().fadeOut().delay(1000);
    bubblesReset(this);
    
});
$("#bubble2Id").on("click",function(){
    $(this).stop().fadeOut();
    bubblesReset(this);
});
$("#bubble3Id").on("click",function(){
    $(this).stop().fadeOut();
    bubblesReset(this);
});
$("#bubble4Id").on("click",function(){
    $(this).stop().fadeOut();
    bubblesReset(this);
});

function bubblesReset(idRef){
    var a=getSpeed();
    var left=getRandom($(window).width());
     $(idRef).animate({top:"120%",left:left},function(){
         if(top="120%"){
         $(idRef).show();}}).animate({top:"-22%",left:left},a,function(){
        if(top="-22%"){
            $(idRef).hide();
            bubblesReset(idRef);
        }});
};

$("#stop").on("click",function(){
   $("*").stop(true); 
});

$("#start").on("click",function(){
    fishMovement("#fish1Id", 4000);
    fishMovement("#fish2Id", 4000);
    $("#bubble1Id").css("visibility","hidden");
    $("#bubble2Id").css("visibility","hidden");
    $("#bubble3Id").css("visibility","hidden");
    $("#bubble4Id").css("visibility","hidden");
    bubblesStart("#bubble1Id");
    bubblesStart("#bubble2Id");
    bubblesStart("#bubble3Id");
    bubblesStart("#bubble4Id");
    $("#bubble5Id").css("visibility","hidden");
    $("#bubble6Id").css("visibility","hidden");
    $("#bubble7Id").css("visibility","hidden");
    $("#bubble8Id").css("visibility","hidden");
    $("#bubble9Id").css("visibility","hidden");
    $("#bubble10Id").css("visibility","hidden");
    $("#bubble11Id").css("visibility","hidden");
    $("#bubble12Id").css("visibility","hidden");
    $("#bubble13Id").css("visibility","hidden");
    $("#bubble14Id").css("visibility","hidden");
    $("#bubble15Id").css("visibility","hidden");
    $("#bubble16Id").css("visibility","hidden");
    $("#bubble17Id").css("visibility","hidden");
    $("#bubble18Id").css("visibility","hidden");
    $("#bubble19Id").css("visibility","hidden");
    $("#bubble20Id").css("visibility","hidden");
    $("#bubble21Id").css("visibility","hidden");
    $("#bubble22Id").css("visibility","hidden");
    $("#bubble23Id").css("visibility","hidden");
    $("#bubble24Id").css("visibility","hidden");
    $("#bubble25Id").css("visibility","hidden");
    $("#bubble26Id").css("visibility","hidden");
    $("#bubble27Id").css("visibility","hidden");
    $("#bubble28Id").css("visibility","hidden");
    $("#bubble29Id").css("visibility","hidden");
    $("#bubble30Id").css("visibility","hidden");
   
    
});

$("#bubble").on("click",function(){
    bubblesStart1("#bubble5Id");
    bubblesStart1("#bubble6Id");
    bubblesStart1("#bubble7Id");
    bubblesStart1("#bubble8Id");
    bubblesStart1("#bubble9Id");
    bubblesStart1("#bubble10Id");
    bubblesStart1("#bubble11Id");
    bubblesStart1("#bubble12Id");
    bubblesStart1("#bubble13Id");
    bubblesStart1("#bubble14Id");
    bubblesStart1("#bubble15Id");
    bubblesStart1("#bubble16Id");
    bubblesStart1("#bubble17Id");
    bubblesStart1("#bubble18Id");
    bubblesStart1("#bubble19Id");
    bubblesStart1("#bubble20Id");
    bubblesStart1("#bubble21Id");
    bubblesStart1("#bubble22Id");
    bubblesStart1("#bubble23Id");
    bubblesStart1("#bubble24Id");
    bubblesStart1("#bubble25Id");
    bubblesStart1("#bubble26Id");
    bubblesStart1("#bubble27Id");
    bubblesStart1("#bubble28Id");
    bubblesStart1("#bubble29Id");
    bubblesStart1("#bubble30Id");
});

function bubblesStart1(idRef){
    var a=getSpeed();
    left=getRandom($(window).width());
    $(idRef).animate({top:"120%",left:left},function(){
        $(idRef).css("visibility", "visible")}).animate({top:"-20%",left:left},a,function(){
        if(top="-20%"){
            $(idRef).css("visibility","hidden");
        }});
};


function bubblesStart(idRef){
    var a=getSpeed();
    left=getRandom($(window).width());
    $(idRef).animate({top:"120%",left:left},function(){
        $(idRef).css("visibility", "visible")}).animate({top:"-20%",left:left},a,function(){
        if(top="-20%"){
            $(idRef).hide();
            bubblesReset(idRef);
        }});
};

function randomMovement(idRef) {
    var y = getRandom($(document).height() - 150);
    var x = getRandom($(document).width() - 150);
    $(idRef).animate( {top: y , left: x }, 1000);
};

function getSpeed() {
    var a=Math.floor(Math.random() * 4);
    return (a+4)*1000;
    
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