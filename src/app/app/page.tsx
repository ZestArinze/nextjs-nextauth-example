'use client';

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminPage() {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return <div className="flex h-screen">
			<div className="m-auto">
				<h3>Name: {session.user?.name}</h3>
				<div><strong>to a PRORECTED page</strong></div>
			</div>
		</div>
	}


	return <div className="flex h-screen">
		<div className="m-auto">
			<div><Link href='/api/auth/signin' />Please login</div>
		</div>
	</div>
}
