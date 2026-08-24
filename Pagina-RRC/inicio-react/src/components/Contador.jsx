import { useState } from 'react';

function Contador() {
  const [conteo, setConteo] = useState(0);

  const sumar = () => setConteo(conteo + 1);
  const restar = () => setConteo(conteo > 0 ? conteo - 1 : 0);
  const reiniciar = () => setConteo(0);

  return (
    <div>
      <p>Conteo actual: {conteo}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Contador