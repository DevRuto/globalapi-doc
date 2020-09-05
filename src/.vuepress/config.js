const { description } = require('../../package');
const resolve = require("vuepress-theme-hope/resolve");

module.exports = resolve({
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GlobalAPI Wiki',
  base: '/globalapi-doc/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    baseLang: 'en-US',
    locales: {
      '/': {
        label: 'English',
        nav: require('./nav/en.js'),
        sidebar: require('./sidebar/en.js')
      },
      '/zh/': {
        label: '中文',
        nav: require('./nav/zh.js'),
        sidebar: require('./sidebar/zh.js')
      }
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'GlobalAPI Wiki',
      description: description
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'GlobalAPI Wiki',
      description: 'GlobalAPI 文檔'
    }
  }
})