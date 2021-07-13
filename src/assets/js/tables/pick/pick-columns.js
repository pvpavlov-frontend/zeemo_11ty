(function(){
  var table = document.getElementById('table-pick');
  var controlsContainer = document.getElementById('table-pick-controls');
  controlsContainer.innerHTML = '<button class="table-pick__show-button" type="button" id="table-pick-button">Pick the columns</button>';
  var controlsButton = document.getElementById('table-pick-button');
  var controlsList = document.createElement('ul');
  controlsList.className = 'table-pick__list';
  controlsList.setAttribute('id', 'table-pick-list');
  var columns = table.rows[0].cells.length;
  var rows = table.rows.length;
  var controls = [];

  for (var i = 0; i < columns; i++) {
    var li = document.createElement('li');
    li.innerHTML = '<input class="table-pick__checkbox" type="checkbox"><label></label>';
    var input = li.getElementsByTagName('input')[0];
    var label = li.getElementsByTagName('label')[0];
    var string = 'table-pick-checkbox-' + (i + 1);
    label.setAttribute('for', string);
    label.textContent = table.rows[0].cells[i].textContent;
    input.setAttribute('id', string);
    input.setAttribute('name', string);
    input.checked = true;
    controls.push(input);
    li.appendChild(input);
    li.appendChild(label);
    controlsList.appendChild(li);
  }
  controlsContainer.appendChild(controlsList);

  controlsButton.onclick = function() {
    if(window.classFunction.hasClass(controlsList, 'disabled')) {
      window.classFunction.removeClass(controlsList, 'disabled');
    } else {
      window.classFunction.addClass(controlsList, 'disabled');
    }
  };
  
  function toggleColumn (checkbox) {
    checkbox.onclick = function () {
      var number = checkbox.getAttribute('id').slice(-1);
      if(!checkbox.checked) {
        console.log('Первая ветка');
        for (var i = 0; i < rows; i++) {
          var cell = table.rows[i].cells[number - 1];
          window.classFunction.addClass(cell, 'disabled');
        }
      } else {
        console.log('Вторая ветка');
        for (var i = 0; i < rows; i++) {
          var cell = table.rows[i].cells[number - 1];
          window.classFunction.removeClass(cell, 'disabled');
        }
      }
    }
  }

  for (var i = 0; i < controls.length; i++) {
    toggleColumn(controls[i]);
  }
})();



