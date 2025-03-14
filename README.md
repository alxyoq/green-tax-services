# Green Tax Services Website

This is a Next.js project for the Green Tax Services website.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Netlify

This project is configured for easy deployment to Netlify. Follow these steps to deploy:

### Method 1: Deploy from Git repository (Recommended)

1. Push this code to a Git repository (GitHub, GitLab, etc.)
2. Log in to your Netlify account
3. Click "New site from Git"
4. Connect to your Git provider and select the repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

### Method 2: Manual Deploy

1. Build the project locally:
   ```bash
   npm run build
   ```
2. Log in to your Netlify account
3. Go to "Sites" and drag and drop the `out` folder to the Netlify drag and drop area

### Important Netlify Settings

For proper deployment, make sure to:

1. Add a `_redirects` file in the public folder with:
   ```
   /*    /index.html   200
   ```

2. Install the Netlify Next.js plugin if needed:
   - In Netlify UI: Site settings → Build & deploy → Environment → Install the "Next.js" plugin

## Troubleshooting Deployment Issues

If you see a "Page not found" error on your deployed site:

1. **Check Build Logs**: Make sure the build process completed successfully without errors.

2. **Verify Output Directory**: Ensure Netlify is configured to serve from the correct directory (`out`).

3. **Add Redirects**: Make sure the `_redirects` file is properly set up for client-side routing.

4. **Add netlify.toml**: If problems persist, add this to root (already included in this project):
   ```toml
   [build]
     command = "npm run build"
     publish = "out"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

5. **Trigger Rebuild**: Force a new deployment after making these changes.

## Learn More

To learn more about Next.js and Netlify:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Netlify Documentation](https://docs.netlify.com/) - learn about Netlify features and API.
