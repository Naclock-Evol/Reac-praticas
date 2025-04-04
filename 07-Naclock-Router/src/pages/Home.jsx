import { Link } from "../Link";
import '../style/Home.css'

export default function HomePage() {
  return (
    <main className="contenedorHome">
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Ir sobre nosotros</Link>
    </main>
  )
}