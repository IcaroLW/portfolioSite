/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'perfil': "url('/img/perfil.png')",
        'background': "url('/img/Background.png')",
        'github': "url('/img/github.svg')",
        'linkedin': "url('/img/linkedin.svg')",
        'vuejs': "url('/img/vue.svg')",
        'python': "url('/img/python.svg')",
        'javascript': "url('/img/javascript.svg')",
        'tailwind': "url('/img/tailwind.svg')",
        'html': "url('/img/html.svg')",
        'css': "url('/img/css.svg')",
        'nuxt': "url('/img/nuxt.svg')"
      }
    },
  },
  plugins: [],
}

