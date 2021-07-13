(function(){
    window.classFunction = {};

    window.classFunction.hasClass = function(elem, elemClass) {
        return !!elem.className.match(new RegExp('(\\s|^)'+ elemClass +'(\\s|$)'));
    };
    
    window.classFunction.addClass = function(elem, elemClass) {
        if (!window.classFunction.hasClass(elem,elemClass)) elem.className += " " + elemClass;
    };
    
    window.classFunction.removeClass = function(elem, elemClass) {
        if (window.classFunction.hasClass(elem, elemClass)) {
            var reg = new RegExp('(\\s|^)' + elemClass + '(\\s|$)');
            elem.className = elem.className.replace(reg,' ');
        }
    };
})();