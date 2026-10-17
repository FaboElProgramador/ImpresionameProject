const products = [
  {
    id: "01",
    name: "Gato decorativo",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img_asset/GatoDeco.jpg",
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
    tags: ["soportes"],
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
    image: "img_asset/LlaveroCascoMoto.jpg",
    alt: "Cuatro llaveros impresos en 3D con forma de casco",
    description: "Llavero de casco impreso en varios colores. Consultanos por los tonos disponibles.",
    price: null,
  },
  {
    id: "05",
    name: "Anillo lanzador de agua",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img_asset/AnilloAgua.jpg",
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
    image: "img_asset/ArbolNavidadDeco.webp",
    alt: "Árboles decorativos navideños impresos en 3D",
    description: "Árboles decorativos navideños en distintos tamaños y colores.",
    price: null,
  },
  {
    id: "07",
    name: "Cubo 3×3 Ingenio",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img_asset/Cubo3x3Ingenio.webp",
    alt: "Piezas de cubo de ingenio impresas en varios colores",
    description: "Cubo de ingenio impreso en 3D, compuesto por piezas articuladas.",
    price: null,
  },
  {
    id: "08",
    name: "Fantasma selfie",
    category: "decoracion",
    categoryLabel: "Halloween",
    tags: ["halloween"],
    image: "img_asset/FantasmaSelfie.webp",
    alt: "Figura de fantasma sosteniendo un teléfono",
    description: "Figura decorativa de fantasma en pose selfie.",
    price: null,
  },
  {
    id: "09",
    name: "Fantasma tímido",
    category: "decoracion",
    categoryLabel: "Halloween",
    tags: ["halloween"],
    image: "img_asset/FasntasmaTimido.webp",
    alt: "Figura decorativa de fantasma en pose tímida",
    description: "Figura de fantasma en pose tímida, impresa en 3D.",
    price: null,
  },
  {
    id: "10",
    name: "Fantasma vista trasera",
    category: "decoracion",
    categoryLabel: "Halloween",
    tags: ["halloween"],
    image: "img_asset/FasntasmaTrasero.webp",
    alt: "Figura de fantasma decorativa vista desde atrás",
    description: "Otra pose de la colección de fantasmas decorativos.",
    price: null,
  },
  {
    id: "11",
    name: "Propulsor Finger Flick",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img_asset/FingerFlick.webp",
    alt: "Juguete propulsor Finger Flick impreso en 3D",
    description: "Pequeño juguete propulsor para lanzar con los dedos.",
    price: null,
  },
  {
    id: "12",
    name: "Flick Spin",
    category: "accesorios",
    categoryLabel: "Juguetes",
    tags: ["juguetes"],
    image: "img_asset/FlickSpin.webp",
    alt: "Juguete giratorio Flick Spin impreso en 3D",
    description: "Juguete de escritorio que gira al impulsarlo con los dedos.",
    price: null,
  },
  {
    id: "13",
    name: "Florero navideño",
    category: "decoracion",
    categoryLabel: "Navidad",
    tags: ["navidad"],
    image: "img_asset/FloreroNavidad.jpg",
    alt: "Floreros decorativos con motivos de copos de nieve",
    description: "Florero decorativo con motivos de invierno.",
    price: null,
  },
  {
    id: "14",
    name: "Flower Friend",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img_asset/FlowerFriend.jpg",
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
    image: "img_asset/GatoJugandoSoporteDeco.webp",
    alt: "Figura de gato que sostiene un rollo de papel",
    description: "Figura de gato que funciona como soporte para un rollo de papel.",
    price: null,
  },
  {
    id: "16",
    name: "Llavero flexi berenjena",
    category: "accesorios",
    categoryLabel: "Accesorios",
    image: "img_asset/LlaveroFlexiBerenjena.jpg",
    alt: "Llavero articulado con forma de berenjena",
    description: "Llavero articulado con forma de berenjena.",
    price: null,
  },
  {
    id: "17",
    name: "Llavero flexi chili",
    category: "accesorios",
    categoryLabel: "Accesorios",
    image: "img_asset/LlaveroFlexiChilli.jpg",
    alt: "Llavero articulado con forma de chile",
    description: "Llavero articulado con forma de chile.",
    price: null,
  },
  {
    id: "18",
    name: "Llaveros luna pareja",
    category: "accesorios",
    categoryLabel: "Accesorios",
    image: "img_asset/LlaveroParejaAmigosLunar.jpg",
    alt: "Par de llaveros que forman una luna al juntarse",
    description: "Par de llaveros lunares que se complementan al juntarse.",
    price: null,
  },
  {
    id: "19",
    name: "Maceta libro y café",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img_asset/MacetaLibroCafe.jpg",
    alt: "Maceta con forma de personaje que sostiene un libro y una taza",
    description: "Maceta decorativa con forma de personaje lector.",
    price: null,
  },
  {
    id: "20",
    name: "Maceta saco",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img_asset/MacetaSuculentasSaco.jpg",
    alt: "Maceta con forma de saco para plantas pequeñas",
    description: "Maceta con forma de saco, ideal para una planta pequeña.",
    price: null,
  },
  {
    id: "21",
    name: "Maceta tortuga",
    category: "decoracion",
    categoryLabel: "Decoración",
    image: "img_asset/MacetaTortuga.jpg",
    alt: "Maceta con forma de tortuga",
    description: "Maceta con forma de tortuga para plantas pequeñas.",
    price: null,
  },
  {
    id: "22",
    name: "Pesebre",
    category: "decoracion",
    categoryLabel: "Navidad",
    tags: ["navidad"],
    image: "img_asset/Pecebre.jpg",
    alt: "Pesebre navideño impreso en 3D",
    description: "Pesebre decorativo impreso en 3D.",
    price: null,
  },
  {
    id: "23",
    name: "Porta bolsas",
    category: "utilidad",
    categoryLabel: "Organización",
    image: "img_asset/PortaBolsas.webp",
    alt: "Soporte de mano para transportar bolsas",
    description: "Accesorio de mano para llevar bolsas con más comodidad.",
    price: null,
  },
  {
    id: "24",
    name: "Portalápices planta nuclear",
    category: "utilidad",
    categoryLabel: "Organización",
    image: "img_asset/PortaLapicesPlantaNuclear.jpg",
    alt: "Portalápices con forma de torre de refrigeración nuclear",
    description: "Portalápices con diseño inspirado en una planta nuclear.",
    price: null,
  },
  {
    id: "25",
    name: "Letras Bubble",
    category: "utilidad",
    categoryLabel: "Personalizables",
    image: "img_asset/SetLetrasBubble.webp",
    alt: "Letras tridimensionales estilo bubble impresas en 3D",
    description: "Letras tridimensionales estilo bubble para decorar o personalizar.",
    price: null,
  },
  {
    id: "26",
    name: "Adornos para árbol",
    category: "decoracion",
    categoryLabel: "Navidad",
    tags: ["navidad"],
    image: "img_asset/SetNavidadDecoArbol.webp",
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
    image: "img_asset/SetNavidadMuñecosDeco.webp",
    alt: "Set de figuras navideñas impresas en 3D",
    description: "Figuras decorativas navideñas impresas en 3D.",
    price: null,
  },
  {
    id: "28",
    name: "Set de números",
    category: "utilidad",
    categoryLabel: "Personalizables",
    image: "img_asset/SetNumeros.webp",
    alt: "Set de números de colores impresos en 3D",
    description: "Números tridimensionales en varios colores.",
    price: null,
  },
  {
    id: "29",
    name: "Soporte de celular corazón",
    category: "utilidad",
    categoryLabel: "Soportes",
    tags: ["soportes"],
    image: "img_asset/SoporteCeluCorazon.webp",
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
    image: "img_asset/SoporteDienteCepillo.jpg",
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
    image: "img_asset/SoporteEscritorioUniversal.webp",
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
    image: "img_asset/VaritaMagicaCalabaza.webp",
    alt: "Varita flexible con una calabaza en la punta",
    description: "Varita flexible decorada con una calabaza.",
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
let activeFilter = "todos";
let selectedProduct = null;

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
        ${product.image
          ? `<img class="product-image" src="${product.image}" alt="${product.alt}" loading="lazy">`
          : `<div class="product-placeholder" role="img" aria-label="${product.alt}"><span>FOTO PENDIENTE</span><strong>${product.id}</strong></div>`}
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

  const dialogImage = document.querySelector("#dialog-image");
  const dialogImagePlaceholder = document.querySelector("#dialog-image-placeholder");
  dialogImage.hidden = !selectedProduct.image;
  dialogImagePlaceholder.hidden = Boolean(selectedProduct.image);
  if (selectedProduct.image) {
    dialogImage.src = selectedProduct.image;
    dialogImage.alt = selectedProduct.alt;
  }
  document.querySelector("#dialog-category").textContent = `IMPRESION 3D / ${selectedProduct.categoryLabel.toUpperCase()}`;
  document.querySelector("#dialog-title").textContent = selectedProduct.name;
  document.querySelector("#dialog-description").textContent = selectedProduct.description;
  document.querySelector("#dialog-price").textContent = formatPrice(selectedProduct.price);
  const message = `Hola, quiero consultar por ${selectedProduct.name}.`;
  document.querySelector("#whatsapp-inquiry").href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  productDialog.showModal();
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

productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

renderProducts();