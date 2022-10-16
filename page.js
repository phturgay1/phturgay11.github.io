document.querySelector(".aboutclass").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  });