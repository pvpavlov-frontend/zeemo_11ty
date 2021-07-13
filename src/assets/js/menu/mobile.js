// Create a menu button, add classes, attributes, inner invisible text and add it to the page.
// TODO: check correct aria for button-action.
// TODO: taborder for menu button.
(function() {
  if(document.addEventListener && window.isMediaQueriesSupported) {
    var mainMenuContainer = document.querySelector('.header__main-menu-container');
    var burgerButtonContainer = document.querySelector('.header__main-menu-burger');
    burgerButtonContainer.innerHTML = '<button class="burger__button" id="burger-button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu"></button>';
    var firstLink = mainMenuContainer.querySelector('.main-menu__link');

    // TODO: chacge comment for aria atributes.
    function toggleDropdownMenu() {
      if(burgerButton.getAttribute('aria-expanded') === 'true') { // If menu is already opened (check 'aria-expanded' attribute).
        burgerButton.setAttribute('aria-expanded', 'false');
        burgerButton.setAttribute('aria-label', 'Open menu');
        burgerButton.classList.remove('burger__button--opened');
        window.classFunction.removeClass(mainMenuContainer, 'header__main-menu-container--opened');
        document.removeEventListener('click', window.emptySpaceClick);
      } else {
        burgerButton.setAttribute('aria-expanded', 'true');
        burgerButton.setAttribute('aria-label', 'Close menu');
        burgerButton.classList.add('burger__button--opened');
        window.classFunction.addClass(mainMenuContainer, 'header__main-menu-container--opened');
        document.addEventListener('click', window.emptySpaceClick);
      }
    };

    var burgerButton = document.querySelector('.burger__button');
    burgerButton.addEventListener('click', toggleDropdownMenu);

    // We handle not only a click, but also pressing Enter/Space.
    burgerButton.addEventListener('keydown', function(event) {
      if(event.keyCode === KEYCODES.SPACE || event.keyCode === KEYCODES.ENTER) {
        event.preventDefault();
        toggleDropdownMenu();

        if(burgerButton.getAttribute('aria-expanded') === 'true') {
          firstLink.focus();
        } else {
          burgerButton.focus();
        }
      }

      if(event.keyCode === KEYCODES.ESC && burgerButton.getAttribute('aria-expanded') === 'true') {
        window.closeDropdownMainMenu();
      }
    });
  }
})();