document.addEventListener('DOMContentLoaded', ()=>{
    window.onscroll = () => {myFunction()};

    const header = document.getElementById("main-header");
    const sticky = header.offsetTop;

    console.log(sticky)
    
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

    document.querySelector('.navbar-burger').addEventListener('click', () => {
        document.querySelector('.navbar-burger').classList.toggle('is-active')
        document.querySelector('.navbar-menu').classList.toggle('is-active')
    })
})