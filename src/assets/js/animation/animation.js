(function() {
  if(window.animation === true) {
    var animationTargets = [];
    var elements = document.querySelectorAll('.animation-target');
    for (var i = 0; i < elements.length; i++) {
      var animationTarget = {};
      animationTarget.element = elements[i];
      var counter = elements[i].querySelector('.animating-counter');
      if(counter) {
        animationTarget.counter = counter;
      }
      animationTargets.push(animationTarget);
    }

    var visibleAnimated = function(target, number, start, end, duration, delay, rounding, counter) {
      var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      }

      var windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

      if(targetPosition.top < windowPosition.top  && targetPosition.bottom <= windowPosition.top ) {
        target.classList.add('scrolled');
        return;
      } else if (
        (targetPosition.top < windowPosition.bottom && targetPosition.bottom > windowPosition.bottom ||
        targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.top ||
        targetPosition.top > windowPosition.top && targetPosition.bottom < windowPosition.bottom ) &&
        !target.classList.contains('scrolled')
        ) {
        target.classList.add('animated');
        if(counter) {
          animateValue(number, start, end, duration, delay, rounding);
        }
        return;
      }
    };

    // https://css-tricks.com/animating-number-counters/#the-new-school-css-solution - guide about Animating Number Counters

    var animateValue = function (obj, start, end, duration, delay, rounding) {
      setTimeout(function() {
      var startTimestamp = null;
      var step = function(timestamp) {
        if (!startTimestamp) {
          startTimestamp = timestamp;
        }
        var progress = Math.min((timestamp - startTimestamp) / duration, 1);

        if(rounding === 0) {
          obj.innerHTML = Math.floor(progress * (end - start) + start);
        } else {
          obj.innerHTML = (progress * (end - start) + start).toFixed(rounding);
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
     window.requestAnimationFrame(step)}, delay);
    };

    var animation = function(animationTarget) {
      var counter = false;
      if(animationTarget.hasOwnProperty('counter')) {
        var counter = true;
        var start = +(animationTarget.counter.getAttribute('data-start'));
        var end = +(animationTarget.counter.getAttribute('data-end'));
        var duration = +(animationTarget.counter.getAttribute('data-duration'));
        var delay = 0;
        if(animationTarget.counter.getAttribute('data-delay')) {
          delay = +(animationTarget.counter.getAttribute('data-delay'));
        }
        var rounding = 0;
        if(animationTarget.counter.getAttribute('data-rounding')) {
          rounding = +(animationTarget.counter.getAttribute('data-rounding'));
        }
      }

      if(!animationTarget.element.classList.contains('animated') && (!animationTarget.element.classList.contains('scrolled'))) {
        if(counter) {
          visibleAnimated(animationTarget.element, animationTarget.counter, start, end, duration, delay, rounding, counter);
          if(!animationTarget.element.classList.contains('scrolled')) {
            animationTarget.counter.textContent = start;
          } else {
            animationTarget.counter.textContent = end;
          }
        } else {
          visibleAnimated(animationTarget.element, counter);
        }
      }
    }

    window.addEventListener('scroll', function() {
      for(var i = 0; i < animationTargets.length; i++) {
        animation(animationTargets[i]);
      }
    });
    
    for(var i = 0; i < animationTargets.length; i++) {
      animation(animationTargets[i]);
    }
  }
})();

