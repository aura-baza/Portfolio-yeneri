import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Heart, Coffee, Lightbulb, Target } from 'lucide-react';
import bici from '../../assets/bici.jpg';
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft } from "../../lib/animations";

export default function About() {
  const skills = [
    'Desarrollo Web', 'Diseño UX/UI', 'Consultoría Digital', 'Estrategia de Marca',
    'Marketing Digital', 'Gestión de Proyectos', 'Creatividad', 'Liderazgo'
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
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-sm text-gray-600 mb-1">Mi filosofía</p>
                <p className="font-semibold text-gray-900">"Auténtico como en casa"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#4313B8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Los ingredientes de mi historia
          </h2>
          
          <div className="prose prose-lg max-w-none text-white">
            <p className="text-xl leading-relaxed mb-8">
              Como cualquier buen plato, mi carrera profesional ha sido el resultado de combinar 
              los ingredientes correctos en el momento adecuado. Todo comenzó con una curiosidad 
              insaciable y el deseo de crear cosas que realmente importaran.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Durante mis primeros años, aprendí que la técnica sin corazón es como cocinar sin sal: 
              funcional, pero sin alma. Por eso, desde el principio, decidí que cada proyecto 
              llevaría no solo mi conocimiento técnico, sino también mi esencia personal.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              He tenido la fortuna de trabajar con personas increíbles, cada una aportando su propio 
              sabor a mi experiencia. Desde startups que apenas comenzaban hasta empresas consolidadas 
              que buscaban reinventarse, cada colaboración ha sido una lección valiosa.
            </p>
            
            <p className="text-lg leading-relaxed">
              Hoy, después de años de experiencia, mi enfoque sigue siendo el mismo: tratar cada 
              proyecto como si fuera para mi propia familia. Con el mismo cuidado, la misma atención 
              al detalle y el mismo amor que pondría en preparar una cena especial para las personas 
              que más quiero.
            </p>
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
              <Card key={value.title} className="border-amber-200 hover:shadow-lg transition-shadow">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Más allá del trabajo
          </h2>
          <p className="text-lg text-white mb-8">
            Cuando no estoy trabajando en proyectos, me encontrarás disfrutando de una buena taza de café, 
            explorando nuevos lugares, leyendo sobre tendencias emergentes, o simplemente pasando tiempo 
            de calidad con las personas que más valoro. Creo firmemente que las mejores ideas nacen 
            cuando estamos relajados y conectados con nosotros mismos.
          </p>
          <p className="text-lg text-white">
            Al final del día, lo que más me motiva es saber que mi trabajo ha hecho una diferencia real 
            en la vida de las personas. Como una buena comida casera, espero que mi trabajo te deje 
            esa sensación cálida de satisfacción y el deseo de volver por más.
          </p>
        </div>
      </section>
      </motion.div>
    </div>
  );
}