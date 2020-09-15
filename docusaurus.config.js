module.exports = {
  title: 'QuantCDN',
  tagline: 'Documentation & Guides',
  url: 'https://docs.quantcdn.io',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'quantcdn', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap',
  ],
  themeConfig: {
    //algolia: {
    //  apiKey: '',
    //  indexName: '',
    //  appId: '',
    //  algoliaOptions: {}, // Optional, if provided by Algolia
    //},
    navbar: {
      title: 'QuantCDN',
      logo: {
        alt: 'QuantCDN Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/welcome',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/quantcdn',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://quantcdn.io',
          label: 'quantcdn.io',
          position: 'right',
        },
        {
          href: 'https://support.quantcdn.io',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            {
              label: 'Create a project',
              to: 'docs/dashboard/create-project',
            },
            {
              label: 'CMS integrations',
              to: 'docs/integrations/overview',
            },
            {
              label: 'Static site generators',
              to: 'docs/integrations/static-generators',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'API',
              to: 'docs/api/get-started',
            },
            {
              label: 'CLI',
              to: 'docs/cli/get-started',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/quant',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/quantcdn',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/quantcdn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QuantCDN Pty Ltd. Built with Docusaurus, Deployed via Quant.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/quantcdn/docs/tree/develop',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
