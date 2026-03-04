# ♿ Accessibility Testing Checklist

## Quick Test (5 minutes)

### ✅ Keyboard Navigation
- [ ] Press Tab - See "Skip to content" link
- [ ] Tab through all navigation links
- [ ] Tab to all buttons
- [ ] Press Enter to activate links
- [ ] Press Space to activate buttons
- [ ] Use arrow keys on slider
- [ ] All elements have visible focus (blue outline)

### ✅ Visual Checks
- [ ] All images have alt text
- [ ] Text is readable (not too small)
- [ ] Sufficient color contrast
- [ ] No information by color alone
- [ ] Focus indicators visible

### ✅ Screen Reader Test (Basic)
- [ ] Download NVDA (Windows) or use VoiceOver (Mac)
- [ ] Navigate by headings
- [ ] All images announced with descriptions
- [ ] Links make sense out of context
- [ ] Form labels announced

---

## Automated Tests

### Lighthouse (Built into Chrome)

1. Open Chrome DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Accessibility"
4. Click "Generate report"
5. **Target: 90+ score**

### WAVE Extension

1. Install WAVE browser extension
2. Click WAVE icon
3. Review errors (should be 0)
4. Check alerts
5. Review structure

---

## Pass/Fail Criteria

### ✅ PASS if:
- Lighthouse accessibility score 90+
- All elements keyboard accessible
- Skip to content link works
- Focus indicators visible
- WAVE shows 0 errors
- Screen reader can navigate

### ❌ FAIL if:
- Can't access with keyboard only
- Missing alt text on images
- Poor color contrast
- No focus indicators
- WAVE shows errors
- Screen reader issues

---

## Quick Fixes

### If focus not visible:
Check `accessibility.css` is imported in `main.jsx`

### If skip link not working:
Check `App.jsx` has the skip link

### If aria labels missing:
Review component files for `aria-label` attributes

### If keyboard navigation broken:
Ensure all interactive elements are buttons or links

---

## Report Template

```
Date: [Date]
Tester: [Name]
Tool: [Lighthouse/WAVE/Manual]

✅ Passed:
- [List items]

❌ Failed:
- [List items with details]

🔧 Fixes Needed:
- [Priority list]

Score: [X]/100
```

---

## Resources

- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM**: https://webaim.org/
- **A11y Project**: https://www.a11yproject.com/
- **NVDA Download**: https://www.nvaccess.org/

---

**Test regularly! Accessibility is ongoing, not one-time.**
