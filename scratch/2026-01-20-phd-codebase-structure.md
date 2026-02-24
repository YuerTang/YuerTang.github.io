# Website Refactoring Notes

## Summary of Changes (January 2026)

### Homepage Redesign

Redesigned `index.html` to follow the format of [maximiliandu.com](https://maximiliandu.com/):

1. **Layout**: Changed from card-based layout with fixed navigation to a clean, single-column text-focused design
2. **Profile image**: Floats on the left side of intro text (200px wide)
3. **Navigation**: Replaced fixed nav bar with inline horizontal links (Email / GitHub / LinkedIn / CV)
4. **Content structure**:
   - Name as h1 header
   - Bio paragraphs with inline links to mentors
   - "What I Believe" section for research philosophy
   - News section with bold dates and publication updates
   - Research section with all projects (scrollable)
5. **Styling**: Self-contained inline styles (no external stylesheet dependency)

### Content Updates

- Removed UCLA hyperlink (plain text now)
- Added minor: "Data Theory and Data Science Engineering"
- Added mentorship acknowledgments:
  - Prof. Yingnian Wu (UCLA Statistics)
  - Dr. Justin Baker (UCLA Mathematics)
  - Dr. Jiayuan Mao (MIT)
- Updated LinkedIn URL to `https://www.linkedin.com/in/yuer-tang/`

### Codebase Cleanup

**Deleted files:**
- `publications.html` — orphaned page, no longer linked from navigation
- `research.html` — merged into index.html as scrollable section
- `javascripts/page.js` — unused iframe capture code
- `javascripts/scale.fix.js` — outdated iPhone viewport fix
- `javascripts/` directory — empty after removing JS files
- `stylesheets/pygment_trac.css` — syntax highlighting styles, never referenced

**Refactored files:**
- `styles.css` — reduced from 696 to 330 lines by removing unused styles (hero, social links, news timeline, publications)

---

## Current Codebase Structure

```
YuerTang.github.io-1/
├── index.html              # Single-page site (all content, self-contained styles)
├── cv.pdf                  # CV document
├── _config.yml             # Jekyll config (for GitHub Pages)
├── README.md               # Repository readme
├── .gitignore
│
├── images/
│   └── profile.jpg         # Profile photo
│
├── stylesheets/
│   └── styles.css          # Styles for blog pages only
│
├── Projects/
│   └── camera-pose-blog.html   # Blog post about camera pose estimation
│
├── resources/              # Static resources (images, etc.)
│
└── scratch/                # Development notes (not deployed)
    └── 2026-01-20-phd-codebase-structure.md   # This file
```

---

## Page Dependencies

| Page | Stylesheet | JavaScript |
|------|------------|------------|
| `index.html` | Inline styles | None |
| `Projects/camera-pose-blog.html` | `../stylesheets/styles.css` + inline | None |

All pages use Font Awesome via CDN for icons.

---

## Design Decisions

### Single-page architecture

All content (intro, news, research) is now on a single scrollable homepage. This:
- Eliminates navigation friction
- Presents the full portfolio in one view
- Matches the minimalist academic style of maximiliandu.com

### Why index.html has inline styles

The homepage is entirely self-contained with inline styles:
- No external stylesheet dependencies
- Easy to maintain and update
- Clean separation from blog post styles

---

## Future Considerations

- Consider adding a writing/blog section if more posts are created
- The `resources/` folder structure could be documented if it grows
- May want to add Open Graph images for social sharing
