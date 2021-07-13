(function() {
    if(window.animation) {
        var anchors = document.querySelectorAll('.anchor-title__link');
        for (var i = 0; i < anchors.length; i++) {
            var messageContainer = document.createElement('div');
            messageContainer.classList.add('anchor-title__message-container');
            var messageLabel = document.createElement('span');
            messageLabel.textContent = anchors[i].getAttribute('data-link-label');
            messageLabel.classList.add('anchor-title__message-label');
            messageContainer.appendChild(messageLabel);
            anchors[i].after(messageContainer);
        }

        var copyHref = function (anchor) {
            anchor.addEventListener('click', function (evt) {
                evt.preventDefault();
                var heading = anchor.parentElement
                var messageContainer = heading.querySelector('.anchor-title__message-container');
                var oldMessageAction = heading.querySelector('.anchor-title__message-action');
                if(oldMessageAction) {
                    messageContainer.removeChild(oldMessageAction);
                }
                var messageAction = document.createElement('span');
                messageAction.textContent = anchor.getAttribute('data-link-action');
                messageAction.classList.add('anchor-title__message-action');
                messageContainer.appendChild(messageAction);
                navigator.clipboard.writeText(anchor.href);
            });
          };
          
          for (var i = 0; i < anchors.length; i++) {
            copyHref(anchors[i]);
          }
    }
})();