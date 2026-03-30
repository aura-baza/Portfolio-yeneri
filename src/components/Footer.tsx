import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, Phone, Dribbble } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-[#F297FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mi Espacio Personal</h3>
            <p className="text-gray-800 mb-4 max-w-md">
              Un lugar auténtico donde compartir experiencias, proyectos y crear conexiones genuinas. 
              Como en casa, pero profesional.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-600 transition-colors title=Linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                <Dribbble className="h-5 w-5" />
              </a>
              <a
                href="mailto:hola@miespacio.com"
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="!text-[#4313B8]  hover:text-amber-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="!text-[#4313B8] hover:text-amber-600 transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="!text-[#4313B8] hover:text-amber-600 transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/experience" className="!text-[#4313B8] hover:text-amber-600 transition-colors">
                  Experiencia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:pereirayeneria@gmail.com" className="hover:text-amber-600 transition-colors">
                  yeneri.pereira22@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+573105161701" className="hover:text-amber-600 transition-colors">
                  +57 (310) 5161701
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://wa.me/3105161701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 !text-white  rounded-lg text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t  border-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm m-auto">
              © {currentYear} Mi Espacio Personal Yeneri. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}