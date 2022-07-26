/* FULLSCREEN TOGGLE */

const myDocument = document.documentElement,
    screenIcon = document.getElementById('screen');

screenIcon.addEventListener("click", ()=>{
  if(screenIcon.textContent == "fullscreen"){
      if (myDocument.requestFullscreen) {
          myDocument.requestFullscreen();
      } 
      else if (myDocument.msRequestFullscreen) {
          myDocument.msRequestFullscreen();
      } 
      else if (myDocument.mozRequestFullScreen) {
          myDocument.mozRequestFullScreen();
      }
      else if(myDocument.webkitRequestFullscreen) {
          myDocument.webkitRequestFullscreen();
      }
      screenIcon.textContent = "fullscreen_exit";
  }
  else{
      if(document.exitFullscreen) {
          document.exitFullscreen();
      }
      else if(document.msexitFullscreen) {
          document.msexitFullscreen();
      }
      else if(document.mozexitFullscreen) {
          document.mozexitFullscreen();
      }
      else if(document.webkitexitFullscreen) {
          document.webkitexitFullscreen();
      }

      screenIcon.textContent = "fullscreen";
  }
});

/* DARK OR LIGHT TOGGLE */

const toggle = document.getElementById('toggle'),
      body = document.getElementById('body'),
      opMusic = document.getElementById('openMusic'),
      body_2 = document.getElementById('body-2'),
      copyright = document.getElementById('copyright'),
      iconScreen = document.getElementById('screen');
      

toggle.onclick = function () {
  toggle.classList.toggle('active');
  iconScreen.classList.toggle('active');
  body.classList.toggle('active');
  opMusic.classList.toggle('active');
  body_2.classList.toggle('active');
  copyright.classList.toggle('active');
};

/* SCROLL REVEAL */
ScrollReveal(
    {
    origin: 'top',
    distance: '30px',
    duration: 1000
    }).reveal(`
    .box-text h1, 
    #copyright p`);


/* OPEN MUSIC or CLOSE MUSIC */

const card = document.getElementById('card'),
      musicButton = document.getElementById('openMusic');

var static = false;

function openMusic() {
  if(static == false) {
    card.classList.add('music-expanded');
    musicButton.innerText = "remove_circle";

    static = true;
  } else {
    card.classList.remove('music-expanded');
    musicButton.innerText = "music_note";

    static = false;
  }
}

/* OPEN SUGESTION or CLOSE SUGESTION */

const sugestionButton = document.getElementById('expand_sugestion'),
      sugestionText = document.getElementById('sugestion');

var static2 = false;

function openSugestion() {
if(static2 == false) {
    sugestionText.classList.add('expand_sugestion');
    sugestionButton.innerText = "expand_less";

    static2 = true;
    } else {
    sugestionText.classList.remove('expand_sugestion');
    sugestionButton.innerText = "expand_more";

    static2 = false;
    }
}