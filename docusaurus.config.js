// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Подкастиң бойынша нұсқаулық',
  tagline: 'Подкастиң бойынша Қазақ тіліндегі нұсқаулықтар сайты',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://podcasting.kz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/podcasting-kz/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yeldarx', // Usually your GitHub org/user name.
  projectName: 'podcasting-kz', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'kk',
    locales: ['kk'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo. 
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yeldarx/podcasting-kz/tree/main/',
        },
        blog: {
          showReadingTime: false,
          editUrl:
            'https://github.com/yeldarx/podcasting-kz/tree/main/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'подкаст, подкастиң, подкаст деген не, Қазақстан, қазақша, подкастинг'}],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Подкастиң бойынша нұсқаулық',
        logo: {
          alt: 'Podcasting.kz логосы',
          src: 'img/podcasting-kz.svg',
        },
        items: [
          {to: '/blog', label: 'Блог', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
        ],
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },

      algolia: {
        appId: '3OP00FEEYI',
        apiKey: 'ae5a14db60e37e638a4cabb21fc2ccbb',
        indexName: 'podcasting',
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
        searchPagePath: 'search',
      },



      footer: {
        style: 'light', /*
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ], */
        copyright: `Copyright © ${new Date().getFullYear()} <a href=https://yeldar.org/>Елдар Құдайбергеновтың</a> жобасы.`,
      }, 
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
