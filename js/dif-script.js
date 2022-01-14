$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $(document).ready(function(){
         $('.header__link').click(function(event){
            $('.header__burger, .header__menu').removeClass('active');
            $('body').removeClass('lock');
         });
      });
      $('body').toggleClass('lock');
   });
});
$(document).ready(function(){
   $('.about__language_ru').click(function(event){
      $('.about__language_ru').addClass('active-lang');
      $('.about__language_eng').removeClass('active-lang');
   });
   $('.about__language_eng').click(function(event){
      $('.about__language_eng').addClass('active-lang');
      $('.about__language_ru').removeClass('active-lang');
   });
});