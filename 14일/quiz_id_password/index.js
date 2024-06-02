import { HasSpecial, isValidLength } from "./util.js";
import { MSG } from "./msg.js";
import { COLOR } from "./color.js";

const register = document.querySelector(".register");
const validList = [false, false, false];
// const validList1 = [{ id: false }, { pw: false }, { pwch: false }];

const id = document.querySelector(".id");
const id_info = document.querySelector(".id_info");
id.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;

  //   const isValidSpecial = e.target;
  //   const isValidLength = value;
  const isValid = HasSpecial(value) && isValidLength(length);
  id_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  id_info.innerText = isValid ? MSG.ID.VALID : MSG.ID.INVALID; //상수들은 대문자로
  validList[0] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pw = document.querySelector(".pw");
const pw_info = document.querySelector(".pw_info");
pw.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;

  const isValid = HasSpecial(value) && isValidLength(length);
  pw_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  pw_info.innerText = isValid ? MSG.PW.VALID : MSG.PW.INVALID; //상수들은 대문자로
  validList[1] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});
const pwch = document.querySelector(".pwch");
const pwch_info = document.querySelector(".pwch_info");
pwch.addEventListener("input", (e) => {
  const { value } = e.target;

  const isValid = pw.value === value;
  pwch_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  pwch_info.innerText = isValid ? MSG.PWCH.VALID : MSG.PWCH.INVALID; //상수들은 대문자로
  validList[2] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});
const pw_eye_button = document.querySelector(".pw_eye_button");
const pwIcon = document.querySelector(".pwIcon");

pw_eye_button.addEventListener("click", () => {
  pwIcon.classList.toggle(`fa-eye`);
  pwIcon.classList.toggle(`fa-eye-slash`);
  pw.type = pw.type === "password" ? "text" : "password";
});

const pwch_eye_button = document.querySelector(".pwch_eye_button");
const pwchIcon = document.querySelector(".pwchIcon");

pwch_eye_button.addEventListener("click", () => {
  pwchIcon.classList.toggle(`fa-eye`);
  pwchIcon.classList.toggle(`fa-eye-slash`);
  pwch.type = pwch.type === "password" ? "text" : "password";
});
// const one = id.addEventListener("input", function (e) {
//   const { length } = e.target.value;
//   const isLengthRight = length >= 4 && length <= 12 ? true : false;
//   const isThereSpecialChar = e.target.value.some((element) => {
//     element.some((e) => {
//       e.includes("!") ||
//         e.includes("@") ||
//         e.includes("#") ||
//         e.includes("$") ||
//         e.includes("%") ||
//         e.includes("^") ||
//         e.includes("&") ||
//         e.includes("*");
//     });
//   })
//     ? true
//     : false;
//   const isAllTrueID = isLengthRight && isThereSpecialChar ? true : false;
//   isAllTrueID
//     ? (id_span.innerText = "아이디 설정이 올바르다")
//     : (id_span.innerText = "아이디 설정이 올바르지 않다");
//   return isAllTrueID ? true : false;
// });
// const two = password.addEventListener("input", function (e) {
//   const { length } = e.target.value;
//   const isLengthRight = length >= 4 && length <= 12 ? true : false;
//   const isThereSpecialChar = e.target.value.some((element) => {
//     element.some((e) => {
//       e.includes("!") ||
//         e.includes("@") ||
//         e.includes("#") ||
//         e.includes("$") ||
//         e.includes("%") ||
//         e.includes("^") ||
//         e.includes("&") ||
//         e.includes("*");
//     });
//   })
//     ? true
//     : false;
//   const isAllTruePassword = isLengthRight && isThereSpecialChar ? true : false;
//   isAllTruePassword
//     ? (password_span.innerText = "비밀번호 설정이 올바르다")
//     : (password_span.innerText = "비밀번호 설정이 올바르지 않다");
//   return isAllTruePassword ? true : false;
// });
// const three = password_check.addEventListener("input", function (e) {
//   password.innerText === password_check.innerText
//     ? (password_check_span.innerText = "비밀번호 같음")
//     : (password_check_span.innerText = "비밀번호 설정 다시 해라");
//   return isAllTruePassword ? true : false;
// });
// one === two && two === three
//   ? (sign_up.innerText = "회원가입 됨")
//   : (sign_up.innerText = "회원가입 안됨");

// function containSpecialChar(str) {
//   const specialChars = "!@#$%^&*";
//   let contain = false;
//   for (let i = 0; i < str.length; i++) {
//     if (specialChars.indexOf(str[i]) !== -1) {
//       contain = true;
//       break;
//     }
//   }
//   return contain;
// }
// function validateInput(value, span, type) {
//   const isLengthRight = value.length >= 4 && value.length <= 12;
//   const isThereSpecialChar = containSpecialChar(value);
//   const isValid = isLengthRight && isThereSpecialChar;

//   span.innerText = isVaild
//     ? `${type} 설정이 올바르다`
//     : `${type} 설정이 올바르지 않다`;
//   return isValid;
// }

// function validatePasswordMatch() {
//   const isMatch = password.value === password_check.value;
//   const result = isMatch ? "비밀번호 같음" : "비밀번호 설정 다시 해라";

//   password_check_span.innerText = result;
//   return isMatch;
// }

// function checkSignUpStatus() {
//   const isIDValid = validateInput(id.value, id_span, "아이디");
//   const isPasswordValid = validateInput(
//     password.value,
//     password_span,
//     "비밀번호"
//   );
//   const isPasswordMatch = validatePasswordMatch();
//   sign_up.innerText =
//     isIDValid && isPasswordValid && isPasswordMatch
//       ? "회원가입 됨"
//       : "회원가입 안됨";
// }

// id.addEventListener("input", () => validateInput(id.value, id_span, "아이디"));
// password.addEventListener("input", function () {
//   validateInput(password.value, password_span, "비밀번호");
//   validatePasswordMatch();
// });
// password_check.addEventListener("input", validatePasswordMatch);

// // 회원가입 버튼 상태 업데이트 이벤트 리스너 추가
// [id, password, password_check].forEach((input) =>
//   input.addEventListener("input", checkSignUpStatus)
// );
