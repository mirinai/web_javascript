const coffee = "americano";
//string

//포함? boolean
coffee.includes("cano"); // true

//몇번째?
coffee.indexOf("i"); // 4 없으면 -1 return

//바꾸기
coffee.replace("a", "z"); // a ==> z

//~로 시작함? boolean
coffee.startsWith("ame"); // true

//~으로 끝남? boolean
coffee.endsWith("cano"); // true

//자르기 그리고 되돌려줌
coffee.slice(0, 5); // ameri

//대문자로
coffee.toUpperCase(); // AMERICANO

//소문자로
coffee.toLowerCase(); // americano

//~를 기준으로 찢기, 배열로 만들기
coffee.split("i"); // ["amer", "cano"]
