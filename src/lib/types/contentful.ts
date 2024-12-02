type ContentfulImage = {
	title?: string;
	description?: string;
	url?: string;
};

export type AboutSectionItem = {
	_id: string;
	image: ContentfulImage;
	excerpt: string;
};

export type AboutSectionData = {
	aboutSectionCollection: {
		items: AboutSectionItem[];
	};
};

export type ProjectsItem = {
	_id: string;
	featuredImage: ContentfulImage;
	images: ContentfulImage[];
	clientName: string;
};

export type ProjectsData = {
	projectsCollection: {
		items: ProjectsItem[];
	};
};
