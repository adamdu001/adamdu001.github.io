/**
 * CV PDF Export Enhancement
 * Provides additional functionality for PDF export
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        // Add print event listeners
        window.addEventListener('beforeprint', function() {
            // Hide any elements that shouldn't appear in print
            const elementsToHide = document.querySelectorAll('.no-print, .pdf-controls');
            elementsToHide.forEach(function(element) {
                element.style.display = 'none';
            });

            // Add print-specific classes
            document.body.classList.add('printing');
        });

        window.addEventListener('afterprint', function() {
            // Show hidden elements again
            const elementsToShow = document.querySelectorAll('.no-print, .pdf-controls');
            elementsToShow.forEach(function(element) {
                element.style.display = '';
            });

            // Remove print-specific classes
            document.body.classList.remove('printing');
        });

        // Add keyboard shortcut for PDF export (Ctrl/Cmd + P)
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
                e.preventDefault();
                window.print();
            }
        });

        // Add click handler for PDF export buttons
        const pdfButtons = document.querySelectorAll('.pdf-export-btn, [href*="cv-pdf"]');
        pdfButtons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                // If it's a link to cv-pdf page, let it open normally
                if (this.href && this.href.includes('cv-pdf')) {
                    return;
                }
                
                // Otherwise, trigger print
                e.preventDefault();
                window.print();
            });
        });

        // Add tooltip for PDF export button
        const exportBtn = document.querySelector('.pdf-export-btn');
        if (exportBtn) {
            exportBtn.title = 'Export CV as PDF (Ctrl/Cmd + P)';
        }
    });

    // Function to generate PDF programmatically (alternative approach)
    function generatePDF() {
        // This is a placeholder for more advanced PDF generation
        // Could integrate with libraries like jsPDF or Puppeteer
        console.log('PDF generation triggered');
        window.print();
    }

    // Expose function globally if needed
    window.generateCVPDF = generatePDF;

})();
