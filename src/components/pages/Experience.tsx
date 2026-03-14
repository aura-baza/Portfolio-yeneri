import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import evento1 from "../../assets/evento1.jpg"
import evento2 from "../../assets/evento2.jpg"
import conferencia1 from "../../assets/conferencia1.jpg"
import conferencia2 from "../../assets/conferencia2.jpg"
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

export default function Experience() {
  const experiences = [
    {
      title: 'Aprendiz de diseño',
      company: 'Affinity BPO S.A.S',
      period: '2025 - 2026',
      location: 'Cartagena De Indias',
      description: 'Encargada del área de diseño de la empresa, responsable de la creación de piezas visuales para medios digitales e impresos, como publicaciones para redes sociales, banners y material corporativo. Gestioné de manera autónoma las necesidades de diseño de la compañía, apoyando la comunicación visual y organización de recursos gráficos',
      achievements: [
        'Diseñé piezas gráficas para redes sociales, campañas internas y material corporativo',
        'Gestioné de forma autónoma todas las necesidades de diseño de la empresa',
        'Desarrollé y adapté la identidad visual en diferentes formatos digitales e impresos'
      ],
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva']
    },
    // {
    //   title: 'Consultor Senior de Experiencia Digital',
    //   company: 'Agencia Calidez Digital',
    //   period: '2020 - 2022',
    //   location: 'Guadalajara',
    //   description: 'Ayudé a empresas tradicionales a adoptar tecnologías digitales sin perder su esencia familiar y cercana.',
    //   achievements: [
    //     'Transformé digitalmente 25+ empresas familiares',
    //     'Logré 95% de satisfacción del cliente',
    //     'Creé metodología propia de transformación digital'
    //   ],
    //   technologies: ['UX Strategy', 'Digital Transformation', 'Consulting', 'Training']
    // },
    // {
    //   title: 'Desarrollador Full Stack',
    //   company: 'Estudio Creativo Hogar',
    //   period: '2018 - 2020',
    //   location: 'Monterrey',
    //   description: 'Desarrollé sitios web y aplicaciones para pequeñas y medianas empresas, siempre con enfoque en la calidez humana.',
    //   achievements: [
    //     'Desarrollé 30+ sitios web exitosos',
    //     'Mantuve 98% de tiempo de actividad',
    //     'Implementé soluciones de e-commerce'
    //   ],
    //   technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress']
    // }
  ];

  const events = [
   {
  title: 'Jornada de Bienestar y Creatividad',
  type: 'Participante – Apoyo en Diseño',
  date: '2025',
  location: 'Affinity BPO',
  description: 'Participé en actividades internas enfocadas en bienestar laboral, apoyando con piezas gráficas para la comunicación visual del evento.',
  image: evento1
},
{
  title: 'Campaña Interna de Seguridad y Salud en el Trabajo',
  type: 'Diseño Gráfico',
  date: '2025',
  location: 'Affinity BPO',
  description: 'Desarrollo de piezas visuales para campañas de SST, facilitando la comunicación clara de mensajes preventivos al equipo de trabajo.',
  image: evento2
},
{
  title: 'Actividades de Comunicación Interna',
  type: 'Diseñadora Gráfica en Prácticas',
  date: '2026',
  location: 'Affinity BPO',
  description: 'Apoyo en la creación de material gráfico para eventos y campañas internas, fortaleciendo la identidad visual y la difusión de información dentro de la empresa.',
  image: conferencia1
},
   {
  title: 'Campaña Interna de Bienestar Laboral',
  type: 'Apoyo en Diseño Gráfico',
  date: '2026',
  location: 'Affinity BPO',
  description: 'Diseño de piezas gráficas para la difusión de actividades de bienestar dirigidas a los colaboradores, apoyando la comunicación interna de la empresa.',
  image: conferencia2
}
  ];

  const collaborations = [
    {
      name: 'Helados la Bendición',
      role: 'Voluntaria',
      description: 'Desarrollo de una identidad visual y piezas publicitarias para su lanzamiento.',
      impact: 'Mi familia, especialmente mi madre'
    },
    {
      name: 'HogarTec',
      role: 'Diseñadora',
      description: ' El proyecto consistió en el desarrollo de una identidad visual minimalista y dinámica.',
      impact: '3 amigos iniciando su negocio'
    },
    {
      name: 'Ilustraciones Para Canal en YouTube',
      role: 'Miembro Fundador',
      description: 'Diseño de un banner adaptable e ilustraciones personalizadas de la mascota',
      impact: 'Varios amigos '
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#F297FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Mi trayectoria profesional
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Como los platos que mejoran con el tiempo, mi experiencia se ha enriquecido
              con cada proyecto, cada colaboración y cada desafío superado.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-[#4313B8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Experiencia profesional
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                      <p className="text-amber-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-500 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Logros principales:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-amber-100 text-amber-800">
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

      {/* Events Section */}
      <section className="py-20 bg-[#F297FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Eventos y conferencias
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden border-amber-200 hover:shadow-lg transition-shadow">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-gray-900">{event.title}</CardTitle>
                        <Badge className="mt-2 bg-amber-600 text-white">{event.type}</Badge>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-20 bg-[#4313B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Colaboraciones y alianzas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {collaborations.map((collab, index) => (
                <Card key={index} className="text-center border-amber-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Users className="h-12 w-12 text-[#4313B8] mb-4 text-aline" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{collab.name}</h3>
                    <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
                      {collab.role}
                    </Badge>
                    <p className="text-gray-600 mb-4">{collab.description}</p>
                    <div className="flex items-center justify-center text-amber-600">
                      <Award className="h-4 w-4 mr-1" />
                      <span className="font-semibold text-sm">{collab.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-[#F297FB] border-b ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1C1E2F] mb-8">
            Lo que dicen de mi trabajo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-white/20 text-white">
              <CardContent className="p-8">
                <p className="text-lg  text-[#1C1E2F] italic mb-4">
                  "Trabajar con ella es como tener a un miembro de la familia en el equipo.
                  Su enfoque humano y técnico es exactamente lo que necesitábamos."
                </p>
                <p className="font-semibold text-[#1C1E2F] ">- Aura Baza, Ingeniera de sistemas</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-[#1C1E2F]  border-white/20">
              <CardContent className="p-8">
                <p className="text-lg italic mb-4">
                  "No solo entregó un producto excelente, sino que nos enseñó a mantener
                  nuestra esencia mientras abrazábamos la tecnología."
                </p>
                <p className="font-semibold">- Yenis Barbosa, Madre emprendedora</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}