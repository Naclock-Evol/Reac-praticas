import { Link } from "../Link";
import '../style/About.css'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Hola! Mi nombre es Naclock Evol y estoy creando un clon de React Router.',
    button: 'Ir al Inicio'
  },
  en: {
    title: 'About us',
    description: 'Hello! My name is Naclock Evol and I am creating a clone of React Router.',
    button: 'Go to Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <main className="contenedorAbout">
      <h1>{i18n.title}</h1>
      <div>
        <img
        src="https://areajugones.sport.es/wp-content/uploads/2022/11/goku-ui-verdadero.jpg" 
        alt="Goku Ultra Instinto" />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </main>
  )
}