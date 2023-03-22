$(document).ready(function(){
    $('.food-slider').slick({
       autoplay:true,
      slidesToShow:3,
      slidesToScroll:1,
      rows: 0, 
      loop: true,
      prevArrow:".prev-btn-1",
      nextArrow:".next-btn-1",
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
       }
      ]
   });

   $('.food-slider-2').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     rows: 0,
     prevArrow:".prev-btn-2",
     nextArrow:".next-btn-2",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]
  });
  });



