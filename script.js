const hamburger = document.querySelector('.hamburger');
const strengthNumber = document.getElementById("strengthNumbers");
const strengthClickReg = document.querySelector("#strengthClickReg");
const activeHamburger = document.querySelector('#hamburger.is-active')
const menu1 = document.querySelector('#menu1');
const pwoimgtest = document.getElementById('pwoimgtest');
const price_for_pwo = document.getElementById('pwo1-price')

var strength = 0;
var passive_income = 0;
//Prices
var price_for_pwo1 = 15;



strengthNumber.innerHTML = 'Strength: ' + strength;

const handleIncrement = () => {
  strength++;
  strengthNumber.innerHTML = 'Strength: ' + strength;
}

const incrementCount = document.getElementById('strengthbutton');

incrementCount.addEventListener("click", handleIncrement);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menu1.style.display = 'flex'
});

pwoimgtest.addEventListener('click', buy_pwo);

function buy_pwo(){
  if(strength > price_for_pwo1){
    passive_income++;
    strength -= price_for_pwo1;
  } else {
    
  }
} 


var update_strenght = setInterval(myTimer, 10);
function myTimer(){
  strength += passive_income;
  strengthNumber.innerHTML = 'Strength: ' + strength;
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





