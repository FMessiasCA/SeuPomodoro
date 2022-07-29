let myDocument = document.documentElement,
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