function obtieneParametroURL_FileName() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('file');
}

async function muestraArchivoMarkDown(paramFileName) {

    var filename = 'README.md';
    if(paramFileName!=null && paramFileName!='' && paramFileName!=filename)
        filename = 'assets/documents/'+paramFileName;

    document.getElementById('file_path').innerHTML = filename;
    document.getElementById('content').src = filename;
}

async function listarArchivos() {
    fetch('./assets/documents/documents.json')
        .then(response => response.json())
        .then(jsonString => {
            muestraListaArchivos(jsonString.archivos);  
        }).catch(error => console.error('Error [listarArchivos]:', error));
}

function muestraListaArchivos(files) {
    var result = '';
    files.forEach(function (name) {
        result += "<li><a href='?file=" + name + "'>" + name + "</a></li>";
    });  
    document.getElementById('list').innerHTML = result;    
}

const paramFileName = obtieneParametroURL_FileName();
muestraArchivoMarkDown(paramFileName);
listarArchivos();
