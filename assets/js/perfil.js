// Datos del perfil en un archivo propio, que se edita a mano; evita el límite de la API pública de GitHub.
const URL_PERFIL = "assets/data/perfil.json";
const TAMANO_AVATAR = 256;
const TAMANO_ICONO = 64;
const SEPARADOR_BIO = "|";
const CLASE_VISIBLE = "presentacion--visible";

// El HTML ya trae valores por defecto; si el archivo no carga, la página sigue completa.
async function cargarPerfil() {
    const respuesta = await fetch(URL_PERFIL);
    if (!respuesta.ok) {
        throw new Error(`No se pudo leer ${URL_PERFIL}: ${respuesta.status}`);
    }
    const perfil = await respuesta.json();

    const elementoNombre = document.querySelector("[data-perfil='nombre']");
    const elementoAvatar = document.querySelector("[data-perfil='avatar']");
    const elementoResumen = document.querySelector("[data-perfil='resumen']");
    const elementoEnlace = document.querySelector("[data-perfil='enlace']");

    // name es opcional en GitHub, por eso se cae al login.
    const nombre = perfil.name || perfil.login;
    elementoNombre.textContent = nombre;
    elementoAvatar.src = `${perfil.avatar_url}&s=${TAMANO_AVATAR}`;
    elementoAvatar.alt = `Foto de perfil de ${nombre}`;
    document.querySelector("[data-perfil='icono']").href = `${perfil.avatar_url}&s=${TAMANO_ICONO}`;
    elementoEnlace.href = perfil.html_url;
    document.title = nombre;

    // bio puede ser null; en ese caso se conserva el resumen del HTML.
    if (perfil.bio) {
        mostrarBio(elementoResumen, perfil.bio);
    }
}

// GitHub solo permite texto plano en una línea, así que el separador "|" se convierte aquí en
// salto de línea y negrita. Se arman nodos en lugar de usar innerHTML porque la bio es texto externo.
function mostrarBio(elementoResumen, bio) {
    const [titular, ...lstRestoBio] = bio.split(SEPARADOR_BIO).map((parte) => parte.trim());
    elementoResumen.replaceChildren();

    if (lstRestoBio.length === 0) {
        elementoResumen.textContent = titular;
        return;
    }

    const elementoTitular = document.createElement("strong");
    elementoTitular.className = "presentacion__titular";
    elementoTitular.textContent = titular;
    elementoResumen.append(elementoTitular, lstRestoBio.join(` ${SEPARADOR_BIO} `));
}

// La página permanece oculta hasta tener los datos reales para no mostrar el nombre base un instante.
// Si el archivo falla se muestra igual con los valores por defecto del HTML.
cargarPerfil()
    .catch((error) => {
        console.warn("No se pudo cargar el perfil, se muestran los datos por defecto.", error);
    })
    .finally(() => {
        document.querySelector(".presentacion").classList.add(CLASE_VISIBLE);
    });
