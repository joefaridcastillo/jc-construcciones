function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Current JavaScript that changes the hash
window.location.hash = "about";

// Modified JavaScript
document.getElementById("about").scrollIntoView({ behavior: "smooth" });
