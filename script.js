const products = [
  {
    id: "01",
    name: "Gato decorativo",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img/GatoDeco.jpg",
    alt: "Figura decorativa de gato negro impresa en 3D",
    description: "Una figura de gato de líneas simples y acabado mate. Una pieza decorativa para sumar personalidad a cualquier rincón.",
    price: null,
  },
  {
    id: "05",
    name: "Anillo lanzador de agua",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/AnilloAgua.jpg",
    alt: "Anillo de juguete con mecanismo para lanzar agua",
    description: "Anillo de juguete con un pequeño mecanismo lanzador de agua.",
    price: null,
  },
  {
    id: "06",
    name: "Árboles decorativos",
    category: "decoracion",
    categoryLabel: "Navidad",
    tags: ["navidad"],
    image: "img/ArbolNavidadDeco.webp",
    alt: "Árboles decorativos navideños impresos en 3D",
    description: "Árboles decorativos navideños impresos en 3D.",
    price: null,
  },
  {
    id: "07",
    name: "Cubo 3×3 Ingenio",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/Cubo3x3Ingenio.webp",
    alt: "Tablero de juego de bolitas de ingenio impreso en 3D",
    description: "Juego de ingenio con tablero y piezas para desafiar tu destreza.",
    price: null,
  },
  {
    id: "10",
    name: "Fantasma",
    category: "decoracion",
    categoryLabel: "Halloween",
    tags: ["halloween"],
    image: "img/FasntasmaTrasero.webp",
    alt: "Figura de un fantasma blanco impresa en 3D",
    description: "Figura decorativa de un fantasma simpático.",
    price: null,
  },
  {
    id: "13",
    name: "Florero navideño",
    category: "decoracion",
    categoryLabel: "Navidad",
    tags: ["navidad"],
    image: "img/FloreroNavidad.jpg",
    alt: "Floreros decorativos con motivos de copos de nieve",
    description: "Florero decorativo con motivos de invierno.",
    price: null,
  },
  {
    id: "14",
    name: "Flower Friend",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img/FlowerFriend.jpg",
    alt: "Figuras impresas en 3D que sostienen flores en un florero",
    description: "Figuras para acompañar y sostener flores en un florero.",
    price: null,
  },
  {
    id: "15",
    name: "Gato porta rollo",
    category: "utilidad",
    categoryLabel: "Soportes",
    tags: ["soportes"],
    image: "img/GatoJugandoSoporteDeco.webp",
    alt: "Figura de gato que sostiene un rollo de papel",
    description: "Figura de gato que funciona como soporte para un rollo de papel.",
    price: null,
  },
  {
    id: "16",
    name: "Llavero flexi berenjena",
    category: "accesorios",
    categoryLabel: "Accesorios",
    productType: "Llavero",
    image: "img/LlaveroFlexiBerenjena.jpg",
    alt: "Llavero articulado con forma de berenjena",
    description: "Llavero articulado con forma de berenjena.",
    price: null,
  },
  {
    id: "17",
    name: "Llavero flexi chili",
    category: "accesorios",
    categoryLabel: "Accesorios",
    productType: "Llavero",
    image: "img/LlaveroFlexiChilli.jpg",
    alt: "Llavero articulado con forma de chile",
    description: "Llavero articulado con forma de chile.",
    price: null,
  },
  {
    id: "18",
    name: "Llaveros luna pareja",
    category: "accesorios",
    categoryLabel: "Accesorios",
    productType: "Llavero",
    image: "img/LlaveroParejaAmigosLunar.jpg",
    alt: "Par de llaveros que forman una luna al juntarse",
    description: "Par de llaveros lunares que se complementan al juntarse.",
    price: null,
  },
  {
    id: "19",
    name: "Maceta libro y café",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img/MacetaLibroCafe.jpg",
    alt: "Maceta con forma de personaje que sostiene un libro y una taza",
    description: "Maceta decorativa con forma de personaje lector.",
    price: null,
  },
  {
    id: "20",
    name: "Maceta saco",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img/MacetaSuculentasSaco.jpg",
    alt: "Maceta con forma de saco para plantas pequeñas",
    description: "Maceta con forma de saco, ideal para una planta pequeña.",
    price: null,
  },
  {
    id: "22",
    name: "Pesebre",
    category: "decoracion",
    categoryLabel: "Navidad",
    tags: ["navidad"],
    image: "img/Pecebre.jpg",
    alt: "Pesebre navideño impreso en 3D",
    description: "Pesebre decorativo impreso en 3D.",
    price: null,
  },
  {
    id: "23",
    name: "Porta bolsas",
    category: "utilidad",
    categoryLabel: "Organización",
    image: "img/PortaBolsas.webp",
    alt: "Soporte de mano para transportar bolsas",
    description: "Accesorio de mano para llevar bolsas con más comodidad.",
    price: null,
  },
  {
    id: "24",
    name: "Portalápices planta nuclear",
    category: "utilidad",
    categoryLabel: "Organización",
    image: "img/PortaLapicesPlantaNuclear.jpg",
    alt: "Portalápices con forma de torre de refrigeración nuclear",
    description: "Portalápices con diseño inspirado en una planta nuclear.",
    price: null,
  },
  {
    id: "25",
    name: "Letras Bubble",
    category: "utilidad",
    categoryLabel: "Personalizables",
    image: "img/SetLetrasBubble.webp",
    alt: "Letras tridimensionales estilo bubble impresas en 3D",
    description: "Letras tridimensionales estilo bubble para decorar.",
    price: null,
  },
  {
    id: "26",
    name: "Adornos para árbol",
    category: "decoracion",
    categoryLabel: "Navidad",
    tags: ["navidad"],
    image: "img/SetNavidadDecoArbol.webp",
    alt: "Set de adornos navideños para colgar en el árbol",
    description: "Set de adornos decorativos para el árbol de Navidad.",
    price: null,
  },
  {
    id: "27",
    name: "Figuras navideñas",
    category: "decoracion",
    categoryLabel: "Navidad",
    tags: ["navidad"],
    image: "img/SetNavidadMuñecosDeco.webp",
    alt: "Set de figuras navideñas impresas en 3D",
    description: "Figuras decorativas navideñas impresas en 3D.",
    price: null,
  },
  {
    id: "28",
    name: "Set de números",
    category: "utilidad",
    categoryLabel: "Personalizables",
    image: "img/SetNumeros.webp",
    alt: "Set de números de colores impresos en 3D",
    description: "Números tridimensionales impresos en 3D.",
    price: null,
  },
  {
    id: "29",
    name: "Soporte de celular corazón",
    category: "utilidad",
    categoryLabel: "Soportes",
    tags: ["soportes"],
    image: "img/SoporteCeluCorazon.webp",
    alt: "Soporte para celular con forma de corazón",
    description: "Soporte de escritorio para celular con forma de corazón.",
    price: null,
  },
  {
    id: "30",
    name: "Porta cepillo dental",
    category: "utilidad",
    categoryLabel: "Soportes",
    tags: ["soportes"],
    image: "img/SoporteDienteCepillo.jpg",
    alt: "Soporte con forma de diente para un cepillo dental",
    description: "Soporte con forma de diente para guardar un cepillo dental.",
    price: null,
  },
  {
    id: "31",
    name: "Soporte universal de escritorio",
    category: "utilidad",
    categoryLabel: "Soportes",
    tags: ["soportes"],
    image: "img/SoporteEscritorioUniversal.webp",
    alt: "Soporte universal ajustable para escritorio",
    description: "Soporte ajustable para sujetar objetos en el escritorio.",
    price: null,
  },
  {
    id: "32",
    name: "Varita mágica calabaza",
    category: "accesorios",
    categoryLabel: "Halloween",
    tags: ["juguetes", "halloween"],
    image: "img/VaritaMagicaCalabaza.webp",
    alt: "Varita flexible con una calabaza en la punta",
    description: "Varita flexible decorada con una calabaza.",
    price: null,
  },
  {
    id: "33",
    name: "Conecta 4",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    images: ["img/4EnLinea.webp", "img/4linea.jpg"],
    alt: "Juego de mesa Conecta 4 impreso en 3D",
    description: "Versión impresa en 3D del clásico juego de conectar cuatro fichas.",
    price: null,
  },
  {
    id: "34",
    name: "Anillos giratorios",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    images: ["img/anillosgiratoriosspin.jpg", "img/anillosgiratorisspin2.jpg"],
    alt: "Anillo giratorio impreso en 3D",
    description: "Anillos giratorios para entretener las manos.",
    price: null,
  },
  {
    id: "35",
    name: "Blockus",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/BlockusGame.webp",
    alt: "Juego de mesa Blockus con piezas impresas en 3D",
    description: "Juego de estrategia con tablero y piezas de colores.",
    price: null,
  },
  {
    id: "36",
    name: "Brick Wall",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/BrickWallGame.webp",
    alt: "Juego de habilidad con una pared de ladrillos impresa en 3D",
    description: "Juego de habilidad para retirar piezas sin derribar la pared.",
    price: null,
  },
  {
    id: "37",
    name: "Taza fidget",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/CafeFidget.webp",
    alt: "Taza fidget impresa en 3D",
    description: "Una pequeña taza con piezas móviles para jugar con las manos.",
    price: null,
  },
  {
    id: "38",
    name: "Caja de guardado",
    category: "utilidad",
    categoryLabel: "Organización",
    image: "img/CajaGuardado.jpg",
    alt: "Caja de guardado impresa en 3D",
    description: "Caja con tapa para guardar objetos pequeños.",
    price: null,
  },
  {
    id: "39",
    name: "Estante organizador",
    category: "utilidad",
    categoryLabel: "Organización",
    image: "img/Cajaguardado2.jpg",
    alt: "Estante organizador de pared",
    description: "Estante de pared con compartimentos para organizar objetos.",
    price: null,
  },
  {
    id: "40",
    name: "Cajita de guardado",
    category: "utilidad",
    categoryLabel: "Organización",
    images: ["img/cajitaguardado2.jpg", "img/Cajitaguardadomini.jpg"],
    alt: "Cajita con tapa impresa en 3D",
    description: "Cajita con tapa para guardar y organizar objetos pequeños.",
    price: null,
  },
  {
    id: "41",
    name: "Cubo mágico antiestrés",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    images: ["img/cubomagico1.jpg", "img/cubomagico2.jpg", "img/CuboMagicoStress.webp"],
    alt: "Cubo mágico antiestrés articulado impreso en 3D",
    description: "Cubo articulado para manipular y jugar con las manos.",
    price: null,
  },
  {
    id: "43",
    name: "Soporte de auriculares Deadpool",
    category: "utilidad",
    categoryLabel: "Soportes",
    tags: ["soportes"],
    images: ["img/siporteaurideadpool.jpg", "img/deadpoolsoporteauri.jpg"],
    alt: "Soporte para auriculares con diseño de Deadpool",
    description: "Soporte de escritorio para auriculares con diseño de Deadpool.",
    price: null,
  },
  {
    id: "46",
    name: "Estante escalera",
    category: "utilidad",
    categoryLabel: "Organización",
    images: ["img/estante escalera.jpg", "img/estante escalera2.jpg"],
    alt: "Estante decorativo con forma de escalera",
    description: "Estante de pared con diseño escalonado para exhibir objetos.",
    price: null,
  },
  {
    id: "47",
    name: "Evil Puzzle",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/EvilPuzzle.webp",
    alt: "Rompecabezas impreso en 3D",
    description: "Rompecabezas de ingenio con piezas para encastrar.",
    price: null,
  },
  {
    id: "48",
    name: "Fit Maze Puzzle",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/FitMazePuzzle.webp",
    alt: "Rompecabezas laberinto impreso en 3D",
    description: "Laberinto de ingenio para resolver colocando las piezas.",
    price: null,
  },
  {
    id: "49",
    name: "Soporte para celular gato",
    category: "utilidad",
    categoryLabel: "Soportes",
    tags: ["soportes"],
    image: "img/gatosoportecelu.jpg",
    alt: "Soporte de celular con forma de gato",
    description: "Soporte decorativo para apoyar el celular.",
    price: null,
  },
  {
    id: "50",
    name: "Gengar Roly-Poly",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/GengarRoli.webp",
    alt: "Figuras Gengar Roly-Poly impresas en 3D",
    description: "Figura de juguete con movimiento de balanceo.",
    price: null,
  },
  {
    id: "51",
    name: "Mini básquet",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/juegobasquet.jpg",
    alt: "Juego de básquet de escritorio impreso en 3D",
    description: "Mini juego de básquet para jugar en el escritorio.",
    price: null,
  },
  {
    id: "52",
    name: "Juego de bolitas",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img/JuegoBolitas.png",
    alt: "Juego de habilidad con bolitas impreso en 3D",
    description: "Juego de habilidad para embocar y mover las bolitas por el tablero.",
    price: null,
  },
  {
    id: "53",
    name: "Meeseeks",
    category: "decoracion",
    categoryLabel: "Figuras",
    image: "img/Meeseeks.webp",
    alt: "Figura azul Meeseeks impresa en 3D",
    description: "Figura decorativa azul impresa en 3D.",
    price: null,
  },
  {
    id: "54",
    name: "Juego de monitos",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    images: ["img/monito.jpeg", "img/Equilbrio monitos.webp"],
    alt: "Juego de equilibrio con monitos y piezas impresas en 3D",
    description: "Juego de equilibrio y destreza con monitos y piezas de colores.",
    price: null,
  },
  {
    id: "55",
    name: "Picador Darth Vader",
    category: "accesorios",
    categoryLabel: "Accesorios",
    image: "img/PicaDarthcader.jpg",
    alt: "Picador con diseño de Darth Vader",
    description: "Picador con tapa decorativa inspirada en Darth Vader.",
    price: null,
  },
  {
    id: "56",
    name: "Picador Deadpool",
    category: "accesorios",
    categoryLabel: "Accesorios",
    images: ["img/picaDeadpool1.jpg", "img/picadeadpool2.jpg"],
    alt: "Picador con diseño de Deadpool",
    description: "Picador con tapa decorativa inspirada en Deadpool.",
    price: null,
  },
  {
    id: "57",
    name: "Sujeta plantas",
    category: "utilidad",
    categoryLabel: "Jardín",
    image: "img/Snapshot3.webp",
    alt: "Soporte impreso en 3D para sujetar una planta a un tutor",
    description: "Clip para sujetar y guiar los tallos de las plantas.",
    price: null,
  },
  {
    id: "58",
    name: "Soporte para joystick Deadpool",
    category: "utilidad",
    categoryLabel: "Soportes",
    tags: ["soportes"],
    images: ["img/Soportejoystickdeadpool.jpg", "img/soportejoystcikdeadpol2.jpg"],
    alt: "Soporte para joystick con figura de Deadpool",
    description: "Soporte para exhibir un joystick con diseño de Deadpool.",
    price: null,
  },
  {
    id: "59",
    name: "Tetris de equilibrio",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    images: ["img/TetrisEquilibrio1.jpg", "img/TetrisEquilibrio2.webp"],
    alt: "Juego de equilibrio con piezas de Tetris impresas en 3D",
    description: "Juego de equilibrio para encastrar y apilar piezas inspiradas en Tetris.",
    price: null,
  },
  {
    id: "60",
    name: "Maceta Peace",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img/MacetaPeace.jpg",
    alt: "Maceta impresa en 3D con diseño de paz",
    description: "Maceta decorativa con un diseño de paz en relieve.",
    price: null,
  },
];

const currency = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});
const whatsappNumber = "5491130539016";
const standardOptions = "Medidas: 5, 10 o 15 cm de alto. Colores base: blanco, negro o gris.";

const filterLabels = {
  decoracion: "Decoración",
  utilidad: "Utilidad",
  accesorios: "Accesorios",
  juguetes: "Juguetes",
  navidad: "Navidad",
  halloween: "Halloween",
  soportes: "Soportes",
};

const filterList = document.querySelector(".filter-list");
const productCategories = new Set(products.flatMap((product) => [product.category, ...(product.tags || [])]));
const filterOptions = [
  { id: "todos", label: "Todo" },
  ...Object.entries(filterLabels)
    .filter(([id]) => productCategories.has(id))
    .map(([id, label]) => ({ id, label })),
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
const customerGrid = document.querySelector("#customer-grid");
const customerPrevious = document.querySelector("#customer-previous");
const customerNext = document.querySelector("#customer-next");
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
    const matchesFilter = activeFilter === "todos" || product.category === activeFilter || product.tags?.includes(activeFilter);
    const searchText = [product.name, product.categoryLabel, filterLabels[product.category], ...(product.tags || []).map((tag) => filterLabels[tag])].join(" ").toLocaleLowerCase("es-AR");
    const matchesSearch = searchText.includes(query);
    return matchesFilter && matchesSearch;
  });

  resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "pieza" : "piezas"}`;
  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        ${getProductImages(product).length > 0
          ? `<button class="product-image-trigger" type="button" data-gallery-product-id="${product.id}" aria-label="Ampliar foto de ${product.name}"><img class="product-image" src="${getProductImages(product)[0]}" alt="${product.alt}" loading="lazy"></button>`
          : `<div class="product-placeholder" role="img" aria-label="${product.alt}"><span>FOTO PENDIENTE</span><strong>${product.id}</strong></div>`}
        <span class="product-tag${product.productType ? " product-tag-type" : ""}">${product.productType || product.categoryLabel}</span>
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

  document.querySelector("#product-size").value = "5 cm";
  document.querySelector("#product-color").value = "blanco";
  const dialogImage = document.querySelector("#dialog-image");
  const dialogImagePlaceholder = document.querySelector("#dialog-image-placeholder");
  const productImages = getProductImages(selectedProduct);
  dialogImage.hidden = productImages.length === 0;
  dialogImagePlaceholder.hidden = productImages.length > 0;
  if (productImages.length > 0) {
    dialogImage.src = productImages[0];
    dialogImage.alt = selectedProduct.alt;
  }
  document.querySelector("#dialog-category").textContent = `IMPRESION 3D / ${selectedProduct.categoryLabel.toUpperCase()}`;
  document.querySelector("#dialog-title").textContent = selectedProduct.name;
  document.querySelector("#dialog-description").textContent = selectedProduct.description;
  document.querySelector("#dialog-options").textContent = selectedProduct.productType === "Llavero"
    ? "Medida única: 7 cm."
    : `${standardOptions} Otros colores, según disponibilidad.`;
  document.querySelector("#dialog-choices").hidden = selectedProduct.productType === "Llavero";
  document.querySelector("#dialog-price").textContent = formatPrice(selectedProduct.price);
  updateProductInquiry();
  productDialog.showModal();
}

function renderGalleryImage() {
  const image = activeGalleryImages[activeGalleryIndex];
  const galleryImage = document.querySelector("#gallery-image");
  galleryImage.src = image;
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
  if (activeGalleryImages.length === 0) return;

  activeGalleryIndex = 0;
  renderGalleryImage();
  imageGallery.showModal();
}

function moveGallery(direction) {
  if (activeGalleryImages.length < 2) return;
  activeGalleryIndex = (activeGalleryIndex + direction + activeGalleryImages.length) % activeGalleryImages.length;
  renderGalleryImage();
}

function updateCustomerArrows() {
  customerPrevious.disabled = customerGrid.scrollLeft <= 1;
  customerNext.disabled = customerGrid.scrollLeft + customerGrid.clientWidth >= customerGrid.scrollWidth - 1;
}

function scrollCustomerGallery(direction) {
  const card = customerGrid.querySelector(".customer-card");
  if (!card) return;

  const gap = Number.parseFloat(getComputedStyle(customerGrid).gap) || 0;
  customerGrid.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
}

function updateProductInquiry() {
  if (!selectedProduct) return;

  const message = selectedProduct.productType === "Llavero"
    ? `Hola, quiero consultar por ${selectedProduct.name}, de medida única de 7 cm.`
    : `Hola, quiero consultar por ${selectedProduct.name} en tamaño ${document.querySelector("#product-size").value} de alto y color ${document.querySelector("#product-color").value}.`;
  document.querySelector("#whatsapp-inquiry").href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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
document.querySelector("#product-size").addEventListener("change", updateProductInquiry);
document.querySelector("#product-color").addEventListener("change", updateProductInquiry);

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

customerPrevious.addEventListener("click", () => scrollCustomerGallery(-1));
customerNext.addEventListener("click", () => scrollCustomerGallery(1));
customerGrid.addEventListener("scroll", updateCustomerArrows, { passive: true });
window.addEventListener("resize", updateCustomerArrows);

document.querySelector("#dialog-close").addEventListener("click", () => productDialog.close());

productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

renderProducts();
updateCustomerArrows();