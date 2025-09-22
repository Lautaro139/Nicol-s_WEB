import React, { useState, useEffect } from 'react';

// Componente principal de la aplicación
const App = () => {
  // Estado para controlar la vista previa (preview) del cuchillo
  const [previewKnife, setPreviewKnife] = useState(null);

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

  return (
    <div className="bg-stone-50 text-stone-900 font-sans">
      {/* Carga de Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596796332152-628f5217646a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
        <div className="relative z-10 bg-white/50 p-6 sm:p-12 rounded-xl shadow-2xl backdrop-blur-sm">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            Cuchillos con Alma
          </h1>
          <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto">
            Donde el metal y el fuego se unen para crear herramientas con historia.
          </p>
        </div>
      </section>

      {/* Sección del Proceso de Fabricación */}
      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Nuestro Proceso de Creación</h2>
          <div className="space-y-16">
            {processSteps.map((step, index) => (
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
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Cuchillos con Alma. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
