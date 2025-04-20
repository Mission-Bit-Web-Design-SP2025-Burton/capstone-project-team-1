const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", openSidenav);
const sidenavCloseButton = document.getElementById("sidenav-close-button");

sidenavCloseButton.addEventListener("click", closeSidenav);

const sidenavUnderlay = document.getElementById("sidenav-underlay");
sidenavUnderlay.addEventListener("click", closeSidenav);

function openSidenav() {
  const sidenav = document.getElementById("sidenav");
  sidenav.style.transform = "translateX(200px)";
  sidenavUnderlay.style.visibility = "visible";
}

function closeSidenav() {
  const sidenav = document.getElementById("sidenav");
  sidenav.style.transform = "translateX(-200px)";
  sidenavUnderlay.style.visibility = "hidden";
}
