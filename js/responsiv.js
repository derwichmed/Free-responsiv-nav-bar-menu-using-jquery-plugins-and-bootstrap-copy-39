$(function (){
    $('.drop_down .item').mouseover(function (){
       $('.drop_down .item .drop_down_menu:visible').hide();
       $(this).find('.drop_down_menu').show();
    });
    
    $('body > header .nav_three .nav_bar .nav_bar_item').mouseover(function (){
       $('body > header .nav_three .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
       
       $('body > header .nav_three .nav_bar .nav_bar_item .mega_menu:visible').hide();
       $(this).find('.mega_menu').show();
   });
   
   $('body > header .nav_one .nav_bar .nav_bar_item .sub_menu .sub_menu_item').mouseover(function (){
       $('body > header .nav_one .nav_bar .nav_bar_item .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
   });
   
   if($(window).width() <= 950){
       var nav_one = $('body > header .nav_one');
       $('body > header .nav_three .nav_bar').append(nav_one);
       $('body > header .nav_three .nav_bar .nav_one').show();
   }
   
   $(window).scroll(function (){
    if($(window).width() <= 950){
       var nav_one = $('body > header .nav_one');
       $('body > header .nav_three .nav_bar').append(nav_one);
       $('body > header .nav_three .nav_bar .nav_one').show();
   }
   });
   
   $('body > header .nav_three .mobile_icon img').click(function (){
      $('#nav_bar_effect').show();
      $('body > header .nav_three .nav_bar').fadeIn("slow");
   });
   
   $('#nav_bar_effect').click(function (){
      $('body > header .nav_three .nav_bar').fadeOut("slow");
      $('#nav_bar_effect').hide();
   });
   
});
