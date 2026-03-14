import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { MapPin,MessageCircle, Clock, Coffee, Mail, Phone } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
const CONTACT_EMAIL = 'yeneri.pereira22@gmail.com';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
   //envío 
    const subjectLine = formData.subject
      ? `${formData.subject} - Mensaje de ${formData.name}`
      : `Nuevo mensaje de ${formData.name}`;

    const body = [
      `Nombre: ${formData.name}`,
      `Email de contacto: ${formData.email}`,
      '',
      `Asunto: ${formData.subject || 'Sin asunto'}`,
      '',
      'Mensaje:',
      formData.message
    ].join('\n');

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo del usuario
    window.location.href = mailtoLink;

    toast({
      title: "¡Abriendo tu correo!",
      description: "Se abrirá tu aplicación de correo para enviar el mensaje. Si no se abre, puedes escribirnos directamente a yeneri.pereira22@gmail.com",
    });

    // Limpiar formulario después de un breve delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    // {
    //   icon: Mail,
    //   title: 'Email',
    //   value: 'hola@miespacio.com',
    //   link: `mailto:${CONTACT_EMAIL}`,
    //   description: 'Para conversaciones formales'
    // },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+57 (310)5161701',
      link: 'tel:+573105161701',
      description: 'Para charlas directas'
    },
    // {
    //   icon: MessageCircle,
    //   title: 'WhatsApp',
    //   value: 'Mensaje directo',
    //   link: 'https://wa.me/3105161701',
    //   description: 'Para conversaciones rápidas'
    // },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Cartagena De Indias',
      description: 'Disponible para reuniones presenciales'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#F297FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#1C1E2F] mb-6">
            Conversemos como en casa
          </h1>
          <p className="text-xl text-[#1C1E2F]">
            Las mejores colaboraciones nacen de una buena conversación. 
            Cuéntame tu proyecto y veamos cómo podemos crear algo especial juntos.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-[#4313B8] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Coffee className="h-6 w-6 mr-2 text-[#4313B8]" />
                  Cuéntame tu proyecto
                </CardTitle>
                <p className="text-gray-600">
                  Como una buena receta, necesito conocer todos los ingredientes para crear algo delicioso.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="¿En qué te puedo ayudar?"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntame sobre tu proyecto, tus ideas, o simplemente salúdame. Me encanta conocer nuevas historias..."
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full !bg-[#4313B8] !hover:bg-amber-700 text-white"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Al hacer clic se abrirá tu aplicación de correo con el mensaje listo para enviar a{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-600 hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>

                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 border-amber-200 bg-white  shadow-lg p-6 rounded-lg">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Formas de contactarme
                </h2>
                <p className="text-gray-600 mb-8">
                  Elige la forma que te resulte más cómoda. Como en casa, 
                  siempre hay varias maneras de llegar a una buena conversación.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-amber-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-amber-100 p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-amber-600 hover:text-amber-700 font-medium"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Availability */}
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Horarios de atención</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM (GMT-6)</p>
                        <p><strong>Sábados:</strong> 10:00 AM - 2:00 PM (GMT-6)</p>
                        <p><strong>Respuesta promedio:</strong> 2-4 horas en días hábiles</p>
                      </div>
                      <p className="text-sm text-amber-700 mt-3 italic">
                        Como una buena conversación, prefiero tomarme el tiempo necesario 
                        para darte una respuesta pensada y útil.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick WhatsApp */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">¿Prefieres una conversación más directa?</p>
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 !text-white">
                  <a 
                    href="https://wa.me/3105161701?text=Hola! Me interesa conocer más sobre tus servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Escribir por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F297FB] border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Preguntas frecuentes
          </h2>
          
          <div className="space-y-6">
            <Card className="border-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Cuál es tu proceso de trabajo para desarrollar un proyecto de diseño?
                </h3>
                <p className="text-gray-600">
                  Inicio con una etapa de análisis para comprender la marca, el público objetivo y los objetivos del proyecto. A partir de esto desarrollo propuestas visuales que se revisan y ajustan hasta lograr un resultado alineado con las necesidades del cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Cuánto tiempo tarda un proyecto de diseño?
                </h3>
                <p className="text-gray-600">
                El tiempo depende del tipo y alcance del proyecto. Un diseño puntual puede tomar pocos días, mientras que proyectos más completos, como una identidad visual, pueden requerir varias semanas para garantizar un resultado sólido y bien desarrollado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Qué información necesitas para comenzar un proyecto?
                </h3>
                <p className="text-gray-600">
                 Generalmente necesito conocer el objetivo del proyecto, el público al que va dirigido, referencias visuales si las hay y cualquier lineamiento de marca existente. Con esta información puedo desarrollar una propuesta estratégica y coherente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}