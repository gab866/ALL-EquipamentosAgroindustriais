import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <h1>Sobre a ALL Equipamentos Agroindustriais</h1>
          <p className="hero-text">
            Com expertise em silos e secadores de grãos, fornecemos soluções completas para o setor agrícola
            e industrial, focadas na eficiênciae durabilidade. Atuamos de forma personalizada para atender às 
            necessidades específicas de nossos clientes, garantindo equipamentos de alta perfomance para o mercado nacional.
          </p>
        </section>

        <section className="about-content">
          <div className="content-grid">
            <div className="content-block">
              <h2>Nossa Missão</h2>
              <p>
                Fornecer equipamentos agroindustriais de excelência, contribuindo para o 
                desenvolvimento sustentável do agronegócio brasileiro através de soluções 
                inovadoras e atendimento especializado.
              </p>
            </div>

            <div className="content-block">
              <h2>Nossa Visão</h2>
              <p>
                Ser a empresa líder em equipamentos agroindustriais, reconhecida pela 
                qualidade dos produtos, inovação tecnológica e compromisso com a 
                satisfação dos clientes.
              </p>
            </div>

            <div className="content-block">
              <h2>Nossos Valores</h2>
              <ul>
                <li>Qualidade e durabilidade em todos os produtos</li>
                <li>Inovação constante e tecnologia de ponta</li>
                <li>Atendimento personalizado e suporte técnico</li>
                <li>Compromisso com a sustentabilidade</li>
                <li>Transparência e ética nos negócios</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Entre em Contato</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Telefone</h3>
              <p>(53) 9999-9999</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>contato@allequipamentos.com.br</p>
            </div>
            <div className="contact-item">
              <h3>Endereço</h3>
              <p>Rua ALL, 123<br />Pelotas - RS</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;