const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const today = new Date();

const formattedDate = today.toLocaleDateString();

document.getElementById('dateDisplay').textContent = formattedDate;

