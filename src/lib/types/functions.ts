export type OptimizeContentfulImageOptions = {
	width?: number;
	height?: number;
	quality?: number;
	srcset?: number[];
	format?: "jpg" | "png" | "webp";
	fit?: "fill" | "scale" | "thumb";
};

export type OptimizeContentfulImageResult = {
	optimizedSource: string;
	optimizedSourceSet: string;
};

export type OptimizeContentfulImageFn = (
	url: string,
	options: OptimizeContentfulImageOptions,
) => OptimizeContentfulImageResult;
