import { useState } from "react";

function ListaCompras() {
  const [items, setItems] = useState([]);
  const [texto, setTexto] = useState("");

  const cambiarTexto = (e) => {
    setTexto(e.target.value);
  };

  const agregarItem = () => {
    if (texto === "") return;

    const nuevo = {
      id: Date.now(),
      nombre: texto,
      comprado: false,
    };

    setItems([...items, nuevo]);
    setTexto("");
  };

  const marcarComprado = (id) => {
    const listaActualizada = items.map((item) => {
      if (item.id === id) {
        return { ...item, comprado: !item.comprado };
      }
      return item;
    });
    setItems(listaActualizada);
  };

  const eliminarItem = (id) => {
    const listaFiltrada = items.filter((item) => item.id !== id);
    setItems(listaFiltrada);
  };

  const faltantes = items.filter((item) => item.comprado === false).length;

  return (
    <div>
      <input
        type="text"
        placeholder="Nuevo ítem"
        value={texto}
        onChange={cambiarTexto}
      />
      <button onClick={agregarItem}>Agregar</button>

      <p>Faltan comprar: {faltantes}</p>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.comprado}
              onChange={() => marcarComprado(item.id)}
            />
            <span
              style={{
                textDecoration: item.comprado ? "line-through" : "none",
              }}
            >
              {item.nombre}
            </span>
            <button onClick={() => eliminarItem(item.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;
