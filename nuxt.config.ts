// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    runtimeConfig: {
        public: {
          baseURL: 'https://new.arhiterm.by/',
        }
    },
    app: {
        head: {
            title: 'Frese - Балансировка и регулирование в РБ',
            htmlAttrs: {
              lang: 'ru'
            },
            meta: [
              { charset: 'utf-8' },
              { name: 'yandex-verification', content: '56b4df5279a6bb79' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { hid: 'description', name: 'description', content: 'Frese' },
              {
                hid: 'og:title',
                property: 'og:title',
                content: 'Frese - Балансировка и регулирование в РБ',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'На сайте frese.by Вы можете ознакомиться с номенклатурой производителя Frese импортируемой в Республику Беларусь компанией Архитрем ( arhiterm.by ).',
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: `https://frese.by`,
            },
            {
              hid: 'og:locale',
              property: 'og:locale',
              content: 'ru_RU',
            },
            {
              hid: 'og:type',
              property: 'og:type',
              content: 'website',
            }, 
            ],
          },
          
        },
    modules: [
        'nuxt-icon',
        'nuxt-swiper',
        '@funken-studio/sitemap-nuxt-3',
        ['@nuxtjs/google-fonts', {
          families: {
            Montserrat: [100,300,400,500,600,700,800],
            download: true,
            inject: true
          }
        }],
        [
          'yandex-metrika-module-nuxt3',
          {
            id: '93020253',
            webvisor: true,
          }
        ]
    ],
    css:[
        "@/node_modules/bulma/css/bulma.css",
        "@/assets/main.css",
        '@/node_modules/@swoga/vue-collapsible-panel/dist/vue-collapsible-panel.css',
        '@/node_modules/vue3-photo-preview/dist/index.css'
    ],
    sitemap:
      {
        hostname: 'https://frese.by', 
        cacheTime: 1,
        defaults: {
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date().toISOString(),
        },
    }   
})
