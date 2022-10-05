const hamburger = document.querySelector('.hamburger');
const strengthNumber = document.getElementById("strengthNumbers");
const strengthPerSecond = document.querySelector(".strengthPerSecond")
const strengthClickReg = document.querySelector("#strengthClickReg");
const activeHamburger = document.querySelector('#hamburger.is-active')
const menu1 = document.querySelector('.menu');
const pwoimgtest = document.getElementById('pwoimgtest');
const price_for_pwo = document.getElementById('pwo1-price')
const settings = document.getElementById('settings')
const settingsa = document.getElementById('settingsa')
var strength = 0;
var passive_income = 0;
//Prices
var price_for_pwo1 = 15;

const handleIncrement = () => {
  strength++;
  strengthNumber.innerHTML = 'Strength: ' + strength;
}

const incrementCount = document.getElementById('strengthbutton');

incrementCount.addEventListener("click", handleIncrement);

hamburger.addEventListener('click', isActive)
function isActive() {
  hamburger.classList.toggle('is-active');
  if (hamburger.classList = ('hamburger is-active')) {
    menu1.display.style = 'flex'
  } else {
    menu1.display.style = 'none'
  }
};


pwoimgtest.addEventListener('click', buy_pwo);
settingsa.addEventListener('click', settings_open)

function settings_open() {
  settings.style.display = 'flex';
}
function buy_pwo(){
  if(strength > price_for_pwo1){
    passive_income++;
    strength -= price_for_pwo1;
    strengthNumber.innerHTML = 'Strength: ' + strength;
  }
}   


var update_strenght = setInterval(myTimer, 1000);
function myTimer(){
  strength += passive_income;
}

var update_numbers = setInterval(Timer2, 1);
function Timer2() {
  strengthNumber.innerHTML = 'Strength: ' + strength;
  strengthPerSecond.innerHTML = 'Per Second: ' + passive_income;
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





