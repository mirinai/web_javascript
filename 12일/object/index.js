// array, element, object

const book = {
  title: "tomb raider",
  price: 12000,
  author: ["Lala Croft", "Sam"],
  publishedYear: {
    year: 2013,
    month: 4,
    day: 12,
  },
};

const book1 = {
  smallButtons: ["소득공제"],
  title: "자바스크립트는 왜 그 모양일까?",
  subtitle:
    "더글라스 크락포드가 알려주는 위험한 자바스크립트를 안전하게 사용하는 법",
  author: {
    real: "더글러스 크락포드",
    editor: "박수현",
  },
  publisher: "인사이트(insight)",
  publishedDate: {
    year: "2020",
    month: "05",
    day: "21",
  },
  rate: 6,
  reviews: 1,
  saleIndex: 288,
};
//데이터 가져오기
// 1. dot 연산자
console.log(book1.title);
console.log(book1.author.editor);

//2. bracket 연산자
console.log(book1["title"]);
console.log(book1["author"]["editor"]);

// 데이터 추가
book1.isBestSeller = true;

//데이터 삭제
delete book1.subtitle;

//데이터 존재 유무
"title" in book1; // true

// book1.keys(); // key 값들만 돌려주기
// book1.values(); // value 값들만 돌려주기
