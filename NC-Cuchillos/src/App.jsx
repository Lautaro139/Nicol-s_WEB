import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';





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



// Icono de WhatsApp (AHORA IMAGEN PNG)
const IconWhatsApp = ({ size = 32, className = "" }) => {
    // URL de un PNG con el color verde original de WhatsApp.
    const url = "https://cdn-icons-png.flaticon.com/512/3670/3670051.png"; // Usamos el ícono verde

     return (
        <img 
            src={url}
            alt="WhatsApp Icono" 
            style={{ width: size, height: size }}
            // El color del ícono se controla mediante la imagen PNG, no por 'currentColor'.
            // Sin embargo, mantenemos 'className' para aplicar cualquier margen/estilo extra.
            className={`${className} filter invert`} 
        />
    );
};

// Icono de Instagram
// ===================================
const instagramLogoUrl = "https://i.imgur.com/uRj0p69.png";
const instagramProfileUrl = "https://www.instagram.com/tu_perfil_de_instagram/"; // !!! CAMBIA ESTO POR TU PERFIL REAL !!!

// CONSTANTES DE WHATSAPP (AÑADIDO)
const whatsappNumber = "59897136348"; // Sacamos simbolos "+" y los espacio vacion son innecesarios para buscar numeros de contactos
const whatsappMessage = "Hola, estoy navegando en la web de NC Cuchillos y me gustaría pedir una cotización.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


// Componente de botón flotante de WhatsApp (AÑADIDO)
const WhatsappFloatingButton = () => (
    <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
    >
        <IconWhatsApp size={32} className="w-8 h-8"/>
    </a>
);


// Componente principal de la aplicación
const App = () => {
  // Estado para controlar la vista previa (preview) del cuchillo
  const [previewKnife, setPreviewKnife] = useState(null);


  // ------------ Seccion Biografia --------------
  const AboutSection = () => (
    <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-500">Descripción</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
               En NC Cuchillos hacemos cuchillos artesanales con buen filo, buen diseño y mucha dedicación. Cada cuchillo es único, hecho a mano y pensado para durar. Si te gustan las cosas bien hechas y con estilo, este es tu lugar. 
            </p>
            <p className="text-lg leading-relaxed text-gray-300 italic">
                Hemos notado que en Artigas hay muy pocos cuchilleros artesanales siendo que hay muchas personas fanática de los cuchillos hechos a mano.
Nuestro negocio busca que todos esos fanáticos de los cuchillos puedan tener una herramienta de calidad como esta, con buen precio y una buena calidad.
            </p>
            <a 
                href="#gallery" 
                className="inline-block mt-8 px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-xl shadow-red-600/30 hover:bg-red-700 transition-colors transform hover:scale-105"
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
      name: "",
      description: "Un cuchillo versátil con una hoja de acero al carbono y mango de nogal.",
      imageUrl: "/imagen-1.png",
      
    },
    {
      id: 2,
      name: "",
      description: "Hoja forjada con acero de damasco, un patrón único que cuenta una historia.",
      imageUrl: "/imagen-2.png",
    },
    {
      id: 3,
      name: "",
      description: "Diseño robusto para trabajo pesado, con empuñadura ergonómica y segura.",
      imageUrl: "/imagen-3.png",
    },
    {
      id: 4,
      name: "",
      description: "Una pieza elegante y ligera, perfecta para el uso diario en la cocina.",
      imageUrl: "/imagen-4.png",
    },
  ];
  

  // ------------ Seccion Inicio --------------
  const HeroSection = () => (
     <section className="relative h-screen flex flex-col items-center justify-center text-center p-4">
{/* Fondo más oscuro */}
<div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596796332152-628f5217646a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
{/* Contenedor de texto más oscuro y contrastante */}
<div className="relative z-10 bg-black/70 p-6 sm:p-12 rounded-xl shadow-2xl backdrop-blur-md border border-gray-700">

 {/* INICIO: Logo Centrado Directamente */}
            <div className="mb-8"> 
                
                {/* 1. LOGO DE LA EMPRESA 
                    Usamos 'mx-auto' para centrar la imagen como un elemento de bloque.
                    'block' es necesario para que 'mx-auto' funcione. 
                */}
                <img 
                    src="/logo.png"
                    alt="Logo de Nicolas Castaño Cuchillos" 
                    className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg block mx-auto"
                />
            </div>
            {/* FIN: Logo Centrado Directamente */}
        
         {/* Título principal en blanco */}
<h1 
 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-white select-none"
 >
 Nicolas Castaño Cuchillos
 </h1>
{/* Subtítulo en gris claro */}
 <p className="text-xl sm:text-2xl font-medium max-w-2xl mx-auto text-gray-300">
 Los mejores cuchillos artesanales de la ciudad de Artigas
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
    <div className="bg-gray-900 text-gray-200 font-sans">
      {/* Carga de Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>

      

      {/* Hero Section */}
      <HeroSection />

      {/* Sección de Biografía */}
      <AboutSection />

      {/* Sección del Proceso de Fabricación */}
      <ProcessSection procesocol={processSteps} />
      

       {/* Sección de Galería y Preview */}
   <section id="gallery" className="py-20 px-4 bg-gray-950">
    <div className="container mx-auto max-w-5xl">
     <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Nuestras Creaciones</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {galleryKnives.map((knife) => (
       <div
        key={knife.id}
        // Tarjetas oscuras con efecto de brillo en hover
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 border border-gray-700"
        onClick={() => setPreviewKnife(knife)}
        // onMouseLeave={() => setPreviewKnife(null)} esto no va, es el causante de que las ventanas emergentes pisquen
       >
        <img src={knife.imageUrl} alt={knife.name} className="w-full h-auto object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/374151/ffffff?text="; }} />
        <div className="p-6 text-center">
         <h2 className="text-xl font-semibold text-white">{knife.name}</h2>
         <p>Pulsa para mas detalles</p>
        </div>
       </div>
      ))}
     </div>
    </div>

        {/* Modal de Preview (Vista Previa) */}
        {previewKnife && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-700 rounded-xl p-1 max-w-lg w-full relative shadow-2xl hover:shadow-red-500/50">
              <img src={previewKnife.imageUrl} alt={previewKnife.name} className="w-full h-auto rounded-lg" />
              <h3 className="text-3xl font-bold mb-4">{previewKnife.name}</h3>
              <p className="text-lg text-white mb-6">{previewKnife.description}</p>
              <button
                className="mt-10 px-8 py-2 bg-stone-800 text-white rounded-full hover:bg-stone-900 transition-colors"
                onClick={() => setPreviewKnife(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
 <footer className="bg-gray-950 text-white py-12 px-4 border-t border-gray-700">
   <div className="container mx-auto max-w-5xl">
            <div className="flex justify-center mb-4">
                {/* Ícono de WhatsApp en el Footer */}
                 <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                  
                    // El PNG ya es negro, aquí usamos 'invert' para que se vea blanco sobre el fondo oscuro.
                    className="text-gray-300 hover:text-white transition-colors mx-4" 
                >
                    <IconWhatsApp size={40} className="filter invert hover:!filter-none" />
                </a>
                <a href="https://www.instagram.com/nc.cuchillos/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>
                    </svg>
                </a>
            </div>
        </div>
    <p className="text-sm text-center text-gray-500 mt-4">© 2025 NC-Cuchillos. Los mejores cuchillos artesanales de Artigas.</p>
   </footer>
  </div>
 );

};


export default App;
