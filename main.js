let buttonPosled = $('.view__button-posled');
let buttonList = $('.view__button-list');
let notesPosled = $('.notes-posled');
let notesList = $('.notes-list');

buttonPosled.click(e => {
    let thisBtn = $(e.currentTarget);

    notesList.removeClass('notes--active');
    notesPosled.addClass('notes--active');

    buttonList.removeClass('view__button--active');
    buttonPosled.addClass('view__button--active');
});

buttonList.click(e => {
    let thisBtn = $(e.currentTarget);

    notesPosled.removeClass('notes--active');
    notesList.addClass('notes--active');

    buttonPosled.removeClass('view__button--active');
    buttonList.addClass('view__button--active');
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




$('.open').click(e => {
    if ($('.open').is(':checked')){
        console.log('Включен');
        $('details').attr('open', '');
    } else {
        console.log('Выключен');
        $('details').removeAttr('open', '');
    }    
});