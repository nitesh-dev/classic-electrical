// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  devtools: { enabled: false },
  css: ["@/assets/styles/global.css", "@/assets/styles/form.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Hanuman",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Heebo>",
        },
      ],
    },
  },
  ssr: false,
  nitro: {
    preset: "service-worker",
  },
});
