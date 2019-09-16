$(function() {

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

  $('.form-more_btn').on('click', function () {
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

    $('input:checkbox[name="choise"]').filter(':checked').each(function () {
      values.push(this.labels[0].textContent.toLowerCase());
    });

    $(".choise").text(values.join(', '));
  });

});
