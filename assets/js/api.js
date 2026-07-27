import { CONFIG } from './config.js';

const sb = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);

function encodeMarkdown(str) {
    return 'data:text/markdown;base64,' + btoa(unescape(encodeURIComponent(str)));
}

function obtenerSlugDeURL() {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get('doc');
}

function navegarA(slug) {
    const url = new URL(window.location);
    url.searchParams.set('doc', slug);
    window.history.pushState({}, '', url);
    mostrarDocumentoPorSlug(slug);
}

async function listarDocumentos() {
    const { data, error } = await sb
        .from('documents')
        .select('title, slug')
        .order('id', { ascending: true });

    if (error) return;

    const lista = document.getElementById('document_list');
    const slugActivo = obtenerSlugDeURL();

    lista.innerHTML = data.map(doc => {
        const activo = doc.slug === slugActivo ? ' class="active"' : '';
        return `<li${activo}><a href="?doc=${doc.slug}" data-slug="${doc.slug}">${doc.title}</a></li>`;
    }).join('');

    lista.addEventListener('click', (evento) => {
        const enlace = evento.target.closest('a[data-slug]');
        if (!enlace) return;
        evento.preventDefault();
        navegarA(enlace.dataset.slug);
        marcarActivo(enlace.dataset.slug);
        cerrarSidebar();
    });
}

function marcarActivo(slug) {
    const lista = document.getElementById('document_list');
    lista.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    const enlace = lista.querySelector(`a[data-slug="${slug}"]`);
    if (enlace) enlace.parentElement.classList.add('active');
}

async function mostrarDocumentoPorSlug(slug) {
    const { data, error } = await sb
        .from('documents')
        .select('title, slug, content')
        .eq('slug', slug)
        .single();

    if (error) {
        document.getElementById('document_title').textContent = 'Documento no encontrado';
        document.getElementById('document_slug').textContent = '';
        document.getElementById('content').src = encodeMarkdown('# 404\nEl documento solicitado no existe.');
        return;
    }

    document.getElementById('document_title').textContent = data.title;
    document.getElementById('document_slug').textContent = data.slug;
    document.getElementById('content').src = encodeMarkdown(data.content);
    document.title = `${data.title} — DESARROLLO TI 55`;
}

async function mostrarPrimerDocumento() {
    const { data, error } = await sb
        .from('documents')
        .select('slug')
        .order('id', { ascending: true })
        .limit(1)
        .single();

    if (error) return;
    navegarA(data.slug);
    marcarActivo(data.slug);
}

function configurarSidebar() {
    const sidebar = document.getElementById('sidebar');
    const botonMenu = document.getElementById('menu_button');
    const botonCerrar = document.getElementById('sidebar_toggle');

    botonMenu.addEventListener('click', () => sidebar.classList.add('open'));
    botonCerrar.addEventListener('click', () => cerrarSidebar());
}

function cerrarSidebar() {
    document.getElementById('sidebar').classList.remove('open');
}

window.addEventListener('popstate', () => {
    const slug = obtenerSlugDeURL();
    if (slug) {
        mostrarDocumentoPorSlug(slug);
        marcarActivo(slug);
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    configurarSidebar();
    await listarDocumentos();

    const slug = obtenerSlugDeURL();
    if (slug) {
        mostrarDocumentoPorSlug(slug);
        marcarActivo(slug);
    } else {
        mostrarPrimerDocumento();
    }
});
