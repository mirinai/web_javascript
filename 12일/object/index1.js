const menu = [
  {
    coffeeName: "americano",
    coffeePrice: 2000,
    shot: 2,
    coffeeBean: "Arabica",
  },
  {
    coffeeName: "latte",
    coffeePrice: 2500,
    shot: 2,
    coffeeBean: "Arabica",
  },
  {
    coffeeName: "mocha",
    coffeePrice: 3500,
    shot: 2,
    coffeeBean: "Liberica",
  },
];
//1. 3000원 이하만 필터링

// menu.map((v) => v.coffeePrice).filter((v1) => v1 <= 3000);
const filtered_menu = menu.filter((v) => v.coffeePrice <= 3000);
console.log(filtered_menu);

//2. 대문자로 만들고 +1000

const changing = menu.map((v) => {
  // v.coffeeName === v.coffeeName.toLowerCase()
  //   ? v.coffeeName.toUpperCase()
  //   : v.coffeeName
  v.coffeeName = v.coffeeName.toUpperCase();
  v.coffeePrice += 1000;
  return v;
});
console.log(changing);

//3. 이름과 샷만 남기기

const name_shot = menu.map((v) => ({
  coffeeName: v.coffeeName,
  shot: v.shot,
}));
console.log("---------------------------");
console.log(name_shot);
