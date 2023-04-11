let toggleModal = false;
const modalBtn = document.querySelector(".condition__btn");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const btnClouse = document.querySelector(".modal__clouse");
const form = document.querySelector(".form");
const formBtn = document.querySelector(".form__btn");
const clouse = (selector, cn) => {
  selector.classList.remove(cn);
};
const toggle = (selector, cn) => {
  selector.classList.add(cn);
};

form.addEventListener("submit", (e) => e.preventDefault());

modalBtn.addEventListener("click", () => toggle(modal, "show"));
btnClouse.addEventListener("click", () => clouse(modal, "show"));
formBtn.addEventListener("click", () => toggle(modalForm, "show-form"));
