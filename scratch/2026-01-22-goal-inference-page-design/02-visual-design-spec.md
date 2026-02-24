# Visual Design Specification

## Design Philosophy: Nature-Level Beauty

### Core Principles

1. **Clarity over decoration** - Every visual element teaches something
2. **Whitespace is content** - Let ideas breathe
3. **Motion with purpose** - Animation guides attention, not distracts
4. **Scientific elegance** - Rigorous but accessible

---

## Hero Section Design

### Option A: Full-Width Video Hero
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│                    [Looping Demo Video]                          │
│         Grid world with agent navigating, posterior              │
│         probabilities updating in real-time                      │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  Overlay text:                                             │  │
│  │  "What goal is this person trying to reach?"               │  │
│  │                                                            │  │
│  │  Subtitle: Watch as AI infers intentions in real-time      │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Option B: Split Layout (Recommended)
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ┌─────────────────────┐    ┌────────────────────────────────┐  │
│  │                     │    │                                │  │
│  │   Online Bayesian   │    │     [Demo Animation]           │  │
│  │   Goal Inference    │    │                                │  │
│  │                     │    │     Grid with agent moving,    │  │
│  │   Understanding     │    │     belief bars updating       │  │
│  │   human intentions  │    │                                │  │
│  │   through actions   │    │                                │  │
│  │                     │    │                                │  │
│  │   [Paper] [Code]    │    │                                │  │
│  │                     │    │                                │  │
│  └─────────────────────┘    └────────────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Color Palette

### Scientific & Accessible

```css
:root {
  /* Background layers */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-code: #f1f5f9;

  /* Text hierarchy */
  --text-primary: #0f172a;    /* Near-black for headings */
  --text-body: #334155;        /* Dark slate for body */
  --text-muted: #64748b;       /* Gray for captions */

  /* Accent - Scientific blue */
  --accent: #2563eb;
  --accent-light: #dbeafe;
  --accent-dark: #1d4ed8;

  /* Goal inference visualization */
  --goal-high: #dc2626;        /* Red - high probability */
  --goal-mid: #f59e0b;         /* Amber - medium */
  --goal-low: #fef3c7;         /* Light yellow - low */

  /* Agent & Environment */
  --agent: #3b82f6;            /* Blue player */
  --obstacle: #78716c;         /* Stone gray */
  --grid-line: #e2e8f0;        /* Subtle grid */
}
```

### Visualization Gradient for Posteriors

```css
/* Posterior probability heat map */
.posterior-0   { background: rgba(220, 38, 38, 0.05); }
.posterior-10  { background: rgba(220, 38, 38, 0.15); }
.posterior-20  { background: rgba(220, 38, 38, 0.25); }
.posterior-30  { background: rgba(220, 38, 38, 0.35); }
.posterior-40  { background: rgba(220, 38, 38, 0.45); }
.posterior-50  { background: rgba(220, 38, 38, 0.55); }
.posterior-60  { background: rgba(220, 38, 38, 0.65); }
.posterior-70  { background: rgba(220, 38, 38, 0.75); }
.posterior-80  { background: rgba(220, 38, 38, 0.85); }
.posterior-90  { background: rgba(220, 38, 38, 0.95); }
```

---

## Typography

### Font Stack

```css
:root {
  /* Display/Headers - Clean geometric sans */
  --font-display: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Body - Readable serif for long-form content */
  --font-body: 'Source Serif 4', 'Georgia', serif;

  /* Code & Math */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
}
```

### Type Scale

```css
/* Modular scale: 1.25 ratio */
--text-xs: 0.75rem;      /* 12px - captions */
--text-sm: 0.875rem;     /* 14px - small text */
--text-base: 1rem;       /* 16px - body */
--text-lg: 1.125rem;     /* 18px - lead paragraph */
--text-xl: 1.25rem;      /* 20px - h4 */
--text-2xl: 1.5rem;      /* 24px - h3 */
--text-3xl: 1.875rem;    /* 30px - h2 */
--text-4xl: 2.25rem;     /* 36px - h1 */
--text-5xl: 3rem;        /* 48px - hero */
```

### Example Styling

```css
h1 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--text-primary);
}

p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-body);
}

.math {
  font-family: var(--font-mono);
  background: var(--bg-code);
  padding: 0.125em 0.25em;
  border-radius: 0.25em;
}
```

---

## Layout Grid

### Desktop (1200px+)
```
┌──────────────────────────────────────────────────────────────────┐
│  Margin: 10%  │        Content: 720px max        │  Margin: 10%  │
└──────────────────────────────────────────────────────────────────┘
```

### Tablet (768px - 1199px)
```
┌────────────────────────────────────────────────┐
│  Margin: 5%  │   Content: 90%   │  Margin: 5%  │
└────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌──────────────────────────┐
│  Padding: 1rem on sides  │
│  Content: 100%           │
└──────────────────────────┘
```

---

## Component Designs

### 1. Algorithm Step Card

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────┐                                                        │
│  │  1  │  Model Each Goal as an MDP                             │
│  └─────┘                                                        │
│                                                                 │
│  For each candidate goal g ∈ {G₁, G₂, G₃}, we compute the       │
│  optimal value function using Value Iteration:                  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  V(s) = max_a Σ T(s,a,s') × [R(s,a,s') + γV(s')]          │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │     [Interactive: Grid showing optimal paths to each      │  │
│  │      goal, click goals to see value function heatmap]     │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2. Posterior Visualization

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Current Beliefs                                                │
│                                                                 │
│  Goal 1 (Top-right)    ████████████░░░░░░░░  42%                │
│  Goal 2 (Middle)       ██████░░░░░░░░░░░░░░  28%                │
│  Goal 3 (Bottom-right) ██████░░░░░░░░░░░░░░  30%                │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Step: ●───────────────────○ 15/30                              │
│        [Play] [Pause] [Reset]                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3. Interactive Demo Embed

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Try It Yourself                                                │
│                                                                 │
│  Navigate using arrow keys. Watch how the AI updates its        │
│  beliefs about which goal you're heading toward.                │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │                     [Canvas Game]                         │  │
│  │                                                           │  │
│  │     ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐           │  │
│  │     │   │   │   │   │███│   │   │   │   │ G1│           │  │
│  │     ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤           │  │
│  │     │   │   │   │   │███│   │   │███│   │   │           │  │
│  │     ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤           │  │
│  │     │   │   │   │   │   │   │   │   │   │   │           │  │
│  │     ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤           │  │
│  │     │   │   │   │   │███│   │   │   │   │   │           │  │
│  │     ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤           │  │
│  │     │ ● │   │   │   │███│   │   │███│   │ G2│           │  │
│  │     └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘           │  │
│  │                                                           │  │
│  │     ● = You   ███ = Obstacle   G = Goal                   │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────┐                                       │
│  │ Beliefs:             │                                       │
│  │ G1: ████████ 45%     │                                       │
│  │ G2: ██████   32%     │                                       │
│  │ G3: █████    23%     │                                       │
│  └──────────────────────┘                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Animation Guidelines

### Principles
1. **Subtle is better** - Motion should feel natural
2. **Purposeful** - Only animate to guide attention or show change
3. **Fast** - 200-300ms for UI, 500ms for content transitions

### Specific Animations

```css
/* Posterior bar updates */
.posterior-bar {
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Goal cell probability fade */
.goal-cell {
  transition: background-color 200ms ease-out;
}

/* Section fade-in on scroll */
.section {
  animation: fadeUp 600ms ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Responsive Behavior

### Breakpoints
```css
/* Mobile first */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Key Adaptations

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero | Side-by-side | Stacked |
| Demo | 500px canvas | Full-width, scaled |
| Algorithm cards | 2-column | Single column |
| Navigation | Sticky header | Hamburger menu |

---

## Accessibility

### Requirements
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] All images have alt text
- [ ] Keyboard navigation for demo
- [ ] Focus states visible
- [ ] Reduced motion option

### Color Accessibility
```css
/* Ensure sufficient contrast */
--text-on-accent: #ffffff;  /* White on blue */
--text-on-light: #0f172a;   /* Dark on light bg */

/* Alternative indicators (not just color) */
.goal-high::before { content: "●"; }  /* Dot indicator */
.goal-low::before { content: "○"; }   /* Empty dot */
```

---

## Asset Checklist

### Images to Create
- [ ] `hero-demo.gif` - 800×450px, 15fps, optimized
- [ ] `algorithm-flow.svg` - Vector flowchart
- [ ] `grid-explanation.svg` - Annotated grid diagram
- [ ] `posterior-evolution.gif` - Belief update animation
- [ ] `og-image.png` - 1200×630px social share image

### Fonts to Load
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total Page Size | < 2MB |
| Hero Image/GIF | < 500KB |
| Time to Interactive | < 3s |
