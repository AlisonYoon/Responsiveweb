// JavaScript Document


$(document).ready(function(){
       if ($(window).width() < 768) {
    $('#title img').removeAttr('id');
}// else {
  //  $('#title img').attr('id','logo');
//}

   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      //var screenSize = $(window).width(); 

        if ($(window).width() < 768) {
    $('#title img').removeAttr('id');
} else{
    $('#title img').attr('id','logo');
}
   


    }); 






});
      


