export type ContentfulImage = {
	title: string;
	description: string;
	url: string;
	width: number;
	height: number;
};

export type AboutSectionItem = {
	_id: string;
	title: string;
	description: string;
	image: ContentfulImage;
};

export type AboutSectionData = {
	aboutSectionCollection: {
		items: AboutSectionItem[];
	};
};

export type ProjectsSectionItem = {
	_id: string;
	clientName: string;
	featuredImage: ContentfulImage;
	tags: string[];
};

export type ProjectsSectionData = {
	projectsCollection: {
		items: ProjectsSectionItem[];
	};
};
