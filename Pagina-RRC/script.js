// ─────────────────────────────────────────
// DATOS
// ─────────────────────────────────────────
const animes = [
  {
    titulo: "Toyota",
    imagen: "imagenes/images.png",
    genero: "Japonesas",
    rating: 10,
    sinopsis:
      "El fabricante más grande de Japón, conocido por su confiabilidad y el sistema Toyota de producción.",
  },
  {
    titulo: "Honda",
    imagen: "imagenes/images.jpeg",
    genero: "Japonesas",
    rating: 10,
    sinopsis:
      "Pionera en motores eficientes, autos compactos y una fuerte presencia en motociclismo.",
  },
  {
    titulo: "Nissan",
    imagen: "imagenes/nissan.jpeg",
    genero: "Japonesas",
    rating: 10,
    sinopsis:
      "Reconocida por modelos deportivos como el GT-R y por su apuesta temprana a los eléctricos.",
  },
  {
    titulo: "Mazda",
    imagen: "imagenes/mazda.jpeg",
    genero: "Japonesas",
    rating: 10,
    sinopsis:
      "Famosa por el motor rotativo y por un diseño enfocado en el placer de manejo.",
  },
  {
    titulo: "BMW",
    imagen: "imagenes/bmw.jpg",
    genero: "Alemanas",
    rating: 10,
    sinopsis:
      "Sinónimo de deportividad y lujo, con el lema 'la máquina de conducir definitiva'.",
  },
  {
    titulo: "Mercedes-Benz",
    imagen: "imagenes/mercedes.jpg",
    genero: "Alemanas",
    rating: 10,
    sinopsis:
      "Marca de lujo alemana pionera en innovación automotriz y seguridad.",
  },
  {
    titulo: "Audi",
    imagen: "imagenes/audi.jpg",
    genero: "Alemanas",
    rating: 10,
    sinopsis:
      "Reconocida por su tracción integral Quattro y su diseño progresivo.",
  },
  {
    titulo: "Volkswagen",
    imagen: "imagenes/volks.png",
    genero: "Alemanas",
    rating: 10,
    sinopsis:
      "El 'auto del pueblo', creadora de íconos como el Escarabajo y el Golf.",
  },
  {
    titulo: "Porsche",
    imagen: "imagenes/posrche.jpeg",
    genero: "Alemanas",
    rating: 10,
    sinopsis: "Marca deportiva de alta gama, famosa por el legendario 911.",
  },
  {
    titulo: "Ford",
    imagen: "imagenes/ford.jpg",
    genero: "Americanas",
    rating: 10,
    sinopsis:
      "Pionera de la producción en masa con la línea de montaje del Modelo T.",
  },
  {
    titulo: "Chevrolet",
    imagen: "imagenes/chevr.jpg",
    genero: "Americanas",
    rating: 10,
    sinopsis: "Marca insignia de GM, hogar del Camaro y el Corvette.",
  },
  {
    titulo: "Jeep",
    imagen: "imagenes/jeep.jpeg",
    genero: "Americanas",
    rating: 10,
    sinopsis: "Especialista en vehículos todoterreno con raíces militares.",
  },
  {
    titulo: "Tesla",
    imagen: "imagenes/tesla.jpeg",
    genero: "Americanas",
    rating: 10,
    sinopsis: "Impulsora de la revolución eléctrica y la conducción autónoma.",
  },
  {
    titulo: "Ferrari",
    imagen: "imagenes/images.jpeg",
    genero: "Italianas",
    rating: 10,
    sinopsis: "Ícono absoluto del automovilismo deportivo y la Fórmula 1.",
  },
  {
    titulo: "Lamborghini",
    imagen: "imagenes/lambo.jpg",
    genero: "Italianas",
    rating: 10,
    sinopsis:
      "Fabricante de superdeportivos extravagantes con diseño agresivo.",
  },
  {
    titulo: "Fiat",
    imagen: "imagenes/fiat.jpeg",
    genero: "Italianas",
    rating: 10,
    sinopsis: "Histórica marca italiana conocida por autos urbanos compactos.",
  },
  {
    titulo: "Hyundai",
    imagen: "imagenes/images.png",
    genero: "Coreanas",
    rating: 10,
    sinopsis:
      "Marca surcoreana en fuerte crecimiento global, con foco en diseño y tecnología.",
  },
  {
    titulo: "Kia",
    imagen: "imagenes/kia.jpg",
    genero: "Coreanas",
    rating: 10,
    sinopsis:
      "Reconocida por su salto de calidad y su diseño audaz en la última década.",
  },
  {
    titulo: "Jaguar",
    imagen: "imagenes/jaguar.png",
    genero: "Británicas",
    rating: 10,
    sinopsis: "Elegancia británica en autos deportivos y de lujo.",
  },
  {
    titulo: "Land Rover",
    imagen: "imagenes/land.jpeg",
    genero: "Británicas",
    rating: 10,
    sinopsis: "Especialista británica en vehículos todoterreno de alta gama.",
  },
];

// ─────────────────────────────────────────
// FUNCIÓN 1: crearCard
// ─────────────────────────────────────────
function crearCard(anime) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${anime.imagen}" alt="${anime.titulo}">
    <div class="card-info">
      <span class="genero">${anime.genero}</span>
      <h2>${anime.titulo}</h2>
      <p>${anime.sinopsis}</p>
      <span class="rating">${anime.rating}</span>
    </div>
  `;

  return card;
}

// ─────────────────────────────────────────
// FUNCIÓN 2: renderGrilla
// ─────────────────────────────────────────
function renderGrilla(lista) {
  const grilla = document.querySelector("#grilla");
  const contador = document.querySelector("#contador");

  grilla.innerHTML = "";

  lista.forEach((anime) => {
    const card = crearCard(anime);
    grilla.appendChild(card);
  });

  contador.textContent = lista.length + " marcas encontradas";
}

// ─────────────────────────────────────────
// FUNCIÓN 3: buscar
// ─────────────────────────────────────────
function buscar(lista, termino) {
  return lista.filter((anime) =>
    anime.titulo.toLowerCase().includes(termino.toLowerCase()),
  );
}

// ─────────────────────────────────────────
// FUNCIÓN 4: filtrarPorGenero
// ─────────────────────────────────────────
function filtrarPorGenero(lista, genero) {
  if (genero === "") {
    return lista;
  }
  return lista.filter((anime) => anime.genero === genero);
}

// ─────────────────────────────────────────
// FUNCIÓN 5: buscarYFiltrar
// ─────────────────────────────────────────
function buscarYFiltrar() {
  const termino = document.querySelector("#busqueda").value;
  const genero = document.querySelector("#genero").value;

  const resultadoBusqueda = buscar(animes, termino);
  const resultadoFinal = filtrarPorGenero(resultadoBusqueda, genero);

  renderGrilla(resultadoFinal);
}

// ─────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────
document.querySelector("#busqueda").addEventListener("input", buscarYFiltrar);
document.querySelector("#genero").addEventListener("change", buscarYFiltrar);

// Render inicial — muestra todas las marcas al abrir la página
renderGrilla(animes);
