$(document).ready(function () {
    // Login button modal show
    $('#signIn').click(function(){
        $('#loginModal').modal('show');
    });
    // Reserve a table button show
    $('#reserveTable').click(function(){
        $('#reservationModal').modal('show');
    });
    // Carousel pause button script. 
    $('#mycarousel').carousel({ interval: 5000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play')
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause')
        }
    })
});