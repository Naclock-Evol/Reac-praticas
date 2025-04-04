import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from '../Router.jsx'
import { Route } from '../Route.jsx'
import { Link } from '../Link.jsx'
import { getCurrentPath } from "../utils.js";

vi.mock('../utils.js', () => ({
  getCurrentPath: vi.fn()
}))
describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it ('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue(() => '/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Link', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route path='/' Component={() => {
          return (
            <>
            <h1>Home</h1>
            <Link to='/about'>Ir sobre nosotros</Link>
            </>
          )
        }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    //click on link
    screen.getByText(/Ir sobre nosotros/).click()

    const aboutTitle = await screen.findByText('About')

    console.log(screen.debug())

    //check if url has changed
    expect(aboutTitle).toBeTruthy()
  })
})