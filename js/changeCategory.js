(function(){
  const menuLinks = document.querySelectorAll(".menu-item__link");
  const headerTitle = document.querySelector(".header__title");
    // menuLink.classList.remove("menu-item__link_active")
  for (let menuLink of menuLinks) {
    menuLink.addEventListener("click", (e) => {
      menuLink.classList.toggle("menu-item__link_active");
      if (!menuLink.firstElementChild.src.includes("_")) {
        menuLink.firstElementChild.src = menuLink.firstElementChild.src.replace(".svg", "");
        menuLink.firstElementChild.src += "_a.svg";
      }
      headerTitle.innerHTML = menuLink.lastElementChild.textContent;
    });
  }
})();