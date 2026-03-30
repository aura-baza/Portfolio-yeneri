import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Heart, Coffee, Lightbulb, Target } from 'lucide-react';
import bici from '../../assets/yo.png';
import { motion } from "framer-motion";
import { slideInLeft } from "../../lib/animations";
import Dibujo1 from '../../assets/Historia/dibujo tradicional. año 2017. edad 12 años.jpeg';
import Dibujo2 from '../../assets/Historia/dibujo tradiciona. año 2018. edad 13 años.jpeg';
import Dibujo3 from '../../assets/Historia/dibujo tradicional. año 2019. edad 14 años.jpeg';
import Dibujo4 from '../../assets/Historia/ilustracion digital. año 2020. edad 15 años.jpeg';
import Dibujo5 from '../../assets/Historia/dibujo tradiconal. año 2021. edad 16 años.jpeg';
import Dibujo6 from '../../assets/Historia/Ilustracion digital fanart. año 2024. edad 19 años.jpeg';
// import Dibujo7 from '../../assets/Historia/ilustracion digital. año 2018. edad 13 años.jpeg';
import Dibujo8 from '../../assets/Historia/dibujo tradiconal. año 2025. edad 20 años.jpeg';
import Dibujo9 from '../../assets/Historia/dibujo tradicional. año 2018. edad 13 años.jpeg';
import Dibujo10 from '../../assets/Historia/ilustracion digital. año 2018. edad 13 años.jpeg';
// import Patron from '../assets/Logo patron/patron rosa.png';
const carouselImages = [
  {
    url: Dibujo1,
    alt: 'Ingredientes frescos en cocina cálida',
    label: '12 años'
  },
  {
    url: Dibujo2,
    alt: 'Lluvia de ideas creativas',
    label: '13 años'
  },
  {
    url: Dibujo3,
    alt: 'Espacio de trabajo creativo',
    label: '14 años'
  },
  {
    url: Dibujo4,
    alt: 'Colaboración en equipo',
    label: '15 años'
  },
  {
    url: Dibujo5,
    alt: 'Aprendizaje y crecimiento personal',
    label: '16 años'
  },
  {
    url: Dibujo6,
    alt: 'Nuevos comienzos al amanecer',
    label: '19 años'
  },
  {
    url: Dibujo8,
    alt: 'Alianza y confianza profesional',
    label: '20 años'
  },
  {
    url: Dibujo9,
    alt: 'Logros y éxito en la cima',
    label: '13 años'
  },
  {
    url: Dibujo10,
    alt: 'Logros y éxito en la cima',
    label: '13 años'
  },
];

export default function About() {
  const skills = [
    'Identidad visual', 'Diseño UX/UI', 'Branding', 'Estrategia de Marca',
    'Marketing Digital', 'Creatividad', 'Ilustración'
  ];

  const values = [
    {
      icon: Heart,
      title: 'Pasión genuina',
      description: 'Cada proyecto lo vivo como si fuera mío. La pasión se nota en cada detalle.'
    },
    {
      icon: Coffee,
      title: 'Dedicación constante',
      description: 'Como el café de la mañana, mi compromiso es diario y consistente.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación práctica',
      description: 'Ideas frescas con los pies en la tierra. Innovar sin perder el rumbo.'
    },
    {
      icon: Target,
      title: 'Resultados medibles',
      description: 'Los objetivos claros son como una receta: hay que seguirlos para el éxito.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <motion.div
        initial={slideInLeft.initial}
        whileInView={slideInLeft.animate}
        transition={slideInLeft}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        {/* Hero Section */}
        <section className="py-20 bg-[#F297FB] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Mi historia es como una receta familiar
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transmitida de generación en generación, perfeccionada con el tiempo,
                  y siempre preparada con amor. Cada experiencia ha sido un ingrediente
                  que me ha llevado hasta aquí.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-[#4313B8] text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={bici}
                  alt="Mi espacio de trabajo personal"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg bg-[url('./assets/Logo-patron/patronrosa.png')] bg-contain bg-center">
                  <p className="text-sm text-[#4313B8] mb-1">Mi filosofía</p>
                  <p className="font-semibold text-[#4313B8]">"Auténtico como en casa"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-[#4313B8] bg-[url('./assets/Logo-patron/patrondemarca.png')] bg-cover bg-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#4313B8] mb-8 text-center">
              MI HISTORIA HECHA ARTE
            </h2>
          </div>

          {/* Infinite Carousel - Full Width */}
          <div className="mt-12 mb-12 overflow-hidden">
            <div className="infinite-carousel-track flex gap-6">
              {/* First set of images */}
              {carouselImages.map((image, index) => (
                <div
                  key={`first-${index}`}
                  className="shrink-0 w-72 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-72 h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-semibold text-lg">{image.label}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless infinite loop */}
              {carouselImages.map((image, index) => (
                <div
                  key={`second-${index}`}
                  className="shrink-0 w-72 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-72 h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-semibold text-lg">{image.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-20 bg-[#F297FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Los valores que me guían
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="border-[#4313B8]  hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-[#4313B8] mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-[#4313B8]">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Touch Section */}
        <section className="py-20 bg-[#4313B8]">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Más allá del trabajo
            </h2>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-justify">
            <p className="text-lg text-white mb-8 ">
              Cuando no estoy desarrollando proyectos, dedico tiempo a explorar tendencias de diseño, inspiración visual y nuevas ideas creativas que enriquecen mi proceso y me permiten evolucionar como diseñadora.
              Creo que las mejores propuestas nacen de la curiosidad, la observación y la creatividad, elementos que transformo en soluciones visuales que aportan valor y generan impacto.
            </p>
            <p className="text-lg text-white">
              Al final, lo que más me motiva es crear diseños que generen impacto y aporten valor real. Busco que cada proyecto deje una experiencia visual clara, memorable y significativa, que conecte con las personas y fortalezca cada marca.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}