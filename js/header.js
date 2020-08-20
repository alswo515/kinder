(function ($) {

    // $('.depth1 > li').hover(
    //     function () {
    //         $(this).find('.depth2').stop().slideDown(700)
    //     },
    //     function () {
    //         $(this).find('.depth2').stop().slideUp(700)
    //     }
    // )

    $('.depth1>li').each(function () {
        $(this).hover(
            function () {
                $(this).find('.depth2').stop().slideDown(500)
            },
            function () {
                $(this).find('.depth2').stop().slideUp(700)
            }
        )
    })

})(jQuery)