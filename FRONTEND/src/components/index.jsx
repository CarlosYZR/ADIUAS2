import { useNavigate } from "react-router-dom";
import "../assets/css/index.css";

const services = [
  {
    title: "Identificación y perfil de apoyo",
    description:
      "Conocemos las necesidades de cada estudiante y construimos su perfil de apoyo, con los ajustes razonables que requiere.",
  },
  {
    title: "Tutoría de apoyo especializado",
    description:
      "Una tutoría o un plan de apoyo especializado da seguimiento al plan en su propia unidad académica.",
  },
  {
    title: "Red de apoyo",
    description:
      "Docentes, familias y asesores se suman al plan con orientaciones claras sobre qué hacer.",
  },
  {
    title: "Formación docente",
    description:
      "Cursos y actividades para construir clases, materiales y evaluaciones accesibles.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return(

      <main className="index">
      <section
        className="landing-hero"
        aria-labelledby="landing-title"
      >
        <div className="landing-hero__content">
          <h1 id="landing-title">Programa de Atención a la Diversidad ADIUAS</h1>
          <p className="landing-hero__intro">
            La Universidad Autónoma de Sinaloa, en coordinación con Secretaría
            Académica Universitaria y a través del Programa ADIUAS, responde a las
            necesidades sociales con calidad educativa, y con ello estar a la
            vanguardia de las políticas internacionales y nacionales en el tema
            de educación como una prioridad institucional.
          </p>
          <blockquote className="landing-hero__quote">
            “eliminando las barreras para el aprendizaje y apoyando la formación
            integral e inclusiva”
          </blockquote>
          <button
            className="landing-hero__button"
            type="button"
            onClick={()=>navigate('/login')}
          >
            Iniciar sesión
          </button>
        </div>
        <div className="hero-seal" aria-hidden="true">ADIUAS</div>
      </section>

      <section className="welcome-section" aria-labelledby="welcome-title">
        <div className="welcome-section__content">
          <h2 id="welcome-title">Nadie se queda fuera de la Universidad</h2>
          <p className="welcome-section__intro">
            La Universidad Autónoma de Sinaloa (UAS), a través de la Secretaría
            Académica de la Universidad (SAU) y el Programa de Atención a la
            Diversidad (ADI-UAS), invita las diversas actividades y eventos que se
            estarás desarrollando en los próximos días en la Jornada de Inclusión
            y Accesibilidad, dentro del marco del Día Internacional de las
            Personas con Discapacidad.
          </p>

          <div className="service-cards">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>

  );
  
};

export default Index;
