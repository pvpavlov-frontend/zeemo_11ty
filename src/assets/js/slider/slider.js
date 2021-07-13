(function(){
    // For this script to work, you also need a class-function.js file - it is already in the scripts for the menu
    var slider = document.getElementById('carousel'); // Карусель.
    var sliderTrack = document.getElementById('carousel-items'); // Трек карусели.
    var sliderDivs = sliderTrack.getElementsByTagName('div');  
    var slides = []; // Слайды карусели.
    var slidesImgContainers = []
    var slidesImg = [];
    var slidesParams; // Изображения слайдера.
    var duration = 300; // Длительность смещения слайда.

    for (var i = 0; i < sliderDivs.length; i++) { // Перебираем все теги div и находим слайды карусели - (метод для IE 5).
        if(window.classFunction.hasClass(sliderDivs[i], 'carousel__item')) {
            var slideDivs = sliderDivs[i].getElementsByTagName('div');
            for (var j = 0; j < slideDivs.length; j++) {
                if(window.classFunction.hasClass(slideDivs[j], 'carousel__image')) {
                    slidesImgContainers.push(slideDivs[j]);
                }
            }
            slides.push(sliderDivs[i]);
            var image = sliderDivs[i].getElementsByTagName('img')[0];
            slidesImg.push(image);
        }
    }

    function slidesWidth() {
        slidesParams = [];
        for (var i = 0; i < slides.length; i++) {
            var params = {};
            params.width = slides[i].offsetWidth; // По ширине слайда определяем ширину слайдера.
            params.height = slides[i].offsetHeight; // И его высоту.
            slidesParams[i] = params;
        }
    }

    var activeSlideNumber = 0;  // Номер текущего слайда, на который пользователь переключил слайдер.

    function setSliderSizes() {
        // Если это не первый вызов функции, обнуляем установленные ранее с помощью js значения ширин/высот.
        slider.style.width = '100%';
        slider.style.height = 'auto';
        sliderTrack.style.width = '100%';
        sliderTrack.style.height = '100%';
        var trackWidth = 0;
        for(var i = 0; i < slides.length; i++) {
            slides[i].style.width = '100%';
            slides[i].style.height = 'auto';

            var imageWidth = slidesImg[i].offsetWidth;
            var imageHeight = slidesImg[i].offsetHeight;

            if(imageWidth >= imageHeight) {
                slidesImg[i].style.width = 'auto';
                slidesImg[i].style.height = '100%';
            } else {
                slidesImg[i].style.width = '100%';
                slidesImg[i].style.height = 'auto';
            }
        }

        var leftOffset = 0;
        // Пересчитываем слайды под новую ширину экрана, задаем ширину/выосту слайдам, трэку, слайдеру.
        slidesWidth();
        slider.style.width = slidesParams[0].width + 'px';
        slider.style.height = slidesParams[0].height + 'px';

        for (var i = 0; i < slidesParams.length; i++) {
            var imageWidth = slidesImg[i].offsetWidth;
            var imageContainerWidth = slidesImgContainers[i].offsetWidth;
            var imageHeight = slidesImg[i].offsetHeight;
            var imageContainerHeight = slidesImgContainers[i].offsetHeight;

            slides[i].style.width = slidesParams[i].width + 'px';
            slides[i].style.height = slidesParams[i].height + 'px';

            if(imageWidth >= imageHeight) {
                if(imageWidth > imageContainerWidth) {
                    slidesImg[i].style.width = 'auto';
                    slidesImg[i].style.height = '100%';
                } else if (imageWidth <= imageContainerWidth) {
                    slidesImg[i].style.width = '100%';
                    slidesImg[i].style.height = 'auto';
                }
            } else {
                if(imageHeight >= imageContainerHeight) {
                    slidesImg[i].style.width = '100%';
                    slidesImg[i].style.height = 'auto';
                } else if (imageHeight <= imageContainerHeight) {
                    slidesImg[i].style.width = 'auto';
                    slidesImg[i].style.height = '100%';
                }
            }

            imageWidth = slidesImg[i].offsetWidth;
            imageHeight = slidesImg[i].offsetHeight;
            slidesImg[i].style.marginLeft = -(imageWidth/2) + 'px';
            slidesImg[i].style.marginTop = -(imageHeight/2) + 'px';
            trackWidth += slidesParams[i].width;
        }
        sliderTrack.style.width = trackWidth + 'px';

        for(var i = 0; i < activeSlideNumber; i++) {
            leftOffset -= slidesParams[i].width;
        }
        // Смещение слайдера: если происходит ресайз окна и активный слайд не первый, то нужно пересчитать.
        sliderTrack.style.left = leftOffset + 'px';
    }

    setSliderSizes();
    window.onresize = setSliderSizes;

    var controlls = document.getElementById('carousel-controls');
    controlls.innerHTML = '<div class="carousel__control-buffer"><button id="carousel-control-prev" class="carousel__control carousel__control--prev" aria-controls="carousel-items" aria-label="Previous Slide" disabled="disabled">prev</button></div><div class="carousel__control-buffer"><button id="carousel-control-next" class="carousel__control carousel__control--next" aria-controls="carousel-items" aria-label="Next Slide">next</button></div>';

    var controlPrev = document.getElementById('carousel-control-prev');
    var controlNext = document.getElementById('carousel-control-next');

    function stateControls(activeSlideNumber) {
        // Если слайд первый, то предыдущего нет. Если слайд последний, следующего нет.
        // Тогда делаем кнопки недоступными.
        if(activeSlideNumber === slides.length - 1) {
            controlNext.setAttribute('disabled', 'disabled');
        } else {
            controlNext.removeAttribute('disabled');
        }

        if(activeSlideNumber === 0) {
            controlPrev.setAttribute('disabled', 'disabled');
        } else {
            controlPrev.removeAttribute('disabled');
        }
    }

    controlNext.onclick = function() {
        if(activeSlideNumber < slides.length - 1) {
            var oldLeftOffset = 0;
            for(var i = 0; i < activeSlideNumber; i++) {
                oldLeftOffset -= slidesParams[i].width;
            }
            activeSlideNumber++;

            var newLeftOffset = 0;
            for(var i = 0; i < activeSlideNumber; i++) {
                newLeftOffset -= slidesParams[i].width;
            }

            var displacementAmount = Math.abs(oldLeftOffset) - Math.abs(newLeftOffset);
            var steps = [];
            steps.push(oldLeftOffset);
            var stepsQuantity = (duration/1000) * 58;
            var timeStep = duration/stepsQuantity;

            for (var i = 1; i < stepsQuantity; i++) {
                var step = oldLeftOffset - Math.round(Math.abs(displacementAmount*(i/stepsQuantity)));
                steps.push(step);
            }
            steps.push(newLeftOffset);

            function moveSlide(i) {
                if(i <= stepsQuantity + 1){
                  setTimeout(function(){
                      sliderTrack.style.left = steps[i] + 'px';
                      i++;
                      moveSlide(i);
                  }, timeStep);
                }
            }
            moveSlide(0);
            stateControls(activeSlideNumber);
        }
    }

    controlPrev.onclick = function() {
        if(activeSlideNumber > 0) {
            var oldLeftOffset = 0;
            for(var i = 0; i < activeSlideNumber; i++) {
                oldLeftOffset -= slidesParams[i].width;
            }
            activeSlideNumber--;

            var newLeftOffset = 0;
            for(var i = 0; i < activeSlideNumber; i++) {
                newLeftOffset -= slidesParams[i].width;
            }
            var displacementAmount = Math.abs(oldLeftOffset) - Math.abs(newLeftOffset);
            var steps = [];
            steps.push(oldLeftOffset);
            var stepsQuantity = (duration/1000) * 58;
            var timeStep = duration/stepsQuantity;

            for (var i = 1; i < stepsQuantity; i++) {
                var step = oldLeftOffset + Math.round(Math.abs(displacementAmount*(i/stepsQuantity)));
                steps.push(step);
            }
            steps.push(newLeftOffset);

            function moveSlide(i) {
                if(i <= stepsQuantity + 1){
                    setTimeout(function(){
                      sliderTrack.style.left = steps[i] + 'px';
                      i++;
                      moveSlide(i);
                  }, timeStep);
                }
            }
            moveSlide(0);
            stateControls(activeSlideNumber);
        }
    }
})();