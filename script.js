const products = [
  {
    id: "01",
    name: "Gato decorativo",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img_asset/gato.jpg",
    alt: "Figura decorativa de gato negro impresa en 3D",
    description: "Una figura de gato de líneas simples y acabado mate. Una pieza decorativa para sumar personalidad a cualquier rincón.",
    price: null,
  },
  {
    id: "02",
    name: "Maceta Reno",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img_asset/macetareno.jpg",
    alt: "Maceta decorativa con forma de reno",
    description: "Maceta con forma de reno y nariz roja. El modelo y sus dimensiones se pueden confirmar al consultar.",
    price: null,
  },
  {
    id: "03",
    name: "Portalentes calavera",
    category: "utilidad",
    categoryLabel: "Organización",
    image: "img_asset/portalentescalavera.jpg",
    alt: "Portalentes impreso en 3D con forma de calavera",
    description: "Un soporte con forma de calavera para tener tus lentes a mano y a la vista.",
    price: null,
  },
  {
    id: "04",
    name: "Llavero casco",
    category: "accesorios",
    categoryLabel: "Accesorios",
    image: "img_asset/llaverocasco.jpg",
    alt: "Cuatro llaveros impresos en 3D con forma de casco",
    description: "Llavero de casco impreso en varios colores. Consultanos por los tonos disponibles.",
    price: null,
  },
];

const currency = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#product-search");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const productDialog = document.querySelector("#product-dialog");
const toast = document.querySelector("#toast");
let activeFilter = "todos";
let selectedProduct = null;
let toastTimer;

function formatPrice(price) {
  return price === null ? "Consultar precio" : currency.format(price);
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("es-AR");
  const visibleProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "todos" || product.category === activeFilter;
    const matchesSearch = `${product.name} ${product.categoryLabel}`.toLocaleLowerCase("es-AR").includes(query);
    return matchesFilter && matchesSearch;
  });

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.alt}" loading="lazy">
        <span class="product-tag">${product.categoryLabel}</span>
      </div>
      <div class="product-info">
        <div class="product-meta"><span>IMPRESION 3D</span><span class="product-code">N.${product.id}</span></div>
        <h3>${product.name}</h3>
        <p class="product-price">${formatPrice(product.price)}</p>
        <button class="product-open" type="button" data-product-id="${product.id}" aria-label="Ver detalles de ${product.name}">
          Ver detalles <span aria-hidden="true">&#8599;</span>
        </button>
      </div>
    </article>
  `).join("");

  emptyState.hidden = visibleProducts.length > 0;
}

function openProduct(productId) {
  selectedProduct = products.find((product) => product.id === productId);
  if (!selectedProduct) return;

  document.querySelector("#dialog-image").src = selectedProduct.image;
  document.querySelector("#dialog-image").alt = selectedProduct.alt;
  document.querySelector("#dialog-category").textContent = `IMPRESION 3D / ${selectedProduct.categoryLabel.toUpperCase()}`;
  document.querySelector("#dialog-title").textContent = selectedProduct.name;
  document.querySelector("#dialog-description").textContent = selectedProduct.description;
  document.querySelector("#dialog-price").textContent = formatPrice(selectedProduct.price);
  productDialog.showModal();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (button) openProduct(button.dataset.productId);
});

document.querySelector("#dialog-close").addEventListener("click", () => productDialog.close());

document.querySelector("#copy-inquiry").addEventListener("click", async () => {
  if (!selectedProduct) return;
  const message = `Hola, quiero consultar por ${selectedProduct.name}.`;

  try {
    await navigator.clipboard.writeText(message);
    showToast("Consulta copiada. El contacto se conecta mas adelante.");
  } catch {
    window.prompt("Copia tu consulta:", message);
  }
});

productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

renderProducts();