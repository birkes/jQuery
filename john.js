$(document).ready(function(){
document.onkeydown = checkKey;

function checkKey(e){

    // e = e || window.event;

    if (e.keyCode == '38') {
        var my_current_left = $(".mig").position().left;
        var my_new_left = my_current_left + 38;
        $(".mig").css("left", my_new_left);
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}
});
