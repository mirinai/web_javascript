// setInterval(() => {
//   const date = new Date();
//   const splitDate = date.toISOString.split("T")[1];
//   const time = splitDate.split(".")[0];
//   const timeTag = document.querySelector(".time");
//   timeTag.innerText = time;
// }, 1000);
setInterval(() => {
  const date = new Date();
  //   console.log(date);
  const splitDate = date.toISOString().split("T")[1];
  //   console.log(splitDate);
  const time = splitDate.split(".")[0];
  const timeTag = document.querySelector(".time");
  timeTag.innerText = time;
}, 1000);
