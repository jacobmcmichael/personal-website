import { json } from "@sveltejs/kit";
import { createClient } from "contentful";

const client = createClient({
	space: "dfzriciin55k",
	environment: "master", // defaults to 'master' if not set
	accessToken: "7eD2rtM1T2lsCHv0kPNwin6RnR3EWjeNg2Mf37vRqFA",
});

export async function GET() {
	const entry = await client.getEntry("77JbFKGZAdhDSkj3mh8BHq");
	return json(entry);
}
