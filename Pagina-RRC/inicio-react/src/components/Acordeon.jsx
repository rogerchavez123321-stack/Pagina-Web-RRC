import { useState } from "react"

function Acordeon(props) {
  const [abierto, setAbierto] = useState(false)

  const cambiar = () => {
    setAbierto(!abierto)
  }

  return (
   <>
     <div>
       <button onClick={cambiar}>
         {props.titulo} {abierto ? "▲" : "▼"}
       </button>
       {abierto && <p>{props.contenido}</p>}
     </div>
   </>
  )
}

export default Acordeon