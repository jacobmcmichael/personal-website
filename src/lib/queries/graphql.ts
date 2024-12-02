import { gql } from "graphql-request";

export const getAboutSectionQuery = gql`
	query GetAboutSection {
		aboutSectionCollection {
			items {
				image {
					title
					description
					url
				}
				excerpt
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
