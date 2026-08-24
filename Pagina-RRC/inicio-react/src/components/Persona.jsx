export default function Persona(props) {
  const{nombre, apellido} = props
  return (
    <div>
      <h1>Hola {nombre} {apellido}</h1>
    </div>
  );
}
