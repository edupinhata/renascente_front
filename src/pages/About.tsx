import './About.css'

function About() {
  return (
    <div className="about">
      <h1>Quem Somos</h1>
      <section className="about-section">
        <h2>Nossa Missão</h2>
        <p>
          Proclamar e ensinar o evangelho de Jesus Cristo com fidelidade e poder, alcançando vidas e formando discípulos por meio da Palavra, para que vivam em santidade, sirvam ao próximo e adorem a Deus em espírito e em verdade, para o louvor da sua glória.
        </p>
      </section>
      <section className="about-section">
        <h2>Nossa Visão</h2>
        <p>
          Ser uma igreja viva, missionária e acolhedora, comprometida com a proclamação fiel das Escrituras, a formação de discípulos e o serviço cristão, influenciando a cultura com os valores do Reino de Deus.
        </p>
      </section>
      <section className="about-section">
        <h2>Nossos Valores</h2>
        <ul className="values-list">
          <li>📖 Centralidade da Palavra de Deus (Bíblia)</li>
          <li>🕊️ Dependência do Espírito Santo</li>
          <li>🙏 Vida de oração, santidade e adoração</li>
          <li>👪 Cuidado com a família</li>
          <li>🧡 Amor, serviço e compaixão</li>
          <li>🤝 Evangelização e acolhimento</li>
          <li>🌱 Comunhão, Discipulado e maturidade espiritual</li>
          <li>🌍 Influência com os valores do Reino</li>
        </ul>
      </section>
    </div>
  )
}

export default About
