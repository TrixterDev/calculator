let toggleModal = false;
const modalBtn = document.querySelector(".condition__btn");
const modal = document.querySelector(".modal");
const btnClouse = document.querySelector(".modal__clouse");
const form = document.querySelector(".form");
const clouse = () => {
  modal.classList.remove("show");
};
const toggle = () => {
  modal.classList.add("show");
};

form.addEventListener("submit", (e) => e.preventDefault());

modalBtn.addEventListener("click", toggle);
btnClouse.addEventListener("click", clouse);
