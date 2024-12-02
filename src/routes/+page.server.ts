import type { PageServerLoad } from "./$types";
import { useGetAboutSection, useGetProjects } from "$lib/queries/contentful.js";

export const load: PageServerLoad = async () => {
	const [aboutSectionData, projectsData] = await Promise.all([
		useGetAboutSection(),
		useGetProjects(),
	]);
	return { aboutSectionData, projectsData };
};
