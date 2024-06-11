document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[data-target]");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = event.target.getAttribute("data-target");
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});
