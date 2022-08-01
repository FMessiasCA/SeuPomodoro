import audios from '../playerControlJs/data.js';
import { secondsToMinutes } from '../playerControlJs/utils.js';
import elements from '../playerControlJs/playerElements.js';

export default {
  audioData: audios,
  currentAudio : {},
  currentPlaying : 0,
  isPlaying: false,
  start() {
    elements.get.call(this);

    this.update();
  },
  play(){
    this.isPlaying = true;
    this.audio.play();
    this.playPause.innerText = 'pause'
  },
  pause(){
    this.isPlaying = false;
    this.audio.pause();
    this.playPause.innerText = 'play_arrow';
  },
  togglePlayPause(){
    if (this.isPlaying) {
      this.pause()
    } else {
      this.play();
    }
  },
  toggleMute(){
    this.audio.muted = !this.audio.muted;
    this.mute.innerText = this.audio.muted ? 'volume_off' : 'volume_up';
  },
  next(){
    this.currentPlaying++;
    if (this.currentPlaying === this.audioData.length) this.restart();
    this.update();
    this.play();
  },
  setVolume(value) {
    this.audio.volume = value / 100;
  },
  setSeek(value) {
    this.audio.currentTime = value;
  },
  timeUpdate() {
    this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
    this.seekbar.value = this.audio.currentTime;
  },
  update() {
    this.currentAudio = this.audioData[this.currentPlaying];
    this.title.innerText = this.currentAudio.title;
    this.artist.innerHTML = `<i class='material-icons'> account_circle </i> ${this.currentAudio.artist}`;
    elements.createAudioElement.call(this, this.currentAudio.file);
    
    this.audio.onloadeddata = () => {
      elements.actions.call(this);
    };
  },
  restart(){
    this.currentPlaying = 0;
    this.update();
  },
};