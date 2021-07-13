(function() {
    if(document.querySelector && window.isMediaQueriesSupported) { // This function is only need if there is support for media queries.
        var burgerButton = document.querySelector('.burger__button');
        var mainMenuContainer = document.querySelector('.header__main-menu-container');
        
        window.closeDropdownMainMenu = function() {
            burgerButton.setAttribute('aria-expanded', 'false');
            burgerButton.setAttribute('aria-label', 'Open menu');
            window.classFunction.removeClass(mainMenuContainer, 'header__main-menu-container--opened');
            document.removeEventListener('click', window.emptySpaceClick);
            burgerButton.classList.remove('burger__button--opened');
        }
    }
})();


