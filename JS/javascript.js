$(document).ready(function() {

        $('#fullpage').fullpage();
    

//    $.fn.fullpage({
//            scrollOverflow: false,
//            afterRender: function(){
//                $('#psa')[0].play();
//            }
//        });
     
    $('video').on('ended',function(){
        $.fn.fullpage.setScrollingSpeed(1000);
        $.fn.fullpage.moveSectionDown();
    });
     
   
});

