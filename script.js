const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarMenu = document.getElementsByClassName('navbar-menu')[0];

toggleButton.addEventListener('click', () => {
	navbarMenu.classList.toggle('active');
	toggleButton.classList.toggle('change');
});
