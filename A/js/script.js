$("*").on("click", function(event){
        var x= event.pageX-230;
        var y = event.pageY-150;
     $("#fish1Id").animate({top:y,left:x}, 1000, "linear");
});

$("#fish1Id").css("position", "relative");
 

$("#fish1Id").on("dblclick", function() {
$("#fish1Id").animate({height: "350px", width: "350px"}).delay(3000).animate({height: "250px", width: "250px"}); 
});

$("#fish2Id").mouseover(function () {
    $(this).stop(true);
    randomMovement($(this));
    fishMovement("#fish2Id", 5000);
});

function randomMovement(idRef) {
    var y = getRandom(0, $(document).height() - 100);
    var x = getRandom(0, $(document).width() - 100);
    $(idRef).animate( {top: y , left: x }, 1000);
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function fishMovement(idRef, speed) {
    var y = getRandom(0, $(document).height() - 100);
    var x = getRandom(0, $(document).width() - 100);
    $(idRef).animate({top: y, left: x}, speed, function () {fishMovement(idRef, speed)
    });
};
$(document).ready(function () {
    fishMovement("#fish1Id", 5000)
});
$(document).ready(function () {
    fishMovement("#fish2Id", 5000)
})

//bubbles

$(document).ready(function(){
    $("#bubble1Id").click(function(){
        $("bubble1Id").fadeOut()
    });
    $("#bubble2Id").click(function(){
        $("bubble2Id").fadeOut();
    });
    $("#bubble3Id").click(function(){
        $("#bubble3Id").fadeOut();
    });
});