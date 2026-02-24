# Investigation: SEO and Discoverability for yuertang.github.io

## Problem Statement
When searching "Yuer Tang" on Google, the website https://yuertang.github.io/ does not appear prominently in search results. The goal is to understand why and identify actionable steps to improve discoverability.

## Background
- Site is hosted on GitHub Pages at yuertang.github.io
- This is a personal academic/research portfolio
- Target search queries: "Yuer Tang", "Yuer Tang UCLA", "Yuer Tang robotics"

---

## Findings

### 1. Current Indexing Status

**Good news:** The site IS indexed by Google.
- `site:yuertang.github.io` returns the homepage
- When searching `"Yuer Tang" UCLA robotics`, the site appears as the FIRST result

**The problem:** Generic search for "Yuer Tang" has competition from:
- Yi Tang (UCLA Chemistry professor) - many results
- Other people named "Yuer Tang" or similar names
- LinkedIn, Google Scholar profiles

### 2. Current Site Analysis

**What you have (good):**
- `<title>Yuer Tang</title>` ✓
- `<meta name="description">` ✓
- `<meta name="author">` ✓
- Open Graph tags (og:title, og:description, og:type) ✓
- Semantic HTML structure ✓

**What's missing:**
- [ ] `robots.txt` - tells search engines how to crawl
- [ ] `sitemap.xml` - helps search engines discover all pages
- [ ] `og:image` - no image for social sharing
- [ ] `og:url` - canonical URL not specified
- [ ] Twitter Card meta tags
- [ ] JSON-LD structured data (Person schema)
- [ ] Google Search Console verification
- [ ] Canonical URL tag

### 3. Why GitHub Pages Sites Rank Lower

1. **Domain Authority:** `github.io` is a shared subdomain. Custom domains (yuertang.com) carry more weight.

2. **Backlinks:** New sites have zero backlinks. Search engines trust sites that others link to.

3. **Content Age:** Google favors established content. Your site is new.

4. **Competition:** "Yuer Tang" competes with established profiles (LinkedIn, university pages, Google Scholar).

---

## Recommendations

### Quick Wins (Implement Now)

1. **Add sitemap.xml** - List all your pages for search engines
2. **Add robots.txt** - Standard crawling permissions
3. **Add canonical URL** - `<link rel="canonical" href="https://yuertang.github.io/">`
4. **Complete Open Graph tags** - Add og:image, og:url
5. **Add Twitter Card tags** - For social sharing

### Medium-Term (1-2 weeks)

1. **Google Search Console**
   - Verify ownership of yuertang.github.io
   - Submit sitemap
   - Monitor indexing and search performance
   - Request indexing of new pages

2. **JSON-LD Structured Data**
   - Add Person schema with your details
   - Links search engines to your identity across the web

3. **Backlink Building**
   - Link from LinkedIn to your site
   - Link from GitHub profile to your site
   - Ask mentors/collaborators to link to you
   - Add site URL to paper author bios

### Long-Term Strategy

1. **Custom Domain**
   - Buy `yuertang.com` or similar (~$12/year)
   - More professional, better SEO authority
   - Can still host on GitHub Pages for free

2. **Google Scholar Profile**
   - Create profile linking to your website
   - Strong authority signal for academic searches

3. **Content Strategy**
   - Blog posts about your research
   - More indexable pages = more search entry points

---

## Custom Domain Options

| Option | Pros | Cons |
|--------|------|------|
| **yuertang.com** | Professional, memorable | May be taken |
| **yuertang.dev** | Tech-focused, modern | Less familiar TLD |
| **yuertang.me** | Personal sites common | Less professional |
| **yuer-tang.com** | Likely available | Hyphen is awkward |

---

## Alternative Hosting Comparison

| Platform | Free Tier | Custom Domain | SSL | Build Speed |
|----------|-----------|---------------|-----|-------------|
| **GitHub Pages** | Yes | Yes (free) | Yes | Slow |
| **Netlify** | Yes | Yes (free) | Yes | Fast |
| **Vercel** | Yes | Yes (free) | Yes | Fast |
| **Cloudflare Pages** | Yes | Yes (free) | Yes | Fast |

All are good options. GitHub Pages is fine for SEO - the main issue is domain authority and backlinks, not the hosting platform.

---

## Action Items Summary

### Immediate (No code changes, external setup)
1. Create Google Search Console account
2. Verify site ownership
3. Submit sitemap (once created)
4. Create/update Google Scholar profile with website link
5. Update LinkedIn with website link
6. Update GitHub profile with website link

### Code Changes Needed
1. Create `robots.txt`
2. Create `sitemap.xml`
3. Add canonical URL tag
4. Add og:image, og:url tags
5. Add Twitter Card tags
6. Add JSON-LD Person schema

### Optional (Recommended)
1. Purchase custom domain
2. Configure GitHub Pages to use custom domain
