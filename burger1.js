document.querySelector(".closeMenu").addEventListener("click", closeMenu);
document.querySelector(".openMenu").addEventListener("click", openMenu);

function openMenu() {
  document.querySelector("#menu").style.height = "100%";
}

function closeMenu() {
  document.querySelector("#menu").style.height = "0%";
}
