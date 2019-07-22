$(".nav-item a").click(function() {
    $('html,body').animate({
        scrollTop : $($(this).attr('href')).offset().top },500,'linear');
    });
    $(window).on("load",function() {
        $('.loader .inner').fadeOut(3000,function() {
            $('.loader').fadeOut(750);
        });
    });