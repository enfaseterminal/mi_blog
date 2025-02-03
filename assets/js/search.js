document.addEventListener('DOMContentLoaded', function() {
  fetch('/assets/json/search.json')
    .then(response => response.json())
    .then(data => {
      const idx = lunr(function () {
        this.ref('url')
        this.field('title')
        this.field('desc')

        data.forEach(doc => {
          this.add(doc)
        })
      })

      document.getElementById('search-input').addEventListener('input', function () {
        const results = idx.search(this.value)
        const resultsContainer = document.getElementById('results-container')
        resultsContainer.innerHTML = ''
        results.forEach(result => {
          const item = data.find(doc => doc.url === result.ref)
          const li = document.createElement('li')
          li.innerHTML = `<a href="${item.url}">${item.title}</a>`
          resultsContainer.appendChild(li)
        })
      })
    })
})


