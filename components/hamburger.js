const hamburgerButton = document.getElementById("hamburger-button");
const navbarList = document.getElementById("nav-list");

hamburgerButton.addEventListener("click", function() {
	if (navbarList.getAttribute("aria-expanded") === "false") {
		callNav("open");
	} else callNav("closed");
});

// close nav if user click is not on target
document.addEventListener("click", function(e) {
	if (!navbarList.contains(e.target) && !hamburgerButton.contains(e.target)) callNav("close");
});

// close nav if user click esc button on keyboard
document.addEventListener("keydown", function(isKey) {
	if (isKey.key === "Escape") callNav("close");
});

const bars = document.querySelectorAll("#hamburger-button .bar");
function callNav(e) {
	if (e === "open") {
		navbarList.setAttribute("aria-expanded", true);
		navbarList.classList.replace("right-[-200%]", "right-0");
		hamburgerButton.classList.add("isActive");
		bars.forEach(bar => bar.style.background = "white");
	} else {
		navbarList.setAttribute("aria-expanded", !true);
		navbarList.classList.replace("right-0" ,"right-[-200%]");
		hamburgerButton.classList.remove("isActive");
		bars.forEach(bar => bar.style.background = "");
	}
} 