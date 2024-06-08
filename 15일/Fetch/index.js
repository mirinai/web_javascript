//fetch
// url을 넣으면 데이터를 돌려주는 함수

// prompt()
// fetch()

//response type
const getData = fetch("https://fakerapi.it/api/v1/addresses?_quantity=50");

// const test = new Promise((s) => s("vmsd")); //string
// test.then((v) => console.log(typeof v));

// // a.then((v) => console.log(typeof v));
// a.then((v) => v.json()).then((v) => console.log(v));
getData
  .then((v) => v.json())
  .then((v) => v.data) //v.data : 주소 객체의 배열
  .then((v) =>
    v.forEach(({ street, streetName, country }) => {
      bindData(street, streetName, country);
    })
  )
  .catch((v) => console.log("너무 많이 보내지마"));

const bindData = (street, streetName, country) => {
  const table = document.querySelector(".table");
  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="tabel_data">
        <div class="street">${street}</div>
        <div class="streetName">${streetName}</div>
        <div class="country">${country}</div>
      </div>
    
    `
  );
};
