
import { Link } from "../Link"
import '../style/Page404.css'

export default function Page404() {
  return (
    <main className="contenedor404">
      <div className="page404">
        <img src="https://cdn-icons-png.flaticon.com/256/11494/11494248.png" alt="404" />
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link className='goHome' to='/' >Go Homepage</Link>
      </div>
    </main>
  )
}
