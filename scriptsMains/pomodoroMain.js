const content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector('#setAlarm');

let alarmTime, isAlarmSet,
ringtone = new Audio("../files/ringtone.mp3");

/* CONFIGURAÇÃO DOS BOTÕES */

for (let i = 20; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

/* INICIANDO A CONTAGEM */

let horas = 0;
let minutos = 0;
let segundos = 0;

let tempo = 1000;//Quantos milésimos valem 1 segundo?
let cronometro;

//Inicia o temporizador
function start() {
    cronometro = setInterval(() => { timerCounter(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cronometro);
}

//Para o temporizador e limpa as variáveis
function stop() {

  clearInterval(cronometro);
  horas = 0;
  minutos = 0;
  segundos = 0;
  h = horas;
  m = minutos;
  s = segundos;


  document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timerCounter() {
  segundos++; //Incrementa +1 na variável segundos

  if (segundos == 60) { //Verifica se deu 59 segundos
      segundos = 0; //Volta os segundos para 0
      minutos++; //Adiciona +1 na variável minutos

      if (minutos == 60) { //Verifica se deu 59 minutos
          minutos = 0;//Volta os minutos para 0
          horas++;//Adiciona +1 na variável hora
      }
  }

  //Cria uma variável com o valor tratado HORAS:minutos:segundos
  let format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
  
  //Insere o valor tratado no elemento counter
  document.getElementById('counter').innerText = format;

  //Retorna o valor tratado
  return format;
}
  
  /* DETERMINANDO O TEMPO DE CONTAGEM */
   
setAlarmBtn.addEventListener("click", setAlarm);

setInterval(() => {
  h = horas,
  m = minutos,
    s = segundos;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    if (alarmTime === `${h}:${m} ${s}`) {
        ringtone.play();
        ringtone.loop = true;
        pause();
        window.navigator.vibrate(500);
    }
});

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    stop();
    setAlarmBtn.innerText = "Start";
    alert("You win, congratulations!");
    return isAlarmSet = false;
  }
  
  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  if (time.includes("Hour") || time.includes("Minute") || time.includes("Seconds")) {
    return alert("Please, select a valid time to set Alarm!");
  }
  
  alarmTime = time;
  start();
  isAlarmSet = true;
  content.classList.add("disable");
  setAlarmBtn.innerText = "Working";
}
