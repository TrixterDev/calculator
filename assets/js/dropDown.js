const dropDown = document.querySelector(".drop-down");

const dropDownActive = () => {
  document
    .querySelector(".drop-down__arrow")
    .classList.add("drop-down__active");
  document
    .querySelector(".drop-down__list")
    .classList.add("drop-down__active-list");
};

dropDown.addEventListener("click", dropDownActive);
