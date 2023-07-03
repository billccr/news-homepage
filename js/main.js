// open and close mobile navigation menu & apply semi-tranparent overlay to rest of page

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navmenu = document.querySelector("#navmenu");
const mediaQuery = window.matchMedia('(max-width: 50rem)');


function openNav() {
	// enable semi-transparent overlay & set width of slide-in menu
	document.querySelector(".overlay").style.display = "block";
	document.querySelector("nav").style.width = "17rem";

	// take now-background page content links out of tabbing order
	const contentLinks = document.querySelectorAll(".content a");
	contentLinks.forEach(link => {
		link.setAttribute("tabindex", "-1");
	});

	menuBtn.setAttribute('aria-expanded', 'true');

	// focus menu-close button for easy toggle
	closeBtn.focus();

	// reset tabbing for nav links
	const links = document.querySelectorAll("#navmenu li a");
	links.forEach(link => {
		link.setAttribute("tabindex", "0");
	});

	// on click, go to link target and close nav
	links.forEach(link => {
		link.addEventListener('click', event => {
			closeNav();
			link.focus();
		});
	});
}


function closeNav() {
	document.querySelector("nav").style.width = "0";
	document.querySelector(".overlay").style.display = "none";

	// set aria-expanded to false on menu button if nav closed
	menuBtn.setAttribute("aria-expanded", "false");

	// no tabbing to links in menu when hidden
	const links = document.querySelectorAll("#navmenu li a");
	links.forEach(link => {
		link.setAttribute("tabindex", "-1");
	});

	// reset page content links to normal tabbing behavior when nav closed
	const contentLinks = document.querySelectorAll(".content a");
	contentLinks.forEach(link => {
		link.removeAttribute("tabindex");
	});
}

// close nav menu with Esc key
navmenu.addEventListener('keyup', event => {
	if (event.code === 'Escape' && mediaQuery.matches)
		closeNav();
});



