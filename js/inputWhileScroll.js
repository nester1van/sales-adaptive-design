(function(){
  const searchForm = document.querySelector(".header__search-form");
  const searchInput = searchForm.firstElementChild;

  window.addEventListener("scroll", () => {
      if (searchForm.getBoundingClientRect().y < 85) {
        searchForm.classList.add("header__search-form_scroll");
        searchInput.classList.add("header__search-input_scroll");
      } else {
        searchForm.classList.remove("header__search-form_scroll");
        searchInput.classList.remove("header__search-input_scroll");
      }
      
  })
})();