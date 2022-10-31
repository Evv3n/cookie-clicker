const hamburger = document.querySelector('.hamburger');
const strengthNumber = document.getElementById("strengthNumbers");
const strengthPerSecond = document.querySelector(".strengthPerSecond");
const strengthClickReg = document.querySelector("#strengthClickReg");
const activeHamburger = document.querySelector('#hamburger.is-active');
const menu1 = document.querySelector('.menu');
const pwoimgtest = document.getElementById('pwoimgtest');
const pwoimgtest2 = document.getElementById('pwoimgtest2');
const pwoimgtest3 = document.getElementById('pwoimgtest3');
const price_for_pwo = document.getElementById('pwo1-price');
const settings = document.getElementById('settings');
const settingsa = document.getElementById('settingsa');
const achievementsa = document.getElementById('achievementsa');
const achievements = document.getElementById('achievements');
const statsa = document.getElementById('statsa');
const trainersa = document.getElementById('trainersa');
const stats = document.getElementById('stats');
const trainer_shop = document.getElementById('trainer-shop');
const strengthbutton = document.querySelector('#strengthbutton');
const bicepCurl = document.querySelector('#dumbell-curl');
const dumbell_info = document.querySelector('#dumbell-curls');
const benchPress = document.querySelector('#bench-press');
const bicepCurlRow = document.querySelector('.bicep-curl-row');
const lineBicepCurl = document.querySelector('#lineBicepCurl');
const dumbellpricetag = document.querySelector('#dumbellpricetag');
const benchpricetag = document.querySelector('#benchpricetag');
const x_icon = document.querySelector('#x_icon');


//bulk guy
const buy = document.querySelector('#buy');
const one = document.querySelector('#one');
const ten = document.querySelector('#ten');
const hundred = document.querySelector('#hundred');

buyamount = 1

//variabler
var strength = 100000;
var passive_income = 0;
//Prices
var price_for_pwo1 = 100;
var price_for_pwo2 = 1000;
var price_for_pwo3 = 10000;
var price_bicep_curl = 100;
var price_bench_press = 600;



dumbellpricetag.innerHTML = price_bicep_curl;
benchpricetag.innerHTML = price_bench_press;

const handleIncrement = () => {
  strength++;
  strengthNumber.innerHTML = 'Strength: ' + strength;
}

const incrementCount = document.getElementById('strengthbutton');

incrementCount.addEventListener("click", handleIncrement);

hamburger.addEventListener('click', isActive)
function isActive() {
  hamburger.classList.toggle('is-active');
  if (hamburger.classList.contains("is-active")) {
    menu1.style.display = 'flex';
  } else {
    menu1.style.display = 'none';
  }
};


bicepCurl.addEventListener('click', buy_bicepCurl);
pwoimgtest.addEventListener('click', buy_pwo);
pwoimgtest2.addEventListener('click', buy_pwo2);
pwoimgtest3.addEventListener('click', buy_pwo3);
settingsa.addEventListener('click', settings_open)
achievementsa.addEventListener('click', achievements_open)
statsa.addEventListener('click', stats_open)
trainersa.addEventListener('click', trainers_open)
x_icon.addEventListener('click', close);

function settings_open() {
  settings.style.display = 'block';
}
function achievements_open() {
  achievements.style.display = 'block';
}
function stats_open() {
  stats.style.display = 'block';
}
function trainers_open() {
  trainer_shop.style.display = 'block';
}
function close() {
  console.log(passive_income);
  trainer_shop.style.display = 'none';
}
function buy_pwo(){ 
  if(strength > price_for_pwo1){
    passive_income++;
    strength -= price_for_pwo1;
    pwoimgtest.style.display = 'none';
  }
}   
function buy_pwo2(){ 
  if(strength > price_for_pwo2){
    passive_income += price_for_pwo2;
    strength -= price_for_pwo2;
    pwoimgtest2.style.display = 'none';
  }
}   
function buy_pwo3(){ 
  if(strength > price_for_pwo3){
    passive_income += price_for_pwo3;
    strength -= price_for_pwo3;
    pwoimgtest3.style.display = 'none';
  }
}
function buy_bicepCurl(){
  if(strength > price_bicep_curl * buyamount){
    passive_income += 1;
    strength -= price_bicep_curl * buyamount;
    f = buyamount
    
    for(var i=0, l = f; i < l; i++){
      dumbellpricetag.innerHTML = price_bicep_curl = Math.ceil(price_bicep_curl * 1.1);
      bicepCurlRow.style.display = 'block';
      bicepCurlRow.innerHTML += "<img id='bicepcurlgif' draggable=false src='images/bicepcurlgif.gif'>"
    }
  }
}

function setbuyamt(Object) {
  console.log(Object)
  buyamount = Object.innerHTML
  document.getElementById("one").style.color = "#FFFFFF"
  document.getElementById("ten").style.color = "#FFFFFF"
  document.getElementById("hundred").style.color = "#FFFFFF"
  document.getElementById(Object.id).style.color = "#c2382e"

  dumbellpricetag.innerHTML = price_bicep_curl * buyamount
  
}
    
var update_strenght = setInterval(myTimer, 1000);
function myTimer(){
  strength += passive_income;
}

var update_numbers = setInterval(Timer2, 1);
function Timer2() {
  strengthNumber.innerHTML = 'Strength: ' + strength;
  strengthPerSecond.innerHTML = 'Per Second: ' + passive_income;
  price_for_pwo.innerHTML = price_for_pwo1;
}
function onMouseOver(element){
  document.getElementById('cursor').style.display = 'block';
}

function onMouseOut(element) {
  document.getElementById('cursor').style.display = 'none';
}
/*
var passive_timer = setInterval(myTimer, 10);
function myTimer(){
  strength += passive_income;
}



/*
activeHamburger.addEventListener('click', () => {
  menu1.style.display = 'none'
})
*/





