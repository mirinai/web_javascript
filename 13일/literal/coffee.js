const coffeeMenu = [
  { name: "americano", price: 2500, isRemained: false },
  { name: "latte", price: 3500, isRemained: false },
  { name: "vanila latte", price: 3000, isRemained: true },
];

// const coffee = coffeeMenu.map((v) => ({

// }));

// v : object type
//   coffeeMenu.forEach((v) => {
//     const newDiv = document.createElement("div");
//     newDiv.className = "coffee";

//     const h3 = document.createElement("h3");
//     h3.innerText = v["name"];

//     const h5 = document.createElement("h5");
//     h5.innerText = v.price;

//     const span = document.createElement("span");
//     span.innerText = `남은 재고 : ${v.isRemained ? "있음" : "없음"}`;

//     newDiv.appendChild(h3);
//     newDiv.appendChild(h5);
//     newDiv.appendChild(span);

//     const menu = document.querySelector(`.menu`);
//     menu.appendChild(newDiv);
//   });

const stockTag = (isRemained) => {
  const className = isRemained ? "blue" : "red";
  const text = isRemained ? "있음" : "없음";

  return `<span class=${className}>${text}</span>`;
};

const priceTag = (price) => {
  const discountPrice = price >= 3000 ? price * 0.8 : price;

  return `<h5>${discountPrice}</h5>`;
};

const nameTag = (name) => {
  const capitalizeName = name[0].toUpperCase() + name.slice(1, name.length);
  return `<h3>${capitalizeName}</h3>`;
};

const coffeeTag = (v) => {
  return `
  <div class="coffee">
      ${nameTag(v.name)}
      ${priceTag(v.price)}
      ${stockTag(v.isRemained)}
  </div>
  `;
};

coffeeMenu.forEach((v) =>
  document.querySelector(`.menu`).insertAdjacentHTML("beforeend", coffeeTag(v))
);
