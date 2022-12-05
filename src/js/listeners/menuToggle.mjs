export function setMenuListener() {
  const burgerOpen = document.querySelector("#hamburger");
  const burgerClose = document.querySelector("#inside-hamburger");

  burgerOpen.addEventListener("click", () => {
    const menu = document.querySelector("#menu");

    menu.classList.add("d-block");
  });

  burgerClose.addEventListener("click", () => {
    const menu = document.querySelector("#menu");

    menu.classList.remove("d-block");
  });
}
