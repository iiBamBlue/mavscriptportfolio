/** @format */

/**
 * Environment configuration utility
 * Handles environment variables with fallbacks and validation
 */

// Contact information from environment variables
export const config = {
  contact: {
    email: import.meta.env.VITE_EMAIL || 'contact@example.com',
    linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || '#',
    githubUrl: import.meta.env.VITE_GITHUB_URL || '#',
  },

  // API configuration (add as needed)
  api: {
    // analyticsId: import.meta.env.VITE_ANALYTICS_ID,
    // contactFormEndpoint: import.meta.env.VITE_CONTACT_FORM_API,
  },

  // Feature flags (add as needed)
  features: {
    // enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    // enableContactForm: import.meta.env.VITE_ENABLE_CONTACT_FORM === 'true',
  },
};

// Validation helper
export const validateConfig = () => {
  const missingVars = [];

  if (!import.meta.env.VITE_EMAIL) {
    missingVars.push('VITE_EMAIL');
  }

  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
    console.warn('Using fallback values. Check your .env file.');
  }

  return missingVars.length === 0;
};

// Call validation in development
if (import.meta.env.DEV) {
  validateConfig();
}
