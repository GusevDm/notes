let buttonPosled = $('.view__button-posled');
let buttonList = $('.view__button-list');
let posledOpen = $('.posled-open');

buttonPosled.click(e => {
    let thisBtn = $(e.currentTarget);

    posledOpen.addClass('posled-open--active');
    $('.notes__item--hor').css('color', '#ff4a52');

    thisBtn.siblings().removeClass('view__button--active');
    thisBtn.addClass('view__button--active');
});

buttonList.click(e => {
    let thisBtn = $(e.currentTarget);

    posledOpen.removeClass('posled-open--active');
    $('.notes__item--hor').css('color', '#151515');

    thisBtn.siblings().removeClass('view__button--active');
    thisBtn.addClass('view__button--active');
});



let read = $('.read');
let back = $('.back');
let wrapper = $('.wrapper');
let wrapperImg = $('.wrapper-img');

read.click(e => {
    let thisBtn = $(e.currentTarget);

    wrapper.addClass('wrapper--none');
    back.addClass('back--on');
    wrapperImg.addClass('wrapper-img--on');
    window.scrollTo(0, 0);
});

back.click(e => {
    let thisBtn = $(e.currentTarget);

    wrapper.removeClass('wrapper--none');
    back.removeClass('back--on');
    wrapperImg.removeClass('wrapper-img--on');
});




$('#open').click(e => {
    if ($('#open').is(':checked')){
        $('details').attr('open', '');
        $('summary').addClass('summary--active');
    } else {
        $('details').removeAttr('open', '');
        $('summary').removeClass('summary--active');
    }
});

$('summary').click(e => {
    if ($(e.currentTarget).hasClass('summary--active')){
        $(e.currentTarget).removeClass('summary--active');
    } else {
        $(e.currentTarget).addClass('summary--active');
    }
});

window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
    }, 0);
  });