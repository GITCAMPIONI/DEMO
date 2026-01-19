document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("cookie-overlay");
  const accept = document.querySelector(".accept");
  const reject = document.querySelector(".reject");
  const config = document.querySelector(".config");

  if (localStorage.getItem("cookies")) {
    overlay.style.display = "none";
    return;
  }

  accept.addEventListener("click", () => {
    localStorage.setItem("cookies", "accepted");
    overlay.style.display = "none";
  });

  reject.addEventListener("click", () => {
    localStorage.setItem("cookies", "rejected");
    overlay.style.display = "none";
  });

  config.addEventListener("click", () => {
    alert("Aquí iría la configuración de cookies");
  });
});
