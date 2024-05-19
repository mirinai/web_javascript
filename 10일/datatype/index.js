// const 변수이름 = 데이터[타입 : 기본 + 참조]
//기본 타입 : number, string, boolean(True, False), undefined(정의되지 않음), null(비어있음)

//타입변환
// 1. 명시적 타입변환[대놓고]
// 2. 암묵적 타입변환[몰래]

// number로 만들기
// 1. Number("1020") [명시적]

// 2. parseInt() // parse : 해석하기, Int : integer
// parseFloat("3.14") //Float : 실수 [명시적]
//     - 숫자가 아닌 문자를 만나면 바로 해석 안함
//

// 3. + [암묵적]

// 문자로 만들기
// 1. String(123) [명시적]
// 2. something + "문자" + someting [암묵적]

//booleanization
// 1. Boolean() //true or false
// Boolean(100) // true
// truthy & falsy data
// trie : 나머지
// false : 0, -0, "", null, undefined, Nan
