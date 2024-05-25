const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

fruits.forEach((v) => {
  console.log(v);
});
fruits.forEach((v) => {
  let V = v.toUpperCase();
  console.log(V);
});
fruits.forEach((v) => {
  //a를 포함하면 true 아니면 false
  console.log(`${v} a를 ${v.includes("a") ? "포함" : "포함안함"}`);
  v.includes("a") ? console.log("true") : console.log("false");
});

//6글자 이상이면 대문자로 만들고 아니면 그 단어를 두번 되풀이한 단어로 나타내기
//ex) BANANA, appleapple

fruits.forEach((v) => {
  let str;
  v.length >= 6 ? (str = v.toUpperCase()) : (str = v.repeat(2));
  console.log(str);
});

// 반복
coffee.repeat(3); // americanoamericanoamericano

fruits.forEach((v) => {
  let V = v.toUpperCase();
  console.log(V.repeat(v.length));
  console.log(v.toUpperCase().repeat(v.length));
});
