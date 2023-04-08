const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const productos = document.querySelectorAll('.producto');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const term = searchInput.value.toLowerCase();
  productos.forEach(function(producto) {
    const title = producto.querySelector('h2').textContent.toLowerCase();
    if (title.indexOf(term) !== -1) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
});
