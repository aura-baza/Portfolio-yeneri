import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {slideInLeft } from "../../lib/animations";
import Helados from '../../assets/Helados.png';
import HogarTech from '../../assets/HogarTech.png';
import HogarTechT from '../../assets/TarjetaHogarTech.png';
import Aff from '../../assets/flyer.png';
import Aff1 from '../../assets/flyer2.png';

const sliderImages = [
  {
    url: Helados,
    alt: 'Espacio de trabajo profesional con iluminación cálida'
  },
  {
    url: HogarTech,
    alt: 'Oficina moderna con plantas y luz natural'
  },
  {
    url: HogarTechT,
    alt: 'Reunión colaborativa en ambiente acogedor'
  },
  {
    url: Aff,
    alt: 'Presentación de ideas en espacio inspirador'
  },
  {
    url: Aff1,
    alt: 'Trabajo al aire libre con equilibrio vida-trabajo'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Slider Images */}
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                Auténtico como en casa,
                <span className="block text-white" >profesional como debe ser</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
                Transformo ideas en experiencias digitales que conectan, inspiran y generan resultados reales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-black text-lg px-8 py-6 transition-all duration-300 hover:scale-105">
                    Ver mi trabajo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between max-w-3xl">
              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="!p-2 !rounded-full !bg-white/20 !hover:bg-white/30 backdrop-blur-sm transition-all"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={goToNext}
                  className="!p-2 !rounded-full !bg-white/20 !hover:bg-white/30 backdrop-blur-sm transition-all"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {sliderImages.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`!p-0 !min-w-0 !h-auto !rounded-full transition-all ${
                      index === currentSlide
                        ? '!w-8 !h-2 !bg-[#4313B8]'
                        : '!w-2 !h-2 !bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#F297FB] ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            transition={slideInLeft}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Bienvenido a mi espacio digital
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Soy una profesional apasionada por crear soluciones que marquen la diferencia. 
              Con años de experiencia y un enfoque centrado en las personas, transformo desafíos 
              en oportunidades y proyectos en historias de éxito.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-sm border border-amber-100">
                <div className="text-4xl font-bold text-[#1C1E2F] mb-2">2+</div>
                <div className="text-gray-700 font-medium">Años de experiencia</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-amber-100">
                <div className="text-4xl font-bold text-[#1C1E2F] mb-2">50+</div>
                <div className="text-gray-700 font-medium">Proyectos completados</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-amber-100">
                <div className="text-4xl font-bold text-[#1C1E2F] mb-2">100%</div>
                <div className="text-gray-700 font-medium">Compromiso y dedicación</div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4313B8] ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            ¿Listo para comenzar tu próximo proyecto?
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Trabajemos juntos para convertir tu visión en realidad. 
            Estoy aquí para escucharte y crear algo extraordinario.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50 text-lg px-8 py-6">
              Contáctame ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}