$("#fish2Id").click(function(){
    alert("mesagh");
});
$(window).on("click", function(event){
        var x= event.pageX-180;
        var y = event.pageY-130;
     $("#fish1Id").stop(true).animate({top:y,left:x}, 800,"swing");
});  