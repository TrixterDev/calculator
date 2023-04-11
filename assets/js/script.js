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

const querySelector = (select, num, arr, rate) => {
  const selector = document.querySelectorAll(select);
  selector[arr].addEventListener("click", (e) => {
    if (e.isTrusted) {
      let generalSymm = (symm += +num);
      price.innerHTML = generalSymm += +rate;
    }
  });
};

querySelector(".input_check", 500, 2, 0);
querySelector(".input_check", 1000, 3, 0);
querySelector(".input_check", 1000, 6, 0);
querySelector(".input_check", 1500, 7, 0);
querySelector(".input_check", 1500, 10, 0);
querySelector(".input_check", 2000, 11, 0);
querySelector(".input_check", 2000, 14, 0);
querySelector(".input_check", 2500, 15, 0);
querySelector(".input_check", 2500, 18, 0);
querySelector(".input_check", 3000, 19, 0);
querySelector(".input_check", 3000, 22, 0);
querySelector(".input_check", 3500, 23, 0);





