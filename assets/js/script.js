let symm = 3000;

const price = document.querySelector(".generalSym__price");

// const querySelector = (select, num) => {
//   const selector = document.querySelector(select);
//   selector.addEventListener("click", (e) => {
//     if (e.isTrusted) {
//       const generalSymm = (symm += +num);
//       console.log(generalSymm);
//       price.innerHTML = generalSymm;
//     }
//   });
// };

// querySelector(".input_check", 100);

const xz = document.querySelectorAll(".input_check");

const querySelector = (select, num, arr) => {
  const selector = document.querySelectorAll(select);
  selector[arr].addEventListener("click", (e) => {
    if (e.isTrusted) {
      const generalSymm = (symm += +num);
      console.log(generalSymm);
      price.innerHTML = generalSymm;
    }
  });
};

querySelector(".input_check", 200, 0);

querySelector(".input_check", 500, 1);
