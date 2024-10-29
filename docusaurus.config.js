// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import path from 'path';
/** @type {import('@docusaurus/types').Config} */
const config = {
  scripts: [
    // String format.

    // Object format.
    {
      src: 'https://code.jquery.com/jquery-3.7.1.min.js',
    },
    {
      src: 'custom.js',
    }
  ],
  title: 'Vocal AI',
  tagline: 'Engage, Automate, and Accelerate Business with Conversational AI',
  favicon: 'img/voice_bot_icon_v1.svg',

  // Set the production url of your site here
  url: 'https://userlens.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Vocal AI', // Usually your GitHub org/user name.
  projectName: 'Vocal AI', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {

            // Remote File
            spec: 'static/voicebot_openapi.yaml',
            route: '/api-reference',
          },
        ],
        theme: {
          /**
           * Highlight color for docs
           */
          primaryColor: '#2677cc',
        },
      }
    ],
  ],




  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Vocal AI',
          src: 'img/logo_black.png',
        },
        items: [
         

          {
            position: 'right',
            href: "/api-reference",
            label: "API Reference"
          }
          ,
        ],
      },
      footer: {
        style: 'dark',

        copyright: `Copyright © ${new Date().getFullYear()} Vocal AI, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
    }),
};

export default config;
