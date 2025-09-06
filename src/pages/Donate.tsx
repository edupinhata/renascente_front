import ofertas from '../assets/ofertas.jpeg'
import './Donate.css'

function Donate() {
  return (
    <div className="donate">
      <h1>Doações & Ofertas</h1>
      <div className="donate-img-wrapper">
        <img src={ofertas} alt="Ofertas e Doações" className="donate-img" />
      </div>
      <p className="donate-text">
        Sua contribuição é fundamental para que possamos continuar proclamando o evangelho, servindo à comunidade e apoiando projetos sociais. Doe com alegria e gratidão!
      </p>
      <div className="donate-info">
        <h2>Como doar</h2>
        <p>
          Você pode realizar sua oferta presencialmente nos cultos ou via transferência bancária:
        </p>
        <ul>
          <li><strong>Banco:</strong> 000 - Nome do Banco</li>
          <li><strong>Agência:</strong> 1234</li>
          <li><strong>Conta:</strong> 56789-0</li>
          <li><strong>PIX:</strong> exemplo@igreja.com.br</li>
        </ul>
      </div>
    </div>
  )
}

export default Donate
