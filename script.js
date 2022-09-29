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
  document.getElementById('menu1').style.display='flex';
});
if (this.classList = '') {
  document.getElementById('menu1').style.display='none';
  console.log('dfgdfh')
}




//if (count > 0) {
  //strengthClickReg.style.visibility = 'visible';
  //console.log('registered')
//};






