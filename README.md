
<img width="1851" height="965" alt="demoi" src="https://github.com/user-attachments/assets/6e9b8cbc-886a-4efe-8df1-81f1ac0f755c" />

## Pixelle — Custom Phone Case Builder

Pixelle is a Next.js app that lets users upload a photo, configure a custom phone case, and purchase it via Stripe. It handles image uploads and dimensions, order creation and payment, webhook fulfillment, and transactional emails.

### Highlights
- Upload images with UploadThing; extract dimensions with Sharp
- Interactive case configurator with React/Framer Motion
- Auth via Kinde, user bootstrap on first login
- Orders and addresses in PostgreSQL via Prisma
- Stripe Checkout + verified webhooks
- Order confirmation emails via Resend

### Tech Stack
- App: Next.js 15, React 19, TypeScript, Tailwind CSS 4
- Auth: @kinde-oss/kinde-auth-nextjs
- DB/ORM: PostgreSQL + Prisma
- Payments: Stripe
- Uploads: UploadThing
- Email: Resend

---

## Architecture overview
1) User logs in with Kinde (server action ensures a User row exists).
2) User uploads an image via UploadThing. On complete, we create/update a `Configuration` with `imageUrl`, `width`, `height` (from Sharp metadata).
3) User customizes a case (color/model/material/finish) and proceeds to checkout.
4) Stripe Checkout completes; Stripe webhook (`/api/webhook`) sets `Order.isPaid = true` and creates shipping/billing addresses.
5) Resend sends an order confirmation email using `OrderReceivedEmail`.

Database models are in `prisma/schema.prisma`; Prisma Client is generated to `src/generated/prisma` and consumed via `src/db`.

---

## Prerequisites
- Node.js 18.18+ (20+ recommended)
- A PostgreSQL database (local Docker, Neon, Supabase, RDS, etc.)
- Stripe account + Stripe CLI (for local webhooks)
- Kinde account and app (OIDC)
- UploadThing account
- Resend account

---

## Environment variables
Create a `.env` or `.env.local` file in the project root with these variables:

```
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public"

# Stripe
STRIPE_SECRET_KEY="sk_live_or_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."  # Set after starting Stripe CLI listen (see below)

# Kinde (OIDC)
KINDE_ISSUER_URL="https://your-subdomain.kinde.com"
KINDE_CLIENT_ID="..."
KINDE_CLIENT_SECRET="..."
KINDE_REDIRECT_URI="http://localhost:3000/api/auth/kinde/callback"
KINDE_POST_LOGOUT_REDIRECT_URI="http://localhost:3000/"

# UploadThing
UPLOADTHING_SECRET="..."
UPLOADTHING_APP_ID="..."

# Resend
RESEND_API_KEY="re_..."
```

Notes
- The app uses the Prisma Client from `src/generated/prisma`.
- Stripe webhook secret is provided by Stripe CLI after you start `stripe listen`.

---

## Setup (Windows PowerShell)

1) Install dependencies

```powershell
npm ci
```

This will also run `prisma generate` via postinstall.

2) Initialize the database schema (choose one)

```powershell
# Recommended: create a migration and apply it
npx prisma migrate dev --name init

# Or: push schema without creating a migration (dev only)
npx prisma db push
```

3) (Optional, local only) Start Stripe webhook forwarding

```powershell
# Forward events to the webhook route; copy the given signing secret into STRIPE_WEBHOOK_SECRET
stripe listen --forward-to http://localhost:3000/api/webhook
```

4) Run the app

```powershell
npm run dev
```

Open http://localhost:3000

---

## NPM scripts
- `npm run dev` — start Next.js (Turbopack) in development
- `npm run build` — production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint

---

## Key paths
- UI pages: `src/app/**`
- API routes:
	- Uploads: `src/app/api/uploadthing/*`
	- Stripe webhook: `src/app/api/webhook/route.ts` (POST)
- Auth bootstrap: `src/app/auth-callback/actions.ts`
- Prisma schema: `prisma/schema.prisma`
- Prisma client: `src/generated/prisma` (imported via `@/generated/prisma` and `@/db`)
- Stripe client: `src/lib/stripe.ts`
- UploadThing helpers: `src/lib/uploadthing.ts`
- Email template: `src/components/emails/OrderReceivedEmail.tsx`

---

## Deployment
- Configure the same environment variables in your hosting provider (e.g., Vercel).
- Set your production Stripe webhook to point to `/api/webhook` and update `STRIPE_WEBHOOK_SECRET`.
- Ensure your Prisma `DATABASE_URL` points to your production Postgres.

---

## Troubleshooting
- Prisma client not found or types missing: run `npx prisma generate`.
- DB connection issues: verify `DATABASE_URL` and that the DB accepts connections from your machine.
- Stripe webhook errors: confirm the `stripe-signature` header arrives and `STRIPE_WEBHOOK_SECRET` matches the active `stripe listen` session.
- Sharp install issues on Windows: ensure you are on a supported Node version; reinstall with `npm ci`.

---

## License
This project is provided as-is; add a license file if you intend to publish or distribute.

