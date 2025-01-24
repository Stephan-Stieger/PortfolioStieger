/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				'card': '-5px 8px 0px 6px rgba(169,96,236,0.66)',
			},
			colors: {
				'primary': {
					'50': '#faf6fe',
					'100': '#f3eafd',
					'200': '#e9d8fc',
					'300': '#d8b9f9',
					'400': '#b87df2',
					'500': '#a960ec',
					'600': '#9340dd',
					'700': '#7e2ec2',
					'800': '#6a2b9e',
					'900': '#57247f',
					'950': '#3a0e5d',
				},
				"myGray": {
					"50": "#fbfafc",
					"100": "#f7f4f9",
					"200": "#eee9f3",
					"300": "#e6deed",
					"400": "#ddd3e7",
					"500": "#d5c8e1",
					"600": "#aaa0b4",
					"700": "#807887",
					"800": "#55505a",
					"900": "#2b282d"
				}

			},
		},
	},
	plugins: [],
}
