import { Header } from './components/layout/Header'
import { navItems } from './data/wedding'
import Home from './home'
import Invitation from './invitation'
import Details from './pages/Details'
import OurStory from './pages/OurStory'
import Rsvp from './pages/Rsvp'

function App() {
  let page

  switch (window.location.pathname) {
    case '/invitation':
      page = <Invitation />
      break
    case '/details':
      page = <Details />
      break
    case '/our-story':
      page = <OurStory />
      break
    case '/rsvp':
      page = <Rsvp />
      break
    default:
      page = <Home />
  }

  return (
    <>
      <Header navItems={navItems} />
      {page}
    </>
  )
}

export default App
