document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("cartbtn");
  const dropdown = document.getElementById("cartContent");

  if (!btn || !dropdown) return;

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function () {
    dropdown.classList.add("hidden");
  });
});
