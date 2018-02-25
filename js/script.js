var options = {
    offset:50
};
var header = new Headhesive('.header', options);
$(function(){
    $('a[href*=top]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 600);
                return false;
            }
        }
    });
});
$(function(f){
    var element = f('.anchorn-left');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 300  ?'In': 'Out')](1000);
    });
});
$('.wrap__span').click(function() {
    $('.nav-effect').toggle('slow');
});
$(function(){
    $('.wrap__span').click(function(){
        $('.wrap__span').toggleClass('appi');
    });
});
//click na active
$(".navbar-nav li a").click(function(e) {
    e.preventDefault();
    $(".navbar-nav li a").removeClass('active_line');
    $(this).addClass('active_line');
});


//slick
$('.your-class').slick({
    dots:false
});

//Bootstrap slider
$("#carousel-example-generic").carousel({
    interval : false
});

