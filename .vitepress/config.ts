import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Kamish",
  base: '/',
  description: "Kamish docs",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config


    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Вернуться на сайт', link: 'https://kamish.pro' }
    ],

    editLink: {
      pattern: 'https://github.com/kamish522/kamish-docs/:path',
      text: 'Редактировать страницу на GitHub'
    },

    sidebar: [
      {
        text: 'Гайды',
        items: [
          { text: 'Главная', link: '/' },
        ]
      },
      {
        text: 'Документы',
        items: [
          { text: 'Условия использования', link: '/tos' },
          { text: 'Политика конфиденциальность', link: '/privacy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kamish522/kamish-docs' },
      { icon: 'discord', link: 'https://discord.gg/8p8NYhparv' }
    ]
  }
})
