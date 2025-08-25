export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth();
export const POST = handleAuth();