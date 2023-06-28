// open and close mobile navigation menu & apply semi-tranparent overlay to rest of page

function closeNav() {
	// hide side navigation
	document.querySelector("nav").style.width = "0";
	// remove overlay by clearing 'block'
	document.querySelector(".overlay").style.display = "none";
	// set aria-expanded to false on appropriate element
	const menuBtn = document.querySelector("#menu-btn");
	menuBtn.removeAttribute("aria-expanded");

	// no tabbing to hidden links
	const links = document.querySelectorAll("#navmenu li a");
	links.forEach(link => {
		console.log(link);
		link.setAttribute("tabindex", "-1");
	});
}

// when menu closed, should be no tabbing of hidden (menu) links (tabindex -1?)
// when open:
//		transfer focus to next li from menu button
//		tabbing should be confined to menu
//		esc or click off-menu should close menu
//		arrow keys should navigate within menu

function openNav() {
	// enable the overlay
	document.querySelector(".overlay").style.display = "block";
	// set width of side navigation
	document.querySelector("nav").style.width = "250px";

// following would need All selector & forEach, and be reset in closeNav()
//	document.querySelector(".content").setAttribute("tabindex", -1);

	const menuBtn = document.querySelector("#menu-btn");

	menuBtn.addEventListener('click', function() {
		let expanded = this.getAttribute('aria-expanded') === 'true' || false;
		this.setAttribute('aria-expanded', 'true');
		let menu = this.nextElementSibling;
// 		menu.hidden = !menu.hidden;		//	if un-commented, 2nd time click on btn: no menu - just overlay
	});

	// reset tabbing for links
	const links = document.querySelectorAll("#navmenu li a");
	links.forEach(link => {
		console.log(link);
		link.setAttribute("tabindex", "0");
	});
}

