const products = [
  {
    id: "33",
    name: "Conecta 4",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    images: ["img/4EnLinea.webp", "img/4linea.jpg"],
    alt: "Juego de mesa Conecta 4 impreso en 3D",
    description: "El clásico desafío de alinear cuatro fichas, listo para compartir una partida.",
    price: null,
  },
  {
    id: "35",
    name: "Blockus",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    image: "img/BlockusGame.webp",
    alt: "Juego de mesa Blockus con piezas impresas en 3D",
    description: "Juego de estrategia para ocupar el tablero con piezas de distintas formas.",
    price: null,
  },
  {
    id: "36",
    name: "Brick Wall",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    image: "img/BrickWallGame.webp",
    alt: "Juego de habilidad con una pared de ladrillos impresa en 3D",
    description: "Retirá los ladrillos con cuidado: gana quien mantenga la pared en pie.",
    price: null,
  },
  {
    id: "51",
    name: "Mini básquet",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    image: "img/juegobasquet.jpg",
    alt: "Juego de básquet de escritorio impreso en 3D",
    description: "Un pequeño desafío de puntería para jugar en cualquier mesa.",
    price: null,
  },
  {
    id: "54",
    name: "Equilibrio de monitos",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    images: ["img/monito.jpeg", "img/Equilbrio monitos.webp"],
    alt: "Juego de equilibrio con monitos y piezas impresas en 3D",
    description: "Apilá las piezas y encontrá el equilibrio sin derrumbar la torre.",
    price: null,
  },
  {
    id: "59",
    name: "Tetris de equilibrio",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    images: ["img/TetrisEquilibrio1.jpg", "img/TetrisEquilibrio2.webp"],
    alt: "Juego de equilibrio con piezas de Tetris impresas en 3D",
    description: "Combiná y apilá las piezas para mantener el equilibrio.",
    price: null,
  },
  {
    id: "61",
    name: "Cubo 3×3 Ingenio",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    image: "img/Cubo3x3Ingenio.webp",
    alt: "Piezas geométricas de colores para un juego de ingenio impreso en 3D",
    description: "Un juego de ingenio con piezas geométricas para poner a prueba tu destreza.",
    price: null,
  },
  {
    id: "62",
    name: "Puzzle de corazón",
    category: "puzzle",
    categoryLabel: "Puzzle de lógica",
    image: "img/20200406-20200406_170459.webp",
    alt: "Puzzle de piezas rojas encastrables en una base con forma de corazón",
    description: "Un rompecabezas de encastre para volver a acomodar todas las piezas en su base.",
    price: null,
  },
  {
    id: "63",
    name: "Puzzle Hard / Easy",
    category: "puzzle",
    categoryLabel: "Puzzle de lógica",
    image: "img/TaTeTiHardDigglet2.jpg",
    alt: "Puzzle reversible con desafíos de dificultad fácil y difícil",
    description: "Dos desafíos de encastre en una pieza compacta: elegí el lado y encontrá la solución.",
    price: null,
  },
  {
    id: "64",
    name: "Puzzle de seis piezas",
    category: "puzzle",
    categoryLabel: "Puzzle de lógica",
    image: "img/six-t-puzzle.webp",
    alt: "Puzzle de lógica formado por seis piezas con forma de T",
    description: "Un desafío de ingenio: acomodá las seis piezas para resolver la figura.",
    price: null,
  },
  {
    id: "65",
    name: "Puzzle de encastre",
    category: "puzzle",
    categoryLabel: "Puzzle de lógica",
    images: ["img/img_1299_small.webp", "img/img_6764_small.webp"],
    alt: "Piezas naranjas de un puzzle de encastre en una bandeja",
    description: "Piezas geométricas para probar distintas combinaciones y encontrar cómo encajan.",
    price: null,
  },
  {
    id: "66",
    name: "Estrategia hexagonal",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    image: "img/5e295d0d-62a9-4450-b368-63ed4e5940d0.webp",
    alt: "Tablero hexagonal con piezas de colores para un juego de estrategia",
    description: "Un juego de estrategia con tablero hexagonal y piezas de distintas formas.",
    price: null,
  },
  {
    id: "67",
    name: "Desafío de hexágonos",
    category: "mesa",
    categoryLabel: "Juego de mesa",
    image: "img/2024-11-04_b2e1930ae56eb.webp",
    alt: "Juego de estrategia con tablero hexagonal y una pieza roja",
    description: "Un juego de estrategia con tablero y piezas hexagonales para pensar cada movimiento.",
    price: null,
  },
  {
    id: "68",
    name: "Hedron Stack",
    category: "puzzle",
    categoryLabel: "Puzzle de lógica",
    images: ["img/hedronstack.webp", "img/hedronstack1.webp", "img/hedronstack2.webp", "img/hedronstack3.webp"],
    alt: "Piezas geométricas apiladas en equilibrio",
    description: "Un reto de equilibrio y lógica: apilá las formas y construí una torre estable.",
    price: null,
  },
  {
    id: "47",
    name: "Evil Puzzle",
    category: "puzzle",
    categoryLabel: "Puzzle de lógica",
    image: "img/EvilPuzzle.webp",
    alt: "Rompecabezas impreso en 3D",
    description: "Un rompecabezas de ingenio con piezas para encastrar.",
    price: null,
  },
  {
    id: "48",
    name: "Fit Maze Puzzle",
    category: "puzzle",
    categoryLabel: "Puzzle de lógica",
    image: "img/FitMazePuzzle.webp",
    alt: "Rompecabezas laberinto impreso en 3D",
    description: "Un laberinto de ingenio para resolver colocando las piezas.",
    price: null,
  },
];

const currency = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});
const whatsappNumber = "5491130539016";
const filterLabels = {
  mesa: "Juegos de mesa",
  puzzle: "Puzzles de lógica",
};

const filterList = document.querySelector(".filter-list");
const filterOptions = [
  { id: "todos", label: "Todos" },
  ...Object.entries(filterLabels).map(([id, label]) => ({ id, label })),
];
filterList.innerHTML = filterOptions.map((filter, index) => `
  <button class="filter-button${index === 0 ? " is-active" : ""}" type="button" data-filter="${filter.id}" aria-pressed="${index === 0}">${filter.label}</button>
`).join("");

const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#product-search");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const filterButtons = [...filterList.querySelectorAll(".filter-button")];
const productDialog = document.querySelector("#product-dialog");
const imageGallery = document.querySelector("#image-gallery");
let activeFilter = "todos";
let selectedProduct = null;
let activeGalleryProduct = null;
let activeGalleryImages = [];
let activeGalleryIndex = 0;

function getProductImages(product) {
  return product.images || (product.image ? [product.image] : []);
}

function formatPrice(price) {
  return price === null ? "Consultar precio" : currency.format(price);
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("es-AR");
  const visibleProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "todos" || product.category === activeFilter;
    const searchText = `${product.name} ${product.categoryLabel} ${product.description}`.toLocaleLowerCase("es-AR");
    return matchesFilter && searchText.includes(query);
  });

  resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "juego" : "juegos"}`;
  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <button class="product-image-trigger" type="button" data-gallery-product-id="${product.id}" aria-label="Ampliar foto de ${product.name}">
          <img class="product-image" src="${getProductImages(product)[0]}" alt="${product.alt}" loading="lazy">
        </button>
        <span class="product-tag">${product.categoryLabel}</span>
      </div>
      <div class="product-info">
        <div class="product-meta"><span>IMPRESO EN EL TALLER</span><span class="product-code">N.${product.id}</span></div>
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

function updateProductInquiry() {
  if (!selectedProduct) return;

  const message = `Hola, quiero consultar por ${selectedProduct.name}.`;
  document.querySelector("#whatsapp-inquiry").href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function openProduct(productId) {
  selectedProduct = products.find((product) => product.id === productId);
  if (!selectedProduct) return;

  const productImages = getProductImages(selectedProduct);
  const dialogImage = document.querySelector("#dialog-image");
  dialogImage.src = productImages[0];
  dialogImage.alt = selectedProduct.alt;
  document.querySelector("#dialog-category").textContent = selectedProduct.categoryLabel.toUpperCase();
  document.querySelector("#dialog-title").textContent = selectedProduct.name;
  document.querySelector("#dialog-description").textContent = selectedProduct.description;
  document.querySelector("#dialog-price").textContent = formatPrice(selectedProduct.price);
  updateProductInquiry();
  productDialog.showModal();
}

function renderGalleryImage() {
  const galleryImage = document.querySelector("#gallery-image");
  galleryImage.src = activeGalleryImages[activeGalleryIndex];
  galleryImage.alt = `${activeGalleryProduct.name}, foto ${activeGalleryIndex + 1}`;

  const hasMultipleImages = activeGalleryImages.length > 1;
  document.querySelector("#gallery-previous").hidden = !hasMultipleImages;
  document.querySelector("#gallery-next").hidden = !hasMultipleImages;
  const counter = document.querySelector("#gallery-counter");
  counter.hidden = !hasMultipleImages;
  counter.textContent = hasMultipleImages ? `${activeGalleryIndex + 1} / ${activeGalleryImages.length}` : "";
}

function openImageGallery(productId) {
  activeGalleryProduct = products.find((product) => product.id === productId);
  if (!activeGalleryProduct) return;

  activeGalleryImages = getProductImages(activeGalleryProduct);
  activeGalleryIndex = 0;
  renderGalleryImage();
  imageGallery.showModal();
}

function moveGallery(direction) {
  if (activeGalleryImages.length < 2) return;
  activeGalleryIndex = (activeGalleryIndex + direction + activeGalleryImages.length) % activeGalleryImages.length;
  renderGalleryImage();
}

function updateFilter(button) {
  activeFilter = button.dataset.filter;
  filterButtons.forEach((filterButton) => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("is-active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });
  renderProducts();
}

filterButtons.forEach((button) => button.addEventListener("click", () => updateFilter(button)));
searchInput.addEventListener("input", renderProducts);

productGrid.addEventListener("click", (event) => {
  const galleryButton = event.target.closest("[data-gallery-product-id]");
  if (galleryButton) {
    openImageGallery(galleryButton.dataset.galleryProductId);
    return;
  }

  const detailsButton = event.target.closest("[data-product-id]");
  if (detailsButton) openProduct(detailsButton.dataset.productId);
});

document.querySelector("#gallery-close").addEventListener("click", () => imageGallery.close());
document.querySelector("#gallery-previous").addEventListener("click", () => moveGallery(-1));
document.querySelector("#gallery-next").addEventListener("click", () => moveGallery(1));
imageGallery.addEventListener("click", (event) => {
  if (event.target === imageGallery) imageGallery.close();
});
imageGallery.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") moveGallery(-1);
  if (event.key === "ArrowRight") moveGallery(1);
});
document.querySelector("#dialog-close").addEventListener("click", () => productDialog.close());
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

const revealSections = document.querySelectorAll("main > section:not(.hero)");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, {
    threshold: 0,
    rootMargin: "0px 0px -10% 0px",
  });

  revealSections.forEach((section) => {
    section.classList.add("scroll-reveal");
    sectionObserver.observe(section);
  });
}

renderProducts();
