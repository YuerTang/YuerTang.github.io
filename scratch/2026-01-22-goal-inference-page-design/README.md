# Investigation: Project Page Design for Online Goal Inference

## Problem Statement
Design a visually stunning project page for the Online Goal Inference Modeling project, achieving "Nature-level beauty" - clean, elegant, scientific visualization with modern interactive design.

## Goals
1. Create a beautiful, professional project page for the website
2. Refine the GitHub README for clarity and visual appeal
3. Achieve Distill.pub / Nerfies-level design quality

---

## Project Understanding

### What This Project Does
A **real-time Bayesian framework** for inferring human goals from observed actions:

```
P(goal | actions) ∝ P(actions | goal) × P(goal)
```

**Core Components:**
1. **Value Iteration** - Compute optimal policies for each candidate goal
2. **Softmax Policy** - Model bounded rationality (humans aren't perfectly optimal)
3. **Bayesian Inference** - Update beliefs as actions stream in
4. **Interactive Visualization** - Web UI with real-time probability heatmaps

### Technical Stack
- **Backend:** Python (Flask + SocketIO + NumPy + SciPy)
- **Frontend:** JavaScript (RxJS + Canvas + Socket.IO)
- **Algorithm:** MDP + Value Iteration + Bayesian Posterior Updates

### Visual Elements Available
- 10×10 grid world navigation
- Color-coded goal probability (red intensity = posterior belief)
- Real-time belief updates as user moves
- Blue player avatar, brown obstacles

---

## Design Inspiration Research

### Tier 1: Gold Standard - Distill.pub Style
**Key Features:**
- Reactive diagrams that respond to user input
- Beautiful typography (system fonts, careful hierarchy)
- Generous whitespace
- Inline interactive visualizations
- Mathematical notation rendered beautifully
- Scrollytelling (content reveals as you scroll)

**Example Articles:**
- [Attention and Augmented RNNs](https://distill.pub/2016/augmented-rnns/)
- [Feature Visualization](https://distill.pub/2017/feature-visualization/)
- [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/)

### Tier 2: Academic Project Pages - Nerfies Style
**Key Features:**
- Hero section with video/GIF demo
- Clean two-column layouts
- Paper abstract and key results upfront
- BibTeX citation block
- Links to paper, code, video
- Responsive design

**Templates:**
- [Nerfies Original](https://nerfies.github.io/)
- [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
- [AI4CO Research Template](https://github.com/ai4co/research-project-page-template)

### Tier 3: Interactive ML Demos
**Examples:**
- [TensorFlow Playground](https://playground.tensorflow.org/)
- [GAN Lab](https://poloclub.github.io/ganlab/)
- [CNN Explainer](https://poloclub.github.io/cnn-explainer/)

---

## Design Recommendations

### 1. Project Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  HERO SECTION                                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │     [Animated Demo GIF/Video]                       │    │
│  │     Real-time goal inference visualization          │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Title: Online Bayesian Goal Inference                      │
│  Subtitle: Understanding intentions through actions         │
│                                                             │
│  Authors: Yuer Tang, [Collaborator]                         │
│  Affiliation: UCLA · Tao Gao Lab                            │
│                                                             │
│  [Paper] [Code] [Demo] [Video]                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ABSTRACT                                                   │
│  One paragraph explaining the problem and solution          │
│  with key insight highlighted                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  THE PROBLEM                                                │
│  ┌──────────────────┐  ┌──────────────────────────────────┐│
│  │  [Illustration]  │  │  Text explaining why goal        ││
│  │  Person walking  │  │  inference matters for AI        ││
│  │  toward goals    │  │  that understands humans         ││
│  └──────────────────┘  └──────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  THE APPROACH (Interactive)                                 │
│                                                             │
│  Step 1: Model goals as MDPs                                │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [Interactive: Click different goals,               │    │
│  │   see optimal paths light up]                       │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Step 2: Compute action likelihoods                         │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [Interactive: Hover over positions,                │    │
│  │   see probability distributions]                    │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Step 3: Update beliefs with Bayes                          │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [Interactive: Slider to step through               │    │
│  │   trajectory, watch posteriors update]              │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  LIVE DEMO (Embedded)                                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [Full interactive game embedded in page]           │    │
│  │  Arrow keys to move, watch beliefs update           │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  RESULTS                                                    │
│  Visualizations of inference accuracy                       │
│  Comparison with baselines                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  REFERENCES & CITATION                                      │
│  BibTeX block                                               │
│  Links to foundational papers                               │
└─────────────────────────────────────────────────────────────┘
```

### 2. Visual Design System

**Colors (Nature-inspired, scientific):**
```css
/* Primary palette */
--color-bg: #fafafa;
--color-text: #1a1a2e;
--color-accent: #0066cc;
--color-accent-light: #e6f2ff;

/* Goal colors (for visualization) */
--goal-1: #e63946;  /* Warm red */
--goal-2: #2a9d8f;  /* Teal */
--goal-3: #e9c46a;  /* Gold */

/* Neutral scientific grays */
--gray-100: #f8f9fa;
--gray-200: #e9ecef;
--gray-600: #6c757d;
```

**Typography:**
```css
/* Headers: Clean sans-serif */
font-family: 'Inter', -apple-system, sans-serif;

/* Body: Readable serif for long-form */
font-family: 'Source Serif Pro', Georgia, serif;

/* Code/Math: Monospace */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

**Spacing:**
```css
/* Generous whitespace */
--section-gap: 6rem;
--paragraph-gap: 1.5rem;
--max-width: 720px;  /* Optimal reading width */
```

### 3. Key Visual Assets Needed

| Asset | Purpose | Format |
|-------|---------|--------|
| Hero animation | Show real-time inference in action | GIF/MP4 |
| Algorithm flowchart | Explain the 3-step process | SVG |
| Grid world diagram | Static explanation of environment | SVG |
| Posterior evolution | Show belief updates over time | Animated SVG |
| Architecture diagram | Show Python/JS communication | SVG |

### 4. Interactive Elements

**Must-have:**
- [ ] Embedded live demo (the actual game)
- [ ] Trajectory replay with posterior visualization
- [ ] Hover states showing probability values

**Nice-to-have:**
- [ ] Scrollytelling for algorithm explanation
- [ ] Parameter sliders (temperature, decay factor)
- [ ] Side-by-side comparison (rational vs. bounded-rational)

---

## README Refinement Recommendations

### Current Issues
1. References external images that don't exist locally
2. Generic placeholder contact info
3. Color codes in demo section don't match actual implementation
4. Project structure lists files that don't exist (style.css, client.js)

### Proposed README Structure

```markdown
# Online Goal Inference

> Real-time Bayesian inference of human intentions from observed actions

![Demo](assets/demo.gif)

## Overview
[2-3 sentences, no jargon]

## Quick Start
[Minimal steps to run]

## How It Works
[Visual diagram + brief explanation]

## Technical Details
[For those who want to dig deeper]

## Citation
[BibTeX]

## Acknowledgments
[Credits]
```

### Key Improvements
1. **Add actual screenshots/GIFs** to the repo
2. **Fix file references** to match actual structure
3. **Simplify installation** (one-liner if possible)
4. **Add visual algorithm explanation**
5. **Update contact to your info**

---

## Implementation Checklist

### Phase 1: Assets Creation
- [ ] Record screen capture of demo → convert to GIF
- [ ] Create algorithm flowchart (Figma/Excalidraw)
- [ ] Create grid world explanation diagram
- [ ] Take screenshots of different inference states

### Phase 2: Project Page (HTML/CSS)
- [ ] Set up page structure based on Nerfies template
- [ ] Implement hero section with demo video
- [ ] Add abstract and problem statement
- [ ] Create interactive algorithm walkthrough
- [ ] Embed live demo
- [ ] Style with Nature-level typography

### Phase 3: README Refinement
- [ ] Update with correct file structure
- [ ] Add local assets (not external URLs)
- [ ] Fix contact information
- [ ] Simplify installation steps
- [ ] Add troubleshooting section

### Phase 4: Polish
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] SEO meta tags

---

## References

### Templates
- [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
- [Nerfies Project Page](https://nerfies.github.io/)
- [Distill Template](https://github.com/distillpub/template)

### Design Inspiration
- [Distill.pub](https://distill.pub/)
- [TensorFlow Playground](https://playground.tensorflow.org/)
- [GAN Lab](https://poloclub.github.io/ganlab/)

### Academic References
- Baker et al. (2009) - Action understanding as inverse planning
- Zhi-Xuan et al. (2020) - Online Bayesian Goal Inference for Boundedly-Rational Planning Agents

---

## Notes

### Why "Nature-level beauty"?
Nature journal publications are known for:
1. **Clarity** - Complex ideas made accessible
2. **Elegance** - Every element serves a purpose
3. **Visual hierarchy** - Easy to scan, rewarding to read deeply
4. **Scientific rigor** - Beautiful but accurate

The goal is to achieve this standard for a web-based project page.
