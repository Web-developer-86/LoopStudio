$('document').ready(function(){
    $('.header-grp').after('<div class="ham"><i></i></div>');
    $('.ham').click(()=>{
        if($('body').hasClass('rotate'))
            $('body').removeClass('rotate');
        else
        $('body').addClass('rotate');
    })
    $('.ham').click(()=>{
        $('header .header-grp').toggleClass('nav-active');
    });

});