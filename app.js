const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 600 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



fetch("https://allsportdb-com.p.rapidapi.com/calendar?objectType=0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "allsportdb-com.p.rapidapi.com",
		"x-rapidapi-key": "caba1d0462mshe9c9db642d6f503p1cab8ajsnab1537887754"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});