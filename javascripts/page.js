// function captureContent() {
//     const iframe = document.getElementById('externalSite').contentWindow.document.body;
//     html2canvas(iframe, {
//         useCORS: true,
//         allowTaint: false // Make sure this is false to respect CORS
//     }).then(canvas => {
//         const img = document.getElementById('previewImage');
//         img.src = canvas.toDataURL('image/png');
//     }).catch(error => {
//         console.error('Error capturing iframe:', error);
//     });
// }


function captureContent() {
    const iframe = document.getElementById('externalSite');
    const iframeDocument = iframe.contentWindow.document;
    const iframeBody = iframe.contentWindow.document.body;

    // Scroll to a specific part of the iframe to avoid capturing the header
    iframe.contentWindow.scrollTo({
        top: 320, // Adjust this value to skip over the header or other unwanted areas at the top
        left: 0, // Use this if you need to horizontally align the view
        behavior: 'smooth'
    });

    // Apply zoom out effect
    iframeBody.style.transform = "scale(0.75)";
    iframeBody.style.transformOrigin = "top center";

    // Adjust the size of the iframe to fit the scaled content
    iframe.style.width = Math.ceil(iframe.offsetWidth * 1.33) + 'px';
    iframe.style.height = Math.ceil(iframe.offsetHeight * 1.33) + 'px';

    // Wait a bit for the browser to render the transformation and scroll
    setTimeout(() => {
        html2canvas(iframeBody, {
            useCORS: true,
            allowTaint: false,
            scale: 1,
            width: iframe.offsetWidth,
            height: iframe.offsetHeight
        }).then(canvas => {
            const img = document.getElementById('previewImage');
            img.src = canvas.toDataURL('image/png');

            // Reset the iframe size if necessary
            iframe.style.width = '100%';
            iframe.style.height = '500px';
        }).catch(error => {
            console.error('Error capturing iframe:', error);
        });
    }, 1500); // Increase delay if needed to ensure complete rendering and scrolling
}
