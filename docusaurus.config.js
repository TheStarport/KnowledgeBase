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

  onBrokenLinks: 'throw',
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
          editUrl: 'https://github.com/TheStarport/KnowledgeBase/Docs',
        },
        theme: {
          customCss: require.resolve('./src/CSS/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Starport',
        logo: {
          alt: 'The Starport Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Home',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'INI Editing',
                to: '/docs/INI Editing',
              },
              {
                label: 'File Structures',
                to: '/docs/File Structures',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://the-starport.net/discord',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC1ibqmg3PsAEU3Vu4jL-urw',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                href: 'https://the-starport.net/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TheStarport',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date("2008").getFullYear()}-${new Date().getFullYear()} The Starport.<br/>Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
