# Sondos Alsayed Mahmoud — Portfolio

Portfolio for Sondos Alsayed Mahmoud, a third-year Railway Engineering Technology student at 6th of October Technological University in Cairo, Egypt. The page presents her education, railway training, experience, skills, selected engineering projects, and contact information. The project gallery uses images from `assets/projects`, and the site logo is used in the header and as the favicon.

The site is built with HTML, CSS and JavaScript. The request form in the footer sends submissions through a Node.js serverless function and Gmail SMTP. Requests are sent to `REQUEST_TO_EMAIL`, or to Sondos's email address when that setting is not provided.

## Deploy to Vercel

1. Push the project to a GitHub repository, making sure local `.env` files are not staged.
2. Import that repository into Vercel and use the **Other** framework preset. The included `vercel.json` configures the project root as the output directory; no build command is required.
3. In **Project → Settings → Environment Variables**, add these server-side variables for Production (and Preview if needed):
   - `GMAIL_USER`: the Gmail account used to send notifications.
   - `GMAIL_APP_PASSWORD`: its Google App Password.
   - `REQUEST_TO_EMAIL`: the inbox that should receive requests.
4. Redeploy after adding or changing environment variables.

The `/api/request` Node.js function is deployed with the static portfolio. Do not open `/api/request` directly in a browser: it accepts `POST` requests from the form, so a direct `GET` returns `405 Method Not Allowed`. For local development, run `npm run serve` (or `npm.cmd run serve` in PowerShell if script execution is restricted) and open the local URL shown in the terminal. The included Node.js development server serves the portfolio and API without downloading the Vercel CLI.

`.gitignore` and `.vercelignore` exclude local environment files and credentials from Git and Vercel uploads. Configure secrets in Vercel's Environment Variables instead of committing them. Only add a real `.env.local` on your own machine if local email testing is needed.

## Request form email setup

1. Enable **2-Step Verification** on the Google account that will send the email.
2. Create an **App Password** in the Google Account security settings. Use it only for this website; do not use your normal Gmail password.
3. Copy `.env.example` to `.env.local` for local development and set:
   - `GMAIL_USER`: the Gmail account used to send the notification.
   - `GMAIL_APP_PASSWORD`: the 16-character Google App Password (spaces are accepted).
   - `REQUEST_TO_EMAIL`: the inbox that receives requests. It can be the same Gmail account.
4. Install dependencies with `npm install`, then run `npm run serve` (or `npm.cmd run serve` in PowerShell if script execution is restricted) and open the local URL shown in the terminal. This starts the included Node.js server so both the page and `/api/request` work together. Static servers such as the VS Code Live Server extension do not run the API function and return `405 Method Not Allowed`; in this case, the form opens a prefilled email draft instead, which you must send from your email app.
5. For Vercel deployment, configure the variables in the Vercel project settings above and redeploy.

The App Password is a secret. Never add it to frontend code or commit any `.env` file; `.gitignore` and `.vercelignore` exclude environment files, and `.env.example` contains placeholders only. Gmail may apply sending limits or flag automated messages. The function sends over Gmail SMTP on port 465.
