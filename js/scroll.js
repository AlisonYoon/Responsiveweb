// JavaScript Document


  $(document).ready(function () {
      $(window).on("scroll",function(){ 
 
      //변수 ht에 현재 브라우저의 높이값 저장
      //var ht = $(window).height();
      
      //변수 scroll에 현재 문서가 스크롤된 거리 저장
      var scroll = $(window).scrollTop();
        $(".aa").text(scroll);
        console.log(scroll + '  ' + $('#overlay').height() );
    
      if(scroll>=10){
        $("nav").css('top',0)
         $("#logo").css('animation-name','logo');
     $("#logo").css('animation-duration','1s');

      } 
      if(scroll>=$('#overlay').height() - 100){
     
        
      }
      if(scroll>=$('#overlay').height()){
        $("nav").css('position','fixed');
         $("#logo").css('position','fixed');
        $("#logo").css('left','3%');
        $("#logo").css('top','-3%');

        document.getElementById("logo").src="images/logo.png";
        $("#logo").css('opacity', '1');
      }
      
     
      if(scroll>=1200){
       

      }

      if(scroll>=1583){
        $(".inspired .ins svg").css('animation-name','draw');
       
      }
      if(scroll<$('#overlay').height()){
        $("nav").css('position','relative');
        $("#logo").css('position','static');
        document.getElementById("logo").src="images/logo_wh.png";
        $("#logo").css('animation-name','logo');
     $("#logo").css('animation-duration','2s');
     $("#logo").css('opacity','0');
        //$("nav").css('top',-80); 
      }  
       if(scroll<10){
        $("nav").css('top',-80); 
          $("#logo").css('animation-name','logoback');
     $("#logo").css('animation-duration','1s');
     $("#logo").css('opacity','1');
      }  

    }); 
     
      
   });

   