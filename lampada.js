const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isLampBroken() {
  return lamp.src.indexOf("LampadaQuebrada") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/LampadaLigada.png";
  }
}
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/LampadaDesligada.png";
  }
}
function lampBroken() {
  lamp.src = "./img/LampadaQuebrada.png";
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
