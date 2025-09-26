/** @type {import('postcss-load-config').Config} */
module.exports = {
  // PostCSS usará estos plugins para procesar tu CSS
  plugins: {
    // 1. Tailwind CSS (Esto resuelve el error de "trying to use 'tailwindcss' directly...")
    'tailwindcss': {},
    // 2. Autoprefixer (Asegura compatibilidad con navegadores antiguos)
    'autoprefixer': {},
  },
}









//export default {
  //plugins: {
   // tailwindcss: {},
   // autoprefixer: {},
 // },
//};

// export default {
//   plugins: {
//     '@tailwindcss/postcss': {},
//     'autoprefixer': {},
//   }
// }





