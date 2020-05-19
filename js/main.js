$(window).on("load", function() {
    $(".loader-container").addClass("move-up");
})

$(".pointer").click(function(){
    $(".headline-search").addClass("search-opened");
    $(".search-close-headline").addClass("close-headline-opened");
})

$(".search-close-headline").click(function(){
    $(".headline-search").removeClass("search-opened");
    $(".search-close-headline").removeClass("close-headline-opened");
})

$(".tabs").click(function(){
    $(".tabs").removeClass("tabs-active");
    $(this).addClass("tabs-active");
})

$(window).scroll(function(e){ 
  var $el = $('#scroll-fixed'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 500 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px', 'right': '50px', 'width': '300px'}); 
  }
  if ($(this).scrollTop() < 500 && isPositionFixed){
    $el.removeAttr("style"); 
  } 
});

$(".list").mouseenter(function(){
  TweenMax.to($(this), .01, {scale: 1.05, ease: Power4.easeOut});
});
$(".list").mouseleave(function(){
  TweenMax.to($(this), .01, {scale: 1, ease: Power4.easeOut});
});

$(function() {
  
  $('.dropdown').on('click', function() {
    $(this).children(".listy").toggleClass('open');
  });
  
  $('.dropdown > .listy > .item').on('click', function() {
    $('.dropdown > .listy > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
  });
  
  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown').removeClass('open');
    }
  });
  
  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown > .caption").length === 0 ) {
      $('.dropdown').removeClass('open');
    }
  });
  
});


function openPage(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabs-container");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabs");
  document.getElementById(pageName).style.display = "block";
}





$(".carousel-input-item").click(function() {
  $(".carousel-input-item").removeClass("this-thing-active")
  $(this).addClass("this-thing-active")
})

autosize();
function autosize(){
    var text = $('.textarea-comment');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });
    
    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}
autosize();
function autosize(){
    var text = $('.judul-problem');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });
    
    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}