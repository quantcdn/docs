import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'


// https://astro.build/config
export default defineConfig({
	site: 'https://docs.quantcdn.io',
	integrations: [
		starlight({
			title: 'QuantCDN',
			logo: {
        light: './src/img/logo.png',
        dark: './src/img/logo.png',
      },
      favicon: '/favicon.svg',
			customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
			social: {
				github: 'https://github.com/quantcdn',
				twitter: 'https://www.twitter.com/quantcdn'
			},
			sidebar: [
			  {
					label: 'Welcome',
					link: '/welcome/'
				},
  		  {
  				label: 'Go-live process',
  				link: '/golive/'
  			},
  		  {
  				label: 'Custom error pages',
  				link: '/custom-error-pages/'
   			},
    		{
					label: 'Integrations',
					autogenerate: { directory: 'integrations' },
				},
				{
     			label: 'Dashboard',
     			autogenerate: { directory: 'dashboard' },
    		},
        {
					label: 'CLI',
					autogenerate: { directory: 'cli' },
				},
				{
					label: 'API',
					autogenerate: { directory: 'api' },
				},
				{
					label: 'Security',
					autogenerate: { directory: 'security' },
				},
        // Add the generated sidebar group to the sidebar.
        ...openAPISidebarGroups,
			],
			plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
           base: 'content-api',
           label: 'Content API',
           schema: './src/content/schemas/content-api.json',
          },
        ]),
			]
		}),
	],
});
