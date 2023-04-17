let toggleModal = false;
const modalBtn = document.querySelector(".condition__btn");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const btnClouse = document.querySelector(".modal__clouse");
const form = document.querySelector(".form");
const formBtn = document.querySelector(".form__btn");
const ClouseBtn = document.querySelector(".modal__clouses");
const priceField = document.querySelector(".generalSym__price");
const btnShowModal = document.querySelector(".modal__form > button");

btnShowModal.addEventListener("click", () => {
  modalForm.innerHTML = `
  <section class="orders">
  <div class="drop-dow__cont">
    <div class="drop-down__input">
      <input type="checkbox" class="checkbox__input" id="garbage" />
      <label for="garbage" class="drop-down__h3">Мусор</label>
    </div>

    <div class="drop-down__input">
      <input type="checkbox" class="checkbox__input" id="water" />
      <label for="water" class="drop-down__h3">Вода</label>
    </div>

    <div class="drop-down__input">
      <input type="checkbox" class="checkbox__input" id="watering" />
      <label for="watering" class="drop-down__h3">Полив</label>
    </div>
    <div class="drop-down__input">
      <input type="checkbox" class="checkbox__input" id="sewerage" />
      <label for="sewerage" class="drop-down__h3">Конализация</label>
    </div>

  </div>
</section>`;
});

const clouse = (selector, cn) => {
  selector.classList.remove(cn);
};
const toggle = (selector, cn) => {
  selector.classList.add(cn);
};

// const mutationBtn = new MutationObserver(() => {
//   formBtn.removeAttribute("disabled");
// });

// mutationBtn.observe(priceField, {
//   attributes: true,
//   characterData: true,
//   childList: true,
//   subtree: true,
//   attributeOldValue: true,
//   characterDataOldValue: true,
// });

// priceField.addEventListener("change", () => {
//   if (priceField.textContent > 3000) {
//     formBtn.removeAttribute("disabled");
//   }
// });
modalBtn.addEventListener("click", () => toggle(modal, "show"));
btnClouse.addEventListener("click", () => clouse(modal, "show"));
// formBtn.addEventListener("click", () => toggle(modalForm, "show-form"));

ClouseBtn.addEventListener("click", () => clouse(modalForm, "show-form"));
