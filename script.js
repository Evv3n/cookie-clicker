const hamburger = document.querySelector('.hamburger');
var strengthNumber = document.querySelector('strengthNumber');

var strengthNumber = 1;
hamburger.addEventListener('click', function(){
  this.classList.toggle('is-active');
});

function numberadd() {
  document.getElementById('strengthNumber').InnerHTML = `${strengthNumber}`;
};




