# MerchPaddie Website Redesign (2026)

**Current Status**: Redesign Phase (Jan 2026) - Transforming `merchpaddie.store` into a conversion-focused landing page system.

This repository contains the Next.js frontend for MerchPaddie, targeting two distinct user groups: **Vendors** (store owners) and **Creators** (promoters).

## 1. Project Overview

### Objectives
- **Core Goal**: Drive waitlist signups for beta launch.
- **Value Prop**: Zero-risk marketplace where vendors sell and creators promote, both earning real money.
- **Primary Hook**: "Start with $10k free virtual cash ($MOENY)".

### Target Audience
1.  **Vendors**: Store owners who want to sell products (Physical or Virtual).
2.  **Creators**: Influencers who want to promote stores and earn commission.

## 2. Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion (for shared layout animations and transitions)
- **Charts/Graphs**: Recharts or Chart.js
- **Icons**: Lucide React or Heroicons
- **API**: Node.js + Express (Backend), WooCommerce REST API (Legacy/Store Data)
- **State Management**: React Context / Zustand (for Waitlist/Modal state)

## 3. Site Structure & Routes

### New Landing Pages
- **`/` (Main Landing)**: Dual-path choice, "How It Works", $MOENY Demo Mode explanation, Live Stats Ticker.
- **`/vendors`**: Vendor-focused conversion page. Features "Launch in 60s", Demo Mode comparison, Success stories.
- **`/creators`**: Creator-focused conversion page. Features "SocialFi" earnings breakdown, earnings calculator, Success stories.

### Existing Storefront Routes (Legacy/Integration)
- `/stores/[storeId]`: Store product listing.
- `/stores/[storeId]/products/[slug]`: Product detail page with Telegram checkout.

## 4. Design System

- **Primary Color**: Indigo (`#6366F1`) - Main brand.
- **Secondary Color**: Green (`#10B981`) - Earnings/Money.
- **Accent**: Amber (`#F59E0B`) - FOMO/Highlights.
- **Typography**:
  - Headings: `Inter` (Bold/700)
  - Body: `Inter` (Regular/400)
  - Stats/Numbers: `JetBrains Mono` (600)

## 5. Key Features to Build

### Shared Components
- **Sticky Navigation**: Transparent to solid on scroll.
- **Waitlist Modal**: Captures Email + User Type (Vendor/Creator).
- **Stats Ticker**: Infinite horizontal scroll of platform stats.
- **Success Cards**: Social proof cards with earnings badges.

### Functionality
- **$MOENY Demo Mode**: Visual simulations of virtual earnings (Charts, animated counters).
- **Waitlist Integration**: POST to `/api/waitlist`.
- **Analytics**: Google Analytics 4 + Hotjar integration.

## 6. API Integration

### Frontend Endpoints
- **POST `/api/waitlist`**:
  - Body: `{ email: string, type: 'vendor' | 'creator' | 'both', updates: boolean }`
- **GET `/api/stats`**:
  - Returns live platform stats for the ticker.

### Environment Variables
Create a `.env.local` file:
```bash
WC_API_URL=https://wc-api.tohju.com  # Legacy Store Data
NEXT_PUBLIC_API_URL=                 # Backend API URL
```

## 7. Implementation Timeline

- **Week 1**: Project setup, Design System implementation, Main Landing Page (Sections 1-4).
- **Week 2**: Main Page completion, Shared Components (Modal, Ticker), Vendor Page (Sections 1-4).
- **Week 3**: Vendor Page completion, Creator Page (Sections 1-5), Waitlist API integration.
- **Week 4**: Creator Page completion, Full Testing (Responsive, Performance), Deployment.

## 8. Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

### Build & Deploy

```bash
pnpm build
pnpm start
```

## License

MIT