$(document).ready(function(){
   /* $(".mainSlider").slick({
        dots:true,
       // prevArrow:'<button type="button" class="slick-prev sliderPrev">이전</button>'
        prevArrow:"<div class='sliderBtn btnLeft'><img src='images/arrowLW.png'></div>",
        nextArrow:"<div class='sliderBtn btnRight'><img src='images/arrowRW.png'></div>",
    })
    */
    //메인컨텐츠
    $(".con01List").slick({
        slidesToShow:2,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        arrows:false,
        centerMode: true,
    })
    
    $('.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})