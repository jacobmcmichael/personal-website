import { gql } from "graphql-request";

export const getProjectsQuery = gql`
	query GetProjects {
		projectCollection {
			items {
				_id
				title
				excerpt
			}
		}
	}
`;
