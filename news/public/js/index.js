$(function () {
    $('.lis .index').on({
        click:(function(){
            let index = $(this).index()
            $('.item').eq(index).stop().slideDown();
            $('.item').eq(index).siblings().stop().hide();
        })
    })
})