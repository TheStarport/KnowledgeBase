// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Starport Knowledge Base',
  tagline: 'A collection of all knowledge amassed for the Space Game',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.the-starport.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/TheStarport/KnowledgeBase/tree/master',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./CSS/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The Starport',
        items: [
          // {
          //   to: 'https://blog.the-starport.net',
          //   target: '_self', 
          //   label: 'Blog', 
          //   position: 'left'
          // },
          {
            to: 'https://wiki.the-starport.net',
            target: '_self', 
            label: 'Wiki', 
            position: 'left'
          },
          {
            to: 'https://the-starport.net/freelancer/forum/',
            target: '_self', 
            label: 'Forum', 
            position: 'left'
          },
          {
            to: 'https://discord.gg/tnrm4CB', 
            label: 'Discord', 
            position: 'left',
            
          },
          {
            to: 'https://github.com/TheStarport', 
            label: 'The Forge', 
            position: 'left',
            
          }
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ini', 'mermaid', 'cpp', 'csharp', 'pascal', 'maxscript', 'markdown']
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'UJL7MO0C52',

        // Public API key: it is safe to commit it
        apiKey: '7273ca101cdbada512274a0f6bbd3af0',

        indexName: 'the-starport',
        contextualSearch: false,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search'
      },
    }),
  markdown: {
    mermaid: true
  },
  themes: [
    "@docusaurus/theme-mermaid"
  ]
};

module.exports = config;
