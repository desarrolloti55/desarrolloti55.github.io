const USUARIO_GITHUB = "desarrolloti55";
const URL_API_USUARIO = `https://api.github.com/users/${USUARIO_GITHUB}`;
const TAMANO_AVATAR = 256;

// El HTML ya trae valores por defecto; si la API falla o se agota el límite, la página sigue completa.
async function cargarPerfil() {
    const respuesta = await fetch(URL_API_USUARIO);
    if (!respuesta.ok) {
        throw new Error(`GitHub respondió ${respuesta.status}`);
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
    elementoEnlace.href = perfil.html_url;
    document.title = `${nombre} | Analista programador`;

    // bio puede ser null; en ese caso se conserva el resumen del HTML.
    if (perfil.bio) {
        elementoResumen.textContent = perfil.bio;
    }
}

cargarPerfil().catch((error) => {
    console.warn("No se pudo cargar el perfil de GitHub, se muestran los datos por defecto.", error);
});
