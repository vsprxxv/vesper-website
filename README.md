# Vesper — Website Starter Template

This is a complete Next.js starter template for the Vesper project. It includes the full page structure, navigation, footer, and design system already configured.

## What's Included

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** with the full Vesper color palette
- **Framer Motion** for animations
- **Solana Web3.js** and Anchor for blockchain integration
- **Navigation and Footer** components with mobile support
- **Six pages**: Home, Pray, Archive, Stream, Token, About
- **Vesper design system**: Cormorant Garamond display font, Inter body font, light ethereal color scheme

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Set Up Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Then fill in your values when you have them. For now, the site will work without them.

## Project Structure

```
vesper/
├── app/
│   ├── layout.tsx          # Root layout with nav and footer
│   ├── page.tsx            # Home page (complete)
│   ├── globals.css         # Global styles and Tailwind
│   ├── pray/page.tsx       # Prayer submission (placeholder)
│   ├── archive/page.tsx    # Prayer archive (placeholder)
│   ├── stream/page.tsx     # Livestream (placeholder)
│   ├── token/page.tsx      # Token info (placeholder)
│   └── about/page.tsx      # About page (placeholder)
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   └── Footer.tsx          # Footer
├── tailwind.config.js      # Vesper colors and fonts
├── package.json
└── README.md
```

## Current Status

✅ **Complete**:
- Project structure and configuration
- Navigation and footer
- Home page with rotating prayers and hero section
- Tailwind design system with Vesper colors
- TypeScript setup

🚧 **Placeholder (to be built)**:
- Prayer submission form (`/pray`)
- Prayer archive from blockchain (`/archive`)
- Livestream embed (`/stream`)
- Token page (`/token`)
- About page (`/about`)
- API routes for prayer submission

## Next Steps

### Build the Prayer Submission Form

Open `app/pray/page.tsx` and replace the placeholder with a working form.

### Connect to Solana

The template includes `@solana/web3.js` and `@coral-xyz/anchor`. You'll use these to read prayers from the blockchain on the `/archive` page.

### Add the Livestream

On `/stream`, embed the YouTube Live or pump.fun stream using an iframe.

### Deploy to Vercel

When ready:

```bash
git init
git add .
git commit -m "Initial Vesper website"
```

Then push to GitHub and connect to Vercel for automatic deployment.

## Design System

The Vesper color palette is available in Tailwind:

```tsx
<div className="bg-vesper-mist text-vesper-navy">
  Content here
</div>
```

Available colors:
- `vesper-white` — #FFFFFF
- `vesper-mist` — #F0F4F8
- `vesper-pale` — #D6E4F0
- `vesper-blue` — #5B82BC
- `vesper-navy` — #2C3E6B
- `vesper-dark` — #1A1A2E
- `vesper-grey` — #999999

Fonts:
- `font-display` — Cormorant Garamond (for titles and prayers)
- `font-sans` — Inter (default body text)

## Questions?

Refer to the Vesper Website Specification document for full details on each page, component, and feature.
