const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('#header');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 80) {
		header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
		header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
		header.style.backdropFilter = 'blur(10px)';
	} else {
		header.style.backgroundColor = 'transparent';
		header.style.boxShadow = 'none';
		header.style.backdropFilter = 'none';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
