const hamburger = document.querySelector('.hamburger');
const strengthNumber = document.getElementById("strengthNumbers");
const strengthClickReg = document.querySelector("#strengthClickReg");
const activeHamburger = document.querySelector('hamburger.is-active')

var count = 0;

strengthNumber.innerHTML = 'Strength: ' + count;

const handleIncrement = () => {
  count++;
  strengthNumber.innerHTML = 'Strength: ' + count;
}

const incrementCount = document.getElementById('strengthbutton');

incrementCount.addEventListener("click", handleIncrement);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  document.getElementById('menu1').style.display='flex';
});

activeHamburger.addEventListener('click', () => {
  document.getElementById('menu1').style.display='none';
})




//if (count > 0) {
  //strengthClickReg.style.visibility = 'visible';
  //console.log('registered')
//};






