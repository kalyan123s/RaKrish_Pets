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