document.querySelectorAll('.download-pdf').forEach(button => {
  button.addEventListener('click', () => {
    const pdfFile = button.getAttribute('data-pdf');
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = pdfFile.split('/').pop(); // sets filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
