# MerchPaddie Storefront (Next.js)

Multi-store e-commerce platform built with Next.js 16, allowing customers to browse products and purchase with cryptocurrency via Telegram.

## Features

- 🛍 **Product Catalog**: Browse products from multiple stores
- 💳 **Crypto Payments**: Buy with SOL, USDC, TON via Telegram
- 🚀 **Fast**: Server-side rendering with Next.js App Router
- 🎨 **Beautiful**: Tailwind CSS styling
- 📱 **Telegram Integration**: Deep links to @merchpaddie_bot

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **API**: WooCommerce REST API via wc-api proxy
- **Deployment**: Vercel / Netlify

## Project Structure

```
storefront-next/
├── app/
│   ├── page.tsx                              # Coming soon home page
│   ├── layout.tsx                            # Root layout
│   ├── globals.css                           # Global styles
│   └── stores/
│       └── [storeId]/
│           ├── page.tsx                      # Store product listing
│           └── products/
│               └── [slug]/
│                   ├── page.tsx              # Product detail page
│                   ├── not-found.tsx         # Product 404 page
│                   └── CopyCheckoutButton.tsx # Client component for clipboard
├── components/
│   ├── ProductCard.tsx                       # Product card for grid display
│   ├── StockBadge.tsx                        # Stock status badge
│   ├── PriceDisplay.tsx                      # Price with sale logic
│   └── BackButton.tsx                        # Navigation back button
└── lib/
    └── api/
        └── wc-api-client.ts                  # API client for WooCommerce
```

## Routes

- `/` - Coming soon page with link to mediapaddie.store
- `/stores/[storeId]` - Store product listing
- `/stores/[storeId]/products/[slug]` - Product detail page

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Create environment file
cp .env.local.example .env.local

# Edit .env.local and set WC_API_URL
```

### Development

```bash
pnpm dev
# Open http://localhost:3000
```

### Build

```bash
pnpm build
pnpm start
```

## Environment Variables

- `WC_API_URL` - WooCommerce API URL (default: https://wc-api.tohju.com)

## Telegram Checkout

Products link to Telegram bot:
```
https://t.me/merchpaddie_bot?start=checkout_{storeId}_{productId}
```

Manual command: `/checkout {storeId}:{productId}`

## Deployment

### Vercel (Recommended)

```bash
vercel --prod
```

### Netlify

- Build command: `pnpm build`
- Publish directory: `.next`
- Add env: `WC_API_URL`

## License

MIT
