import { useState } from 'react';
import '../assets/css/dashboard.css';
import bannerImage from '../assets/img/carrusel-banner.png';
import campusImage from '../assets/img/rectoria2.jpg';
import activityImage from '../assets/img/carrusel-item2.jpg';
import Tal from "../assets/img/carrusel-item.jpg"

//Editables para el carrusel
//Agregar y quitar segun convenga
const slides = [
  {
    title: 'Inclusión y accesibilidad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoqua. Ut enim ad minico laboris nisi ut aliquip ex ex',
    image: bannerImage,  
    imageAlt: 'Banner del Programa ADIUAS',
  },
  {
    title: 'Universidad para todas las personas',
    description:
      'ADIUAS acompaña a aspirantes y estudiantes de bachillerato y licenciatura para que ingresen, permanezcan y concluyan sus estudios en igualdad de condiciones.',
    image: campusImage,
    imageAlt: 'Instalaciones de la Universidad Autónoma de Sinaloa',
  },
  {
    title: 'Actividades y comunidad',
    description:
      'Infórmate sobre las actividades y experiencias que promueven una cultura de respeto, diversidad e inclusión en la universidad.',
    image: activityImage,
    imageAlt: 'Actividad de la comunidad universitaria',
  },
  {
    title: "Ciencia",
    description: "Aprende con nosotros sobre todo",
    image: Tal,
    imageAlt: "hola",
  }
];

const Dashboard = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <main className="dashboard">
      <section className="dashboard-carousel" aria-label="Novedades de ADIUAS">
        <div className="dashboard-carousel__image-wrap">
          <img
            className="dashboard-carousel__image"
            src={slide.image}
            alt={slide.imageAlt}
          />
          <span className="dashboard-carousel__counter">
            {activeSlide+1} / {slides.length}
          </span>
        </div>

        <div className="dashboard-carousel__content" aria-live="polite">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className="dashboard-carousel__controls">
            <button
              className="dashboard-carousel__arrow"
              type="button"
              aria-label="Ver diapositiva anterior"
              onClick={() => showSlide(activeSlide - 1)}
            >
              ‹
            </button>
            <div className="dashboard-carousel__dots" aria-label="Elegir diapositiva">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  className={`dashboard-carousel__dot${index === activeSlide ? ' is-active' : ''}`}
                  type="button"
                  aria-label={`Ir a diapositiva ${index + 1}: ${item.title}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                  onClick={() => showSlide(index)}
                />
              ))}
            </div>
            <button
              className="dashboard-carousel__arrow"
              type="button"
              aria-label="Ver siguiente diapositiva"
              onClick={() => showSlide(activeSlide + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
