module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [
		"./public/**/*.html",
		"./src/**/*.js",
	],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [require("@tailwindcss/ui")],
}
