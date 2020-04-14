$(document).ready(function () {
    //foundation
    // $(document).foundation();
    // slick
    
    $('.for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.nav1',
        adaptiveHeight: false,
        // variableWidth: true,
        zindex: 1,
        // infinite: true
    });
    $('.nav1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.for1',
        dots: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        variableWidth: true,
        // adaptiveHeight: false,
        zindex: 100,
        swipe: true
    });
    $('.for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.nav2',
        adaptiveHeight: false,
        // variableWidth: true,
        zindex: 1,
        // infinite: true
    });
    $('.nav2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.for2',
        dots: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        variableWidth: true,
        // adaptiveHeight: false,
        zindex: 100,
        swipe: true
    });
    $('.for3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.nav3',
        adaptiveHeight: false,
        // variableWidth: true,
        zindex: 1,
        // infinite: true
    });
    $('.nav3').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.for3',
        dots: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        variableWidth: true,
        // adaptiveHeight: false,
        zindex: 100,
        swipe: true
    });
});
    var iframe1 = $('#player1');
    var player1 = new Vimeo.Player(iframe1);
    var iframe2 = $('#player2');
    var player2 = new Vimeo.Player(iframe2);
    var iframe3 = $('#player3');
    var player3 = new Vimeo.Player(iframe3);
    var iframe4 = $('#player4');
    var player4 = new Vimeo.Player(iframe4);
    var iframe5 = $('#player5');
    var player5 = new Vimeo.Player(iframe5);

    $('.orbit-previous').on('click', function(){
        player1.pause()
        player2.pause()
        player3.pause()
        player4.pause()
    })
    $('.orbit-next').on('click', function(){
        player1.pause()
        player2.pause()
        player3.pause()
        player4.pause()
    })
    player.on('play', function() {
      console.log('Played the video');
    });