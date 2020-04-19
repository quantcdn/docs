module.exports = {
  title: 'QuantCDN',
  tagline: 'Developer docs',
  url: 'https://develop.quantcdn.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'quantcdn', // Usually your GitHub org/user name.
  projectName: 'quant-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'QuantCDN',
      logo: {
        alt: 'QuantCDN Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/doc1',
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
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
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
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
