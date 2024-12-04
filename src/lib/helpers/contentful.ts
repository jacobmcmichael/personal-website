export function optimizeImage(
	url: string,
	options: {
		width?: number;
		height?: number;
		quality?: number;
		format?: "jpg" | "png" | "webp";
		fit?: "fill" | "scale" | "thumb";
	} = {},
) {
	const params = new URLSearchParams();

	if (options.width) params.append("w", options.width.toString());
	if (options.height) params.append("h", options.height.toString());
	if (options.quality) params.append("q", options.quality.toString());
	if (options.format) params.append("fm", options.format);
	if (options.fit) params.append("fit", options.fit);

	return `${url}?${params.toString()}`;
}
