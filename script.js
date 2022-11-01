var timeout
function pos(id_position){
    $(".pop-up").removeClass("un-pop-up")
    $(".pop-up").css("display", "none")
    $(".pop-up").css("z-index", "-1")
    clearTimeout(timeout);
    var p = $(`#${id_position}`).first();
    var pos = p.position()
    determineContent(id_position);
    console.log(p.position());
    $(".rotate-wrapper").css("top", pos.top - 25)
    $(".rotate-wrapper").css("left", pos.left - 25)
    $(".pop-up").css("animation", "morph 0.5s")
    $(".pop-up").css("display", "block")
    $(".pop-up").css("top", pos.top)
    $(".pop-up").css("left", pos.left)

    setTimeout(() => {
        $(".pop-up").css("z-index", "1")
    }, 200)
}
function out(){
        // $(".pop-up").css("display", "none")
        // $(".pop-up").css("z-index", "-1")
        $(".pop-up").addClass("un-pop-up")
        $(".pop-up").css("z-index", "-1")
    timeout = setTimeout(() => {
        $(".pop-up").removeClass("un-pop-up")
        $(".pop-up").css("display", "none")
    }, 500)
}
function getTimeLeft(timeout) {
    return Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()) / 1000);
}
function determineContent(id){
    if(id == "planet2"){
        var p = $(`.pop-up`).first();
        p.find("h2").html('1');
        p.find("p").html('2');
        console.log(p.find("p").text());
    } else if(id == "planet3"){
        var p = $(`.pop-up`).first();
        p.find("h2").html('2');
        p.find("p").html('3');

    }else if(id == "planet4"){
        var p = $(`.pop-up`).first();
        p.find("h2").html('3');
        p.find("p").html('4');

    }else if(id == "planet2_first"){
        var p = $(`.pop-up`).first();
        p.find("h2").html('first');
        p.find("p").html('second');

    }
}