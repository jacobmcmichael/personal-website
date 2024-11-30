import type { PageServerLoad } from "./$types";
import { useGetProjects } from "$lib/queries/contentful.js";

export const load: PageServerLoad = async () => {
	const projects = await useGetProjects();
	return { projects };
};
