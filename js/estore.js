// JavaScript Document


$(document).ready(function(){

   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      //var screenSize = $(window).width(); 

        if ($(window).width() < 941) {
        	 var newImageSrc = 'images/' + 'storelist2.png';
        	 $('.storelist img').attr('src', newImageSrc);
        	 var newImageSrc2 = 'images/' + 'pricelist2.png';
        	 $('.pricelist img').attr('src', newImageSrc2);

 
		} else{
   				var newImageSrc = 'images/' + 'storelist.png';
        	 $('.storelist img').attr('src', newImageSrc);
        	 var newImageSrc2 = 'images/' + 'pricelist.png';
        	 $('.pricelist img').attr('src', newImageSrc2);
		}
   


    }); 


});
      


