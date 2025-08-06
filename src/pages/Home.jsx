import { Link } from 'react-router-dom';
import './Home.scss';

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
    </div>
  );
};

export default Home;