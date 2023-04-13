const dropDown = document.querySelector(".drop-down");
const option = document.querySelectorAll(".drop-down__text");
const price = document.querySelector(".generalSym__price");
const select = document.querySelector("#select");
const arrowSelect = document.querySelector(".drop-down__arrow");
const listSelect = document.querySelector(".drop-down__list");
const inputs = document.querySelectorAll(".drop-down__input > input");

const addPrice = (symm) => {
  let generalSym = +price.textContent + symm;
  const changePrice = (arr, symm) => {
    let countClick = 0;
    inputs[arr].addEventListener("click", (event) => {
      if (event.target) {
        countClick++;
        if (countClick > 1) {
          const minusPrice = (generalSym -= symm);
          countClick -= 2;
          price.innerHTML = minusPrice;
        }
        if (countClick > 0) {
          generalSym += symm;
          price.innerHTML = generalSym;
        }
      }
    });
  };
  const multiplicationPrice = (arr) => {
    let countClick = 0;
    inputs[+arr].addEventListener("click", (event) => {
      if (event.target) {
        countClick++;
        if (countClick > 1) {
          let devide = price.textContent % 1.5;
          let finiteSymm = (generalSym -= devide);
          price.innerHTML = finiteSymm;
          countClick -= 2;
        }
        if (countClick > 0) {
          let devide = (price.textContent *= 0.5);
          const finiteSymm = generalSym + devide;
          price.innerHTML = finiteSymm;
        }
      }
    });
  };

  inputs[0].addEventListener("click", (event) => {
    if (event.target) {
      inputs[1].setAttribute("disabled", "disabled");
    }
  });
  let countClick = 0;
  inputs[1].addEventListener("click", (event) => {
    if (event.target) {
      countClick++;
      if (countClick > 1) {
        const minusPrice = (generalSym -= 500);
        countClick -= 2;
        price.innerHTML = minusPrice;
      }
      if (countClick > 0) {
        generalSym += 500;
        price.innerHTML = generalSym;
        console.log(countClick);
      }
      inputs[0].setAttribute("disabled", "disabled");
    }
  });
  changePrice(2, 200);
  changePrice(3, 1000);
  multiplicationPrice(4);
  multiplicationPrice(5);

  price.innerHTML = generalSym;
};

inputs.forEach((data) => {
  const mutationInputs = new MutationObserver(() => {
    data.removeAttribute("disabled");
    data.checked = false;
  });
  mutationInputs.observe(select, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  });
});

const moveClass = (selector, cn) => {
  selector.classList.toggle(cn);
};

option.forEach((data) => {
  data.addEventListener("click", () => {
    if (data.textContent === "200") {
      price.innerHTML = 3000;
      addPrice(0);
      select.innerHTML = data.textContent;
    } else if (data.textContent === "От 201 до 300") {
      price.innerHTML = 3000;
      addPrice(500);
      select.innerHTML = data.textContent;
    } else if (data.textContent === "От 301 до 500") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(1000);
    } else if (data.textContent === "От 501 до 700") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(1500);
    } else if (data.textContent === "От 701 до 1000") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(2000);
    } else if (data.textContent === "От 1001 до 1500") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(2500);
    } else if (data.textContent === "От 1501 до 2000") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(3000);
    } else if (data.textContent === "От 2000 до 4000") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(3500);
    } else if (data.textContent === "От 4001 до 5000") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(4000);
    } else if (data.textContent === "От 5001 до 7000") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(5000);
    } else if (data.textContent === "От 7001 до 8000") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(6000);
    } else if (data.textContent === "От 8001 до 9000") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(11000);
    } else if (data.textContent === "От 9000 до 15000") {
      price.innerHTML = 3000;
      select.innerHTML = data.textContent;
      addPrice(15000);
    } else if (data.textContent === "От 15000 и более") {
      document.querySelector(".generalSym > b").innerHTML = "цена";
      price.innerHTML = "Договорная";
      select.innerHTML = data.textContent;
    }
  });
});

const dropDownActive = () => {
  moveClass(arrowSelect, "drop-down__active");
  moveClass(listSelect, "drop-down__active-list");
};

dropDown.addEventListener("click", dropDownActive);
