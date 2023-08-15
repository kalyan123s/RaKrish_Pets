// ***********************==================Toggle button=====================***************************

function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const menuIcon = document.querySelector('.menu i');
  
    if (window.innerWidth < 1040) {
      dropdownMenu.classList.toggle('open');
  
      const isOpen = dropdownMenu.classList.contains('open');
      menuIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
  }
  
  // Close the dropdown menu on window resize for larger screens
  window.addEventListener('resize', function () {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const menuIcon = document.querySelector('.menu i');
  
    if (window.innerWidth >= 1040) {
      dropdownMenu.classList.remove('open');
      menuIcon.classList = 'fa-solid fa-bars';
    }
  });

  // **********==================Scrolling functionality with jquery===========***************************

  // Option 2 - jQuery Smooth Scrolling
$('.navbar a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      }, 10);
  }
});


// *********************========================Login Button=========================**************************

const loginSignupContainer= $('.login_signup_container');
const loginLink=$('.login-link');
const SignupLink=$('.Signup-link');
const loginButton = $('.login_btn');
const CloseIcon= $('.icon-close');

SignupLink.on('click', function(){
    loginSignupContainer.addClass('active');
});

loginLink.on('click', function(){
    loginSignupContainer.removeClass('active');
});

loginButton.on('click', function(){
    loginSignupContainer.addClass('toggle');
});

CloseIcon.on('click',function(){
    loginSignupContainer.removeClass('toggle');
})