# Environment Variables & Secrets Management

This project uses environment variables to manage secrets and configuration. This keeps sensitive information secure and allows for easy configuration across different environments.

## Setup

1. **Copy the environment template:**

   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file with your actual values:**
   ```env
   VITE_EMAIL=your-email@example.com
   VITE_LINKEDIN_URL=https://linkedin.com/in/your-profile
   VITE_GITHUB_URL=https://github.com/your-username
   ```

## Important Security Notes

- **Never commit `.env` files** - They're already in `.gitignore`
- **Only `VITE_` prefixed variables** are exposed to the client
- **Don't put server secrets** in client-side environment variables
- **Use `.env.example`** as a template for other developers

## Available Environment Variables

### Contact Information

- `VITE_EMAIL` - Your contact email address
- `VITE_LINKEDIN_URL` - Your LinkedIn profile URL
- `VITE_GITHUB_URL` - Your GitHub profile URL

### Future API Keys (examples)

- `VITE_ANALYTICS_ID` - Analytics tracking ID
- `VITE_CONTACT_FORM_API` - Contact form service endpoint

## Usage in Code

Environment variables are managed through the config utility:

```jsx
import { config } from '../config/env.js';

// Access contact information
const email = config.contact.email;
const linkedin = config.contact.linkedinUrl;
```

## Production Deployment

For GitHub Pages deployment, set environment variables in:

- **Repository Settings** → **Secrets and variables** → **Actions**
- Add each `VITE_` variable as a repository secret

## Development

The config utility will warn you about missing environment variables in development mode and provide fallback values for testing.
