

$("#fish2Id").mouseenter(function(){
    alert("mesagh");
});












$("#coral").on("click",function(){
   alert("asd");
});
 
$("#fish1Id").on("dblclick", function() {
$("#fish1Id").animate({height: "350px", width: "350px"}).delay(1000).animate({height: "250px", width: "250px"}); 
});

$("#fish2Id").on("click",function () {
    var y = getRandom($(window).height() - 100);
    var x = getRandom($(window).width() - 100);
    alert(x);
    $(this).animate( {top: y , left: x }, 1000);
});

function randomMovement(idRef) {
    var y = getRandom($(document).height() - 100);
    var x = getRandom($(document).width() - 100);
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

$(window).on("click", function(event){
        var x= event.pageX-180;
        var y = event.pageY-130;
     $("#fish1Id").stop(true).animate({top:y,left:x}, 800,"swing");
});  


//bubbles

/*$(document).ready(function(){
    $("#bubble1Id").click(function(){
        $("bubble1Id").fadeOut()
    });
    $("#bubble2Id").click(function(){
        $("bubble2Id").fadeOut();
    });
    $("#bubble3Id").click(function(){
        $("#bubble3Id").fadeOut();
    });
}); */