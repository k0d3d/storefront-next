# Aximo Landing Page Components

This directory contains beautiful, modern landing page components ported from the Aximo Laravel template to React/Next.js with Tailwind CSS.

## Components

### Header
A responsive navigation header with mobile menu support.

```tsx
import { Header } from '@/components/landing';

<Header
  logo="Your Brand"
  menuItems={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // ... more items
  ]}
/>
```

### Hero
A stunning hero section with call-to-action and image.

```tsx
import { Hero } from '@/components/landing';

<Hero />
```

### HeroMerch
Full-screen hero section for MerchPaddie with animated product mocks, live stats, and dual CTAs. Uses the "Sunset Money" color palette.

```tsx
import { HeroMerch } from '@/components/landing';

<HeroMerch />
```

**Features:**
- **Background:** Near-black (#0F0F0F) with radial hot pink gradient from center
- **Product Imagery:** 4 AI-generated product photos (hoodie, dad hat, enamel pin, t-shirt) floating with staggered fade-in animations and colored borders
- **Headline:** Large bold text with "sells out." in italic hot pink (#FF4E8C) with pink glow and -2deg rotation
- **Live Stats:** HUGE numbers with colored glows that count up from 0 on load, then increment every 3 seconds:
  - Pieces sold (yellow glow)
  - Creator earnings (pink glow)
  - Active drops (orange glow)
- **CTA Buttons:**
  - Primary: "Launch Your Drop Free" (pink→orange gradient with sparkle hover effect)
  - Secondary: "See Live Drops" (transparent with pink border, solid on hover)
- **Polish Effects:**
  - 8 floating $ coins (yellow, rising animation)
  - Sparkle effect on primary button hover
  - x402 blockchain trust link
  - Scroll indicator

**Images Used:** `/images/merch/{hoodie,dad-hat,enamel-pin,tshirt}.webp` (generated with FLUX 1.1 Pro)

### ProblemSection
"The Rage Section" - Makes visitors feel seen, validated, and angry at the broken system. Designed for 4-second scanability.

```tsx
import { ProblemSection } from '@/components/landing';

<ProblemSection />
```

**Features:**
- **Background:** Near-black with subtle red haze overlay ("blood in the water" effect)
- **Headline:** Massive distressed text with multiple shadow layers: "Most merch launches die before they even start."
- **Subhead:** Creates dramatic tension: "And nobody talks about why."
- **3 Problem Cards:** Each represents a major pain point:
  1. **$5k-$25k upfront** - Inventory that rots (🔥💸 icon, red glow)
  2. **4-12 weeks** - Waiting for samples/shipping (⏳💥 icon, orange glow)
  3. **50-70% cut** - Platforms take profit (💰🤏 icon, dark red glow)
- **Slam-In Animation:** Cards slide/drop from different directions with staggered delays (0ms, 200ms, 400ms)
- **Kicker Line:** Pulsing red validation: "You're not bad at merch. The system is broken."
- **Subtle CTA:** Guides to next section: "Keep scrolling to see how we burned the old playbook ↓"
- **Intersection Observer:** Only animates when section enters viewport

**Emotional Journey:**
1. Recognition → "That's exactly what happened to me"
2. Validation → "It's not my fault"
3. Anger → "This system is rigged"
4. Urgency → "I need to see the solution NOW"

**Color Palette:**
- Red haze: rgba(220, 38, 38, 0.15)
- Headline: #FF4E8C (hot pink)
- Card borders: #DC2626 (red), #FF6B35 (orange), #B91C1C (dark red)
- Kicker pulse: #DC2626 → #EF4444

### SolutionSection
"The Dopamine Drop" - Flips rage to euphoria by showing the solution. Designed to make creators lose their minds with excitement.

```tsx
import { SolutionSection } from '@/components/landing';

<SolutionSection />
```

**Features:**
- **Background:** Pitch black (#0A0A0A) with 25 animated rising $ particles (yellow, opacity 5%, varying speeds)
- **Headline:** Electric yellow with glow effect: "We rewrote the rules. Now creators win."
- **Subhead:** Hot pink, 3 staggered lines (300ms, 600ms, 900ms delays):
  - "Zero upfront."
  - "All profit."
  - "AI sells for you."
- **3 Full-Width Rule Banners:** Each spans entire viewport width with different background:
  1. **Rule 1:** Hot pink bg (#FF4E8C), white text, "No inventory. Ever." + illustration
  2. **Rule 2:** Orange bg (#FF6B35), white text, "AI designs & sells 24/7." + illustration
  3. **Rule 3:** Yellow bg (#FFD23F), BLACK text (contrast), "You keep 100%." + illustration
- **Product Carousel:** Horizontal scroll with 4 mock products using merch images, SOLD OUT badges on select items
- **Tagline:** Pulsing animation: "This isn't print-on-demand. This is print-on-success."
- **CTA Button:** Gradient (pink→orange→yellow) with shadow glow: "Launch Your First Drop in 60 Seconds"
- **Intersection Observer:** Staggered subhead animation triggers on scroll into view

**Emotional Journey:**
1. Euphoria → "Holy shit, this is brilliant"
2. Simplicity → "Wait, it's that easy?"
3. FOMO → "I need to launch NOW"
4. Action → Clicks CTA

**Color Palette:**
- Background: #0A0A0A (pitch black)
- Headline: #FFD23F (electric yellow) with rgba(255, 210, 63, 0.6) glow
- Subhead: #FF4E8C (hot pink)
- Rule 1 bg: #FF4E8C (hot pink)
- Rule 2 bg: #FF6B35 (orange)
- Rule 3 bg: #FFD23F (yellow) with BLACK text
- CTA gradient: linear-gradient(135deg, #FF4E8C 0%, #FF6B35 50%, #FFD23F 100%)

**Images Used:** `/images/solution/{no-inventory,ai-agent,golden-crown}.png` (generated with FLUX 1.1 Pro)

### LiveProofSection
"The Receipts" - Zero copy, just undeniable proof. Turns scrollers into sign-ups by showing real money being made.

```tsx
import { LiveProofSection } from '@/components/landing';

<LiveProofSection />
```

**Features:**
- **Background:** Pure black (#000000) with 20 floating $ coins (3% opacity, slow upward drift animation)
- **Headline:** Electric yellow with intense glow: "This is happening right now." (120px)
- **Live Earnings Leaderboard (60% screen height):**
  - Full-width dark glass panel with backdrop blur
  - Top 10 creators with ranking
  - Columns: Rank | Avatar + @handle | Total Earned | This Week
  - Top 3 highlighted with emojis (👑, 🥈, 🥉) and bigger yellow numbers
  - Real numbers ticking up every 3 seconds
  - Title: "Top Creators This Week" in hot pink (#FF4E8C)
  - Each creator has colored avatar bubble and themed emoji
- **Live Drops Carousel:**
  - 10 sold-out items in horizontal auto-playing scroll (moves every 3 seconds)
  - Each card shows: product photo + "SOLD OUT in X minutes" badge + price + earnings
  - Glass morphism cards with blur effect
  - Uses existing merch images from hero section
  - Displays quantity sold and time to sell out
- **Killer Stat:**
  - Massive white text with yellow glow
  - "$2.4M paid out to creators"
  - "Zero inventory left behind."
- **CTA Button:**
  - Gradient (pink→orange→yellow) same as hero
  - Bigger size (px-16 py-8, text-2xl)
  - Continuous pulsing scale animation (1.0 → 1.05)
  - "Launch Your Drop Free →"

**Emotional Journey:**
1. Proof → "This is real money"
2. FOMO → "People are making bank right now"
3. Urgency → "I'm missing out"
4. Action → Clicks CTA

**Color Palette:**
- Background: #000000 (pure black)
- Headline: #FFD23F (electric yellow) with rgba(255, 210, 63, 0.8) glow
- Leaderboard title: #FF4E8C (hot pink)
- Top 3 earnings: #FFD23F (yellow) with glow
- Glass panel: rgba(255, 255, 255, 0.03) with backdrop blur
- SOLD OUT badge: #DC2626 (red)
- CTA gradient: linear-gradient(135deg, #FF4E8C 0%, #FF6B35 50%, #FFD23F 100%)

**Technical Features:**
- Auto-incrementing earnings every 3 seconds using setInterval
- Auto-playing carousel with smooth scroll
- Pulsing scale animation on CTA (@keyframes pulse-scale)
- Slow floating $ particles (@keyframes float-slow)
- Glass morphism with backdrop-filter: blur()
- Responsive grid layout for leaderboard

### HowItWorksSection
"The Magic Trick" - Shows the 60-second launch flow. Makes launching merch feel like cheating.

```tsx
import { HowItWorksSection } from '@/components/landing';

<HowItWorksSection />
```

**Features:**
- **Background:** Pure white (#FFFFFF) - total contrast after black proof section, feels clean and trustworthy
- **Headline:** Black, bold: "Launch a drop in 60 seconds. Seriously." (90px)
- **Subhead:** Gray text: "No inventory. No waiting. No upfront cost." (28px)
- **4-Step Flow:** Four full-width horizontal panels stacked vertically
  - **Step 1:** Hot pink bg (#FF4E8C), "Pick your vibe or let AI design it"
  - **Step 2:** Orange bg (#FF6B35), "Drop it. Your community votes & pre-orders"
  - **Step 3:** Yellow bg (#FFD23F), BLACK text, "It sells out → we print & ship globally"
  - **Step 4:** Deep black bg (#0F0F0F), white text, "You keep 100%. Money hits your wallet"
- **Each Panel (600-700px tall):**
  - Giant number (300px tall) with glow on left side
  - Illustration (400-500px) floating in center
  - Massive bold text on right side
- **Timer Badge:** Top-right corner showing "Average launch time: 00:58" with live ticking animation
- **Bottom Closer:**
  - "That's it."
  - "No samples. No minimums. No excuses."
- **CTA Button:**
  - Gradient (pink→orange→yellow) same as hero
  - Huge size (px-16 py-8, text-2xl)
  - "Launch Your Drop in 60 Seconds →"

**Emotional Journey:**
1. Simplicity → "Wait, it's THAT easy?"
2. Disbelief → "There's got to be a catch"
3. Realization → "Holy shit, there's no catch"
4. Action → Clicks CTA to beat 58 seconds

**Color Palette:**
- Background: #FFFFFF (pure white)
- Headline: #000000 (black)
- Subhead: gray-600
- Step 1 bg: #FF4E8C (hot pink)
- Step 2 bg: #FF6B35 (orange)
- Step 3 bg: #FFD23F (yellow) with BLACK text
- Step 4 bg: #0F0F0F (deep black)
- CTA gradient: linear-gradient(135deg, #FF4E8C 0%, #FF6B35 50%, #FFD23F 100%)

**Images Used:** `/images/steps/{step1-ai-painting,step2-voting-poll,step3-conveyor-belt,step4-money-wallet}.png` (generated with Ideogram v3 Turbo)

**Technical Features:**
- Live ticking timer (56-62 seconds range) using setInterval
- Full-width colored panels with responsive grid layout
- Giant semi-transparent numbers with glow effect
- Drop shadow effects on illustrations
- Responsive text sizing across breakpoints

### FinalCTASection
"The Money Shot" - Pure, instant action. No thinking allowed. The ultimate conversion screen.

```tsx
import { FinalCTASection } from '@/components/landing';

<FinalCTASection />
```

**Features:**
- **Background:** Full-bleed gradient from #FF4E8C (hot pink) at top to #FF6B35 (fiery orange) at bottom
- **$ Coins Animation:** 30 tiny upward-moving yellow coins with glow (8% opacity)
- **Headline:** White with electric pink glow, 110px, slightly tilted upward (-1deg rotation)
  - "Stop waiting."
  - "Start printing money."
- **Subhead:** White, 36px
  - "Your first drop goes live in 60 seconds."
  - "Zero cost. Real profit."
- **Primary CTA Button:** Biggest button on entire site
  - "Launch Your Drop Free →"
  - Gradient: #FFD23F → #FF6B35 (yellow to orange)
  - 120px tall, pill shape, pulsing glow
  - Text: 36px bold black
  - Hover: scale 1.10
- **Secondary CTA Button:**
  - "Or See Live Drops First →"
  - Transparent with 3px white border
  - White text, hover: solid white bg with orange text
- **Live Countdown Timer:** Yellow numbers with glow, counting down from 10 to 0
  - "Average time from clicking to live drop:"
  - "00:58" (monospace font)
- **Final Flex Line:** Bottom center
  - "12,847 drops launched this week."
  - "Be 12,848."
  - Drops count auto-increments every 5 seconds

**Design Philosophy:**
No footer. No nav. No distractions. This screen exists for ONE reason: to make people click before they finish reading.

**Emotional Journey:**
1. Urgency → "I need to act NOW"
2. FOMO → "Everyone else is doing this"
3. Action → Clicks primary CTA immediately
4. No second-guessing → Decision made

**Color Palette:**
- Background gradient: linear-gradient(180deg, #FF4E8C 0%, #FF6B35 100%)
- Headline: white with rgba(255, 78, 140, 0.8) glow
- $ coins: #FFD23F with 8% opacity
- Primary CTA: linear-gradient(135deg, #FFD23F 0%, #FF6B35 100%)
- Primary CTA text: black
- Secondary CTA: transparent with white border
- Timer: #FFD23F (yellow) with glow

**Technical Features:**
- Countdown timer from 10 to 0, then resets (1 second intervals)
- Auto-incrementing drops count every 5 seconds
- Pulsing glow animation on primary CTA (@keyframes pulse-glow)
- Upward-moving $ coins (@keyframes rise-money)
- Hover scale on primary button (1.0 → 1.10)
- Monospace font for timer digits

### Services
Service/feature cards with hover effects.

```tsx
import { Services } from '@/components/landing';

<Services
  services={[
    {
      title: 'UI/UX Design',
      description: 'Focusing on user interface...',
      icon: <YourIcon />
    },
    // ... more services
  ]}
/>
```

### Team
Team member cards with social links and hover animations.

```tsx
import { Team } from '@/components/landing';

<Team
  members={[
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/path/to/image.jpg',
      social: {
        twitter: 'https://twitter.com/...',
        linkedin: 'https://linkedin.com/...'
      }
    },
    // ... more members
  ]}
/>
```

### Testimonials
Client testimonial cards with ratings.

```tsx
import { Testimonials } from '@/components/landing';

<Testimonials
  testimonials={[
    {
      name: 'Jane Smith',
      title: 'Marketing Director',
      comment: 'Great service!',
      rating: 5
    },
    // ... more testimonials
  ]}
/>
```

### Footer
A comprehensive footer with links and social icons.

```tsx
import { Footer } from '@/components/landing';

<Footer
  companyName="Your Company"
  description="Your company description"
/>
```

## Theme Colors

The following custom colors are available (defined in `app/globals.css`):

### Aximo Colors
- `colorLightLime` - #BFF747 (accent color)
- `colorButteryWhite` - #FDFDE1 (light text)
- `colorIvory` - #FFFFF5 (background)
- `colorRedOrange` - #FF4612 (accent)
- `colorGondola` - #1B1B1B (dark text/borders)

### MerchPaddie Colors - "Sunset Money" Palette
- `merchHotPink` - #FF4E8C (primary brand color, main accent)
- `merchOrange` - #FF6B35 (secondary accent, hover states)
- `merchYellow` - #FFD23F (electric yellow for stats and badges)
- `merchBlack` - #0F0F0F (near-black for backgrounds and text)
- `merchWhite` - #FFFFFF (white for cards and copy)

**Design Philosophy:** Zero purple/blue overlap with Tohju. Feels like money, hype, and energy (Solana summer + meme coin vibes). Hot pink + orange + yellow screams "this prints cash" while remaining premium on dark mode.

## Utility Classes

- `.font-syne` - Syne font family for headings
- `.section-space` - Consistent section padding
- `.btn-primary` - Primary button style with shadow effect
- `.shadow-bg` - Hover shadow effect for cards

## Example Usage

See `/app/landing/page.tsx` for a complete example of how to use all components together.

## Customization

All components accept props to customize content. You can also modify the default values in each component file or override styles using Tailwind classes.
