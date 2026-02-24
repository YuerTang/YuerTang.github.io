# Investigation: Website Finalization for PhD Applications

## Goal
Finalize yuertang.github.io for professor outreach and PhD application review within ~2 hours.

## Problem
Editing HTML directly is cumbersome compared to writing in Google Docs. Need a workflow that lets you focus on **content** while I handle the **HTML formatting**.

---

## Proposed Workflow

### The Simple Solution: Content File → HTML

1. **You write content** in `content.md` (plain text, like Google Docs)
2. **Tell me what to update** (e.g., "update the bio" or "change project 3 description")
3. **I edit the HTML** for you

This way you write naturally, I handle the formatting.

---

## Current Website Analysis

### Content Sections That May Need Updates

| Section | Current State | Likely Needs Update? |
|---------|---------------|---------------------|
| **Tagline** | "Build robots that learn..." | Maybe - is this your core message? |
| **Bio Paragraph 1** | Education, interests | Review for PhD tone |
| **Bio Paragraph 2** | Mentors listed | Verify names/links correct |
| **Bio Paragraph 3** | "care about writing" | Maybe remove - not research-focused |
| **Links** | Email, GitHub, LinkedIn, CV | Verify CV is current |
| **News (4 items)** | AAAI, JMM, ICLR, MIT | Add/update any new items? |
| **Research Intro** | General statement | Review for clarity |
| **Project 1** | Disentangled Scale Control | Update description? |
| **Project 2** | MALP | Update description? |
| **Project 3** | Coherent Memory | Update description? |
| **Project 4** | Mori-Zwanzig | Update description? |
| **Project 5** | Goal Inference | Update description? |
| **Project 6** | Camera Pose | Update description? |

### Things That Are MISSING (Important for Professors)

- [ ] **Research statement** - Clear 1-2 sentence "I want to do X in my PhD"
- [ ] **Project images** - All show "Image" placeholder
- [ ] **Links to papers/code** - Many are placeholder-link (grayed out)

---

## Priority Checklist (2-Hour Plan)

### Hour 1: Content (You Write)

**Priority 1 - MUST DO (30 min):**
- [ ] Write/refine bio (focus on research interests for PhD)
- [ ] Add clear research statement
- [ ] Verify CV is uploaded and current

**Priority 2 - SHOULD DO (30 min):**
- [ ] Review each project description - accurate? compelling?
- [ ] Update any news items
- [ ] Remove or update "writing" paragraph (unless relevant)

### Hour 2: Polish (I Help)

**Priority 3 - NICE TO HAVE:**
- [ ] Add project images (screenshots, figures from papers)
- [ ] Fix placeholder links (add real URLs or remove)
- [ ] Final proofread

---

## Content Template

Copy this to `content.md` and fill in. Then tell me which sections to update.

```markdown
# Website Content Updates

## Tagline
[Your one-liner that captures your research vision]
Current: "Build robots that learn. Understand intelligence along the way."
New:

## Bio Paragraph 1 (Background + Interests)
[Who you are, what you study, what drives you]
Current: "Hey there! I am a fourth-year undergraduate..."
New:

## Bio Paragraph 2 (Mentors)
[Keep, modify, or remove]
Current: "I'm fortunate to receive mentorship from..."
New:

## Bio Paragraph 3 (Personal)
[Keep, modify, or remove - consider if relevant for PhD apps]
Current: "Beyond research, I care about writing..."
New:

## Research Statement (NEW - Add after bio)
[1-2 sentences: What do you want to work on in your PhD?]
Example: "I'm applying to PhD programs for Fall 2026, seeking to work on [X]. I'm particularly interested in [Y] and [Z]."
New:

## News Updates
[Any new items to add? Any to remove?]
- Add:
- Remove:
- Modify:

## Project Updates
[For each project, note if description needs changes]

### Project 1: Disentangled Scale Control
- Description change:
- Add paper link:
- Add code link:

### Project 2: MALP
- Description change:
- Links to add:

### Project 3: Coherent Memory
- Description change:
- Links to add:

### Project 4: Mori-Zwanzig
- Description change:
- Links to add:

### Project 5: Goal Inference
- Description change:
- Links to add:

### Project 6: Camera Pose
- Description change:
- Links to add:

## Other Changes
[Anything else?]
```

---

## Quick Reference: How to Tell Me What to Change

### Option A: Direct Instructions
```
"Change the bio paragraph 1 to: [your new text]"
"Add this news item: [month year]: [what happened]"
"Update project 3 description to: [new description]"
```

### Option B: Fill Out content.md
Fill in the template above, then say:
```
"I filled out content.md, please apply the changes"
```

### Option C: Copy-Paste Text
```
"Here's my new bio, please replace the current one:
[paste your text]"
```

---

## Files in This Investigation

| File | Purpose |
|------|---------|
| `README.md` | This plan |
| `content.md` | Your content drafts (create when ready) |

---

## What Professors Look For

When a professor visits your site, they scan for:

1. **Research fit** (10 sec) - Does this person work on things I care about?
2. **Credibility** (20 sec) - Publications? Strong mentors? Real projects?
3. **Clarity** (30 sec) - Can I understand what they actually did?
4. **Potential** (1 min) - Would they be a good PhD student?

### Optimize for This:
- **First sentence of bio** = research area + what excites you
- **Project descriptions** = what YOU did, not just what the project is
- **Clear links** = paper PDFs, code repos, demos

---

## Next Steps

1. **Read through current content** on the live site
2. **Decide what needs changing** using the checklist above
3. **Write new content** (in content.md or just tell me directly)
4. **I'll make the HTML changes** for you

Ready when you are!
