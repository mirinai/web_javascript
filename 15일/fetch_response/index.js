const getData = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=10");

getData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) => {
    v.forEach(({ type, number, expiration, owner }) => {
      bindData(type, number, expiration, owner);
    });
  })
  .catch((v) => window.alert("너무 많이 보내지마"));
const bindData = (type, number, expiration, owner) => {
  const table = document.querySelector(".table");
  const maskedNumber = "****" + [...number].slice(4, number.length);
  const date = new Date();
  const newExp = date.getFullYear() + "/" + expiration;
  table.insertAdjacentHTML(
    "beforeend",
    `
     <div class="tabel_data">
        <div class="type">${type}</div>
        <div class="number">${maskedNumber}</div>
        <div class="expiration">${newExp}</div>
        <div class="owner">${owner}</div>
      </div>
    
    `
  );
};
