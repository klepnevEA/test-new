document.addEventListener("DOMContentLoaded", function() {

    $('.select').styler();

    let openMenu = (e) => {
        $('.header').toggleClass('header--open-mobile');
        $('.header-open').toggleClass('header-open--active')
    }

    let rangeChange = (e) => {
        e.preventDefault();
        let rangeValue = $('#range__input').val()
        let filLine = $('.experience-js__range-fill');
        let filLineWidth = $('.experience-js__range').width( );
        filLine.width( filLineWidth / 3 * rangeValue );
    }

    $('.header-open').on('click', openMenu);
    $('.menu__link').on('click', openMenu);
    
    $('#range__input').on('input', rangeChange)
})