
$(document).ready(function () {
    $(document).foundation();
    
    $('#orbit-modal').attr('style', "width: auto; border: none; background: none; padding: 0; height: 85vh;");
    checkSize();
    getJson();
    navActive();
    // slickInitiate();
    
})


// function checkSize() {
//     if ($(window).width() <=555){
//         $('#orbit-modal').attr('style', "width: auto; border: none; background: none; padding: 0px; height: 85vh; max-width: 100vw");
//     } else {
//         $('#orbit-modal').attr('style', "width: auto; border: none; background: none; padding: 0px; height: 85vh; max-width: 85vw;");
//     }
// }

// var initialIndex = 0;
// function RefreshListeners(){
//     $('#photos').off();
//     $('#photos').on("click", ".still", function(){
//         let slideNumber = $(this).data("index");
//         initialIndex = slideNumber;
//         $('#orbit-modal').foundation('open');
        
//         $('.slick-orbit').slick("slickGoTo", slideNumber, true);
//     }) 
// }
// function changeSlide(direction){
//     $('.slick-orbit').slick(direction);
// }
// var initialize = true;
 

// $('#modal-close').on("click", function(){
//     $('#orbit-modal').foundation('close');
    
// })
// $('.orbit-button').on('click', function(){
//     let clickDirection = $(this).data("slide-direction");
//     changeSlide(clickDirection);
    
// })
// var loaded = false;
// function slickInitiate(){
//     $('.slick-orbit').slick({
//         dots: false,
//         infinite: true,
//         speed: 800,
//         slidesToShow: 1,
//         adaptiveHeight: true,
//         centerMode: false,
//         initialSlide: initialIndex,
//         arrows: false,
//         autoplay: false
//         // lazyLoad: "progressive"
//     })
    
//     loaded = true;
// }
// $('#filter-options').on('click', '.filter-option', function(){
//     console.log($(this).data());
// })
// $(window).resize(function(){
//     loaded = false;
//     $('#orbit-modal').foundation('close');
//     $('.slick-orbit').slick('unslick');
    
//     checkSize();
    
// })

// $(window).on('open.zf.reveal', function(){
//     if(!loaded){
//         slickInitiate();
//         $('.slick-orbit').slick('refresh');
//     }
// });