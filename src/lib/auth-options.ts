import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { NextAuthOptions, getServerSession } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID ?? '',
			clientSecret: process.env.GITHUB_SECRET ?? ''
		}),
	]
}

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
	return getServerSession(...args, authOptions)
}