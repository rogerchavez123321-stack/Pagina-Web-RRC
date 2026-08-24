function Perfil({ nombre, rol, lenguajes }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{rol}</p>
      <ul>
        {lenguajes.map((lenguaje, index) => (
          <li key={index}>{lenguaje}</li>
        ))}
      </ul>
    </div>
  );
}

export default Perfil;