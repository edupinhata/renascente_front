import './Agenda.css'

function Agenda() {
  return (
    <div className="agenda">
      <h1>Agenda de Eventos</h1>
      <div className="agenda-list">
        <h2>Setembro</h2>
        <ul>
          <li><strong>07:</strong> Marcha para Jesus</li>
          <li><strong>27, 28:</strong> Congresso mulheres</li>
        </ul>
        <h2>Outubro</h2>
        <ul>
          <li><strong>05:</strong> Aniversário da Igreja da Sede</li>
          <li><strong>11:</strong> Evento do dia das crianças</li>
          <li><strong>18, 19:</strong> Aniversário da Igreja</li>
          <li><strong>25:</strong> Chá de mulheres + reunião de obreiros</li>
        </ul>
        <h2>Novembro</h2>
        <ul>
          <li><strong>09:</strong> Santa Ceia</li>
          <li><strong>14:</strong> Vigília</li>
          <li><strong>29:</strong> Chá de mulheres</li>
        </ul>
        <h2>Dezembro</h2>
        <ul>
          <li><strong>13:</strong> Reunião de Obreiros</li>
          <li><strong>14:</strong> Santa Ceia, Dia da Bíblia</li>
          <li><strong>21:</strong> Encerramento e Natal</li>
        </ul>
      </div>
    </div>
  )
}

export default Agenda
