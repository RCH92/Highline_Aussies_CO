// var filesystem = require("fs");
$(document).ready(function () {
    //foundation
    // $(document).foundation();
    // slick
    
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: false,
        // variableWidth: true,
        zindex: 1
        // infinite: true
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
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
    var currentPage = $('.sliderBox').data('dog');
    getImagePaths(currentPage);
    
    
    
    
});
function getImagePaths(dog){
    $.ajax({
      url: '/api/' + dog,
      method: "GET"
    }).then(function(response){
        console.log(response);
        makeDivs(response);
    });
}
function makeDivs(data){
    for (let i = 0; i < data.length; i++){
        var newImgDiv = $('<div>');
        var newNavDiv = $('<div>');
        var newImg = $('<img>');
        var newImg2 = $('<img>');
        newImg.attr('src', data[i])
        
        newImgDiv.append(newImg);

        
        // console.log(newImgDiv);
        newImg2.attr('src', data[i])
        newNavDiv.append(newImg2);
        
        newNavDiv.attr('class', "slide");
        // $('.slider-for').append(newImgDiv);
        // $('.slider-nav').append(newNavDiv);

        
    }
  

}
