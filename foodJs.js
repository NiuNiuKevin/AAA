//圓圈
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y;
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove()
    }, 1000);
  })
})


var mainMiddleChange = document.getElementById("mainMiddleChange");
var mainMiddleChangeB = document.getElementById("mainMiddleChangeB");
var mainMiddleChangeC = document.getElementById("mainMiddleChangeC");
var mainMiddleChangeD = document.getElementById("mainMiddleChangeD");

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  mainMiddleChange.style.display = "block";
  mainMiddleChangeB.style.display = "none";
  mainMiddleChangeC.style.display = "none";
  mainMiddleChangeD.style.display = "none";
})
var btn = document.getElementById("btnA");
btn.addEventListener("click", function () {
  mainMiddleChange.style.display = "none";
  mainMiddleChangeB.style.display = "block";
  mainMiddleChangeC.style.display = "none";
  mainMiddleChangeD.style.display = "none";
})
var btn = document.getElementById("btnB");
btn.addEventListener("click", function () {
  mainMiddleChange.style.display = "none";
  mainMiddleChangeB.style.display = "none";
  mainMiddleChangeC.style.display = "block";
  mainMiddleChangeD.style.display = "none";
})
var btn = document.getElementById("btnC");
btn.addEventListener("click", function () {
  mainMiddleChange.style.display = "none";
  mainMiddleChangeB.style.display = "none";
  mainMiddleChangeC.style.display = "none";
  mainMiddleChangeD.style.display = "block";
})



/*                GOOGLE MAP                */


var DownParkMap = document.getElementById("DownParkMap");
var placeDownPark = document.getElementById("placeDownPark");
var DownParkclose = document.getElementById("DownParkclose");
DownParkMap.style.display = "none";

placeDownPark.addEventListener("click", function () {
  if (placeDownPark) { DownParkMap.style.display = "block"; }
})
DownParkclose.addEventListener("click", function () {
  if (DownParkclose) { DownParkMap.style.display = "none"; }
})


var BarbecueIzakayaMap = document.getElementById("BarbecueIzakayaMap");
var placeBarbecueIzakaya = document.getElementById("placeBarbecueIzakaya");
var closeBarbecueIzakaya = document.getElementById("closeBarbecueIzakaya");
BarbecueIzakayaMap.style.display = "none";

placeBarbecueIzakaya.addEventListener("click", function () {
  if (placeBarbecueIzakaya) { BarbecueIzakayaMap.style.display = "block"; }
})
closeBarbecueIzakaya.addEventListener("click", function () {
  if (closeBarbecueIzakaya) { BarbecueIzakayaMap.style.display = "none"; }
})


var VEGETEJIYAMap = document.getElementById("VEGETEJIYAMap");
var placeVEGETEJIYA = document.getElementById("placeVEGETEJIYA");
var VEGETEJIYAClose = document.getElementById("VEGETEJIYAClose");
VEGETEJIYAMap.style.display = "none";

placeVEGETEJIYA.addEventListener("click", function () {
  if (placeVEGETEJIYA) { VEGETEJIYAMap.style.display = "block"; }
})
VEGETEJIYAClose.addEventListener("click", function () {
  if (VEGETEJIYAClose) { VEGETEJIYAMap.style.display = "none"; }
})


var ALeeMap = document.getElementById("ALeeMap");
var placeALee = document.getElementById("placeALee");
var ALeeClose = document.getElementById("ALeeClose");
ALeeMap.style.display = "none";

placeALee.addEventListener("click", function () {
  if (placeALee) { ALeeMap.style.display = "block"; }
})
ALeeClose.addEventListener("click", function () {
  if (ALeeClose) { ALeeMap.style.display = "none"; }
})

var WULIMap = document.getElementById("WULIMap");
var placeWULI = document.getElementById("placeWULI");
var WULIClose = document.getElementById("WULIClose");
WULIMap.style.display = "none";

placeWULI.addEventListener("click", function () {
  if (placeWULI) { WULIMap.style.display = "block"; }
})
WULIClose.addEventListener("click", function () {
  if (WULIClose) { WULIMap.style.display = "none"; }
})


var TonganMap = document.getElementById("TonganMap");
var placeTongan = document.getElementById("placeTongan");
var TonganClose = document.getElementById("TonganClose");
TonganMap.style.display = "none";

placeTongan.addEventListener("click", function () {
  if (placeTongan) { TonganMap.style.display = "block"; }
})
TonganClose.addEventListener("click", function () {
  if (TonganClose) { TonganMap.style.display = "none"; }
})


var AutumnMoonMap = document.getElementById("AutumnMoonMap");
var placeAutumnMoon = document.getElementById("placeAutumnMoon");
var AutumnMoonClose = document.getElementById("AutumnMoonClose");
AutumnMoonMap.style.display = "none";

placeAutumnMoon.addEventListener("click", function () {
  if (placeAutumnMoon) { AutumnMoonMap.style.display = "block"; }
})
AutumnMoonClose.addEventListener("click", function () {
  if (AutumnMoonClose) { AutumnMoonMap.style.display = "none"; }
})


var SushiMap = document.getElementById("SushiMap");
var placeSushi = document.getElementById("placeSushi");
var SushiClose = document.getElementById("SushiClose");
SushiMap.style.display = "none";

placeSushi.addEventListener("click", function () {
  if (placeSushi) { SushiMap.style.display = "block"; }
})
SushiClose.addEventListener("click", function () {
  if (SushiClose) { SushiMap.style.display = "none"; }
})


var BirdMap = document.getElementById("BirdMap");
var placeBird = document.getElementById("placeBird");
var BirdClose = document.getElementById("BirdClose");
BirdMap.style.display = "none";

placeBird.addEventListener("click", function () {
  if (placeBird) { BirdMap.style.display = "block"; }
})
BirdClose.addEventListener("click", function () {
  if (BirdClose) { BirdMap.style.display = "none"; }
})

/*         義美美食           */

var GoodEatMap = document.getElementById("GoodEatMap");
var placeGoodEat = document.getElementById("placeGoodEat");
var GoodEatClose = document.getElementById("GoodEatClose");
GoodEatMap.style.display = "none";

placeGoodEat.addEventListener("click", function () {
  if (placeGoodEat) { GoodEatMap.style.display = "block"; }
})
GoodEatClose.addEventListener("click", function () {
  if (GoodEatClose) { GoodEatMap.style.display = "none"; }
})


var EatSomethingMap = document.getElementById("EatSomethingMap");
var placeEatSomething = document.getElementById("placeEatSomething");
var EatSomethingClose = document.getElementById("EatSomethingClose");
EatSomethingMap.style.display = "none";

placeEatSomething.addEventListener("click", function () {
  if (placeEatSomething) { EatSomethingMap.style.display = "block"; }
})
EatSomethingClose.addEventListener("click", function () {
  if (EatSomethingClose) { EatSomethingMap.style.display = "none"; }
})


var BurgerJointMap = document.getElementById("BurgerJointMap");
var placeBurgerJoint = document.getElementById("placeBurgerJoint");
var BurgerJointClose = document.getElementById("BurgerJointClose");
BurgerJointMap.style.display = "none";

placeBurgerJoint.addEventListener("click", function () {
  if (placeBurgerJoint) { BurgerJointMap.style.display = "block"; }
})
BurgerJointClose.addEventListener("click", function () {
  if (BurgerJointClose) { BurgerJointMap.style.display = "none"; }
})


var GrayHouseMap = document.getElementById("GrayHouseMap");
var placeGrayHouse = document.getElementById("placeGrayHouse");
var GrayHouseClose = document.getElementById("GrayHouseClose");
GrayHouseMap.style.display = "none";

placeGrayHouse.addEventListener("click", function () {
  if (placeGrayHouse) { GrayHouseMap.style.display = "block"; }
})
GrayHouseClose.addEventListener("click", function () {
  if (GrayHouseClose) { GrayHouseMap.style.display = "none"; }
})


var GaomuMap = document.getElementById("GaomuMap");
var placeGaomu = document.getElementById("placeGaomu");
var GaomuClose = document.getElementById("GaomuClose");
GaomuMap.style.display = "none";

placeGaomu.addEventListener("click", function () {
  if (placeGaomu) { GaomuMap.style.display = "block"; }
})
GaomuClose.addEventListener("click", function () {
  if (GaomuClose) { GaomuMap.style.display = "none"; }
})



var SessionMap = document.getElementById("SessionMap");
var placeSession = document.getElementById("placeSession");
var SessionClose = document.getElementById("SessionClose");
SessionMap.style.display = "none";

placeSession.addEventListener("click", function () {
  if (placeSession) { SessionMap.style.display = "block"; }
})
SessionClose.addEventListener("click", function () {
  if (SessionClose) { SessionMap.style.display = "none"; }
})


var SALTANDPEPPERMap = document.getElementById("SALTANDPEPPERMap");
var placeSALTANDPEPPER = document.getElementById("placeSALTANDPEPPER");
var SALTANDPEPPERClose = document.getElementById("SALTANDPEPPERClose");
SALTANDPEPPERMap.style.display = "none";

placeSALTANDPEPPER.addEventListener("click", function () {
  if (placeSALTANDPEPPER) { SALTANDPEPPERMap.style.display = "block"; }
})
SALTANDPEPPERClose.addEventListener("click", function () {
  if (SALTANDPEPPERClose) { SALTANDPEPPERMap.style.display = "none"; }
})


var SachsenMap = document.getElementById("SachsenMap");
var placeSachsen = document.getElementById("placeSachsen");
var SachsenClose = document.getElementById("SachsenClose");
SachsenMap.style.display = "none";

placeSachsen.addEventListener("click", function () {
  if (placeSachsen) { SachsenMap.style.display = "block"; }
})
SachsenClose.addEventListener("click", function () {
  if (SachsenClose) { SachsenMap.style.display = "none"; }
})


var LeRougeMap = document.getElementById("LeRougeMap");
var placeLeRouge = document.getElementById("placeLeRouge");
var LeRougeClose = document.getElementById("LeRougeClose");
LeRougeMap.style.display = "none";

placeLeRouge.addEventListener("click", function () {
  if (placeLeRouge) { LeRougeMap.style.display = "block"; }
})
LeRougeClose.addEventListener("click", function () {
  if (LeRougeClose) { LeRougeMap.style.display = "none"; }
})

/**                   夜景餐廳                          */

var RabbitMap = document.getElementById("RabbitMap");
var placeRabbit = document.getElementById("placeRabbit");
var RabbitClose = document.getElementById("RabbitClose");
RabbitMap.style.display = "none";

placeRabbit.addEventListener("click", function () {
  if (placeRabbit) { RabbitMap.style.display = "block"; }
})
RabbitClose.addEventListener("click", function () {
  if (RabbitClose) { RabbitMap.style.display = "none"; }
})


var RotateMap = document.getElementById("RotateMap");
var placeRotate = document.getElementById("placeRotate");
var RotateClose = document.getElementById("RotateClose");
RotateMap.style.display = "none";

placeRotate.addEventListener("click", function () {
  if (placeRotate) { RotateMap.style.display = "block"; }
})
RotateClose.addEventListener("click", function () {
  if (RotateClose) { RotateMap.style.display = "none"; }
})


var CafeTaskMap = document.getElementById("CafeTaskMap");
var placeCafeTask = document.getElementById("placeCafeTask");
var CafeTaskClose = document.getElementById("CafeTaskClose");
CafeTaskMap.style.display = "none";

placeCafeTask.addEventListener("click", function () {
  if (placeCafeTask) { CafeTaskMap.style.display = "block"; }
})
CafeTaskClose.addEventListener("click", function () {
  if (CafeTaskClose) { CafeTaskMap.style.display = "none"; }
})


var BirdHomeMap = document.getElementById("BirdHomeMap");
var placeBirdHome = document.getElementById("placeBirdHome");
var BirdHomeClose = document.getElementById("BirdHomeClose");
BirdHomeMap.style.display = "none";

placeBirdHome.addEventListener("click", function () {
  if (placeBirdHome) { BirdHomeMap.style.display = "block"; }
})
BirdHomeClose.addEventListener("click", function () {
  if (BirdHomeClose) { BirdHomeMap.style.display = "none"; }
})


var StarMoonMap = document.getElementById("StarMoonMap");
var placeStarMoon = document.getElementById("placeStarMoon");
var StarMoonClose = document.getElementById("StarMoonClose");
StarMoonMap.style.display = "none";

placeStarMoon.addEventListener("click", function () {
  if (placeStarMoon) { StarMoonMap.style.display = "block"; }
})
StarMoonClose.addEventListener("click", function () {
  if (StarMoonClose) { StarMoonMap.style.display = "none"; }
})


var OysterMap = document.getElementById("OysterMap");
var placeOyster = document.getElementById("placeOyster");
var OysterClose = document.getElementById("OysterClose");
OysterMap.style.display = "none";

placeOyster.addEventListener("click", function () {
  if (placeOyster) { OysterMap.style.display = "block"; }
})
OysterClose.addEventListener("click", function () {
  if (OysterClose) { OysterMap.style.display = "none"; }
})


var GreenDoorMap = document.getElementById("GreenDoorMap");
var placeGreenDoor = document.getElementById("placeGreenDoor");
var GreenDoorClose = document.getElementById("GreenDoorClose");
GreenDoorMap.style.display = "none";

placeGreenDoor.addEventListener("click", function () {
  if (placeGreenDoor) { GreenDoorMap.style.display = "block"; }
})
GreenDoorClose.addEventListener("click", function () {
  if (GreenDoorClose) { GreenDoorMap.style.display = "none"; }
})


var LightSeaMap = document.getElementById("LightSeaMap");
var placeLightSea = document.getElementById("placeLightSea");
var LightSeaClose = document.getElementById("LightSeaClose");
LightSeaMap.style.display = "none";

placeLightSea.addEventListener("click", function () {
  if (placeLightSea) { LightSeaMap.style.display = "block"; }
})
LightSeaClose.addEventListener("click", function () {
  if (LightSeaClose) { LightSeaMap.style.display = "none"; }
})


var TaoyueMap = document.getElementById("TaoyueMap");
var placeTaoyue = document.getElementById("placeTaoyue");
var TaoyueClose = document.getElementById("TaoyueClose");
TaoyueMap.style.display = "none";

placeTaoyue.addEventListener("click", function () {
  if (placeTaoyue) { TaoyueMap.style.display = "block"; }
})
TaoyueClose.addEventListener("click", function () {
  if (TaoyueClose) { TaoyueMap.style.display = "none"; }
})


/*              甜點              */

var CJSJMap = document.getElementById("CJSJMap");
var placeCJSJ = document.getElementById("placeCJSJ");
var CJSJClose = document.getElementById("CJSJClose");
CJSJMap.style.display = "none";

placeCJSJ.addEventListener("click", function () {
  if (placeCJSJ) { CJSJMap.style.display = "block"; }
})
CJSJClose.addEventListener("click", function () {
  if (CJSJClose) { CJSJMap.style.display = "none"; }
})


var ThinWaterMap = document.getElementById("ThinWaterMap");
var placeThinWater = document.getElementById("placeThinWater");
var ThinWaterClose = document.getElementById("ThinWaterClose");
ThinWaterMap.style.display = "none";

placeThinWater.addEventListener("click", function () {
  if (placeThinWater) { ThinWaterMap.style.display = "block"; }
})
ThinWaterClose.addEventListener("click", function () {
  if (ThinWaterClose) { ThinWaterMap.style.display = "none"; }
})


var GrassMap = document.getElementById("GrassMap");
var placeGrass = document.getElementById("placeGrass");
var GrassClose = document.getElementById("GrassClose");
GrassMap.style.display = "none";

placeGrass.addEventListener("click", function () {
  if (placeGrass) { GrassMap.style.display = "block"; }
})
GrassClose.addEventListener("click", function () {
  if (GrassClose) { GrassMap.style.display = "none"; }
})


var ComeSenMap = document.getElementById("ComeSenMap");
var placeComeSen = document.getElementById("placeComeSen");
var ComeSenClose = document.getElementById("ComeSenClose");
ComeSenMap.style.display = "none";

placeComeSen.addEventListener("click", function () {
  if (placeComeSen) { ComeSenMap.style.display = "block"; }
})
ComeSenClose.addEventListener("click", function () {
  if (ComeSenClose) { ComeSenMap.style.display = "none"; }
})


var CroissantMap = document.getElementById("CroissantMap");
var placeCroissant = document.getElementById("placeCroissant");
var CroissantClose = document.getElementById("CroissantClose");
CroissantMap.style.display = "none";

placeCroissant.addEventListener("click", function () {
  if (placeCroissant) { CroissantMap.style.display = "block"; }
})
CroissantClose.addEventListener("click", function () {
  if (CroissantClose) { CroissantMap.style.display = "none"; }
})


var DangoMap = document.getElementById("DangoMap");
var placeDango = document.getElementById("placeDango");
var DangoClose = document.getElementById("DangoClose");
DangoMap.style.display = "none";

placeDango.addEventListener("click", function () {
  if (placeDango) { DangoMap.style.display = "block"; }
})
DangoClose.addEventListener("click", function () {
  if (DangoClose) { DangoMap.style.display = "none"; }
})


var FermentoMap = document.getElementById("FermentoMap");
var placeFermento = document.getElementById("placeFermento");
var FermentoClose = document.getElementById("FermentoClose");
FermentoMap.style.display = "none";

placeFermento.addEventListener("click", function () {
  if (placeFermento) { FermentoMap.style.display = "block"; }
})
FermentoClose.addEventListener("click", function () {
  if (FermentoClose) { FermentoMap.style.display = "none"; }
})


var UraraMap = document.getElementById("UraraMap");
var placeUrara = document.getElementById("placeUrara");
var UraraClose = document.getElementById("UraraClose");
UraraMap.style.display = "none";

placeUrara.addEventListener("click", function () {
  if (placeUrara) { UraraMap.style.display = "block"; }
})
UraraClose.addEventListener("click", function () {
  if (UraraClose) { UraraMap.style.display = "none"; }
})


var LemonMap = document.getElementById("LemonMap");
var placeLemon = document.getElementById("placeLemon");
var LemonClose = document.getElementById("LemonClose");
LemonMap.style.display = "none";

placeLemon.addEventListener("click", function () {
  if (placeLemon) { LemonMap.style.display = "block"; }
})
LemonClose.addEventListener("click", function () {
  if (LemonClose) { LemonTMap.style.display = "none"; }
})



/*  電話認證   */
inputBoxB.style.display = "none";

function Provefunction() {
  alert("請回傳6位認證數字");
  inputBoxB.style.display = "block";
}



/*     相片庫         */


let DownParkIndex = 1;
DownPark(DownParkIndex);
function DownParkSlides(n) {
  DownPark(DownParkIndex = n);
}
function DownPark(n) {

  let i;
  let slides = document.getElementsByClassName("DownParkSlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { DownParkIndex = 1 }
  if (n < 1) { DownParkIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[DownParkIndex - 1].style.display = "block";
  dots[DownParkIndex - 1].className += " active";
}



let BarbecueIzakayaIndex = 1;
BarbecueIzakaya(BarbecueIzakayaIndex);
function BarbecueIzakayaSlides(n) {
  BarbecueIzakaya(BarbecueIzakayaIndex = n);
}
function BarbecueIzakaya(n) {

  let i;
  let slides = document.getElementsByClassName("BarbecueIzakayaSlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { BarbecueIzakayaIndex = 1 }
  if (n < 1) { BarbecueIzakayaIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[BarbecueIzakayaIndex - 1].style.display = "block";
  dots[BarbecueIzakayaIndex - 1].className += " active";
}


let VEGETEJIYAIndex = 1;
VEGETEJIYA(VEGETEJIYAIndex);
function VEGETEJIYASlides(n) {
  VEGETEJIYA(VEGETEJIYAIndex = n);
}
function VEGETEJIYA(n) {

  let i;
  let slides = document.getElementsByClassName("VEGETEJIYASlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { VEGETEJIYAIndex = 1 }
  if (n < 1) { VEGETEJIYAIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[VEGETEJIYAIndex - 1].style.display = "block";
  dots[VEGETEJIYAIndex - 1].className += " active";
}


/*         夜景相片庫           */

let RabbitIndex = 1;
Rabbit(RabbitIndex);
function RabbitSlides(n) {
  Rabbit(RabbitIndex = n);
}
function Rabbit(n) {

  let i;
  let slides = document.getElementsByClassName("RabbitSlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { RabbitIndex = 1 }
  if (n < 1) { RabbitIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[RabbitIndex - 1].style.display = "block";
  dots[RabbitIndex - 1].className += " active";
}


let RotateIndex = 1;
Rotate(RotateIndex);
function RotateSlides(n) {
  Rotate(RotateIndex = n);
}
function Rotate(n) {

  let i;
  let slides = document.getElementsByClassName("RotateSlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { RotateIndex = 1 }
  if (n < 1) { RotateIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[RotateIndex - 1].style.display = "block";
  dots[RotateIndex - 1].className += " active";
}


let CafeTaskIndex = 1;
CafeTask(CafeTaskIndex);
function CafeTaskSlides(n) {
  CafeTask(CafeTaskIndex = n);
}
function CafeTask(n) {

  let i;
  let slides = document.getElementsByClassName("CafeTaskSlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { CafeTaskIndex = 1 }
  if (n < 1) { CafeTaskIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[CafeTaskIndex - 1].style.display = "block";
  dots[CafeTaskIndex - 1].className += " active";
}


/*55555555555*/
var modalElem = document.getElementById("tyModal");
        var spanElem = document.getElementsByClassName("tyClose")[0];

        spanElem.onclick = function () {
            modalElem.style.display = "none";
        }

        setTimeout(function () {
            modalElem.style.display = "block";
        }, 1000);