import { Link } from 'react-router-dom';
import './Home.scss';
import './About.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bem-vindos à ALL Equipamentos Agroindustriais</h1>
            <p>
              Especialistas em silos e secadores de grãos.<br/>
              Qualidade e excelência ao serviço de armazenagem.<br/>
              Confiabilidade e eficiência em soluções para o agronegócio.
            </p>
            <Link to="/catalogo" className="btn btn-cta">
              Ver Catálogo de Produtos
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Por que escolher a ALL?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Qualidade Garantida</h3>
              <p>Equipamentos de alta durabilidade e performance</p>
            </div>
            <div className="feature">
              <h3>Tecnologia Avançada</h3>
              <p>Soluções modernas para o agronegócio</p>
            </div>
            <div className="feature">
              <h3>Suporte Especializado</h3>
              <p>Atendimento técnico qualificado</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="about-section">
        <div className="container">
          <div className="about-hero">
            <h1>Sobre a ALL Equipamentos Agroindustriais</h1>
            <p className="hero-text">
              Com expertise em silos e secadores de grãos, fornecemos soluções completas para o setor agrícola
              e industrial, focadas na eficiência e durabilidade. Atuamos de forma personalizada para atender às 
              necessidades específicas de nossos clientes, garantindo equipamentos de alta performance para o mercado nacional.
            </p>
          </div>

          <div className="about-content">
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
          </div>

          <section className="company-fleet">
            <div className="fleet-container">
              <div className="company-info">
                <h2>Nossa Empresa</h2>
                <div className="info-content">
                  <div className="info-item">
                    <h3>Experiência</h3>
                    <p>Mais de 15 anos no mercado de equipamentos agroindustriais, atendendo produtores rurais em todo o Rio Grande do Sul.</p>
                  </div>
                  <div className="info-item">
                    <h3>Cobertura</h3>
                    <p>Entregas em toda a região Sul, com frota própria garantindo pontualidade e segurança no transporte.</p>
                  </div>
                  <div className="info-item">
                    <h3>Especialização</h3>
                    <p>Focamos em silos, secadores de grãos e equipamentos para armazenagem, oferecendo soluções completas.</p>
                  </div>
                  <div className="info-item">
                    <h3>Compromisso</h3>
                    <p>Garantimos suporte técnico especializado e peças de reposição para todos os equipamentos comercializados.</p>
                  </div>
                </div>
              </div>
              
              <div className="fleet-photos">
                <h2>Nossa Frota</h2>
                <div className="photos-grid">
                  <div className="photo-item">
                    <div className="placeholder-img">Foto teste</div>
                    <p>Entregas rápidas e seguras</p>
                  </div>
                  <div className="photo-item">
                    <div className="placeholder-img">Foto teste</div>
                    <p>Frota própria moderna</p>
                  </div>
                  <div className="photo-item">
                    <div className="placeholder-img">Foto teste</div>
                    <p>Cobertura em toda região</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="contact-section">
            <h2>Entre em Contato</h2>
            <p className="contact-subtitle">Estamos prontos para atender suas necessidades</p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <h3>Telefone</h3>
                <p>(53) 9994349-9999</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p>contato@allequipamentos.com.br</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <h3>Endereço</h3>
                <p>Rua ALL, 123<br />Pelotas - RS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;