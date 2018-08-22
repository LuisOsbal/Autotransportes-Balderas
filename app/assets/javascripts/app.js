//
// const myFunctionSpecial = (selector) => {
//   document.querySelector(selector).addEventListener('click', (event) => {
//       const modal = document.querySelector('.modal');  // assuming you have only 1
//       const html = document.querySelector('html');
//
//       toggleClass(event);
//       myListener('.modal-background');
//       myListener('.delete');
//       myListener('.cancel');
//     });
// }
//
//
//
// const myListener = (selectorString) => {
//   modal.querySelector(selectorString).addEventListener('click', e => toggleClass(e));
// }
//
// const toggleClass = (evento) => {
//   evento.preventDefault();
//   modal.classList.remove('is-active');
//   html.classList.remove('is-clipped');
// }
//
// myFunctionSpecial('.modal-button');

$( document ).on('turbolinks:load', function() {
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'), 0
  );
  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  };

  // It shows the effect Smooth scrolling.
  $(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
        location.hostname == this.hostname) {
        var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length){
          $('html,body').animate( {
              scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });





  document.querySelector('.modal-button').addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.querySelector('.modal');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');

    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });

    modal.querySelector('.delete').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });

    modal.querySelector('.cancel').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
  });

  document.querySelector('.modal-button-2').addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.querySelector('.modal');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');

    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });

    modal.querySelector('.delete').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });

    modal.querySelector('.cancel').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
  });
});
