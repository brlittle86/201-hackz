'use strict';

var formEl = document.getElementById('first-form');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();

  renderUsername(event.target.username.value);

}, false);

function renderUsername(username) {
  var sectionEl = document.getElementById('form-section');

  var userNameEl = document.createElement('p');
  userNameEl.setAttribute('class', 'entered-username');
  userNameEl.textContent = username;

  sectionEl.appendChild(userNameEl);
}
