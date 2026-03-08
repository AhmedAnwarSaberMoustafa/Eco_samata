# E-Commerce React Website

Modern e-commerce frontend built with React, Redux Toolkit, React Router, and styled-components.

## Overview

This project is a responsive shopping website with:

- Home slider and category discovery sections
- Product listing and product details pages
- Editable cart (change quantity, size, color, delete items)
- Checkout form with animated success confirmation
- Contact and About pages with updated 2026 content
- Mobile navigation menu support

## Data Source

The app uses a hybrid data strategy:

- API first: fetches products from
	- `https://e-commerce-server-production.up.railway.app/api/v1`
- Fallback mode: if API is unavailable, it uses local data from `src/data.js`

This keeps the storefront usable even when the backend is offline.

## Tech Stack

- React 18
- Redux Toolkit + React Redux
- React Router DOM v5
- styled-components
- Material UI (MUI)
- React Spinners

## Pages and Routes

- `/` Home
- `/products` All products
- `/products/:category` Category products
- `/product/:id` Product details
- `/cart` Cart and checkout
- `/about` About page
- `/contact-us` Contact page

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm start
```

Open `http://localhost:3000` in your browser.

### 3. Create production build

```bash
npm run build
```

## Available Scripts

- `npm start` Starts development server
- `npm test` Runs tests
- `npm run build` Builds production bundle
- `npm run eject` Ejects CRA config (one-way)

## Project Structure (Main)

- `src/pages/` Page-level screens
- `src/components/` Reusable UI components
- `src/features/Cart/` Redux cart slice
- `src/UI/` Styled UI primitives and layout containers
- `src/data.js` Local fallback dataset
- `src/api_route.js` API base URL

## Contact

- Phone: `01126989864`
- Email: `devahmedanwer@gmail.com`
