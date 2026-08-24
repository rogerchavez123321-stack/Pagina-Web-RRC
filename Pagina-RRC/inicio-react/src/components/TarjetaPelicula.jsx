function TarjetaPelicula({ titulo, año, vista }) {
  return (
    <div>
      <h3>
        {titulo} {vista && '✓'}
      </h3>
      <p>Año: {año}</p>
    </div>
  );
}

export default TarjetaPelicula;