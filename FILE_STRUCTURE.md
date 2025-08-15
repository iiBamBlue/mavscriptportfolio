# MavScript.Blu File Structure Guide

## Overview
This document explains the correct file organization to prevent duplicate files and maintain a clean codebase.

## Directory Structure

```
src/
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
├── Routes.jsx             # Route definitions
├── pages/                 # Page components and related files
│   ├── components/        # Shared components used by pages
│   │   ├── AmbientAudioProvider.jsx
│   │   ├── Footer.jsx
│   │   ├── Landing.jsx
│   │   ├── NavBar.jsx
│   │   ├── WhoIsBlue.jsx
│   │   ├── footer.css     # Component-specific styles
│   │   ├── navbar.css
│   │   └── whoisblue.css
│   ├── styles/            # Specialized CSS files
│   │   ├── contacts.css   # Contact form specific styles
│   │   └── notfound.css   # 404 page specific styles
│   ├── About.jsx          # Page components
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── about.css          # Page-specific styles (co-located)
│   ├── home.css
│   ├── projects.css
│   └── skills.css
└── validation/            # Form validation logic
    ├── index.js
    └── schemas.js
```

## Important Guidelines

### ❌ Do NOT create files in these locations:
- `src/components/` - This directory should not exist
- Empty duplicate files anywhere in the project

### ✅ DO create new files in these locations:
- **Shared components**: `src/pages/components/`
- **Page components**: `src/pages/`
- **Page-specific CSS**: Co-locate with the page component in `src/pages/`
- **Specialized CSS**: `src/pages/styles/` (only for special cases)

## Vite Path Aliases

The project uses these path aliases in `vite.config.js`:
```javascript
'@components': './src/pages/components'  // Points to actual component location
'@pages': './src/pages'
'@validation': './src/validation'
```

## CSS Import Patterns

```javascript
// For page components, import co-located CSS:
import './about.css';        // ✅ Correct

// For shared components in pages/components/:
import './navbar.css';       // ✅ Correct

// For specialized styles:
import './styles/contacts.css';  // ✅ Correct (only when in styles/)
```

## Prevention of Duplicate Files

### .gitignore Rules
The `.gitignore` file prevents accidental commits of:
- Empty `src/components/` directory
- Temporary files created by IDEs
- Scaffolding artifacts

### Root Cause Analysis
Duplicate files were typically caused by:
1. **Vite alias mismatch** - Fixed by correcting `@components` alias
2. **IDE auto-completion** - Creating files in expected vs actual locations  
3. **Scaffolding tools** - Using wrong directory structure
4. **Copy-paste workflows** - Creating empty templates

## Development Best Practices

1. **Before creating new components**: Check if `src/components/` directory exists - if so, remove it
2. **Use the correct aliases**: `@components` now points to `src/pages/components/`
3. **Co-locate CSS files**: Keep CSS files next to their corresponding components when possible
4. **Follow the existing structure**: New files should follow the established patterns

## If Duplicates Appear Again

1. Check for empty files: `find . -type f -size 0 ! -path "./node_modules/*"`
2. Remove empty duplicates: Only keep files with actual content
3. Fix any broken imports after removing duplicates
4. Check IDE extensions or scaffolding tools that might be creating the duplicates

## Questions?

Refer to `.github/copilot-instructions.md` for comprehensive development guidelines.