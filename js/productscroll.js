// JavaScript Document


  $(document).ready(function () {
      $(window).on("scroll",function(){ 
 
      //변수 ht에 현재 브라우저의 높이값 저장
      //var ht = $(window).height();
      
      //변수 scroll에 현재 문서가 스크롤된 거리 저장
      var scroll = $(window).scrollTop();
        $(".aa").text(scroll);
        console.log(scroll + '  ' + $('#overlay').height() );
    
      if(scroll>=1900){
        
         $(".earbuds").css('right',0);
         $(".earbuds").css('display', 'block');
     

      } 
      if(scroll>=$('#overlay').height() - 100){
     
        
      }
      if(scroll>=$('#overlay').height()){
       

      }
      
     
      if(scroll>=1200){
       

      }



    }); 
     
      
   });

   