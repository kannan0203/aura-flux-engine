

# Futuristic Interactive Landing Page

## Overview
A visually stunning, immersive landing page with a dark neon theme, particle animations, background music, and rich interactivity — designed to wow hackathon judges.

## Design System
- **Dark theme** with neon accents: electric blue (#00D4FF), purple (#8B5CF6), pink (#EC4899)
- **Glassmorphism cards** with backdrop blur and subtle borders
- **Neon glow effects** on buttons, headings, and interactive elements
- **Light/dark theme toggle** (dark default, light as alt)

## Sections & Features

### 1. Loading Screen
- Animated futuristic loader with glowing ring and percentage counter
- Fades out after 2-3 seconds revealing the main content

### 2. Hero Section
- **Typing animation** heading: "Welcome to the Future"
- Animated gradient text and neon glow
- Pulsing CTA button with sound effect on click
- Floating particle background (animated dots/circles using CSS + JS)

### 3. About Section
- 3 glassmorphism cards with hover tilt/glow effects
- Click-to-reveal expandable content on each card
- Scroll-triggered fade-in animations

### 4. Features Section
- Grid of feature cards with neon border glow on hover
- Icon animations on hover (scale + color shift)
- Staggered scroll-based entrance animations

### 5. Projects/Gallery Section
- Clickable project cards that expand into a modal/overlay with details
- Hover effects with image zoom and overlay text
- Smooth transitions between states

### 6. Contact Section
- Glassmorphism form with glowing input focus states
- Submit button with click sound effect
- Form validation with animated feedback

## Interactive Elements
- **Background music**: Royalty-free ambient loop, autoplay (muted by default per browser policy), toggle button with animated equalizer icon
- **Sound effects**: Subtle click sounds on buttons
- **Mouse-following glow**: Subtle radial gradient that follows cursor
- **Floating particles**: Animated background particles throughout the page
- **Scroll animations**: Elements fade/slide/zoom in as they enter viewport using Intersection Observer

## Navigation
- Fixed top navbar with glassmorphism effect
- Smooth scroll to sections
- Active section highlighting

## Technical Approach
- React components with Tailwind CSS for all styling
- CSS animations + keyframes for particles and glow effects
- Intersection Observer hook for scroll-based animations
- Local state for music toggle, theme switch, and interactive reveals
- Responsive design with mobile-first approach

