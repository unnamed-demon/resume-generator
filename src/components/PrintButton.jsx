function PrintButton() {
    const printFromSamePage = () => {
        const $preview = document.querySelector(".preview");
        const $background = document.querySelector(".background");
        const $root = document.getElementById("root");
        $root.appendChild($preview);
        window.print();
        $background.appendChild($preview);
    };

    const printFromNewPage = () => {
        const $preview = document.querySelector(".preview");

        const $styleTags = document.querySelectorAll("head > style");
        let styleCode = '';
        for(const $styleTag of $styleTags) {
            styleCode += $styleTag.innerHTML;
        }

        const html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Print Resume</title>
                    <style>
                        ${styleCode}

                        .preview-container {
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                        }

                        .preview {
                            height: auto;
                            width: 100%;
                            box-sizing: border-box;
                            box-shadow: revert;
                        }
                    </style>
                </head>
                <body>
                    <div class="preview-container">
                        <div class="preview">
                            ${$preview.innerHTML}
                        </div>
                    </div>
                    <script>
                        window.onafterprint = () => setTimeout(close,0);
                        window.print();
                    </script>
                </body>
            </html>
        `;
        
        const $printWindow = window.open("", "_blank");
        $printWindow.document.write(html);
    };

    return (
        <button className="print-button" onClick={printFromNewPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"></path></svg>
        </button>
    );
}

export default PrintButton;