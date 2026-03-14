import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Star } from 'lucide-react';
import imagen1 from "../../assets/HogarTech.png"
import imagen2 from "../../assets/logo original helados.png"
import imagen4 from "../../assets/imagen1.jpg"
import imagen5 from "../../assets/imagen2.jpg"
import imagen6 from "../../assets/imagen3.jpg"
import imagen3 from "../../assets/flyer.png"
import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleOnHover,
} from "../../lib/animations";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Identidad Visual', 'Diseño', 'Ilustración', 'Branding'];

  const projects = [
    {
      title: 'HogarTech',
      category: 'Identidad Visual',
      description: 'HogarTech es una tienda virtual de tecnología para el hogar. El proyecto consistió en el desarrollo de una identidad visual minimalista y dinámica, adaptable a entornos digitales y alineada con su público objetivo.',
      image: imagen1,
      technologies: ['Inkscape', 'Gimp', 'Canva', 'Photoshop'],
      featured: true,
      link: '#',
      github: '#'
    },
    {
      title: 'Helados la Bendición',
      category: 'Branding',
      description: 'La Bendición de Dios es un emprendimiento de jugos y helados frutales artesanales. El proyecto incluyó el desarrollo de una identidad visual y piezas publicitarias para su lanzamiento, con una estética colorida y fresca enfocada en su público objetivo.',
      image: imagen2,
      technologies: ['Inkscape', 'Gimp', 'Canva', 'Photoshop'],
      featured: true,
      link: '#'
    },
    {
      title: 'Affinity BPO',
      category: 'Diseño',
      description: 'En Affinity BPO el objetivo fue crear flyers claros, visualmente atractivos y alineados con la identidad corporativa, facilitando la comprensión de la información y fortaleciendo la comunicación interna.',
      image: imagen3,
      technologies: ['Capcut', 'Affinity by Canva', 'Photoshop'],
      featured: false,
      link: '#',
      github: '#'
    },
    {
      title: 'Ilustraciones Para Canal en YouTube ',
      category: 'Ilustración',
      description: 'Josué es un canal de YouTube de gameplays dirigido a público infantil. El proyecto consistió en el diseño de un banner adaptable e ilustraciones personalizadas de la mascota, con un estilo dinámico, amigable y colorido, enfocado en conectar visualmente con su audiencia.',
      image: imagen4,
      technologies: ['Lightroom', 'Medibang', 'Paint'],
      featured: false,
      link: '#'
    },
    {
      title: 'SAM Y LOLA ',
      category: 'Ilustración',
      description: 'Sam y Lola es un canal de YouTube de storytimes animados y vlogs humorísticos. Mi aporte se enfocó en el diseño de personajes y el banner, desarrollando un estilo visual expresivo, colorido y alineado con su audiencia.',
      image: imagen5,
      technologies: ['Medibang Paint', 'IbisPaint X', 'Lightroom'],
      featured: false,
      link: '#'
    },
    {
      title: 'Rediseño UX para Plataforma Educativa',
      category: 'Diseño UX/UI',
      description: 'Interfaz intuitiva y acogedora para una plataforma de aprendizaje online, diseñada para hacer que estudiar se sienta como estar en casa.',
      image: imagen6,
      technologies: ['Figma', 'User Research', 'Prototyping', 'Usability Testing'],
      featured: true,
      link: '#'
    }
  ];

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#F297FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Mi carta de servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada proyecto es una especialidad cuidadosamente diseñada. Trabajo con conceptos claros, diseño estratégico y atención al detalle para crear piezas visuales que comunican y fortalecen la identidad de marca.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#4313B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Mis Diseños Destacados
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-[#F297FB] cursor-pointer">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-contain"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4313B8] text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Destacado
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2 bg-[#F297FB] text-[#1C1E2F]">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 ">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs !bg-[#4313B8] text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-[#F297FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Todos mis proyectos
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
               <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category
                  ? "!bg-[#4313B8] !hover:bg-amber-700"
                  : "!hover:bg-amber-50 !hover:text-amber-700"
                }
              >
                {category}
              </Button>
              </motion.div>
            ))}
     
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
               <motion.div
              variants={fadeInUp}
              {...scaleOnHover}
              className="group cursor-pointer"
            >
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-[#4313B8]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain"
                />
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{project.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit  text-[#1C1E2F] bg-[#F297FB]">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs !bg-[#4313B8] text-white">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs !bg-[#4313B8] text-white">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#4313B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={{...fadeInUp.transition,duration: 0.6, ease: "easeOut"}}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Servicios que ofrezco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏷️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Identidad Visual</h3>
                <p className="text-gray-600 mb-4">
                  Creación de logotipos y sistemas visuales que reflejan la esencia de tu marca y fortalecen su presencia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Branding e Identidad de Marca</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo de identidades visuales completas que transmiten la esencia, valores y personalidad de una marca.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Diseño Publicitario</h3>
                <p className="text-gray-600 mb-4">
                  Diseño de flyers, banners y material promocional que comunica mensajes de forma clara y visualmente impactante.
                </p>
              </CardContent>
            </Card>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}