const URL = "http://localhost:3000/tareas";

async function crearTarea(texto) {
  const respuesta = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      texto: texto,
      hecha: false,
    }),
  });
  const tareaCreada = await respuesta.json();
  console.log("tarea creada:", tareaCreada);
  return tareaCreada;
}

//crearTarea('Aprender Fetching Data');

async function marcarHecho(id) {
  const respuesta = await fetch(`${URL}/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      hecha: true,
    }),

  });
  const marcadoHecho = await respuesta.json();
  console.log("ID:", marcadoHecho);
  return marcadoHecho;
}

//marcarHecho("axY6Hjbzxso");
async function borrarTarea(id) {
  const respuesta = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });

  if (!respuesta.ok) {
    throw new Error(`Error al borrar la tarea: ${respuesta.status}`);
  }
  console.log("Tarea eliminada:", id);
}

borrarTarea("axY6Hjbzxso");
