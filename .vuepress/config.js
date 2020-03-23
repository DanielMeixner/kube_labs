const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'Kube Labs',
	dest: './public',
	base: '/kube_labs/',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		// domain: 'http://azuredev.tips',
		displayAllHeaders: true,
		sidebar: 'auto',
		searchMaxSuggestions: 10,
		repo: 'danielmeixner/kube_labs',
		repoLabel: 'Star this Repo',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		logo: '/files/vintage.png',
		sidebar: [
			{
				title: 'Home',
				collapsable: false,   
				children: [
					'/'
				]
			},
			{
				title: 'Tips',
				collapsable: false
			},
			{
				title: 'Recently Added',
				collapsable: false,
children: ['/lab/lab-dev-spaces-connect','/blog/tip256','/blog/tip255','/lab/lab.md']
			},
			{
				title: '.NET',
				collapsable: true,
				children: ['/blog/tip228','/blog/tip113','/blog/tip144','/blog/tip54', '/blog/tip55', '/blog/tip56', '/blog/tip68']
			},				
			{

				title: 'VNET',
				collapsable: true,
				children: ['/blog/tip182','/blog/tip224']
			},
		],
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Videos', link: 'http://videos.azuredev.tips' },
			{ text: 'Developer Live Streaming', link: 'http://twitch.tv/mbcrump' },
			{ text: 'Questions?', link: 'https://github.com/Microsoft/AzureTipsAndTricks/issues/' },
			{ text: 'RSS Feed', link: 'https://microsoft.github.io/AzureTipsAndTricks/rss.xml' }
		]//,
		//	logo: '/vintage.png'
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-17277477-4' // UA-00000000-0
			}
		],
		[
			'@vuepress/search',
			{
				searchMaxSuggestions: 10
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://microsoft.github.io/AzureTipsAndTricks',
				copyright: '2019 Microsoft',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-janitor'
	],
	head: [
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
		],
		['meta', { name: 'theme-color', content: '#ffffff' }],
		['script', { async: true, src: "https://platform.twitter.com/widgets.js", charset: "utf-8" }]
	]
}
