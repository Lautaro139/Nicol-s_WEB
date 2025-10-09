import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const WHATSAPP_NUMBER = "59899123456"; 
const WHATSAPP_MESSAGE = "¡Hola! Estoy interesado/a en sus cuchillos artesanales y me gustaría saber más.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


// === COMPONENTES DE ICONOS ===


// Icono de Cerrar (X)
const IconX = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6L6 18"></path>
    <path d="M6 6L18 18"></path>
  </svg>
);

// Icono de Flecha Arriba Derecha (ArrowUpRight)
const IconArrowUpRight = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 7l10 10"></path>
    <path d="M17 7L7 17"></path>
    <path d="M17 7h-5"></path>
    <path d="M17 7v5"></path>
  </svg>
);

// ===================================
const instagramLogoUrl = "https://i.imgur.com/uRj0p69.png";
const instagramProfileUrl = "https://www.instagram.com/tu_perfil_de_instagram/"; // !!! CAMBIA ESTO POR TU PERFIL REAL !!!




// Componente principal de la aplicación
const App = () => {
  // Estado para controlar la vista previa (preview) del cuchillo
  const [previewKnife, setPreviewKnife] = useState(null);


  // ------------ Seccion Biografia --------------
  const AboutSection = () => (
    <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-700">Descripción</h2>
            <p className="text-lg leading-relaxed text-stone-700 mb-6">
               En NC Cuchillos hacemos cuchillos artesanales con buen filo, buen diseño y mucha dedicación. Cada cuchillo es único, hecho a mano y pensado para durar. Si te gustan las cosas bien hechas y con estilo, este es tu lugar. 
            </p>
            <p className="text-lg leading-relaxed text-stone-700 italic">
                Hemos notado que en Artigas hay muy pocos cuchilleros artesanales siendo que hay muchas personas fanática de los cuchillos hechos a mano.
Nuestro negocio busca que todos esos fanáticos de los cuchillos puedan tener una herramienta de calidad como esta, con buen precio y una buena calidad.
            </p>
            <a 
                href="#gallery" 
                className="inline-block mt-8 px-6 py-3 bg-stone-800 text-white font-semibold rounded-full shadow-lg hover:bg-amber-700 transition-colors transform hover:scale-105"
            >
                Ver Cuchillos Forjados
            </a>
        </div>
    </section>
  );



  // Datos de ejemplo para las secciones

  const galleryKnives = [
    {
      id: 1,
      name: "El Caminante",
      description: "Un cuchillo versátil con una hoja de acero al carbono y mango de nogal.",
      imageUrl: "/imagen-1.png",
      
    },
    {
      id: 2,
      name: "Sombra Nocturna",
      description: "Hoja forjada con acero de damasco, un patrón único que cuenta una historia.",
      imageUrl: "/imagen-2.png",
    },
    {
      id: 3,
      name: "Corazón de Fuego",
      description: "Diseño robusto para trabajo pesado, con empuñadura ergonómica y segura.",
      imageUrl: "/imagen-3.png",
    },
    {
      id: 4,
      name: "El Caballero",
      description: "Una pieza elegante y ligera, perfecta para el uso diario en la cocina.",
      imageUrl: "/imagen-4.png",
    },
  ];
  
  // ------------ Seccion Inicio --------------
  const HeroSection = () => (
     <section className="relative h-screen flex flex-col items-center justify-center text-center p-4">
       <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596796332152-628f5217646a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
       <div className="relative z-10 bg-white/50 p-6 sm:p-12 rounded-xl shadow-2xl backdrop-blur-sm">
         <a href="https://www.instagram.com/nc.cuchillos/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
           <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
           <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>
          </svg>
        </a>
        
         <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-stone-900 select-none" // <-- CLASE AGREGADA AQUÍ
        >
          Nicolas Castaño Cuchillos
        </h1>
          <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto">
            Donde el metal y el fuego se unen para crear herramientas con historia.
          </p>
        </div>
      </section>
  );

  // -------- Seccion Proceso de Fabricacion -----------


  const ProcessSection = ({procesocol}) => (
    <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Nuestro Proceso de Creación</h2>
          <div className="space-y-16">
            {procesocol.map((step, index) => (
              <div key={step.id} className={`flex flex-col sm:flex-row items-center gap-8 ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full sm:w-1/2">
                  <img src={step.imageUrl} alt={step.title} className="w-full h-auto rounded-xl shadow-lg" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8d6e63/ffffff?text=Imagen+no+disponible"; }} />
                </div>
                <div className="flex-1 w-full sm:w-1/2 text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
  );

  const processSteps = [
    {
      id: 1,
      title: "1. Eleccion del material y enderezamiento",
      text: "Primero de todo se selecciona el material, disco de arado, de sembradora o elástico de auto. Después se endereza el material calentándolo en la fragua.",
      imageUrl: "/imagen-6.jpeg",
    },
    {
      id: 2,
      title: "2. Forjado",
      text: "Diseñamos y cortamos el molde o forma del cuchillo, después de cortado hacemos el bisel (filo grueso), después de esto se suelda una tuerca como botón y se le da forma circular.",
      imageUrl: "/imagen-7.jpeg",
    },
    {
      id: 3,
      title: "3. templado",
      text: "Después de la hoja estar lista, es llevada a la fragua nuevamente y se templa, donde se calienta a una temperatura de 800° aproximadamente y se sumerge en aceite. Después de templado se hace otro tratamiento térmico llamado retenido, donde se lleva el cuchillo al horno a 200° por una hora.",
      imageUrl: "/imagen-5.jpeg",
    },
    {
      id: 4,
      title: "4. Afilado y Empuñadura",
      text: "Con todo esto hecho, se lija el cuchillo, se afila y se pule la hoja. Por ultimo se selecciona la madera o material de la empuñadura, tallado y ajustado a la perfección y pongo mi marca. ",
      imageUrl: "/imagen-8.png",
    },
  ];

  return (
    <div className="bg-stone-50 text-stone-900 font-sans">
      {/* Carga de Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>

      

      {/* Hero Section */}
      <HeroSection />

      {/* Sección de Biografía */}
      <AboutSection />

      {/* Sección del Proceso de Fabricación */}
      <ProcessSection procesocol={processSteps} />
      

      {/* Sección de Galería y Preview */}
      <section id="gallery" className="py-20 px-4 bg-stone-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Nuestras Creaciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryKnives.map((knife) => (
              <div
                key={knife.id}
                className="relative group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setPreviewKnife(knife)}
                onMouseLeave={() => setPreviewKnife(null)}
              >
                <img src={knife.imageUrl} alt={knife.name} className="w-full h-auto object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/795548/ffffff?text=Cuchillo"; }} />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{knife.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal de Preview (Vista Previa) */}
        {previewKnife && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">{previewKnife.name}</h3>
              <p className="text-lg text-gray-700 mb-6">{previewKnife.description}</p>
              <img src={previewKnife.imageUrl} alt={previewKnife.name} className="w-full h-auto rounded-lg shadow-lg" />
              <button
                className="mt-6 px-6 py-2 bg-stone-800 text-white rounded-full hover:bg-stone-900 transition-colors"
                onClick={() => setPreviewKnife(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl"></div>
        <p className="text-sm">© 2025 NC-Cuchillos. Los mejores cuchillos artesanales de Artigas.</p>
       </footer>
    </div>
  );

};


export default App;
