const classList = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
];

color_hex.forEach((v) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.style.backgroundColor = v;
  newDiv.addEventListener("click", function () {
    window.alert(`${v}색이 클릭됨`);
  });
  const palette = document.querySelector(".palette");
  palette.appendChild(newDiv);
});
