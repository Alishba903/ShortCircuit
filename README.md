This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`]

## ShortCircuit

> A minimal, privacy-friendly URL shortener built with Next.js and MongoDB.

## Features
- Shorten long URLs with custom short codes
- No user tracking or login required
- Clean, minimal UI (gray theme)
- Built with Next.js App Router and Tailwind CSS
- MongoDB backend for storing URLs

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- MongoDB

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Alishba903/ShortCircuit.git
cd ShortCircuit
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory:

```
MONGODB_URI=mongodb://localhost:27017
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 4. Start the development server
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the app.

## Usage
- Enter your long URL and a preferred short code on the main page or the **Shorten** page.
- Click **Generate** to create your short link.
- Share the generated short link!

## Project Structure
- `app/` — Main Next.js app directory (pages, layout, API routes)
- `components/` — Reusable React components (Navbar, etc.)
- `lib/` — MongoDB connection helper
- `public/` — Static assets (images, icons)

## Deployment
You can deploy this app easily on [Vercel](https://vercel.com/) or any platform that supports Next.js and environment variables.

## License
MIT
