
// open and close mobile navigation menu & apply semi-tranparent overlay to rest of page

function openNav() {
	// enable the overlay
	document.querySelector(".overlay").style.display = "block";
	// set width of side navigation
	document.querySelector("nav").style.width = "250px";
}

function closeNav() {
	// remove overlay by clearing 'block'
	document.querySelector(".overlay").style.display = "none";
	// hide side navigation
	document.querySelector("nav").style.width = "0";
}
