import { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import pastorPhoto_celso from '../assets/pr_celso.jpg'
import pastorPhoto_miriam from '../assets/pr_miriam.jpg'
import aviso1 from '../assets/avisos/aviso1.jpeg'
import aviso2 from '../assets/avisos/aviso2.jpeg'
import aviso3 from '../assets/avisos/aviso3.jpeg'
import aviso4 from '../assets/avisos/aviso4.jpeg'
import aviso5 from '../assets/avisos/aviso5.jpeg'
import './Home.css'

const slides = [aviso1, aviso2, aviso3, aviso4, aviso5]

const pastors = [
  {
    name: 'Pastor Celso',
    description: 'Pastor titular da igreja',
    photo: pastorPhoto_celso,
  },
  {
    name: 'Pastora Miriam',
    description: 'Pastora auxiliar da igreja. Esposa do Pastor Celso. Casados há mais de 30 anos, têm dois filhos.',
    photo: pastorPhoto_miriam,
  },
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt="Logo da igreja" className="hero-logo" />
          <h1>Bem-vindo à Igreja Cristã Renascente</h1>
          <p className="hero-subtitle">Uma comunidade para você e sua família crescerem juntos em fé, amor e esperança.</p>
        </div>
      </section>

      <section className="services">
        <div className="services-container">
          <div className="service-block">
            <h2>Culto Público</h2>
            <p>Domingo às 9:30h</p>
          </div>
          <div className="divider" />
          <div className="service-block">
            <h2>Culto de Ensino</h2>
            <p>Quinta-feira às 19:45h</p>
          </div>
          <div className="divider" />
          <div className="location-block">
            <h2>Localização</h2>
            <p>Rua Armando Baccelli, 178<br />Sorocaba</p>
          </div>
        </div>
      </section>

      <section className="carousel">
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Aviso ${idx + 1}`}
              className="carousel-img"
            />
          ))}
        </div>
        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot${currentSlide === idx ? ' active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>

      <section className="video">
        <h2>Assista aos nossos cultos</h2>
        <div className="video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eVSUR3puNzo?si=m3M81Yqu23u8ZiTE&amp;start=2812" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
      </section>

      <section className="pastors">
        <h2>Nossos Pastores</h2>
        <div className="pastor-list">
          {pastors.map((p, i) => (
            <div className="pastor-card" key={i}>
              <img src={p.photo} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
