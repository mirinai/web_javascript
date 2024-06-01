// const h1 = document.createElement("h1");
// const buttonName = "집가기";

// // h1.innerHTML = "<button>버튼</button>";
// h1.innerHTML = `<button>${buttonName}</button>`;
// document.body.appendChild(h1);

const friends = ["kim", "lee", "park"];

// // const h1 = document.createElement("h1");
// // h1.innerText = "My Friend";

// const html = `
// <h1>My Friedns</h1>
// <ul>
//     ${friends.map((v) => `<li>${v}</li>`).join("")}
// </ul>
// `;
// // document.body.appendChild(html);
// // friends.map((v) => {
// //   const li = document.createElement("li");
// //   li.innerHTML = v;
// //   li.style.marginLeft = "20px";

// //   document.body.appendChild(li);
// // });

// // document.body.appendChild(friends);
// document.body.innerHTML = html;

//1. createElement -> appendChild
//2. innerHTML
//3. insertAdjacentHTML
const menu = document.querySelector(".menu");

//afterbegin : 첫번째 자식 앞에 넣기
//beforeend : 마지막 자식 뒤에 넣기
const html = `
<h1>My Friedns</h1>
<ul>
    ${friends.map((v) => `<li>${v}</li>`).join("")}
</ul>
`;
menu.insertAdjacentHTML("beforeend", html);
