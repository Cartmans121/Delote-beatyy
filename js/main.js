// rightside-menu
$(function () {

    $('.header__btn').on('click',function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click',function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

});

// tabs

const tabItem = document.querySelectorAll('.tab__btn');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tab__btn--active');
    });
    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tab__btn--active');
    document.querySelector(`#${button}`).classList.add
    ('tabs__content-item--active');
};

// burger-menu

$('.header__btn-menu').on('click',function() {
    $('.menu').toggleClass('menu--open');
});