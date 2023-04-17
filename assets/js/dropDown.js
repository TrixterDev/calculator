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
  price.innerHTML = parseInt(price.textContent);
};

const cityAndVilage = () => {
  inputs.forEach((data, index) => {
    if (index === 0) {
      data.addEventListener("change", (event) => {
        event.target.checked
          ? inputs[1].toggleAttribute("disabled", "disabled")
          : inputs[1].removeAttribute("disabled");
      });
    } else if (index === 1) {
      data.addEventListener("change", (event) => {
        const generalSym = +price.textContent;
        if (event.target.checked) {
          inputs[0].toggleAttribute("disabled", "disabled");
          price.innerHTML = generalSym + 1000;
        } else {
          inputs[0].removeAttribute("disabled");
          price.innerHTML = generalSym - 1000;
        }
      });
    }
  });
};

const changePrice = () => {
  inputs.forEach((item, index) => {
    if (index === 2) {
      item.addEventListener("change", (event) => {
        const generalSym = +price.textContent;
        event.target.checked
          ? (price.innerHTML = generalSym + 200)
          : (price.innerHTML = generalSym - 200);
      });
    } else if (index === 3) {
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
    if (index === 4 || index === 5) {
      item.addEventListener("change", (event) => {
        const generalSym = +price.textContent;
        if (event.target.checked) {
          let devide = generalSym * 0.5;
          price.innerHTML = generalSym + devide;
        } else {
          price.innerHTML = generalSym / 1.5;
        }
      });
    }
  });
};

input.addEventListener("change", (event) => {
  if (event.target.value === 400) {
    console.log(event.target.value);
  }
});
const xz = () => {
  if (input.value) {
    inputs.forEach((data) => {
      data.removeAttribute("disabled");
      addPrice();
    });
  }

  if (input.value < 200) {
    price.innerHTML = 3000;
    add;
  } else if (input.value > 200 || input.value < 300) {
    price.innerHTML = 3500;
  }
};
const mutationInput = new MutationObserver(() => {});

mutationInput.observe(input, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true,
});

// inputs.forEach((data) => {
//   const mutationInputs = new MutationObserver(() => {
//     data.removeAttribute("disabled");
//     data.checked = false;
//   });
//   mutationInputs.observe(select, {
//     attributes: true,
//     characterData: true,
//     childList: true,
//     subtree: true,
//     attributeOldValue: true,
//     characterDataOldValue: true,
//   });
// });

const moveClass = (selector, cn) => {
  selector.classList.toggle(cn);
};

option.forEach((data, index) => {
  if (index === 0) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(0);
      select.innerHTML = data.textContent;
    });
  } else if (index === 1) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(500);
      select.innerHTML = data.textContent;
    });
  } else if (index === 2) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(1000);
      select.innerHTML = data.textContent;
    });
  } else if (index === 3) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(1500);
      select.innerHTML = data.textContent;
    });
  } else if (index === 4) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(2000);
      select.innerHTML = data.textContent;
    });
  } else if (index === 5) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(2500);
      select.innerHTML = data.textContent;
    });
  } else if (index === 6) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(3000);
      select.innerHTML = data.textContent;
    });
  } else if (index === 7) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(3500);
      select.innerHTML = data.textContent;
    });
  } else if (index === 8) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(4000);
      select.innerHTML = data.textContent;
    });
  } else if (index === 9) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(5000);
      select.innerHTML = data.textContent;
    });
  } else if (index === 10) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(6000);
      select.innerHTML = data.textContent;
    });
  } else if (index === 11) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(11000);
      select.innerHTML = data.textContent;
    });
  } else if (index === 12) {
    data.addEventListener("click", () => {
      price.innerHTML = 3000;
      addPrice(15000);
      select.innerHTML = data.textContent;
    });
  } else {
    data.addEventListener("click", () => {
      document.querySelector(".generalSym > b").innerHTML = "цена";
      price.innerHTML = "Договорная";
      select.innerHTML = data.textContent;
    });
  }
});

const dropDownActive = () => {
  count++;
  if (count > 2) {
    location.reload();
  } else {
    moveClass(arrowSelect, "drop-down__active");
    moveClass(listSelect, "drop-down__active-list");
  }
};

// dropDown.addEventListener("click", dropDownActive);
