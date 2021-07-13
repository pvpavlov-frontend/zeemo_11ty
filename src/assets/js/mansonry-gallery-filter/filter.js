(function() {
    var filterControlls = document.querySelectorAll('.gallery__filter-link');
    var filterItems = document.querySelectorAll('.gallery__mansorny-item');

    var addControllClickHandler = function (link) {
        link.addEventListener('click', function (event) {
            console.log('Click: ' + link);
            event.preventDefault();
            for(var j = 0; j < filterItems.length; j++) {
                if(filterItems[j].getAttribute('data-item').indexOf(link.getAttribute('data-for')) > -1) {
                    filterItems[j].style = 'display: block';
                } else {
                    filterItems[j].style = 'display: none';
                }
            }
        });
    };
            
    for (var i = 0; i < filterControlls.length; i++) {
        addControllClickHandler(filterControlls[i]);
    }
})();