(function() {
  const menuButton = document.querySelector(".menu-button");
  const sidebar = document.querySelector(".sidebar");
  const logo = document.querySelector(".logo");
  const logoTitle = document.querySelector(".logo__title");
  const menuItemTitleNodeList = document.querySelectorAll(".menu-item__title");

  menuButton.addEventListener("click", () => {
    // tablet
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      sidebar.classList.toggle("sidebar_open-tablet");
      menuButton.classList.toggle("menu-button_open-tablet");
      logoTitle.classList.toggle("logo__title_open-tablet");
      for (let menuItemTitle of menuItemTitleNodeList) {
        menuItemTitle.classList.toggle("menu-item__title_open-tablet");
      }
    }
    // mobile
    if (window.innerWidth >= 320 && window.innerWidth < 768) {
      sidebar.classList.toggle("sidebar_open-mobile");
      menuButton.classList.toggle("menu-button_open-mobile");
      logo.classList.toggle("logo_open-mobile");
      for (let menuItemTitle of menuItemTitleNodeList) {
        menuItemTitle.classList.toggle("menu-item__title_open-mobile");
      }
    }
  });
})();

