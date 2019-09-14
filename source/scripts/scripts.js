document.addEventListener("DOMContentLoaded", function() {

    $('.select').styler();

    let openMenu = (e) => {
        e.preventDefault();
        $('.header').toggleClass('header--open-mobile')
    }

    $('.header-open').on('click', openMenu);

})