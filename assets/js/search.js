document.addEventListener('DOMContentLoaded', function() {
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json', // Ruta al archivo JSON generado
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: 'No se encontraron resultados'
  });
});

