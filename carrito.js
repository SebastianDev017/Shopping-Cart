const btnComprar = document.querySelectorAll('.producto button');
const carritoLista = document.querySelector('#carrito-lista');
const carritoContador = document.querySelector('#carrito-contador');
const carritoTotal = document.querySelector('#carrito-total'); // elemento del total
let contador = 0;
let total = 0; // variable para llevar la suma de los precios

btnComprar.forEach(btn => {
  btn.addEventListener('click', agregarProducto);
});

function agregarProducto(evento) {
  const producto = evento.target.parentElement;
  const nombre = producto.querySelector('h2').textContent;
  const precio = parseFloat(producto.querySelector('.precio').textContent.replace('$', '')); // parsear el precio a número
  
  const nuevoProducto = document.createElement('li');
  nuevoProducto.innerHTML = `${nombre} - $${precio.toFixed(2)} <button class="eliminar" data-precio="${precio}">Eliminar</button>`; // mostrar precio con dos decimales y añadir el precio como un atributo
  carritoLista.appendChild(nuevoProducto);
  
  contador++;
  carritoContador.textContent = contador;

  // Sumar al total
  total += precio;
  carritoTotal.textContent = `Total: $${total.toFixed(2)}`; // mostrar total con dos decimales

  // Agregar evento para eliminar el elemento
  const btnEliminar = nuevoProducto.querySelector('.eliminar');
  btnEliminar.addEventListener('click', eliminarProducto);
}
  
function eliminarProducto(evento) {
  const producto = evento.target.parentElement;
  const precio = parseFloat(evento.target.getAttribute('data-precio')); // obtener el precio del atributo data-precio
  producto.remove();
  
  contador--;
  carritoContador.textContent = contador;
  
  total -= precio;
  carritoTotal.textContent = `Total: $${total.toFixed(2)}`;
}

const btnCarrito = document.querySelector('#carrito-btn');
const carrito = document.querySelector('.carrito');

btnCarrito.addEventListener('click', () => {
  carritoLista.classList.toggle('mostrar');
  carrito.classList.toggle('activo');
});

// Agregar evento para cerrar el carrito haciendo clic fuera de él
window.addEventListener('click', (evento) => {
  if (evento.target != btnCarrito && evento.target.closest('.carrito') !== carrito) {
    carritoLista.classList.remove('mostrar');
    carrito.classList.remove('activo');
  }
});
