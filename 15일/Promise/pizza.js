//피자 만들기

//1. 도우 만들기

// const prepareDough = () => {
//   return new Promise((success) => {
//     setTimeout(() => {
//       console.log("도우 준비됨");
//       success("도우");
//     }, 1000);
//   });
// };

// //2. 토마토소스

// const addSauce = (dough) => {
//   return new Promise((success) => {
//     setTimeout(() => {
//       console.log("토마토소스 준비됨");
//       success(`${dough} + 소스`);
//     }, 2000);
//   });
// };
// // prepareDough().then((v) => console.log(v));
// // addSauce().then((v) => console.log(v));

// // prepareDough()
// //   .then((v) => addSauce(v))
// //   .then((v) => console.log(v));
// //3. 토핑 넣기

// const addTopping = (doughWithSauce) => {
//   return new Promise((success) => {
//     setTimeout(() => {
//       console.log("피자토핑 준비됨");
//       success(`${doughWithSauce} + 치즈`);
//     }, 500);
//   });
// };
// //4. 굽기
// const bakePizza = (doughWithSauceAndTopping) => {
//   return new Promise((success) => {
//     setTimeout(() => {
//       console.log(`피자구움`);
//       success(`${doughWithSauceAndTopping} 피자`);
//     }, 1000);
//   });
// };
// prepareDough()
//   .then((v) => {
//     return addSauce(v);
//   })
//   .then((v) => {
//     return addTopping(v);
//   })
//   .then((v) => {
//     return bakePizza(v);
//   })
//   .then((v) => console.log(`${v} 먹기`));

//5. 먹기

//1. 도우준비 0.5
//2. 토마토 소스 뿌리기 1
//3. 토핑 넣기 1
//4. 피자굽기 0.5
//5. 피자먹기
const prepareDough = () => {
  return new Promise((success) => {
    setTimeout(() => {
      success("도우");
    }, 500);
  });
};
const addSauce = (dough) => {
  return new Promise((success) => {
    setTimeout(() => {
      success(`${dough}+토마토소스`);
    }, 1000);
  });
};
const addTopping = (doughWithSauce) => {
  return new Promise((success) => {
    setTimeout(() => {
      success(`${doughWithSauce}+토핑`);
    }, 1000);
  });
};
const bakePizza = (doughWithSauceAndTopping) => {
  return new Promise((success) => {
    setTimeout(() => {
      success(`${doughWithSauceAndTopping} 굽기`);
    }, 500);
  });
};
prepareDough()
  .then((v) => {
    console.log(v);
    return addSauce(v);
  })
  .then((v) => {
    console.log(v);
    return addTopping(v);
  })
  .then((v) => {
    console.log(v);
    return bakePizza(v);
  })
  .then((v) => console.log(`${v} 먹기`));
