const hamburgerButton = document.getElementById("hamburger-button");
const navbarList = document.getElementById("nav-list");

hamburgerButton.addEventListener("click", function() {
	if (navbarList.getAttribute("aria-expanded") === "false") {
		callNav("open");
	} else callNav("closed");
});

function callNav(e) {
	if (e === "open") {
		navbarList.setAttribute("aria-expanded", true);
		navbarList.classList.replace("right-[-200%]", "right-0");
		hamburgerButton.classList.add("isActive");
	} else {
		navbarList.setAttribute("aria-expanded", !true);
		navbarList.classList.replace("right-0" ,"right-[-200%]");
		hamburgerButton.classList.remove("isActive");
	}
} 