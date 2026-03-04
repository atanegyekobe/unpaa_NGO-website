# ⚠️ IMPORTANT: First-Time Setup Instructions

## Before Running `npm run dev`

You **MUST** run this command first to install the new dependency (react-router-dom):

```bash
npm install
```

This will install:
- React Router DOM (for multi-page navigation)
- All other existing dependencies

## Step-by-Step First Run

1. **Open Terminal/PowerShell** in the NEWDA folder

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   Wait for it to complete (might take 1-2 minutes)

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Open Browser:**
   - Go to the URL shown (usually `http://localhost:5173`)
   - You should see the new home page!

5. **Test Navigation:**
   - Click "About" in navbar → Goes to About page
   - Click "Programs" → Goes to Programs page
   - Try all navigation links!

## What's Different?

### OLD (Before):
- One long scrolling page
- All sections visible at once
- Anchor links (#about, #programs)

### NEW (Now):
- Separate pages for each section
- Click links to navigate to different pages
- Real URLs (/about, /programs, etc.)
- Much more professional!

## If You See Errors

### Error: "Cannot find module 'react-router-dom'"
**Solution:** Run `npm install` first!

### Error: Port already in use
**Solution:** 
- Close any other dev servers
- Or use: `npm run dev -- --port 5174`

### Page Not Loading
**Solution:**
- Check that `npm install` completed successfully
- Try stopping (Ctrl+C) and restarting `npm run dev`

## Quick Test Checklist

After starting the server, test these:

✅ Home page loads at `/`
✅ Click "About" - goes to `/about` page
✅ Click "Programs" - goes to `/programs` page
✅ Click "Impact" - goes to `/impact` page
✅ Click "Get Involved" - goes to `/get-involved` page
✅ Click "Contact" - goes to `/contact` page
✅ Footer links work
✅ Mobile menu works (shrink browser window)
✅ Mobile menu closes after clicking link

## Files to Check

If you want to see what changed:
- `package.json` - Added react-router-dom
- `src/App.jsx` - Now has Router setup
- `src/components/Navbar.jsx` - Uses Router Links
- `src/components/Footer.jsx` - Uses Router Links
- `src/pages/` - NEW folder with all pages!

## Need Help?

Read these in order:
1. **UPGRADE-SUMMARY.md** - Overview of all changes
2. **QUICK-START.md** - Getting started guide
3. **NAVIGATION-GUIDE.md** - How routing works
4. **README.md** - Complete documentation

---

**Remember:** Always run `npm install` before running `npm run dev` for the first time!
