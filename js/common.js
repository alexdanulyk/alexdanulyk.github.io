$(function() {
  $(window).scroll(function () {

    if ($(window).scrollTop() > 400) {
      $('.btn_up').addClass('active');
    } else {
      $('.btn_up').removeClass('active');
    }

    var footerOfTop = $('.footer').offset().top - $(window).scrollTop();
    if (footerOfTop < 895) {
      var size = 900 - footerOfTop;
      $('.btn_up').css({
        'transform': 'translatey(-' + size +'px)'
      })
    } else {
      $('.btn_up').css({
        'transform': 'translatey(0)'
      })
    }

  });

  // Link go to section

  $('a.go_to').on('click', function(e) {
    e.preventDefault();

    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body, html').animate({ scrollTop: destination }, 500);
  })


  // Hamburger

  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
  });

  // SELECT SETTINGS

  $('#way').on('focus', function() {
    $('.select-wrapp').slideDown(250);
  });
  $('#way').on('blur', function() {
    $('.select-wrapp').slideUp(250);
  });

  $('.select-list__item').on('click', function() {
    var inputWay = $('#way');
    var selectItem = $(this).children('.select-list__way').text();

    inputWay.val(selectItem);

    $(this).closest('.form-group.way').find('label').css({
      'top': '-14px',
      'font-size': '12px',
      'color': '#000',
      'font-weight': '600'
    });
  });  
	
  // Если поля не пустые оставлем описание наверху
  $('.form-group input').change(function () {
    if ($(this).val().length) {
      $(this).siblings('label').css({
        'top': '-12px',
        'font-size': '12px',
        'color': '#000',
        'font-weight': '600'
      });
    }
  });

  // Calendar

  $('.datepicker-here').datepicker({
    minDate: new Date(),
  }) 
  

  $('.datepicker-here').on('click', function(){
    $(this).siblings().css({
      'top': '-12px',
      'font-size': '12px',
      'color': '#000',
      'font-weight': '600'
    })
  })

  // Counter

  $('.plus').on('click', function () {
    var value = parseInt($(this).prev('.count-input').val());
    if (value >= 0) {
      value += 1;
      $(this).prev('.count-input').val(value);
      if (value > 0) {
        $(this).next('.minus').removeClass('disable');
      }
    }    
  }); 

  $('.minus').on('click', function () {
    var value = parseInt($(this).siblings('.count-input').val());
    if (value > 0) {
      value -= 1;
      $(this).siblings('.count-input').val(value);
      if (value < 1) {
        $(this).addClass('disable');
      }
    }
    
  });

  // More info change

  $('.form-more_btn').on('click', function (e) {
    e.preventDefault();
    $('.form-more').addClass('active');
    setTimeout(function () {
      $('.form-more__wrapp').addClass('active');
    }, 250);
    
  });

  $('.more-btns').on('click', function () {    
    $('.form-more__wrapp').removeClass('active');
    setTimeout(function() {
      $('.form-more').removeClass('active');
    }, 250);
  });

  // Choise list

  $('.success').on('click', function () {
    var values = [];

    $('input[name="choise"]').filter(':checked').each(function () {
      values.push(this.labels[0].textContent.toLowerCase());
    });

    $(".choise").text(values.join(', '));
  });

  // Lightbox

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': '',
    'disableScrolling': true
  })


  // Owl.carousel gallery

  var galery = $('.galery-list');

  galery.owlCarousel({
    animateOut: 'fadeOut',
    nav: false,
    dots: false,
    items: 1,
    mouseDrag: false,
    smartSpeed: 150
  });
  // Изминение счетчика и навигация по галереи
  var currentPicture = 1;

  $('.arrow-next').click(function () {
    galery.trigger('next.owl.carousel');
    if (currentPicture >= 1 && currentPicture < allPicture) {      
        currentPicture++;
        $('.current-num').text(currentPicture);           
    }
  })

  $('.arrow-prev').click(function () {
    galery.trigger('prev.owl.carousel');
    if (currentPicture > 1 && currentPicture <= allPicture) {
      currentPicture--;
      $('.current-num').text(currentPicture);
    }
  })

  // Вычисляем количество картинок в слайдере
  var allPicture = $('.galery-list .owl-item').length;  
  $('.counter .all-num').text(allPicture);
  
  // Появление контактов при клике на кнопку

  $('.open-contacts').on('click', function () {
    if ($(window).width() > 992) {
      $('.choise-contacts').fadeToggle(300);
    } else {
      $('.choise-contacts').slideToggle(300);
    }
    
  });
  
  // Видимость пароля

  var pwShown = 0;

  $('.eye').on("click", function () {
    if (pwShown == 0) {
      pwShown = 1;      
      var p = $(this).siblings('input[type="password"]');      
      p.attr('type', 'text');
      $(this).addClass('active');
    } else {
      pwShown = 0;      
      var p = $(this).siblings('input[type="text"]')
      p.attr('type', 'password');
      $(this).removeClass('active');
    }
  });

});
