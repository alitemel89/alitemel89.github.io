$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $(".top-nav").toggleClass('open');
    });

});


$(".top-nav ul li a").click(function() {
    $(".top-nav").hide();
});
