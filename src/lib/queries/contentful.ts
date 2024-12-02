import { GraphQLClient } from "graphql-request";
import { getProjectsQuery, getAboutSectionQuery } from "./graphql";

import {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_TOKEN,
} from "$env/static/private";

const CONTENTFUL_GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

export const contentfulClient = new GraphQLClient(CONTENTFUL_GRAPHQL_ENDPOINT, {
	headers: {
		Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
	},
});

export async function useGetProjects() {
	return contentfulClient.request(getProjectsQuery);
}

export async function useGetAboutSection() {
	return contentfulClient.request(getAboutSectionQuery);
}
