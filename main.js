// navigation bar for smaller screen
const menuBtn = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("mobile-navig");
// logo on navigation bar.
const navLogo = document.querySelector(".nav-logo");

// for modal
const modal = document.querySelector(".modal");
const canclBtn = document.getElementById("cancel-btn");
const continBtn = document.getElementById("contin-btn");

// this opens and close the navigation bar.
menuBtn.addEventListener("click", openMenu);

function openMenu() {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
    menuBtn.style.color == "dodgerblue";
  } else {
    navLinks.style.display = "none";
  }
}

//  this opens the modal.

navLogo.addEventListener("click", openModal) 

function openModal() {
  modal.style.display = "flex";
  
}

//this triggers an alert message.

continBtn.addEventListener("click", confirmBtn);

function confirmBtn() {
  modal.style.display = "none";
  window.alert("redirecting...");
}

//this closes  the modal.

canclBtn.addEventListener("click", closeBtn);

function closeBtn() {
  console.log("button was pressed. (modal)");
  modal.style.display = "none";
}
