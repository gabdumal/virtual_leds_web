/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
		},
		fontFamily: {
			sans: [
				"ui-sans-serif",
				"system-ui",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			serif: [
				"ui-serif",
				"Georgia",
				"Cambria",
				"Times New Roman",
				"Times",
				"serif",
			],
			mono: [
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace",
			],
		},
	},
	plugins: [
		"prettier-plugin-tailwindcss",
		"tailwindcss-react-aria-components",
		"tailwindcss-animate",
	],
};