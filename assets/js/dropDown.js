const dropDown = document.querySelector(".drop-down");
const option = document.querySelectorAll(".drop-down__text");
const price = document.querySelector(".generalSym__price");
const select = document.querySelector("#select");
const arrowSelect = document.querySelector(".drop-down__arrow");
const listSelect = document.querySelector(".drop-down__list");

const addPrice = (symm) => {
  let generalSym = +price.textContent + symm;
  inputs[0].addEventListener("click", (event) => {
    if (event.target) {
      generalSym += 200;
      price.innerHTML = generalSym;
    }
  });
  inputs[2].addEventListener("click", (event) => {
    if (event.target) {
      generalSym += 500;
      price.innerHTML = generalSym;
    }
  });
  inputs[3].addEventListener("click", (event) => {
    if (event.target) {
      generalSym += 1000;
      price.innerHTML = generalSym;
    }
  });
  price.innerHTML = generalSym;
};
const inputs = document.querySelectorAll(".drop-down__input > input");

inputs.forEach((data) => {
  const mutationInputs = new MutationObserver(() => {
    data.removeAttribute("disabled");
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
  console.log(data.textContent);
  data.addEventListener("click", () => {
    if (data.textContent === "200") {
      addPrice(0);
      select.innerHTML = data.textContent;
    } else if (data.textContent === "От 201 до 300") {
      addPrice(500);
      select.innerHTML = data.textContent;
    } else if (data.textContent === "От 301 до 500") {
      select.innerHTML = data.textContent;
      addPrice(1000);
    } else if (data.textContent === "От 501 до 700") {
      select.innerHTML = data.textContent;
      addPrice(1500);
    } else if (data.textContent === "От 701 до 1000") {
      select.innerHTML = data.textContent;
      addPrice(2000);
    } else if (data.textContent === "От 1001 до 1500") {
      select.innerHTML = data.textContent;
      addPrice(2500);
    } else if (data.textContent === "От 1501 до 2000") {
      select.innerHTML = data.textContent;
      addPrice(3000);
    } else if (data.textContent === "От 2000 до 4000") {
      select.innerHTML = data.textContent;
      addPrice(3500);
    } else if (data.textContent === "От 4001 до 5000") {
      select.innerHTML = data.textContent;
      addPrice(4000);
    } else if (data.textContent === "От 5001 до 7000") {
      select.innerHTML = data.textContent;
      addPrice(5000);
    } else if (data.textContent === "От 7001 до 8000") {
      select.innerHTML = data.textContent;
      addPrice(6000);
    } else if (data.textContent === "От 8001 до 9000") {
      select.innerHTML = data.textContent;
      addPrice(11000);
    } else if (data.textContent === "От 9000 до 15000") {
      select.innerHTML = data.textContent;
      addPrice(15000);
    } else if (data.textContent === "От 15000 и более") {
      select.innerHTML = "Договорная";
    }
  });
});

const dropDownActive = () => {
  moveClass(arrowSelect, "drop-down__active");
  moveClass(listSelect, "drop-down__active-list");
};

dropDown.addEventListener("click", dropDownActive);
