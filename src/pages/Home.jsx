import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Home.scss";

const Home = () => {
  const location = useLocation();

  const stockImages = [
    "/prateleira1.jpeg",
    "/prateleira2.jpeg",
    "/prateleira3.jpg",
    "/prateleira2.jpeg",
    "/prateleira3.jpg",
  ];

  useEffect(() => {
    const scrollToSection = () => {
      if (window.location.hash === "#sobre") {
        setTimeout(() => {
          const element = document.getElementById("sobre");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    scrollToSection();

    const handleHashChange = () => {
      scrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bem-vindos à ALL Equipamentos Agroindustriais</h1>
            <p>
              Especialistas em silos, transportadores e secadores de grãos.
              <br />
              Qualidade e excelência ao serviço de armazenagem.
              <br />
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
              Com expertise em equipamentos e acessórios para armazenagem de
              grãos, fornecemos soluções completas para o setor agrícola e
              industrial, focadas na eficiência e durabilidade. Atuamos de forma
              personalizada para atender às necessidades específicas de nossos
              clientes, garantindo equipamentos de alta performance para o
              mercado nacional.
            </p>
          </div>

          <div className="about-content">
            <div className="content-grid">
              <div className="content-block">
                <h2>Nossa Missão</h2>
                <p>
                  Fornecer equipamentos agroindustriais de excelência,
                  contribuindo para o desenvolvimento sustentável do agronegócio
                  brasileiro através de soluções inovadoras e atendimento
                  especializado.
                </p>
              </div>

              <div className="content-block">
                <h2>Nossa Visão</h2>
                <p>
                  Ser a empresa líder em equipamentos e peças de reposição
                  agroindustriais, reconhecida pela qualidade dos produtos,
                  inovação tecnológica e compromisso com a satisfação dos
                  clientes.
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

          <section className="company-info-section">
            <h2>Nossa Empresa</h2>
            <div className="company-showcase">
              <div className="showcase-item vertical">
                <div className="showcase-content">
                  <h3>Nosso Estoque</h3>
                  <p>
                    Mantemos um amplo estoque de equipamentos e peças de
                    reposição para atendimento imediato. Nossa organização
                    permite disponibilidade constante dos produtos mais
                    procurados, garantindo agilidade no atendimento aos nossos
                    clientes.
                  </p>
                </div>
                <div className="scrolling-carousel">
                  <div className="scrolling-track">
                    {[...stockImages, ...stockImages, ...stockImages, ...stockImages].map((image, index) => (
                      <div key={index} className="scrolling-slide">
                        <img src={image} alt={`Estoque ${(index % stockImages.length) + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="showcase-item reverse">
                <div className="showcase-image">
                  <img src="/carro1.jpeg" alt="Equipe ALL" />
                </div>
                <div className="showcase-content">
                  <h3>Nossas Entregas</h3>
                  <p>
                    Realizamos entregas em toda a região Sul com frota própria,
                    garantindo pontualidade e segurança no transporte dos
                    equipamentos. Nossa logística especializada assegura que
                    seus produtos cheguem em perfeitas condições.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <h3>Experiência</h3>
                <p>
                  Mais de 15 anos no mercado de equipamentos agroindustriais,
                  atendendo produtores rurais em todo o Rio Grande do Sul.
                </p>
              </div>
              <div className="info-item">
                <h3>Cobertura</h3>
                <p>
                  Entregas em toda a região Sul, com frota própria garantindo
                  pontualidade e segurança no transporte.
                </p>
              </div>
              <div className="info-item">
                <h3>Especialização</h3>
                <p>
                  Focamos em silos, secadores de grãos e equipamentos para
                  armazenagem, oferecendo soluções completas.
                </p>
              </div>
              <div className="info-item">
                <h3>Compromisso</h3>
                <p>
                  Garantimos suporte técnico especializado e peças de reposição
                  para todos os equipamentos comercializados.
                </p>
              </div>
            </div>
          </section>

          <div className="contact-section">
            <h2>Entre em Contato</h2>
            <p className="contact-subtitle">
              Estamos prontos para atender suas necessidades
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <h3>Telefone</h3>
                <p>(53) 99934-6782 – (53) 3342-7080</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3>Email</h3>
                <p>all@allagroindustrial.com.br</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3>Endereço</h3>
                <p>
                  Rua Marcílio Dias, 3237 – Pavilhão 55
                  <br />
                  Pelotas - RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
