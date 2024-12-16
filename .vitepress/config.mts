import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lang: 'fr-CA',
  title: "Au Fil du Temps",
  description: "Les recettes que maman Jacynthe nous faisait.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mini.jpg',
    search: { provider: 'local' },
    aside: false,
    docFooter: { prev: false, next: false },

    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Mesure & Convertion', link: '/conversion' },
      { text: 'À propos', link: '/about' },
    ],

    sidebar: [
      {
        text: "Entrées",
        collapsed: true,
        items: [
          { text: 'soupe minestrone', link: '/soupe-minestrone.md' },
        ],
      },
      {
        text: "Plats principaux",
        collapsed: true,
        items: [
          { text: 'riz pilaf', link: '/riz-pilaf.md' },
          { text: 'casserole maison', link: '/casserole-maison.md' },
          { text: 'couscous aux saucisses à l’érable', link: '/couscous-aux-saucisses-érable.md' },
        ]
      },
      {
        text: "Desserts",
        collapsed: true,
        items: [
          {
            text: "biscuits",
            collapsed: true,
            items: [
              { text: 'galette à la mélasse', link: '/galette-à-la-mélasse.md' },
            ],
          },
          {
            text: "gâteau",
            collapsed: true,
            items: [
              { text: 'gâteau crème patissière', link: '/gâteau-crème-patissière.md' },
            ],
          },
          {
            text: "confiseries",
            collapsed: true,
            items: [
              { text: 'sucre à la crème', link: '/sucre-à-la-crème.md' },
            ],
          },
        ],
      },
      {
        text: "Autres",
        collapsed: true,
        items: [
          { text: 'sauce béchamel', link: '/sauce-béchamel.md' },
          { text: 'sauce BBQ piquante', link: '/sauce-BBQ-piquante-pour-poulet.md' },
        ],
      },

    ],
  }
})
