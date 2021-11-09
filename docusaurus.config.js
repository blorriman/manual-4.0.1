/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'LORROS User Guide',
	tagline: 'democratic decision making for boards and committees',
	url: 'https://lorros.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.
	themeConfig: {
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
		},
		navbar: {
			logo: {
				alt: 'LORROS Logo',
				src: 'img/logo.png',
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'User Manual',
				},
				{
					to: 'administration/intro',
					activeBasePath: 'administration/intro',
					label: 'Administrator Manual',
					position: 'left',
				},
				{ to: '/blog', label: 'Best Practices', position: 'left' },
			],
		},
		footer: {
			style: 'dark',
			copyright: `Copyright © ${new Date().getFullYear()} LORROS Web Applications Ltd.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					remarkPlugins: [require('remark-import-partial')],
					sidebarCollapsible: true,
					// Please change this to your repo.
					// editUrl:
					// 	'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				blog: {
					showReadingTime: true,
					blogSidebarTitle: 'Helpful Articles',
					// Please change this to your repo.
					// editUrl:
					// 	'https://github.com/facebook/docusaurus/edit/master/website/blog/',
				},
				// theme: {
				// 	customCss: require.resolve('./src/css/custom.css'),
				// },
				theme: {
					customCss: [require.resolve('./src/css/custom.css')],
				},
			},
		],
	],

	plugins: [
		'@docusaurus/plugin-ideal-image',
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'administration',
				path: 'administration',
				routeBasePath: 'administration',
				sidebarPath: require.resolve('./sidebarsAdmin.js'),
				// ... other options
			},
		],
	],
}
