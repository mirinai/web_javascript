// import { todoListData } from "./year";

// const todoList = [];

// const todoListTag = document.querySelector(".todolist");
// const addBtn = document.querySelector(".button");

// addBtn.addEventListener("click", () => {
//   const todo = prompt("할일 적기");
//   const time = prompt("시간 적기");

//   todoListTag.innerHTML = ""; // reset

//   todoList.push({ todo, time });
//   todoList.forEach(({ time, todo }, index) => {
//     todoListTag.appendChild(makeList(index, time, todo));
//   });
// });

// const makeList = (index, time, todo) => {
//   const li = document.createElement("li");
//   li.dataset.id = index; // data-id

//   const timeSpan = document.createElement("span");
//   timeSpan.textContent = time;
//   li.appendChild(timeSpan);

//   const todoSpan = document.createElement("span");
//   todoSpan.textContent = todo;
//   li.appendChild(todoSpan);

//   const button = document.createElement("button");
//   button.textContent = "삭제";
//   button.classList.add("delButton");

//   // 버튼에 이벤트 리스너 추가
//   button.addEventListener("click", () => {
//     //삭제하기 버튼을 누른 대상을 위의 투두리스트에서 뺀 투두리스트임
//     const newtodoList = todoList.filter((_, i) => i != index);
//     todoListTag.innerHTML = "";

//     //뉴투두리스트로 투두리스트 태그 자식을 다시 만들기
//     newtodoList.forEach(({ time, todo }, index) => {
//       todoListTag.appendChild(makeList(index, time, todo));
//     });
//     //투두리스트를 뉴투두리스트로 업데이트하기
//     todoList.length = 0;
//     todoList.push(...newtodoList);
//   });

//   li.appendChild(button);
//   return li;
// };
// 할 일 목록을 저장하는 배열
const todoList = [];

// 할 일 목록을 표시할 요소를 선택합니다.
const todoListTag = document.querySelector(".todolist");
// 할 일 추가 버튼을 선택합니다.
const addBtn = document.querySelector(".button");

// 할 일 추가 버튼에 클릭 이벤트 리스너를 추가합니다.
addBtn.addEventListener("click", () => {
  // 할 일과 시간을 입력받습니다.
  const todo = prompt("할일 적기");
  const time = prompt("시간 적기");

  // 할 일 목록을 초기화합니다.
  todoListTag.innerHTML = ""; // reset

  // 새 할 일을 목록에 추가합니다.
  todoList.push({ todo, time });

  // 할 일 목록을 새로 렌더링합니다.
  todoList.forEach(({ time, todo }, index) => {
    todoListTag.appendChild(makeList(index, time, todo));
  });
});

// 할 일 목록 항목을 만드는 함수입니다.
const makeList = (index, time, todo) => {
  // 새 목록 항목 요소를 생성합니다.
  const li = document.createElement("li");
  li.dataset.id = index; // data-id 속성 설정

  // 시간 정보를 표시할 요소를 생성합니다.
  const timeSpan = document.createElement("span");
  timeSpan.textContent = time;
  li.appendChild(timeSpan);

  // 할 일 정보를 표시할 요소를 생성합니다.
  const todoSpan = document.createElement("span");
  todoSpan.textContent = todo;
  li.appendChild(todoSpan);

  // 삭제 버튼을 생성합니다.
  const button = document.createElement("button");
  button.textContent = "삭제";
  button.classList.add("delButton");

  // 삭제 버튼에 클릭 이벤트 리스너를 추가합니다.
  button.addEventListener("click", () => {
    // 삭제 버튼을 클릭한 항목을 목록에서 제거합니다.
    const newtodoList = todoList.filter((_, i) => i != index);
    todoListTag.innerHTML = ""; // 목록 초기화

    // 새 목록으로 할 일 목록을 새로 렌더링합니다.
    newtodoList.forEach(({ time, todo }, index) => {
      todoListTag.appendChild(makeList(index, time, todo));
    });

    // 할 일 목록을 업데이트합니다.
    todoList.length = 0;
    todoList.push(...newtodoList);
  });

  // 삭제 버튼을 목록 항목에 추가합니다.
  li.appendChild(button);

  // 완성된 목록 항목을 반환합니다.
  return li;
};
