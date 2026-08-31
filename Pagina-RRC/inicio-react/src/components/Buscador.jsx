import { useState } from "react"

function Buscador() {
  const [texto, setTexto] = useState("")
  const frutas = ["manzana", "pera", "naranja", "banana", "kiwi", "mango"]

  const cambiarTexto = (e) => {
    setTexto(e.target.value)
  }

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(texto.toLowerCase())
  )

  return (
    <>
     <div>
       <input
         type="text"
         placeholder="Buscar..."
         value={texto}
         onChange={cambiarTexto}
       />
       <ul>
         {frutasFiltradas.map((fruta, index) => (
           <li key={index}>{fruta}</li>
         ))}
       </ul>
     </div>
    </> 
  )
}

export default Buscador