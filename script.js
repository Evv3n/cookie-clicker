const hamburger = document.querySelector('.hamburger');
const strengthNumber = document.getElementById("strengthNumbers");
const strengthClickReg = document.querySelector("#strengthClickReg");
var count = 0;
strengthNumber.innerHTML = 'Strength: ' + count;

const handleIncrement = () => {
  count++;
  strengthNumber.innerHTML = 'Strength: ' + count;
}

const incrementCount = document.getElementById('strengthbutton');

incrementCount.addEventListener("click", handleIncrement);

hamburger.addEventListener('click', function(){
  this.classList.toggle('is-active');
});



//if (count > 0) {
  //strengthClickReg.style.visibility = 'visible';
  //console.log('registered')
//};






