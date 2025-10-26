# CV PDF Export Feature

This document explains how to use the CV PDF export functionality that has been added to your academic website.

## Features

- **Clean PDF Layout**: A dedicated PDF-optimized layout with professional styling
- **Print-Ready CSS**: Optimized for A4 paper with proper margins and page breaks
- **Easy Export**: One-click PDF export using browser's print-to-PDF functionality
- **Responsive Design**: Works on both desktop and mobile devices
- **Keyboard Shortcut**: Use Ctrl/Cmd + P to quickly export PDF

## How to Use

### Method 1: From CV Page
1. Visit your CV page at `/cv/`
2. Click the "Export PDF" button at the top of the page
3. This will open a new tab with the PDF-optimized version
4. Use your browser's print function (Ctrl/Cmd + P) to save as PDF

### Method 2: Direct PDF Page
1. Visit the dedicated PDF page at `/cv-pdf/`
2. Click the "Export PDF" button in the top-right corner
3. Use your browser's print function to save as PDF

### Method 3: Keyboard Shortcut
- Press `Ctrl + P` (Windows/Linux) or `Cmd + P` (Mac) on any CV page
- Select "Save as PDF" in the print dialog

## Browser Print Settings

For best results, use these print settings:

- **Destination**: Save as PDF
- **Paper Size**: A4
- **Margins**: Default or Minimum
- **Options**: 
  - ✅ Background graphics (to preserve styling)
  - ✅ Headers and footers (optional)

## Files Added/Modified

### New Files
- `_layouts/cv-pdf.html` - PDF-optimized layout
- `_pages/cv-pdf.md` - Dedicated PDF export page
- `assets/css/cv-pdf.css` - Print-optimized styling
- `assets/js/cv-pdf.js` - Enhanced PDF functionality

### Modified Files
- `_pages/cv.md` - Added PDF export button
- `assets/css/cv-layout.css` - Enhanced download button styling

## Customization

### Styling
Edit `assets/css/cv-pdf.css` to customize:
- Colors and fonts
- Page margins and spacing
- Print-specific styles

### Content
Edit `_pages/cv-pdf.md` to modify:
- CV content structure
- Section organization
- Contact information

### Layout
Edit `_layouts/cv-pdf.html` to customize:
- Page structure
- Export controls
- JavaScript functionality

## Browser Compatibility

The PDF export feature works with all modern browsers:
- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### PDF Not Generating
- Ensure JavaScript is enabled
- Try a different browser
- Check browser print settings

### Styling Issues
- Clear browser cache
- Check CSS file paths
- Verify print CSS is loading

### Content Not Updating
- Rebuild Jekyll site
- Check markdown syntax
- Verify file permissions

## Advanced Usage

### Auto-Print
To enable auto-print when the PDF page loads, uncomment these lines in `_layouts/cv-pdf.html`:

```javascript
window.addEventListener('load', function() {
  setTimeout(function() {
    window.print();
  }, 1000);
});
```

### Custom PDF Settings
Modify the `@page` CSS rule in `cv-pdf.css` to change:
- Paper size (A4, Letter, etc.)
- Margins
- Orientation

## Support

For issues or questions about the PDF export feature, check:
1. Browser console for JavaScript errors
2. Jekyll build logs for site generation issues
3. CSS validation for styling problems
