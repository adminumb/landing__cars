$(function(){
$('.top__slider').slick({
    arrows:false,
    autoplay:true,
    dots:true,
    fade:true,
    responsive:[
        {
            breakpoint:1200,
            settings:{
                dots:false
            }
        }
    ]
    
}); 
   $('.feedbacks__items').slick({
    arrows:false,
    dots:true,
    slidesToShow:4,
    slidesToScroll:1,
       responsive:[
        {
            breakpoint:1141,
            settings:{
    slidesToShow:3
            }
        },
            {
            breakpoint:846,
            settings:{
    slidesToShow:2
            }
        },
           {
            breakpoint:585,
            settings:{
    slidesToShow:1
            }
        }
    ]
    
}); 
    
 //Делаем появление меню по клику на кнопку
    
    $('.menu__btn').on('click', function(){
       $('.menu__list').toggleClass('menu__list--active') 
    });
    
});


