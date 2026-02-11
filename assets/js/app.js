fetch('README.md')
    .then(response => response.text())
    .then(markdown => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdown);
        document.getElementById('content').innerHTML = html;
    });