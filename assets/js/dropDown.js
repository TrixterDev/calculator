const dropDown = document.querySelector(".drop-down");
const option = document.querySelectorAll(".drop-down__text");
const price = document.querySelector(".generalSym__price");
const select = document.querySelector("#select");
const arrowSelect = document.querySelector(".drop-down__arrow");
const listSelect = document.querySelector(".drop-down__list");
const inputs = document.querySelectorAll(".drop-down__input > input");
const input = document.querySelector(".input__drop-down");

let count = 0;

const addPrice = () => {
  changePrice();
  multiplicationPrice();
  cityAndVilage();
  console.log("kajsndasmjk");
  price.innerHTML = parseInt(price.textContent);
};

const cityAndVilage = () => {
  inputs.forEach((data, index) => {
    if (index === 4) {
      data.addEventListener("change", (event) => {
        event.target.checked
          ? inputs[5].toggleAttribute("disabled", "disabled")
          : inputs[5].removeAttribute("disabled");
      });
    } else if (index === 5) {
      data.addEventListener("change", (event) => {
        const generalSym = +price.textContent;
        if (event.target.checked) {
          inputs[4].toggleAttribute("disabled", "disabled");
          price.innerHTML = generalSym + 500;
        } else {
          inputs[4].removeAttribute("disabled");
          price.innerHTML = generalSym - 500;
        }
      });
    }
  });
};

const changePrice = () => {
  inputs.forEach((item, index) => {
    if (index === 6) {
      item.addEventListener("change", (event) => {
        const generalSym = +price.textContent;
        event.target.checked
          ? (price.innerHTML = generalSym + 200)
          : (price.innerHTML = generalSym - 200);
      });
    } else if (index === 7) {
      item.addEventListener("change", (event) => {
        const generalSym = +price.textContent;
        event.target.checked
          ? (price.innerHTML = generalSym + 1000)
          : (price.innerHTML = generalSym - 1000);
      });
    }
  });
};

const multiplicationPrice = () => {
  inputs.forEach((item, index) => {
    if (index === 0 || index === 1 || index === 2 || index === 3) {
      item.addEventListener("change", (event) => {
        const generalSym = +price.textContent;
        if (event.target.checked) {
          let devide = generalSym * 0.5;
          price.innerHTML = Math.floor(generalSym + devide);
        } else {
          price.innerHTML = Math.floor(generalSym / 1.5);
        }
      });
    }
  });
};

input.addEventListener("change", () => {
  input.value &&
    inputs.forEach((data) => {
      data.removeAttribute("disabled");
    });
  inputs[(4, 5, 6, 7)].checked = false;

  input.value < 201
    ? (price.innerHTML = 3000 + +price.textContent)
    : input.value < 300
    ? (price.innerHTML = 3500 + +price.textContent)
    : input.value < 500
    ? (price.innerHTML = 4000 + +price.textContent)
    : input.value < 700
    ? (price.innerHTML = 4500 + +price.textContent)
    : input.value < 1000
    ? (price.innerHTML = 5000 + +price.textContent)
    : input.value < 1500
    ? (price.innerHTML = 5500 + +price.textContent)
    : input.value < 2000
    ? (price.innerHTML = 6000 + +price.textContent)
    : input.value < 4000
    ? (price.innerHTML = 6500 + +price.textContent)
    : input.value < 5000
    ? (price.innerHTML = 7000 + +price.textContent)
    : input.value < 7000
    ? (price.innerHTML = 8000 + +price.textContent)
    : input.value < 8000
    ? (price.innerHTML = 9000 + +price.textContent)
    : input.value < 9000
    ? (price.innerHTML = 14000 + +price.textContent)
    : input.value < 15000
    ? (price.innerHTML = 18000 + +price.textContent)
    : (price.innerHTML = "Договорная");
});
addPrice();
