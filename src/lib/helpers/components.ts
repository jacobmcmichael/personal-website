export const useDefaultIcon = (variant: string) => {
	switch (variant) {
		case "symbol":
			return "arrow-right";

		case "plain":
			return "arrow-up-right";

		default:
			return undefined;
	}
};
