import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
			],
		}),
	],
});
