type ContentfulImage = {
	title?: string;
	description?: string;
	url?: string;
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

export type ProjectsItem = {
	_id: string;
	clientName: string;
	images: ContentfulImage[];
	featuredImage: ContentfulImage;
	tags: string[];
};

export type ProjectsData = {
	projectsCollection: {
		items: ProjectsItem[];
	};
};
