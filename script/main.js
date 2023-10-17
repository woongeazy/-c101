$(function(){
    $(".news li:first-child").click(function(){
        $(".popup").css("display", "block")
    });
    $(".popup button").click(function(){
        $(".popup").css("display", "none")
    })
    $(".tap_title a:last-child").click(function(){
        $(".news").css("display", "none")
        $(".gallery").css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center" ,
            textAlign: "center"
        })
        $(".tap_title a:first-child").removeClass("btn-active")
        $(".tap_title a:last-child").addClass("btn-active")
    })
    $(".tap_title a:first-child").click(function(){
        $(".news").css("display", "block")
        $(".gallery").css("display", "none")
        $(".tap_title a:first-child").addClass("btn-active")
        $(".tap_title a:last-child").removeClass("btn-active")
    })

    // navi
    $(".navi ul li").mouseenter(function (){
        $(this).children(".sub").stop().slideDown()
    })
    $(".navi ul li").mouseleave(function (){
        $(this).children(".sub").stop().slideUp()
    })

    // slide

    $(".slide > img:gt(0)").fadeOut();
    function slide(){


        // let firstImg = $(".slide > img.top");
        // let nextImg = firstImg.next();

        // if(!nextImg.length) {
        //     nextImg = $(".slide > img:first-child");
        // }
        // firstImg.stop().fadeOut().removeClass("top");
        // nextImg.stop().fadeIn().addClass("top");
        


        // firstImg.fadeOut().removeClass("top");
        // nextImg.fadeIn().addClass("top");

        $(".slide > img:first")
        .stop()
        .fadeOut(2000)
        .next()
        .stop()
        .fadeIn(2000)
        .end()
        .appendTo(".slide");
    }
    let intervalID = setInterval(slide, 3000);
})