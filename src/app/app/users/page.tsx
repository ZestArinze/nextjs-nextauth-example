'use client';

import { useEffect, useState } from "react";

export default function AdminPage() {
	const [users, setUsers] = useState<Array<{ id: Number, name: string }>>([]);
	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		setMessage(null);

		fetch('/api/users')
			.then(response => {
				if(!response.ok) {
					throw new Error(`Failed to fetch users; status: ${response.status}`)
				}

				return response.json();
			})
			.then(data => setUsers(data))
			.catch(error => setMessage(`Error: ${error.message}`))
	}, []);

	return <div className="flex h-screen">
		<div className="m-auto">
			{message && <p><strong>{message}</strong></p>}

			<hr /> <br />
			<h2>Users</h2>
			{users.map((user, index) => <li key={index}>{user.name}</li>)}
		</div>
	</div>
}
