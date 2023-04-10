let symm = 3000;

const price = document.querySelector(".generalSym__price");

const querySelector = (select, num) => {
  const selector = document.querySelector(select);
  selector.addEventListener("click", (e) => {
    if (e.isTrusted) {
      const generalSymm = (symm += +num);
      console.log(generalSymm);
      price.innerHTML = generalSymm;
    }
  });
};

querySelector(".input_check", 100);