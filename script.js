const btn = document.querySelector("button"),
  overlay = document.querySelector(".overlay"),
  btns = document.querySelectorAll("button");
// так не практично,
//  первый клик ... - потеряется
// btn.onclick = function () {
//     alert("Hi,Aza!");
// };
//  второй клик отработает
// btn.onclick = function () {
//     alert("Hi,Aza!");
// };

// //  надо чз слушателя, отработают по очереди оба клика
// btn.addEventListener("click", () => {
//   alert("Привет, Азалия!");
// });
// btn.addEventListener("click", () => {
//   alert("Как дела?");
// });
let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  //   i++;
  //   console.log(i);
  //   if (i == 3) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
  //   e.target.remove();
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((bt) => {
  bt.addEventListener("click", deleteElement, { once: true });
});
// btn.addEventListener("mouseenter", (e) => {
//   //   console.log("Hover");
//   e.target.remove();
// });
//  отмена стандартного поведения браузера
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});
