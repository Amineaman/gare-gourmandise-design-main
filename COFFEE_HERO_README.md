# Premium 3D Coffee Hero Section

A production-ready, premium 3D interactive hero section for modern coffee brand websites. Built with React, TypeScript, Spline 3D, GSAP, and Framer Motion.

## ✨ Features

- **3D Interactive Coffee Scene** - Realistic coffee cup with liquid physics using Spline
- **Mouse-responsive Interactions** - Parallax camera movement and subtle animations
- **Premium Design** - Apple/Stripe-inspired UI with coffee brand aesthetics
- **Performance Optimized** - Lazy loading, GPU-accelerated animations, mobile fallbacks
- **Fully Responsive** - Desktop, tablet, and mobile optimized
- **Accessibility** - Reduced motion support, semantic HTML, ARIA labels

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install @splinetool/runtime @splinetool/react-spline framer-motion gsap lucide-react
```

### 2. Import and Use

```tsx
import CoffeeHero3D from "@/components/sections/CoffeeHero3D";

export default function HomePage() {
  return (
    <div>
      <CoffeeHero3D />
    </div>
  );
}
```

### 3. Customize (Optional)

```tsx
<CoffeeHero3D
  splineScene="https://prod.spline.design/your-custom-scene/scene.splinecode"
  title="Your Premium Coffee Experience"
  subtitle="Crafted with passion, served with excellence."
  ctaPrimary={{ text: "Order Now", href: "#order" }}
  ctaSecondary={{ text: "Explore Menu", href: "#menu" }}
  trustBadge={{ text: "Loved by 500+ customers", rating: 5 }}
/>
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   └── CoffeeHero3D.tsx     # Main hero component
│   └── ui/                      # shadcn/ui components
├── pages/
│   └── CoffeeHeroDemo.tsx       # Demo usage
└── lib/
    └── utils.ts                 # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Dark brown (`hsl(25 45% 15%)`)
- **Accent**: Gold (`hsl(38 68% 47%)`)
- **Background**: Warm cream gradient
- **Text**: Dark gray for readability

### Typography
- **Headlines**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)
- **Sizes**: Responsive scaling (4xl → 7xl)

### Animations
- **Entrance**: GSAP timeline with staggered reveals
- **Interactions**: Framer Motion for micro-interactions
- **3D**: Spline for realistic coffee physics

## ⚙️ Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `splineScene` | `string` | Spline coffee scene | URL to your Spline 3D scene |
| `title` | `string` | "Premium Coffee Experience" | Main headline |
| `subtitle` | `string` | Coffee subtitle | Supporting text |
| `ctaPrimary` | `object` | Order Now button | Primary call-to-action |
| `ctaSecondary` | `object` | Explore Menu button | Secondary call-to-action |
| `trustBadge` | `object` | Trust badge | Social proof element |

## 🎯 Interaction Details

### Mouse Movement
- **Camera Parallax**: Subtle 3D camera movement (0.02 intensity)
- **Liquid Physics**: Coffee surface responds to mouse position
- **Steam Animation**: Particles follow cursor direction

### Hover Effects
- **Scale Transform**: 1.02x scale on hover
- **Glow Enhancement**: Spotlight effect intensifies
- **Button Micro-interactions**: Spring animations

### Mobile Optimization
- **Disabled Heavy Effects**: No parallax on mobile
- **Reduced Animations**: Simplified interactions
- **Touch-Friendly**: Larger touch targets

## 🚀 Performance Features

- **Lazy Loading**: Spline scene loads asynchronously
- **GPU Acceleration**: Transform and opacity only
- **Memory Cleanup**: Event listeners and animations cleaned up
- **Fallback UI**: Beautiful loading states
- **Bundle Optimization**: Tree-shaken dependencies

## 🛠️ Development

### Running the Demo

```bash
# Start development server
npm run dev

# View demo at http://localhost:8081
# Navigate to /coffee-hero-demo
```

### Building for Production

```bash
npm run build
npm run preview
```

## 🎨 Customization Guide

### Creating Custom Spline Scenes

1. Go to [Spline.design](https://spline.design)
2. Create a coffee cup model with materials
3. Add liquid physics and steam particles
4. Export and get the scene URL
5. Replace the `splineScene` prop

### Theming

Override CSS custom properties in your `index.css`:

```css
:root {
  --coffee-primary: hsl(25 45% 15%);
  --coffee-accent: hsl(38 68% 47%);
  --coffee-bg: linear-gradient(135deg, #fef7ed, #fed7aa);
}
```

### Animation Customization

Modify GSAP timelines in the component:

```tsx
const tl = gsap.timeline();
// Customize entrance animations here
```

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Stacked layout, reduced 3D
- **Tablet**: `768px - 1024px` - Medium interactions
- **Desktop**: `> 1024px` - Full 3D experience

## 🔧 Troubleshooting

### Spline Scene Not Loading
- Check network connectivity
- Verify Spline scene URL is public
- Check browser console for CORS errors

### Performance Issues
- Reduce animation complexity on mobile
- Use `React.memo` for expensive re-renders
- Implement virtual scrolling for long pages

### Animation Glitches
- Ensure GSAP is properly imported
- Check for conflicting CSS transforms
- Verify Framer Motion version compatibility

## 📄 License

Built for premium coffee brands. Commercial use requires attribution.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Test on multiple devices
4. Submit a pull request

---

**Built with ❤️ for coffee lovers worldwide** ☕✨