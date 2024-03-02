import { auth } from "@/lib/auth-options";

export async function GET(request: Request) {

	const session = await auth();

	if (!session?.user) {
		return Response.json(null, { status: 401 });
	}

	const data = [
		{ id: 1, name: 'John Doe' },
		{ id: 2, name: 'Angela Woo' },
	];

	return Response.json(data);
}