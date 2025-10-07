<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuchillos con Alma - Forja Artesanal</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Font: Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
    </style>
    <!-- React y ReactDOM CDNs (Necesario para usar JSX en el navegador) -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel para compilar JSX en el navegador -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <!-- Punto de montaje de la aplicación React -->
    <div id="root"></div>

    <!-- El código de la aplicación React va dentro de este script con type="text/babel" -->
    <script type="text/babel">
        // Accedemos a React y sus Hooks desde el scope global (ya cargados por el CDN)
        const { useState, useEffect } = React;

        // === Componentes SVG en línea ===

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
          // Estado para controlar la vista previa (preview) del cuchillo en la galería
          const [previewKnife, setPreviewKnife] = useState(null);
          // Estado para controlar la vista previa del logo de Instagram en el Header
          const [previewInstagram, setPreviewInstagram] = useState(false);

          // Datos de ejemplo para las secciones
          const processSteps = [
            {
              id: 1,
              title: "1. Forja y Martillado",
              text: "El viaje comienza con el acero, calentado al rojo vivo en la fragua. Con cada golpe de martillo, se le da forma y carácter, eliminando impurezas y fortaleciendo el metal.",
              imageUrl: "https://placehold.co/600x400/8d6e63/ffffff?text=Forja",
            },
            {
              id: 2,
              title: "2. Temple y Revenido",
              text: "Una vez formada la hoja, se sumerge en aceite o agua para endurecerla. Luego, un proceso de revenido a baja temperatura le otorga la resistencia y flexibilidad necesarias.",
              imageUrl: "https://placehold.co/600x400/a1887f/ffffff?text=Temple",
            },
            {
              id: 3,
              title: "3. Afilado y Pulido",
              text: "La hoja toma su filo final en las piedras de afilar, una tarea que requiere precisión y paciencia. Cada cuchillo es pulido a mano para revelar la belleza de su veta y acabado.",
              imageUrl: "https://placehold.co/600x400/bcaaa4/ffffff?text=Afilado",
            },
            {
              id: 4,
              title: "4. Acabado y Empuñadura",
              text: "Se selecciona la madera o material de la empuñadura, tallado y ajustado a la perfección. Los detalles finales, como los remaches o la funda, sellan la identidad de la pieza.",
              imageUrl: "https://placehold.co/600x400/d7ccc8/ffffff?text=Acabado",
            },
          ];

          const galleryKnives = [
            {
              id: 1,
              name: "El Caminante",
              description: "Un cuchillo versátil con una hoja de acero al carbono y mango de nogal.",
              imageUrl: "https://placehold.co/400x400/795548/ffffff?text=Cuchillo+1",
            },
            {
              id: 2,
              name: "Sombra Nocturna",
              description: "Hoja forjada con acero de damasco, un patrón único que cuenta una historia.",
              imageUrl: "https://placehold.co/400x400/5d4037/ffffff?text=Cuchillo+2",
            },
            {
              id: 3,
              name: "Corazón de Fuego",
              description: "Diseño robusto para trabajo pesado, con empuñadura ergonómica y segura.",
              imageUrl: "https://placehold.co/400x400/4e342e/ffffff?text=Cuchillo+3",
            },
            {
              id: 4,
              name: "El Caballero",
              description: "Una pieza elegante y ligera, perfecta para el uso diario en la cocina.",
              imageUrl: "https://placehold.co/400x400/3e2723/ffffff?text=Cuchillo+4",
            },
          ];

          // Componente de la Barra de Navegación (Header)
          const Header = () => (
            // Barra de navegación Fija en la parte superior
            <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-md transition-shadow duration-300">
              <div className="container mx-auto max-w-7xl px-4 py-3 flex justify-between items-center">
                {/* Logo de la Marca */}
                <div className="text-xl font-extrabold text-stone-800 tracking-wider">
                  <a href="#hero" className="hover:text-amber-700 transition-colors">CUCHILLOS ALMA</a>
                </div>
                
                {/* Enlaces de Navegación */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#about" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">Nosotros</a>
                    <a href="#process" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">Proceso</a>
                    <a href="#gallery" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">Galería</a>
                    <a href="#contact" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">Contacto</a>
                </nav>

                {/* Logo de Instagram (con Preview) */}
                <div
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setPreviewInstagram(true)}
                  onMouseLeave={() => setPreviewInstagram(false)}
                  onClick={() => window.open(instagramProfileUrl, "_blank")}
                >
                  {/* Ícono de Instagram */}
                  <div className="p-2 bg-stone-800 rounded-full hover:bg-amber-700 transition-colors duration-200 shadow-lg">
                    <img src={instagramLogoUrl} alt="Instagram" className="w-6 h-6 object-contain" />
                  </div>

                  {/* Tooltip o Mensaje Flotante (solo en desktop) */}
                  <span className="absolute hidden md:block right-0 top-full mt-2 w-max p-2 text-sm text-white bg-stone-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-1">
                    Ver Perfil
                  </span>
                </div>
              </div>
            </header>
          );

          // Componente del Modal de Preview para Instagram
          const InstagramPreviewModal = () => (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl p-6 max-w-sm w-full relative shadow-2xl transition-all duration-300 transform scale-100">
                <button
                  className="absolute top-3 right-3 text-stone-600 hover:text-stone-900 transition-colors"
                  onClick={() => setPreviewInstagram(false)}
                >
                  <IconX size={24} />
                </button>

                <h3 className="text-2xl font-bold mb-4 text-stone-900 border-b pb-2">¡Síguenos!</h3>
                <p className="text-base text-gray-700 mb-4">
                  Descubre el proceso de forja, nuevos diseños y ediciones limitadas en nuestro Instagram.
                </p>

                {/* Icono grande en el modal */}
                <div className="flex justify-center mb-6">
                  <img src={instagramLogoUrl} alt="Instagram Logo Preview" className="w-20 h-20 object-contain" />
                </div>
                
                <button
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-yellow-600 transition-all shadow-lg"
                  onClick={() => {
                    window.open(instagramProfileUrl, "_blank");
                    setPreviewInstagram(false);
                  }}
                >
                  Ir al Perfil <IconArrowUpRight size={20} />
                </button>

                <button
                  className="mt-3 w-full px-6 py-2 text-sm bg-gray-100 text-stone-700 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => setPreviewInstagram(false)}
                >
                  Cerrar Vista Previa
                </button>
              </div>
            </div>
          );

          // === SECCIÓN DE BIOGRAFÍA ===
          const AboutSection = () => (
            <section id="about" className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-700">Nuestra Historia: La Forja de un Legado</h2>
                    <p className="text-lg leading-relaxed text-stone-700 mb-6">
                        En **Cuchillos Alma**, nuestra historia no comienza en una oficina, sino en el calor de la fragua. Nacimos de una profunda pasión por la herrería tradicional y la creencia inquebrantable de que una herramienta debe ser una obra de arte funcional, una extensión de la mano que la empuña.
                    </p>
                    <p className="text-lg leading-relaxed text-stone-700 italic">
                        Hace más de una década, nuestro taller se estableció con el firme propósito de rescatar técnicas ancestrales de forja. Aquí, el acero crudo pasa por un ritual de transformación: se calienta al rojo vivo, se purifica bajo el golpe rítmico del martillo y se somete al temple, un proceso vital que le otorga su inigualable dureza y flexibilidad. No utilizamos producción masiva; cada cuchillo es forjado individualmente, garantizando que cada pieza sea única, tenga carácter propio y una calidad que trasciende el tiempo.
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

          return (
            <div className="bg-stone-50 text-stone-900 font-sans">
              
              {/* 1. Header Fijo con Logo de Instagram */}
              <Header />

              {/* 2. Modal de Preview de Instagram (se muestra si previewInstagram es true) */}
              {previewInstagram && <InstagramPreviewModal />}

              {/* 3. Hero Section (Añadimos padding top para compensar el header fijo) */}
              <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center p-4 pt-20">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596796332152-628f5217646a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
                <div className="relative z-10 bg-white/50 p-6 sm:p-12 rounded-xl shadow-2xl backdrop-blur-sm">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
                    Cuchillos con Alma
                  </h1>
                  <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto mb-8">
                    Donde el metal y el fuego se unen para crear herramientas con historia.
                  </p>
                  {/* Botprocessón añadido para ir a la biografía */}
                  <a 
                    href="#about" 
                    className="inline-block px-8 py-3 bg-stone-800 text-white font-semibold rounded-full shadow-xl hover:bg-amber-700 transition-colors transform hover:scale-105"
                  >
                    Nuestra Historia
                  </a>
                </div>
              </section>

              {/* 4. Sección de Biografía */}
              <AboutSection />

              {/* 5. Sección del Proceso de Fabricación */}
              <section id="process" className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Nuestro Proceso de Creación</h2>
                  <div className="space-y-16">
                    {processSteps.map((step, index) => (
                      <div key={step.id} className={`flex flex-col sm:flex-row items-center gap-8 ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                        <div className="flex-1 w-full sm:w-1/2">
                          {/* Manejo de error para imágenes */}
                          <img 
                            src={step.imageUrl} 
                            alt={step.title} 
                            className="w-full h-auto rounded-xl shadow-lg" 
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8d6e63/ffffff?text=Imagen+no+disponible"; }} 
                          />
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

              {/* 6. Sección de Galería y Preview de Cuchillos */}
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
                        {/* Manejo de error para imágenes */}
                        <img 
                          src={knife.imageUrl} 
                          alt={knife.name} 
                          className="w-full h-auto object-cover" 
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/795548/ffffff?text=Cuchillo"; }} 
                        />
                        <div className="p-4 text-center">
                          <h3 className="text-xl font-semibold">{knife.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal de Preview para Cuchillos */}
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
              
              {/* 7. Sección de Contacto */}
              <section id="contact" className="py-20 px-4">
                <div className="container mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hablemos de Forja</h2>
                    <p className="text-lg mb-8">¿Tienes una idea para un cuchillo personalizado? Contáctanos y hazla realidad.</p>
                    <a 
                        href="mailto:info@cuchillosalma.com" 
                        className="inline-block px-8 py-3 bg-stone-800 text-white font-semibold rounded-full shadow-xl hover:bg-amber-700 transition-colors transform hover:scale-105"
                    >
                        Enviar un Mensaje
                    </a>
                </div>
              </section>

              {/* 8. Footer */}
              <footer className="bg-stone-900 text-white py-8 px-4">
                <div className="container mx-auto text-center">
                  <p className="text-sm">© 2024 Cuchillos con Alma. Todos los derechos reservados.</p>
                </div>
              </footer>
            </div>
          );
        };
        
        // CÓDIGO DE MONTAJE EXPLÍCITO para asegurar la renderización
        const rootElement = document.getElementById('root');
        if (rootElement && typeof ReactDOM !== 'undefined' && ReactDOM.createRoot) {
            ReactDOM.createRoot(rootElement).render(<App />);
        } else {
            console.error("No se pudo iniciar la aplicación. El elemento 'root' no está disponible o ReactDOM no está cargado.");
        }
    </script>
</body>
</html>
