import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Agenda from './pages/Agenda'
import Cultos from './pages/Cultos'
import Donate from './pages/Donate'
import logo from './assets/logo.svg' // ajuste o caminho se necessário

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'agenda':
        return <Agenda />
      case 'cultos':
        return <Cultos />
      case 'donate':
        return <Donate />
      default:
        return <Home />
    }
  }

  const navigate = (p: string) => {
    setPage(p)
    setMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="brand" onClick={() => navigate('home')}>
            <img src={logo} alt="Logo da igreja" className="brand-logo" />
        </div>
        <nav className="nav-dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
          <ul className={`dropdown-menu${menuOpen ? ' open' : ''}`}>
            <li className={page === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Página inicial</li>
            <li className={page === 'about' ? 'active' : ''} onClick={() => navigate('about')}>Quem somos</li>
            <li className={page === 'agenda' ? 'active' : ''} onClick={() => navigate('agenda')}>Agenda</li>
            <li className={page === 'cultos' ? 'active' : ''} onClick={() => navigate('cultos')}>Cultos</li>
            <li className={page === 'donate' ? 'active' : ''} onClick={() => navigate('donate')}>Oferte</li>
          </ul>
        </nav>
      </header>
      <main>
        {renderPage()}
      </main>
    </>
  )
}

export default App
