const toggle = document.getElementById('toggle'),
      body = document.getElementById('body'),
      body_2 = document.getElementById('body-2'),
      copyright = document.getElementById('copyright'),
      iconScreen = document.getElementById('screen');
      

toggle.onclick = function () {
  toggle.classList.toggle('active');
  iconScreen.classList.toggle('active');
  body.classList.toggle('active');
  body_2.classList.toggle('active');
  copyright.classList.toggle('active');
};