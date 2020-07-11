(function(){
  const menuLinks = document.querySelectorAll(".menu-item__link");
  const headerTitle = document.querySelector(".header__title");
  for (let menuLink of menuLinks) {
        menuLink.addEventListener("click", (e) => {
          for (let menuLinkActive of menuLinks) {
            if (menuLinkActive.classList.contains("menu-item__link_active")) {
              menuLinkActive.classList.remove("menu-item__link_active");
              menuLinkActive.firstElementChild.src = 
                menuLinkActive.firstElementChild.src.replace("_a.svg", ".svg");
            }
          }
          menuLink.classList.toggle("menu-item__link_active");
          menuLink.firstElementChild.src = 
            menuLink.firstElementChild.src.replace(".svg", "_a.svg");
          headerTitle.innerHTML = menuLink.lastElementChild.textContent;

        });
      }
})();