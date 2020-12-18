$(document).ready(function(){
    $('.loadingContainer').delay(500).fadeOut(300)
    $('body').on('click', '.headerNavToggle', function(){
        $('.headerNav').stop().fadeIn(300)
        $('body').css('overflow','hidden')
    })
    $('body').on('click', '.headerNavClose', function(){
        $('.headerNav').stop().fadeOut(300)
        $('body').css('overflow','auto')
    })
})