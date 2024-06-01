//배열 구조분해
//destructuring : 분해함
const week = ["mon", "tue", "wed", "thu", "fri"];
// const [monday, ...rest]=week; //mon, 나머지
// const [monday, tuesday, ...rest] = week;
const [monday, rest] = week; //mon, tue

//오브젝트 구조분해
const kimbab = {
  name: "참치김밥",
  ingredients: ["참치", "김", "밥", "달걀"],
  price: 4000,
  sideDish: {
    main: "김치",
    soup: "된장국",
  },
};

//구조분해뒤 renaming
// const { name: kimbabName, price } = kimbab;

// console.log(kimbabName); //참치김밥
// console.log(price); //값

// const [tuna, ...rest1] = kimbab.ingredients;

// const { soup: koreanSoup } = kimbab.sideDish;

// const {
//   sideDish: { main, soup },
// } = kimbab;
// console.log(main); // 김치

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Chalie", age: 35 },
];

//1. v를 쓰지 않고, forEach 이름과 나이를 콘솔로 나타내기

users.forEach(({ name, age }) => console.log(`이름 : ${name}, 나이 : ${age}`));
console.log("==================================");
users.map(({ name: 이름, age: 나이 }) =>
  console.log(`이름 : ${이름}, 나이 : ${나이}`)
);

//2. [{name:Alice, age:25},{name:Bob, age:25},{name:Chalie, age:25}]
const users1 = users.map(({ name, age }) => ({ name: name, age: age }));
const users2 = users.map(({ name, age }) => {
  return { name: name, age: age };
});
const users4 = users.map(({ name, age }) => ({ name, age }));
console.log(users1);
console.log("--------------------");
console.log(users2);
console.log("--------------------");
console.log(users4);
console.log("------------------------------");
console.log(users2);
console.log("------------------------------");
// key : name -> english, age -> old
// const users3 = users.map(({ name, age }) => ({ name: english, age: old }));
// console.log("------------------------------");
// const users5 = users.map(({ name: english, age: old }) => ({ english, old }));
// console.log(users5);

// 잘못된 부분 수정: key : name -> english, age -> old
// 디스트럭처링 후 새로운 변수명을 사용하여 객체 생성
const users3 = users.map(({ name, age }) => ({ english: name, old: age }));
console.log(users3);

// 잘못된 부분 수정: 디스트럭처링 시에 새로운 변수명 사용
const users5 = users.map(({ name: english, age: old }) => ({ english, old }));
console.log(users5);

const e = users.map(({ name, age, nation = "korean" }) => {
  ({
    name,
    age,
    nation,
  });
});
