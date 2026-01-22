# PhD Website Refinement - Final Proposal

**Date:** January 21, 2026
**Goal:** Refine personal website for CS PhD applications in robotics
**Timeline:** 8 hours
**End Goal:** Professional website ready for emailing professors

---

## Your Profile Summary

**Yuer Tang**
UCLA Data Theory, BS (Expected Mar 2026) | GPA 3.77
Email: yuertang17@g.ucla.edu

### Research Positions
| Lab | Institution | Period | Focus |
|-----|-------------|--------|-------|
| Leslie Kaelbling Lab | MIT CSAIL | Jun 2025 - Present | beta-RankVAE for policy control |
| Yingnian Wu Lab | UCLA | Mar 2025 - Present | Meta-Adaptive Latent Planning |
| Andrea Bertozzi Lab | UCLA | Jan 2025 - Oct 2025 | Neural Fields, Mori-Zwanzig |
| Tao Gao Lab | UCLA | Mar 2023 - May 2024 | Bayesian Goal Inference |

### Publications & Presentations
1. **Tang, Y.**, Baker, J. "Operator-Theoretic Tools for Conscious and Unconscious Brain Activity." *Under Review at AAAI NeuroAI 2026*
2. **Tang, Y.** "When Linear Models Aren't Enough: Forcing as Closure in Chaotic Time Series." *JMM 2026 Poster*
3. Baker, J.M., Hardiman-Mostow, H., **Tang, Y.**, Bertozzi, A.L. "On the Dynamics of Coherent Memory Structures in Neural Fields." *Under Review at ICLR 2026*
4. Jiang, E.H., et al. (incl. **Tang, Y.**) "DODT: Enhanced Online Decision Transformer Learning..." *arXiv 2024*

### Research Vision (from SoP)
> "Build robotic agents that learn and plan in ways that support people... designing internal models that support reliable control and long-horizon planning, building agents whose decisions stay grounded in real physical structure, and shaping behavior in ways that match human expectations."

---

## Design Direction: Apple-Inspired Minimalism

### Design Principles
- **Clean white space** - Generous margins, breathing room
- **Typography-first** - SF Pro or Inter font family
- **Subtle animations** - Fade-ins on scroll, smooth transitions
- **Monochromatic + one accent** - Black/white/gray with subtle blue accent
- **Card-based layouts** - For projects and publications
- **Hero section** - Large name, concise tagline, photo

### Color Palette
```
Background:     #FFFFFF (pure white)
Text Primary:   #1D1D1F (Apple dark)
Text Secondary: #86868B (Apple gray)
Accent:         #0071E3 (Apple blue)
Card BG:        #F5F5F7 (Apple light gray)
Border:         #D2D2D7 (subtle divider)
```

### Typography
```
Headings:  SF Pro Display / Inter (600-700 weight)
Body:      SF Pro Text / Inter (400 weight)
Code:      SF Mono / JetBrains Mono
```

---

## Proposed Site Structure

```
yuertang.github.io/
├── index.html          # Home - Hero + Research Vision + Quick Links
├── research.html       # Research Projects (detailed)
├── publications.html   # Publications list
├── cv.pdf             # Downloadable CV
└── resources/
    ├── web_profile.JPG
    └── project images...
```

### Navigation
```
Yuer Tang                              Research | Publications | CV
```

---

## Page-by-Page Design

### 1. Homepage (index.html)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [Nav: Yuer Tang                    Research | Publications | CV]│
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │     [Profile Photo]        Yuer Tang                     │  │
│  │                                                          │  │
│  │                            Robotics & AI Researcher      │  │
│  │                            MIT CSAIL · UCLA              │  │
│  │                                                          │  │
│  │                            Building robotic agents with  │  │
│  │                            internal models that support  │  │
│  │                            reliable control, long-horizon│  │
│  │                            planning, and human guidance. │  │
│  │                                                          │  │
│  │                            [Email] [GitHub] [LinkedIn]   │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Research Interests                                             │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ Policy Learning │  │ Representation  │  │ Planning &      │ │
│  │ & Control       │  │ Learning        │  │ Inference       │ │
│  │                 │  │                 │  │                 │ │
│  │ Disentangled    │  │ Interpretable   │  │ Bayesian goal   │ │
│  │ latent spaces   │  │ dynamics,       │  │ inference,      │ │
│  │ for fine-grained│  │ neural fields,  │  │ long-horizon    │ │
│  │ robotic control │  │ meta-learning   │  │ task planning   │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  News                                                           │
│                                                                 │
│  Jan 2026    Presenting at Joint Mathematics Meeting, DC       │
│  Nov 2025    Paper under review at ICLR 2026                   │
│  Jun 2025    Joined MIT CSAIL as summer intern                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2. Research Page (research.html)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Research                                                       │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  beta-RankVAE for Disentangled Policy Control            │  │
│  │  MIT CSAIL · Leslie Kaelbling Lab · 2025-Present         │  │
│  │                                                          │  │
│  │  [Project Image/Diagram]                                 │  │
│  │                                                          │  │
│  │  Developing compact, interpretable latent representations│  │
│  │  for fine-grained robotic manipulation policies...       │  │
│  │                                                          │  │
│  │  • beta-VAE with pairwise ranking loss                   │  │
│  │  • VLM-assisted scale perception                         │  │
│  │  • MetaWorld 6-DoF manipulation                          │  │
│  │                                                          │  │
│  │  [Code →]                                                │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Meta-Adaptive Latent Planning (MALP)                    │  │
│  │  UCLA · Yingnian Wu Lab · 2025-Present                   │  │
│  │  ...                                                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Neural Fields & Dynamical Systems                       │  │
│  │  UCLA · Bertozzi Lab · 2025                              │  │
│  │  ...                                                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Online Bayesian Goal Inference                          │  │
│  │  UCLA · Tao Gao Lab · 2023-2024                          │  │
│  │  ...                                                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3. Publications Page (publications.html)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Publications                                                   │
│                                                                 │
│  2026                                                           │
│  ────                                                           │
│                                                                 │
│  Operator-Theoretic Tools for Conscious and Unconscious         │
│  Brain Activity                                                 │
│  Yuer Tang, Justin Baker                                        │
│  Under Review at AAAI NeuroAI Workshop 2026                     │
│  [Paper →]                                                      │
│                                                                 │
│  On the Dynamics of Coherent Memory Structures in Neural Fields │
│  J.M. Baker, H. Hardiman-Mostow, Y. Tang, A.L. Bertozzi         │
│  Under Review at ICLR 2026                                      │
│  [Paper →]                                                      │
│                                                                 │
│  2024                                                           │
│  ────                                                           │
│                                                                 │
│  DODT: Enhanced Online Decision Transformer Learning through    │
│  Dreamer's Actor-Critic Trajectory Forecasting                  │
│  E.H. Jiang, Z. Zhang, ... Y. Tang, ... Y.N. Wu                 │
│  arXiv 2024                                                     │
│  [Paper →] [Code →]                                             │
│                                                                 │
│  Presentations                                                  │
│  ────────────                                                   │
│                                                                 │
│  When Linear Models Aren't Enough: Forcing as Closure in        │
│  Chaotic Time Series                                            │
│  Yuer Tang                                                      │
│  Poster at Joint Mathematics Meeting 2026, Washington D.C.      │
│  [Abstract →]                                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8-Hour Implementation Plan

### Phase 1: Setup & Assets (30 min)
- [ ] Create feature branch `feature/phd-website-refresh`
- [ ] Copy profile photo to appropriate location
- [ ] Copy CV PDF to root directory
- [ ] Set up new CSS file with Apple-inspired variables

### Phase 2: Core Styling (1.5 hours)
- [ ] Implement Apple-inspired CSS system
  - [ ] CSS variables for colors, typography, spacing
  - [ ] Base typography styles
  - [ ] Card component styles
  - [ ] Navigation styles
  - [ ] Responsive breakpoints
- [ ] Add smooth animations (fade-in on scroll)

### Phase 3: Homepage Rebuild (2 hours)
- [ ] Hero section with photo and tagline
- [ ] Research interests cards (3 pillars)
- [ ] News/updates timeline
- [ ] Contact links (email, GitHub, LinkedIn)
- [ ] Footer with copyright

### Phase 4: Research Page (2 hours)
- [ ] Project cards for all 4 research experiences:
  - [ ] beta-RankVAE (MIT CSAIL)
  - [ ] MALP (Wu Lab)
  - [ ] Neural Fields/Mori-Zwanzig (Bertozzi Lab)
  - [ ] Bayesian Goal Inference (Gao Lab)
- [ ] Add project descriptions from CV
- [ ] Link to code repositories where available

### Phase 5: Publications Page (1 hour)
- [ ] Create publications.html
- [ ] List all 4 publications with proper formatting
- [ ] Add links to OpenReview, arXiv, AMS
- [ ] Include presentations section

### Phase 6: Polish & Deploy (1 hour)
- [ ] Test all links
- [ ] Mobile responsiveness check
- [ ] Cross-browser testing
- [ ] Update meta tags (title, description, OpenGraph)
- [ ] Commit and push
- [ ] Verify live site

---

## Content to Extract from CV

### Research Project Descriptions

**1. beta-RankVAE (MIT CSAIL)**
> Developing compact, interpretable latent representations for fine-grained robotic manipulation policies. Built a novel beta-VAE architecture that preserves spatial and temporal structure of 6-DoF trajectories, with custom loss functions combining pairwise ranking and masked KL divergence to capture continuous policy scales (e.g., door openness angle). Pioneering LLM-assisted scale perception for automated labeling.

**2. Meta-Adaptive Latent Planning (UCLA - Wu Lab)**
> Improving multi-task performance of Latent Plan Transformers by integrating Model-Agnostic Meta-Learning (MAML). Engineered full MAML training loop with K-shot adaptation, enabling 5-shot adaptation to novel manipulation tasks. Currently implementing ANIL for improved training efficiency.

**3. Neural Dynamics & Mori-Zwanzig (UCLA - Bertozzi Lab)**
> Developing intrinsically explainable AI using biologically inspired neural field representations. Applied Mori-Zwanzig formalism to separate conscious/unconscious neural dynamics, achieving major MSE reduction (3.140 → 0.101). Work under review at ICLR 2026 and AAAI NeuroAI 2026.

**4. Bayesian Goal Inference (UCLA - Gao Lab)**
> Built foundational MDP solver with Value Iteration and Bellman updates for goal inference. Developed gamma-discounted softmax policy extraction and real-time Bayesian goal inference system with full-stack visualization using Python and Node.js/Socket.io.

---

## Contact Information

- **Email:** yuertang17@g.ucla.edu
- **GitHub:** (extract from CV header link)
- **LinkedIn:** (need to confirm URL)
- **Website:** https://yuertang.github.io

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `index.html` | Rewrite | Apple-style homepage |
| `research.html` | Rewrite | Project cards layout |
| `publications.html` | Create | Publications list |
| `stylesheets/styles.css` | Rewrite | Apple-inspired design system |
| `resources/web_profile.JPG` | Keep | Profile photo |
| `cv.pdf` | Copy from resources | Downloadable CV |

---

## Ready for Implementation

**Confirmed assets:**
- [x] CV PDF ready
- [x] Profile photo ready (great academic shot at whiteboard!)
- [x] Publications list complete
- [x] Research descriptions available
- [x] Contact info: email, GitHub, LinkedIn

**Design direction:**
- Apple-inspired minimalism
- Clean typography, generous whitespace
- Subtle animations
- Card-based project displays

**Awaiting from user:**
- [ ] GitHub username/URL for link
- [ ] LinkedIn URL for link
- [ ] Research vision statement (can add later)

---

## Next Step

Ready to begin implementation. Should I proceed with Phase 1 (creating branch and setting up assets)?
