// 1. Get the query string part of the URL (e.g., "?name=Jonathan&age=30")
const queryString = window.location.search;

// 2. Create a URLSearchParams object
const urlParams = new URLSearchParams(queryString);

// 3. Use the .get() method to retrieve a specific parameter's value
const file = urlParams.get('file');

console.log(file);

filename = 'README.md';
if(file!=null && file!='' && file!=filename)
    filename = 'assets/documents/'+file;

console.log(filename);

fetch(filename)
    .then(response => response.text())
    .then(markdown => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdown);
        document.getElementById('file_path').innerHTML = filename;
        document.getElementById('content').innerHTML = html;
    });

async function listarArchivos() {
    const respuesta = await fetch('./assets/documents'); // La carpeta en tu servidor
    const html = await respuesta.text();
    
    console.log(html);

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Selecciona todos los enlaces (<a>) que suelen ser los nombres de archivo
    const enlaces = Array.from(doc.querySelectorAll('a'))
        .map(a => a.innerText)
        .filter(nombre => !nombre.includes('../')); // Filtrar retrocesos de carpeta

    const filesnames = ['README.md'];

    for (let index = 0; index < enlaces.length; index++) {
        const element = enlaces[index];

        if(element.includes('.md')){
            var elementSplit = element.split('.md');
            var filename = elementSplit[0];
            filesnames.push(filename + '.md');
        }       
    }

    var result = '';
    filesnames.forEach(function (item) {
        result += "<li><a href='?file=" + item + "'>" + item + "</a></li>";
    });
  
    document.getElementById('list').innerHTML = result;
    
}
listarArchivos();