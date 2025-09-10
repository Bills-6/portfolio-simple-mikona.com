const hamburgerButton = document.getElementById("hamburger-button");
const navbarList = document.getElementById("nav-list");

hamburgerButton.addEventListener("click", function() {
	if (navbarList.getAttribute("aria-expanded") === "false") {
		callNav("open");
	} else callNav("closed");
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