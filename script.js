const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
        console.log('clicked')
        this.classList.toggle('is-active');
      });




