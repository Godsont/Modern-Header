const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mainMenu = document.querySelector(".main-menu");
const menuItems = document.querySelectorAll(".main-menu ul li");

menuIcon.addEventListener("click", () => {
  console.log("hi");
  menuIcon.classList.remove("active");
  closeIcon.classList.add("active");
  mainMenu.classList.add("active");
})

closeIcon.addEventListener("click", () => {
  menuIcon.classList.add("active");
  closeIcon.classList.remove("active");
  mainMenu.classList.remove("active");
})


menuItems.forEach((menu, index) => (menu.style.transitionDelay = index * 100 + "ms"));