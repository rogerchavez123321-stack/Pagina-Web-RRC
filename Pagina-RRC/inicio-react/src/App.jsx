import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Persona from './components/Persona'
import Perfil from './components/Perfil'
import TarjetaPelicula from './components/TarjetaPelicula'
import Contador from './components/Contador'


function App() {
  const [count, setCount] = useState(0)
  const peliculas = [
  { id: 1, titulo: "Interstellar",año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight",año: 2008, vista: true  },
  { id: 3, titulo: "Inception",año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer",año: 2023, vista: true  },
  ];
  return (
    <>
     <div>
      <Perfil nombre="Roger" rol="Desarrollador" lenguajes={["JavaScript", "React", "CSS"]} />
     </div>
     <Persona nombre="Roger" apellido="Chavez"/>
     <div>
      <h2>Lista de Películas</h2>
      {peliculas.map((peli) => (
        <TarjetaPelicula key={peli.id} titulo={peli.titulo} año={peli.año} vista={peli.vista} />
      ))}
     </div>
     <div>
      <Contador />
     </div> 

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      
    </>
  )
}

export default App