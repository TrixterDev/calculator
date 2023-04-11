const dropDown = document.querySelector(".drop-down");
const option = document.querySelectorAll(".drop-down__text");
const price = document.querySelector(".generalSym__price");
const select = document.querySelector("#select");
const arrowSelect = document.querySelector(".drop-down__arrow");
const listSelect = document.querySelector(".drop-down__list");

const moveClass = (selector, cn) => {
  selector.classList.toggle(cn);
};

option.forEach((data) => {
  console.log(data.textContent);
  data.addEventListener("click", () => {
    if (data.textContent.includes("200")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("300")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("500")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("700")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("1000")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("1500")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("2000")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("4000")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("5000")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("7000")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("8000")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("9000")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("до 15000")) {
      select.innerHTML = data.textContent;
    } else if (data.textContent.includes("Более")) {
      select.innerHTML = "Договорная";
    }
  });
});

const dropDownActive = () => {
  moveClass(arrowSelect, "drop-down__active");
  moveClass(listSelect, "xz-active-list");
};

dropDown.addEventListener("click", dropDownActive);