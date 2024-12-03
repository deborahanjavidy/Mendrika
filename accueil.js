function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  function toggleSearchBar() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('active');
    searchBar.focus(); // Donne le focus à la barre de recherche dès qu'elle s'affiche
  }

  