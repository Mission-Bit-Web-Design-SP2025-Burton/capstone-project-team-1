const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", openSidenav);
const sidenavCloseButton = document.getElementById("sidenav-close-button");

sidenavCloseButton.addEventListener("click", closeSidenav);

function openSidenav() {
  const sidenav = document.getElementById("sidenav");
  sidenav.style.transform = "translateX(200px)";
}

function closeSidenav() {
  const sidenav = document.getElementById("sidenav");
  sidenav.style.transform = "translateX(-200px)";
}
