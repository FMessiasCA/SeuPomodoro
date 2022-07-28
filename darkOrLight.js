const toggle = document.getElementById('toggle'),
      body = document.getElementById('body'),
      body_2 = document.getElementById('body-2');

toggle.onclick = function () {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  body_2.classList.toggle('active');

};