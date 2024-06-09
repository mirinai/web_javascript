setInterval(() => {
  const date = new Date();
  const time = date.toLocaleString();
  const timeTag = document.querySelector(".time");
  timeTag.innerText = time;
}, 1000);
