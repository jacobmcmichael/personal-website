import { gql } from "graphql-request";

export const getAboutSectionQuery = gql`
	query GetAboutSection {
		aboutSectionCollection {
			items {
				title
				description
				image {
					title
					description
					url
				}
			}
		}
	}
`;

export const getProjectsQuery = gql`
	query GetProjects {
		projectsCollection {
			items {
				_id
				featuredImage {
					title
					description
					url
				}
				imagesCollection {
					items {
						title
						description
						url
					}
				}
				clientName
			}
		}
	}
`;
