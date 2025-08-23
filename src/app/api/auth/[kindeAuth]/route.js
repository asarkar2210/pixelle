import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth({
	login: {
		returnTo: "/auth-callback",
	},
	register: {
		returnTo: "/auth-callback",
	},
	callback: {
		// After processing the callback, direct users to our client landing which restores state
		redirectTo: "/auth-callback",
	},
});