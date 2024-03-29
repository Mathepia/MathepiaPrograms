// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Projects', //网站名字
  tagline: 'Mathematics Epidemiology Projects collections',
  url: 'https://mathepia.github.io/', // 基准网站
  baseUrl: '/MathepiaPrograms/', //网站子名字
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mathepia.ico', // 浏览器tab网站logo
  organizationName: 'Mathepia', // Usually your GitHub org/user name.
  projectName: 'MathepiaPrograms', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Mathepia/MathepiaPrograms',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Mathepia/MathepiaPrograms',
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
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ If you like Mathepia, don't hesitate to <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mathepia/Mathepia.jl">star us</a>`,
      },
      navbar: {
        title: 'Mathepia Programs',
        logo: {
          alt: 'Mathepia Logo',
          src: 'img/avatar.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Projects',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            label: 'Mathepia',
            href: 'https://github.com/Mathepia',
          },
          {
            label: 'JuliaEpi',
            href: 'https://github.com/JuliaEpi',
          },
          {
            label: 'awesome-sciml',
            href: 'https://Mathepia.github.io/awesome-sciml/',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Collections',
            items: [
              {
                label: 'Projects',
                to: '/docs/intro',
              },
              {
                href: 'https://github.com/Mathepia/awesome-sciml',
                label: 'Resources',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Mathepia Organizations',
                href: 'https://github.com/Mathepia',
              },
              {
                label: 'Mathepia Packages Systems',
                href: 'https://github.com/Mathepia/Mathepia.jl',
              },
              {
                label: 'Julia Epi System',
                href: 'https://github.com/JuliaEpi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Pengfei Website',
                href: 'https://song921012.github.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Song921012',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mathepia, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
