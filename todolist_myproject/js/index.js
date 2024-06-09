const reset_btn = document.querySelector(".reset_btn");
const put_btn = document.querySelector(".put_btn");

put_btn.addEventListener("click", function () {
  const lists = document.querySelector(".lists");
  lists.insertAdjacentHTML(
    "beforebegin",
    `
    <div>
    <p>50</p>
    <p>50</p>
    <button class="remove_btn:last-of-type">취소</button>
    </div>
    
    `
  );
});
// 새로 추가된 취소 버튼에 이벤트 리스너 추가
// const remove_btn = lists.querySelector(".remove_btn:last-of-type");
// remove_btn.addEventListener("click", function () {
//   this.parentElement.remove();
// });

// reset_btn.addEventListener("click", function () {
//   const lists = document.querySelector(".lists");
//   lists.innerHTML = "";
// });
