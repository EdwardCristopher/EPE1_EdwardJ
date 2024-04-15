const productos = [
    { id: 1, producto: 'Pimenton', stock: 30, categoria: 'verdura'},
    { id: 2, producto: 'Platano', stock: 10, categoria:'fruta' },
    { id: 3, producto: 'Champiñones', stock: 20, categoria:'verdura'},
    { id: 4, producto: 'Peras', stock: 40, categoria:'fruta'},
    { id: 5, producto: 'berenjenas', stock: 10, categoria: 'verdura'},
    { id: 6, producto: 'Pepino', stock: 30, categoria:'verdura'},
    { id: 7, producto: 'Duraznos', stock: 20, categoria:'fruta'},
    { id: 8, producto: 'Aguacate', stock: 25, categoria:'verdura'},
    { id: 9, producto: 'Higos', stock: 15, categoria:'fruta'},
    { id: 10, producto: 'acelgas', stock: 35, categoria:'verdura'},
    { id: 11, producto: 'brocoli', stock: 20, categoria:'verdura'}
];

const productosDiv = document.getElementById('productos');
const categoriasSelect = document.getElementById('categorias');
const searchInput = document.getElementById('search');

function mostrarProductos(categoria, search) {
    productosDiv.innerHTML = '';
    let productosFiltrados = productos;
    if (categoria !== 'todos') {
        productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    }
    if (search) {
        productosFiltrados = productosFiltrados.filter(producto => producto.producto.toLowerCase().includes(search.toLowerCase()));
    }
    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.textContent = `${producto.producto} - categoria: ${producto.categoria}`;
        productosDiv.appendChild(productoDiv);
    });
}

categoriasSelect.addEventListener('change', (event) => {
    mostrarProductos(event.target.value, searchInput.value);
});

searchInput.addEventListener('input', (event) => {
    mostrarProductos(categoriasSelect.value, event.target.value);
});

mostrarProductos('todos', '');