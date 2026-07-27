import { CONFIG } from './config.js';

const sb = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);

let slugEditando = null;

const inputTitle = document.getElementById('input_title');
const inputSlug = document.getElementById('input_slug');
const inputContent = document.getElementById('input_content');
const btnGuardar = document.getElementById('btn_guardar');
const btnEliminar = document.getElementById('btn_eliminar');
const btnNuevo = document.getElementById('btn_nuevo');
const formDocumento = document.getElementById('form_documento');
const formStatus = document.getElementById('form_status');
const documentList = document.getElementById('document_list');

const editor = new EasyMDE({
    element: inputContent,
    spellChecker: false,
    autosave: { enabled: false },
    placeholder: 'Escribe el contenido en Markdown...',
    minHeight: '400px',
    status: ['lines', 'words']
});

function obtenerSlugDeURL() {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get('doc');
}

function mostrarEstado(mensaje, tipo) {
    formStatus.textContent = mensaje;
    formStatus.className = `form_status ${tipo}`;
    setTimeout(() => { formStatus.textContent = ''; }, 3000);
}

function generarSlug(titulo) {
    return titulo
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function limpiarFormulario() {
    slugEditando = null;
    inputTitle.value = '';
    inputSlug.value = '';
    editor.value('');
    btnEliminar.hidden = true;
    btnGuardar.textContent = 'Guardar';

    const url = new URL(window.location);
    url.searchParams.delete('doc');
    window.history.pushState({}, '', url);

    marcarActivo(null);
}

function marcarActivo(slug) {
    documentList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    if (slug) {
        const enlace = documentList.querySelector(`a[data-slug="${slug}"]`);
        if (enlace) enlace.parentElement.classList.add('active');
    }
}

async function listarDocumentos() {
    const { data, error } = await sb
        .from('documents')
        .select('title, slug')
        .order('id', { ascending: true });

    if (error) return;

    documentList.innerHTML = data.map(doc =>
        `<li><a href="admin.html?doc=${doc.slug}" data-slug="${doc.slug}">${doc.title}</a></li>`
    ).join('');

    documentList.addEventListener('click', (evento) => {
        const enlace = evento.target.closest('a[data-slug]');
        if (!enlace) return;
        evento.preventDefault();

        const url = new URL(window.location);
        url.searchParams.set('doc', enlace.dataset.slug);
        window.history.pushState({}, '', url);

        cargarDocumento(enlace.dataset.slug);
    });
}

async function cargarDocumento(slug) {
    const { data, error } = await sb
        .from('documents')
        .select('title, slug, content')
        .eq('slug', slug)
        .single();

    if (error) {
        mostrarEstado('Documento no encontrado', 'error');
        return;
    }

    slugEditando = data.slug;
    inputTitle.value = data.title;
    inputSlug.value = data.slug;
    editor.value(data.content);
    btnEliminar.hidden = false;
    btnGuardar.textContent = 'Actualizar';
    marcarActivo(slug);
}

async function guardarDocumento(evento) {
    evento.preventDefault();

    const title = inputTitle.value.trim();
    const slug = inputSlug.value.trim();
    const content = editor.value().trim();

    if (!title || !slug || !content) {
        mostrarEstado('Todos los campos son requeridos', 'error');
        return;
    }

    if (slugEditando) {
        const { error } = await sb
            .from('documents')
            .update({ title, slug, content })
            .eq('slug', slugEditando);

        if (error) {
            mostrarEstado(`Error: ${error.message}`, 'error');
            return;
        }

        slugEditando = slug;
        mostrarEstado('Documento actualizado', 'success');
    } else {
        const { error } = await sb
            .from('documents')
            .insert({ title, slug, content });

        if (error) {
            mostrarEstado(`Error: ${error.message}`, 'error');
            return;
        }

        slugEditando = slug;
        btnEliminar.hidden = false;
        btnGuardar.textContent = 'Actualizar';
        mostrarEstado('Documento creado', 'success');
    }

    await listarDocumentos();
    marcarActivo(slug);
}

async function eliminarDocumento() {
    if (!slugEditando) return;

    const confirmado = confirm(`¿Eliminar "${inputTitle.value}"? Esta acción no se puede deshacer.`);
    if (!confirmado) return;

    const { error } = await sb
        .from('documents')
        .delete()
        .eq('slug', slugEditando);

    if (error) {
        mostrarEstado(`Error: ${error.message}`, 'error');
        return;
    }

    mostrarEstado('Documento eliminado', 'success');
    limpiarFormulario();
    await listarDocumentos();
}

inputTitle.addEventListener('input', () => {
    if (!slugEditando) {
        inputSlug.value = generarSlug(inputTitle.value);
    }
});

formDocumento.addEventListener('submit', guardarDocumento);
btnEliminar.addEventListener('click', eliminarDocumento);
btnNuevo.addEventListener('click', limpiarFormulario);

window.addEventListener('popstate', () => {
    const slug = obtenerSlugDeURL();
    if (slug) {
        cargarDocumento(slug);
    } else {
        limpiarFormulario();
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    await listarDocumentos();

    const slug = obtenerSlugDeURL();
    if (slug) {
        cargarDocumento(slug);
    }
});
