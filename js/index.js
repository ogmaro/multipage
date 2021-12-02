const navArray = [
  ["Home", "#section-1"],
  ["About", "#section-2"],
  ["Project", "#section-3"],
  ["Contact", "#section-4"],
];
const nav = document.querySelector(".list");

navArray.forEach(function (element) {
  const list = document.createElement("li");
  list.classList.add("list-item");
  const achor = document.createElement("a");
  achor.textContent = element[0].toUpperCase();
  achor.href = element[1];
  if (achor.textContent === "HOME") {
    achor.classList.add("active");
  }
  list.appendChild(achor);
  nav.appendChild(list);
});
const html = document;

const clicked = document.querySelectorAll("a");
clicked.forEach((click) => {
  click.addEventListener("click", function () {
    const active = document.querySelector(".active");
    active.className = active.classList.replace("active", "inactive");
    this.className += " active";
  });
});
