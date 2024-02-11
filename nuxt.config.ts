export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: "https://new.arhiterm.by/",
    },
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
  },
  app: {
    head: {
      title: "BM CARGO - Доставим Ваш груз по СНГ и Европе",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "yandex-verification", content: "" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Организуем перевозку Вашего груза по лучшей цене и в кратчайшие сроки.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "BM CARGO Logistic",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Организуем перевозку Вашего груза по лучшей цене и в кратчайшие сроки.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://bmcargo.ru/`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://bmcargo.ru/gruz-na.png`,
        },
        {
          hid: "og:locale",
          property: "og:locale",
          content: "ru_RU",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
      ],
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxt/image",
    "nuxt-swiper",
    "@nuxt/content",
    "@nuxt-modules/cache",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: [100, 300, 400, 500, 600, 700, 800],
          download: true,
          inject: true,
        },
      },
    ],
    [
      "yandex-metrika-module-nuxt3",
      {
        id: "",
        webvisor: true,
      },
    ],
  ],
  css: [
    "@/node_modules/bulma/css/bulma.css",
    "@/assets/main.css",
    "@/node_modules/@swoga/vue-collapsible-panel/dist/vue-collapsible-panel.css",
    "@/node_modules/vue3-photo-preview/dist/index.css",
  ],
  image: {
    aliyun: {
      baseURL: "https://bmcargo.ru/",
    },
  },
});
