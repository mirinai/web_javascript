const a = () => {
  console.log("hello");
};
const b = () => {
  console.log("lunch");
};
const c = () => {
  console.log("hungry");
};
// const test = document.querySelector(".test");
// test.addEventListener("click", () => {
//   a();
//   b();
//   c();
// });

//아침 -> 점심 -> 저녁
//점심 -> 저녁 -> 아침
//저녁 -> 아침 -> 점심

const asa = () => console.log("아침");
const hiru = () => console.log("점심");
const yugata = () => console.log("저녁");

const morning = document.querySelector(".morning");
morning.addEventListener("click", () => {
  asa();
  hiru();
  yugata();
});
const lunch = document.querySelector(".lunch");
lunch.addEventListener("click", () => {
  hiru();
  asa();
  yugata();
});
const dinner = document.querySelector(".dinner");
dinner.addEventListener("click", () => {
  yugata();
  asa();
  hiru();
});
