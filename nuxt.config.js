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
    ],
  },

  loading: {
    color: '#fff',
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/global.scss',
  ],
  plugins: [
    '@/plugins/globals',
  ],
  components: {
    dirs: [
      '~/components',
      '~/components/common',
      '~/components/views',
      '~/components/general',
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
