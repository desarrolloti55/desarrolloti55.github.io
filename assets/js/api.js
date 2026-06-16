import { CONFIG } from './config.js';
const sb = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);

const encodeMarkdown = (str) => {
    return 'data:text/markdown;base64,' + btoa(unescape(encodeURIComponent(str)));
};

async function mostrarDocumento(id) {
    const { data, error } = await sb
        .from('documents')
        .select('title, slug, content')
        .eq('id', id)
        .single();

    if (error) return;

    document.getElementById('file_path').innerHTML = data.slug + " " + data.title;
    document.getElementById('content').src = encodeMarkdown(data.content);
}

window.addEventListener('DOMContentLoaded', () => {
    mostrarDocumento(1);
});