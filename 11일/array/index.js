//데이터타입 : 기본 [str, num, bool, null, undefined]
//참조[array]

// const a = [10, 20, 30, 40, 50];
// const b = a.push(60); // 맨 뒤에 넣어줌
// console.log(b);
// const c = a.pop(); // 맨 뒤를 빼기
// console.log(c);
// console.log("a[0]+a[4]=", a[0] + a[4]); //60

const menu = ["아메리카노", "라떼", "바닐라"];
//추가
menu.push("민트");
menu.push("딸기스무디");

//업데이트
menu[0] = "더 큰 아메리카노";

//지우기
delete menu[3]; // empty (==undifined)
menu.pop();

//forEach  : 한번씩 돌아보기
menu.forEach((v) => {
  console.log(v);
});

const nums = [1, 3, 5, 7, 9];

nums.forEach((v) => {
  console.log(v + 10);
  /*
    11, 13, 15, 17, 19
  */
});
nums.forEach((v) => {
  console.log(v ** 2);
});
