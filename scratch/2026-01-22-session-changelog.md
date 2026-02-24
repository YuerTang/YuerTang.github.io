# Session Changelog: 2026-01-22

## Summary
This document records all updates made during the January 22, 2026 session for future reference.

---

## 1. Profile Photo Layout Update

### Task
Make the profile photo larger and position it alongside the bio paragraphs.

### Changes Made

**File:** `index.html`

**CSS Changes (lines 59-86):**
```css
/* BEFORE */
.profile-photo {
  text-align: center;
  margin-bottom: 1.5rem;
}
.profile-photo img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
.bio {
  margin-bottom: 1.5rem;
}

/* AFTER */
.intro-section {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}
.profile-photo {
  flex-shrink: 0;
}
.profile-photo img {
  width: 280px;      /* Increased from 200px */
  height: 280px;     /* Increased from 200px */
  border-radius: 50%;
  object-fit: cover;
}
.bio {
  flex: 1;
}
```

**HTML Structure Change (lines 269-287):**
```html
<!-- BEFORE -->
<div class="profile-photo">...</div>
<div class="bio">...</div>

<!-- AFTER -->
<div class="intro-section">
  <div class="profile-photo">...</div>
  <div class="bio">...</div>
</div>
```

**Responsive CSS Added (lines 237-246):**
```css
@media (max-width: 700px) {
  .intro-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .profile-photo img {
    width: 220px;
    height: 220px;
  }
}
```

### Commits
| Hash | Message |
|------|---------|
| `4673fe1` | Update profile photo layout: larger size and side-by-side with bio |

---

## 2. Codebase Cleanup

### Task
Commit remaining uncommitted changes (deleted legacy files, stylesheet cleanup).

### Changes Made

**Deleted Files:**
- `Projects/camera‐pose‐blog.html` (duplicate with unicode chars)
- `javascripts/page.js`
- `javascripts/scale.fix.js`
- `stylesheets/pygment_trac.css`

**File:** `stylesheets/styles.css`
- Removed unused CSS variables (`font-mono`, `radius-lg`, `radius-full`)
- Simplified typography rules (h1-h4 only, removed h5-h6)
- Removed unused component styles (hero, social links, news list)
- Cleaned up redundant hover states and transitions
- Net change: -375 lines

### Commits
| Hash | Message |
|------|---------|
| `5a5024d` | Remove legacy JavaScript and unused stylesheets |
| `b9f85a1` | Simplify stylesheet: remove unused variables and rules |

### Git Operations
```bash
git checkout main
git merge feature/phd-website-refresh  # Fast-forward
git push origin main
git branch -d feature/phd-website-refresh
git push origin --delete feature/phd-website-refresh
```

---

## 3. SEO Investigation

### Task
Investigate why yuertang.github.io doesn't appear when searching "Yuer Tang".

### Investigation Created
**Location:** `scratch/2026-01-22-seo-discoverability/README.md`

### Key Findings
1. Site IS indexed by Google (appears for `site:yuertang.github.io`)
2. Appears FIRST for `"Yuer Tang" UCLA robotics`
3. Generic "Yuer Tang" search has competition (Yi Tang, LinkedIn profiles)

### Missing SEO Elements Identified
- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] `og:image` and `og:url` meta tags
- [ ] Twitter Card meta tags
- [ ] JSON-LD Person schema
- [ ] Google Search Console verification
- [ ] Canonical URL tag

### Recommendations Documented
- Quick wins: Add sitemap, robots.txt, complete OG tags
- Medium-term: Google Search Console, JSON-LD, backlinks
- Long-term: Custom domain, Google Scholar profile

---

## 4. Goal Inference Project Page Investigation

### Task
Research how to create a "Nature-level beauty" project page for Online_Goal_Inference_Modeling.

### Investigation Created
**Location:** `scratch/2026-01-22-goal-inference-page-design/`

### Files Created

| File | Purpose | Lines |
|------|---------|-------|
| `README.md` | Master investigation: project analysis, design recs, implementation checklist | ~200 |
| `02-visual-design-spec.md` | Visual design system: colors, typography, components, animations | ~350 |
| `03-page-template-example.html` | Complete working HTML template (Nerfies-style) | ~450 |
| `04-refined-readme.md` | Proposed refined README.md for the GitHub repo | ~200 |

### Project Analysis Summary
- **What it does:** Real-time Bayesian goal inference from observed actions
- **Stack:** Python (Flask, SocketIO, NumPy, SciPy) + JS (RxJS, Canvas, Socket.IO)
- **Algorithm:** MDP + Value Iteration + Softmax Policy + Bayesian Updates

### Design Inspiration Sources Researched
- Distill.pub (interactive ML explanations)
- Nerfies project page template
- Academic Project Page Template (GitHub)
- TensorFlow Playground, GAN Lab, CNN Explainer

### Current README Issues Identified
1. External image URLs that don't exist locally
2. File references that don't match actual structure (style.css, client.js)
3. Color legend doesn't match implementation
4. Generic placeholder contact info

### Recommended Page Structure
```
Hero Section (demo GIF + title + author + links)
    ↓
Abstract (one compelling paragraph)
    ↓
How It Works (3 algorithm steps with interactives)
    ↓
Live Demo (embedded game)
    ↓
Citation + References
```

### Visual Design System Defined
- **Colors:** Scientific blue accent (#2563eb), goal colors (red/blue/green)
- **Typography:** Inter (display), Source Serif 4 (body), JetBrains Mono (code)
- **Layout:** 720px max content width, generous whitespace
- **Animations:** 200-300ms transitions, fade-up on scroll

---

## Files Modified This Session

| File | Action | Commit |
|------|--------|--------|
| `index.html` | Modified (layout) | `4673fe1` |
| `stylesheets/styles.css` | Modified (cleanup) | `b9f85a1` |
| `Projects/camera‐pose‐blog.html` | Deleted | `5a5024d` |
| `javascripts/page.js` | Deleted | `5a5024d` |
| `javascripts/scale.fix.js` | Deleted | `5a5024d` |
| `stylesheets/pygment_trac.css` | Deleted | `5a5024d` |

## Files Created This Session (Scratch - Not Committed)

| File | Purpose |
|------|---------|
| `scratch/2026-01-22-seo-discoverability/README.md` | SEO investigation |
| `scratch/2026-01-22-goal-inference-page-design/README.md` | Project page investigation |
| `scratch/2026-01-22-goal-inference-page-design/02-visual-design-spec.md` | Visual design system |
| `scratch/2026-01-22-goal-inference-page-design/03-page-template-example.html` | HTML template |
| `scratch/2026-01-22-goal-inference-page-design/04-refined-readme.md` | Refined README proposal |
| `scratch/2026-01-22-session-changelog.md` | This file |

---

## Git History After Session

```
b9f85a1 Simplify stylesheet: remove unused variables and rules
5a5024d Remove legacy JavaScript and unused stylesheets
4673fe1 Update profile photo layout: larger size and side-by-side with bio
235d08c Updated first page
ef5e812 Version 1 of websites with okay foundation
```

---

## Next Steps (For Future Sessions)

### SEO Improvements
- [ ] Create `robots.txt` and `sitemap.xml`
- [ ] Add canonical URL and complete OG tags
- [ ] Set up Google Search Console
- [ ] Create Google Scholar profile

### Goal Inference Project Page
- [ ] Record demo GIF from running application
- [ ] Create algorithm flowchart (Figma/Excalidraw)
- [ ] Implement HTML page using template
- [ ] Update GitHub README with refined version
- [ ] Add project page link to main website

### General
- [ ] Consider purchasing custom domain (yuertang.com)
- [ ] Add more backlinks (LinkedIn, GitHub profile, paper bios)
