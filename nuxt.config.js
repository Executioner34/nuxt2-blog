export default {
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' },
    ],
  },

  loading: {
    color: '#fff',
  },
  css: [
    'normalize.css/normalize.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/global.scss',
  ],
  plugins: [
    '@/plugins/globals',
  ],
  components: {
    dirs: [
      '~/components',
      '~/components/views',
    ],
  },
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  build: {
    transpile: [/^element-ui/],
  },
};
