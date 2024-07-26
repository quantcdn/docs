module.exports = {
    title: 'QuantCDN',
    tagline: 'Documentation & Guides',
    url: 'https://docs.quantcdn.io',
    baseUrl: '/',
    favicon: 'img/favicon.png',
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
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'QuantCDN',
            logo: {
                alt: 'QuantCDN Logo',
                src: 'img/logo.png',
                href: 'https://www.quantcdn.io',
            },
            items: [
                { to: 'docs/welcome', label: 'Overview', position: 'left' },
                { to: 'docs/integrations/overview', label: 'Integrations', position: 'left' },
                { to: 'docs/dashboard/get-started', label: 'Dashboard', position: 'left' },
                { to: 'docs/cli/get-started', label: 'CLI', position: 'left' },
                { to: 'docs/api/get-started-content', label: 'API', position: 'left' },
                { to: 'docs/security/WAF/get-started', label: 'Security', position: 'left'},
                {
                    href: 'https://www.quantcdn.io',
                    label: 'quantcdn.io',
                    position: 'right',
                    css: 'navbar__brand',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Getting Started',
                    items: [{
                            label: 'Create a project',
                            to: 'docs/dashboard/get-started',
                        },
                        {
                            label: 'CMS integrations',
                            to: 'docs/integrations/overview',
                        },
                        {
                            label: 'Static site generators',
                            to: 'docs/cli/get-started',
                        },
                    ],
                },
                {
                    title: 'Developers',
                    items: [{
                            label: 'API',
                            to: 'docs/api/get-started-content',
                        },
                        {
                            label: 'CLI',
                            to: 'docs/cli/get-started',
                        }
                    ],
                },
                {
                    title: 'Social',
                    items: [{
                            label: 'Blog',
                            to: 'https://www.quantcdn.io/blog',
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
    plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/quantcdn/docs/tree/develop',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
