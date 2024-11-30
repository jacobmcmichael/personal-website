export type ProjectItem = {
	_id: string;
	title: string;
	excerpt: string;
};

export type ProjectsData = {
	projects: {
		projectCollection: {
			items: ProjectItem[];
		};
	};
};
