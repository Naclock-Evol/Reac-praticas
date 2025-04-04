
import { lazy } from 'react'
import { Router } from './Router'
import { Route } from './Route'

const LazyPage404 = lazy(() => import('./pages/404.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazySearchPage = lazy(() => import('./pages/Search.jsx'))

const routes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: LazySearchPage
  }
] 

function App() {

  return (
    <>
      <main>
        <Router routes={routes} defaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </main>
    </>
  )
}

export default App
