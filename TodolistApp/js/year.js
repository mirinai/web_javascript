const todoListData = {};
const start = new Date(2024, 0, 2);

Array(365)
  .fill(0)
  .forEach((v, i) => {
    const date = start.toISOString().split("T")[0];
    const pureDate = date.replaceAll("-", "");
    todoListData[pureDate] = [];

    start.setDate(start.getDate() + 1);
    start.setDate(start.getDate() + i);
  });
console.log(todoListData);
