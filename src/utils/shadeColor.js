export function shadeColor(color, amount) {
	return color
		.replace(/../g, (color) =>
			('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
		)
		.toUpperCase();
}

export function shadePalette(hex) {
	return [
		shadeColor(hex, -50),
		shadeColor(hex, -40),
		shadeColor(hex, -30),
		shadeColor(hex, -15),
		hex,
		shadeColor(hex, 15),
		shadeColor(hex, 30),
		shadeColor(hex, 40),
		shadeColor(hex, 50)
	];
}
