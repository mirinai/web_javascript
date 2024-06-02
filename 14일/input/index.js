const inputTag = document.querySelector(`.inputTag`);
const info = document.querySelector(".info");
//event?
inputTag.addEventListener("input", function (e) {
  const { length } = e.target.value;

  const isValidLength = 4 <= length && length <= 10;
  const color = isValidLength ? "green" : "red";
  info.style.color = color;
  if (length < 4) {
    info.innerText = "글자가 짧음";
  } else if (length > 10) {
    info.innerText = "글자가 긻";
  } else {
    info.innerText = "글자수가 충분함";
  }
});
// info.addEventListener(inputTag.target.value,function(e)=>{
//     const warning = (e.length >=11 || e.length<=3) ? "글자수가 충분함":"글자가 긺";
//     return
// })
// const warnig = (e) => {
//   const result =
//     e.target.value >= 11 || e.target.value <= 3
//       ? "글자수가 충분함"
//       : "글자가 짧음";
//   //   result === "글자수가 충분함"
//   //     ? (result.style.color = "green")
//   //     : (result.style.color = "red");
//   return (info.innerText = result);
// };
//4~10글자면 글자수가 충분함[초록]
//0~3글자면 글자가 짧음[빨강]
//11글자 이상이면 글자가 긺[빨강]
