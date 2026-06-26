import Home from './home'
import Invitation from './invitation'

function App() {
  if (window.location.pathname === '/invitation') {
    return <Invitation />
  }

  return <Home />
}

export default App
