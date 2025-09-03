# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ced8d9b9-6ed2-4c5e-85bb-34b34fcac168

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ced8d9b9-6ed2-4c5e-85bb-34b34fcac168) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Supabase Auth & Netlify setup

- Create `.env` locally from `.env.example` and set:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- In Netlify Site settings → Build & deploy → Environment, set the same vars.
- Supabase Dashboard:
  - Site URL: `https://codedcheese.com`
  - Redirect allow-list: `https://codedcheese.com/auth/callback`
  - Enable email confirmations
- Netlify SPA fallback & headers are configured in `netlify.toml`.

### Test plan

1) Local
   - `npm run dev`
   - Visit `/login`, request a magic link
   - Click the email link; it should land on `/auth/callback`, then redirect to `/app`
   - Confirm protected route works; sign out and verify redirect to `/login`

2) Netlify
   - Deploy and open `https://codedcheese.com/app` directly (fresh tab). It should render the SPA due to the fallback redirect
   - Confirm env vars are injected and auth works end-to-end

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ced8d9b9-6ed2-4c5e-85bb-34b34fcac168) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
