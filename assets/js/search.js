document.addEventListener('DOMContentLoaded', function() {
  fetch('https://www.enfaseterminal.com/assets/json/search.json')
    .then(response => response.json())
    .then(data => {
      console.log("Datos JSON cargados:", data);
      const idx = lunr(function () {
        this.ref('url')
        this.field('title')
        this.field('desc')

        data.forEach(doc => {
          this.add(doc)
        })
      })

      document.getElementById('search-input').addEventListener('input', function () {
        const query = this.value;
        console.log("Consulta de búsqueda:", query);
        const results = idx.search(query);
        console.log("Resultados de búsqueda:", results);
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = '';
        results.forEach(result => {
          const item = data.find(doc => doc.url === result.ref);
          const li = document.createElement('li');
          li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
          resultsContainer.appendChild(li);
        })
      })
    })
    .catch(error => {
      console.error("Error al cargar el archivo JSON:", error);
    })
})




