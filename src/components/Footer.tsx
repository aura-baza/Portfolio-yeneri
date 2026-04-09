import { Link } from 'react-router-dom';
import {  Mail, Phone } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

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
               {/* Behance */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.behance.net/yenepereira"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                    >
                        <svg className="w-7 h-7 text-[#4285f4] group-hover:text-[#3367d6] transition-colors" fill="currentColor" viewBox="0 0 100 60">
                        {/* Be text */}
                        <path d="M8 8 L8 52 L32 52 C40 52 46 46 46 38 C46 34 44 30 40 28 C42 26 44 22 44 18 C44 10 38 8 32 8 L8 8 Z M16 16 L30 16 C34 16 36 18 36 22 C36 26 34 28 30 28 L16 28 L16 16 Z M16 36 L32 36 C36 36 38 38 38 42 C38 46 36 48 32 48 L16 48 L16 36 Z"/>
                        
                        {/* e circle */}
                        <circle cx="75" cy="35" r="20" fill="currentColor"/>
                        <circle cx="75" cy="35" r="12" fill="white"/>
                        <rect x="63" y="29" width="24" height="6" fill="white"/>
                        <rect x="63" y="35" width="12" height="6" fill="currentColor"/>
                        
                        {/* Top line */}
                        <rect x="58" y="8" width="24" height="4" fill="currentColor"/>
                      </svg>
                      {/* <svg className="w-6 h-6 text-[#1769ff] group-hover:text-[#0057d9] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 7v10c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2H2C.896 5 0 5.896 0 7zm8.93 8.5c-.85 0-1.64-.35-2.2-.97-.57-.62-.88-1.45-.88-2.33s.31-1.71.88-2.33c.56-.62 1.35-.97 2.2-.97.85 0 1.64.35 2.2.97.57.62.88 1.45.88 2.33s-.31 1.71-.88 2.33c-.56.62-1.35.97-2.2.97zm6.14 0c-.85 0-1.64-.35-2.2-.97-.57-.62-.88-1.45-.88-2.33s.31-1.71.88-2.33c.56-.62 1.35-.97 2.2-.97.85 0 1.64.35 2.2.97.57.62.88 1.45.88 2.33s-.31 1.71-.88 2.33c-.56.62-1.35.97-2.2.97z"/>
                      </svg> */}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Behance</p>
                  </TooltipContent>
                </Tooltip>

                {/* LinkedIn */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/yene-pereira-b5b48b2a4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                    >
                      <svg className="w-5 h-5 text-[#0077b5] group-hover:text-[#005885] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                {/* Canva */}
                {/* <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://canva.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                    >
                      <svg className="w-6 h-6 text-[#00c4cc] group-hover:text-[#00a8b0] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.5 11.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5zm4.5-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Canva</p>
                  </TooltipContent>
                </Tooltip> */}

                {/* Dribbble */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://dribbble.com/yeneri-pereira"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                    >
                      <svg className="w-6 h-6 text-[#ea4c89] group-hover:text-[#d63384] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.433 0-.856.042-1.27.11-.042.013-.087.042-.13.178zm13.137 5.928c-.2.288-1.25 1.854-2.97 2.28-.2.11-.4.2-.6.26 2.83.73 5.64 1.1 6.47 1.2-.15-1.34-.54-2.58-1.18-3.74z"/>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Dribbble</p>
                  </TooltipContent>
                </Tooltip>
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