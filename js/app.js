const toggleBtn = document.querySelector('.toggle-button');

const navbarLinks = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleBtn.classList.toggle('active');
});
